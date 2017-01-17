(function() {
    var webComponentsSupported = ('registerElement' in document &&
            'import' in document.createElement('link') &&
            'content' in document.createElement('template')),
        loaded = false,
        loadEventFired = false,
        kanoAppInserted = false,
        loadTimeoutId, started,
        timeout, wcPoly,
        isCore, userAgent,
        isPi;

    /**
     * Redirects to the projects page on the Core Kit™ on first landing
     */
    isCore = window.Kano.MakeApps.config.TARGET === 'osonline';
    userAgent = window.navigator.userAgent;
    isPi = userAgent.indexOf('armv6l') !== -1 || userAgent.indexOf('armv7l') !== -1;

    if (isCore && document.referrer === "") {
        location.href = 'https://world.kano.me/projects';
        return;
    }
    if (isPi && location.href.indexOf('apps.kano.me') !== -1) {
        location.href = location.href.replace('apps.kano.me', 'make-apps-kit.kano.me');
        return;
    }

    function showMobileAlert(showButton) {
        function hideSplash() {
            var splash = document.getElementById('splash');
            splash.style.opacity = 0;
            setTimeout(function () {
                clearTimeout(window.splashTimeoutId);
                splash.parentNode.removeChild(splash);
            }, 400);
        }
        function addAlertMessageBox() {
            var splash = document.getElementById('splash');
            var alertBox = document.createElement('DIV');
            alertBox.className = 'alert';
            alertBox.id = 'alert';
            alertBox.innerHTML = "Hello. <br /> It looks like you've got a small screen here. <br />Kano Code is best when there's plenty of room to code. <br /> We recommend trying it out on a laptop or desktop.";
            splash.appendChild(alertBox);
        }
        function addContinueButton() {
            var alertBox = document.getElementById('alert');
            var button = document.createElement('BUTTON');
            button.className = 'continue-btn';
            button.innerHTML = 'Got it';
            alertBox.appendChild(button);
            button.addEventListener('click', function(e) {
                hideSplash ();
            });
        }
        function isMobile() {
            var mobileDevice = false;
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 600)
                mobileDevice = true;
            return mobileDevice
        }
        if (isMobile()) {
            if (!showButton){
                var splash = document.getElementById('splash');
                splash.innerHTML = '';
                addAlertMessageBox();
            } else {
                addContinueButton();
            }
        }else {
            if (showButton){
                hideSplash();
            }
        }
    }

    showMobileAlert(false);

    /**
     * Makes the transition between the splash and the app itself
     * Makes sure that the splash is displayed at least 1.5s to prevent flashing
     */
    function onFirstPageLoaded() {
        var duration = new Date() - started,
            splash;
        if (duration < 1500) {
            timeout = setTimeout(onFirstPageLoaded, 1500 - duration);
            return;
        }
        document.removeEventListener('kano-routing-load-finish', onFirstPageLoaded);
        showMobileAlert(true);
        loaded = true;

    }

    function onElementsLoaded() {
        if (kanoAppInserted) {
            return;
        }
        var app = document.createElement('kano-app'),
            splash = document.getElementById('splash');
        document.body.insertBefore(app, splash);
        document.addEventListener('kano-routing-load-finish', onFirstPageLoaded);
        kanoAppInserted = true;
    }

    /**
     * Imports the elements bundle
     */
    function lazyLoadElements() {
        var elements = [
            '/elements/elements.html'
        ];

        elements.forEach(function(elementURL) {
            var elImport = document.createElement('link');
            elImport.rel = 'import';
            elImport.href = elementURL;
            elImport.addEventListener('load', onElementsLoaded);
            document.head.appendChild(elImport);
        });
    }

    /**
     * Optionally load the webcomponents polyfill and then load the elements bundle
     */
    function deferLoading() {
        // Race condition cause of safari fix hack
        if (loadEventFired) {
            return;
        }
        loadEventFired = true;
        clearTimeout(loadTimeoutId);
        if (!webComponentsSupported) {
            wcPoly = document.createElement('script');
            wcPoly.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
            wcPoly.onload = lazyLoadElements;
            document.head.appendChild(wcPoly);
        } else {
            lazyLoadElements();
        }
    }

    // Attach the loading of the dependencies when the page is loaded
    if (window.addEventListener) {
        window.addEventListener("load", deferLoading, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", deferLoading);
    } else {
        window.onload = deferLoading;
    }

    // I am ashamed of this hack, but sometimes safari just doesn't fire the load event :(
    loadTimeoutId = setTimeout(deferLoading, 1000);

    window.Polymer = {
        dom: 'shadow',
        lazyRegister: false,
        useNativeCSSProperties: true
    };

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function () {
                // SW registration successfull
            })
            .catch(function (e) {
                console.error(e);
            });
    } else {
        // Add fallback using appcache
        document.write('<iframe src="/appcache.html" width="0" height="0" style="display: none"></iframe>');
    }

})();
