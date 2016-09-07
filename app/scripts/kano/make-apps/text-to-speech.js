(function (Kano) {


    Kano.MakeApps = Kano.MakeApps || {};

    /*
    *
    * Speech synthesis service
    *
    *   Detects the capabilities of the client and choses the most suitable
    *   backend for text to speech synthesis.
    *
    */

    /* globals SpeechSynthesisUtterance*/

    class TextToSpeech {

        constructor (config) {
            this.config = config;
            this.backend = this.remote;
            this.backendStop = () => {};
            this.rpiStop = () => {};

            this.cache = {};
        }

        configure (c) {
            this.config = c;

            if (c.TARGET === 'rpi') {
                this.backend = this.rpi;
                this.backendStop = this.rpiStop;
            } else if (window.speechSynthesis) {
                this.backend = this.browser;
                this.backendStop = this.browserStop;
            }

            return this;
        }

        speak (text, rate=1, language='en-GB') {
            this.backend(text, rate, language);
        }

        stop () {
            this.backendStop();
        }

        rpi (text, rate, language) {
            let opts = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: text,
                    pitch: 1,
                    rate: rate,
                    language: language
                })
            };

            fetch(`${this.config.API_URL}/speak`, opts)
                .then((res) => {
                    if (!res.ok) {
                        console.log("Text-to-speech backend failed.");
                    }
                }).catch((e) => {
                    console.log(`Text-to-speech FAILED: ${e}`);
                });
        }

        browser (text, rate, language) {
            let msg = new SpeechSynthesisUtterance(text);
            msg.pitch = 1;
            msg.rate = rate;
            msg.lang = language;

            window.speechSynthesis.speak(msg);
        }

        browserStop () {
            window.speechSynthesis.cancel();
        }

        remote (text, rate, language) {
            let params = {
                key: this.config.VOICE_API_KEY,
                src: text,
                hl: language.toLowerCase(),
                r: this.normaliseRateToRSS(rate),
                c: 'OGG'
            },
            url,
            urlParams = [];

            if (text in this.cache) {
                this.playAudio(this.cache[text]);
                return;
            }

            for (let p of Object.keys(params)) {
                urlParams.push(`${p}=${encodeURIComponent(params[p])}`);
            }

            url = this.config.VOICE_API_URL + "/?" + urlParams.join('&');

            fetch(url)
                .then((res) => {
                    if (res.ok) {
                        return res.blob();
                    } else {
                        console.log("Voice API request failed: " + res.status);
                        return;
                    }
                }).then((blob) => {
                    let objectUrl = URL.createObjectURL(blob);
                    this.playAudio(objectUrl);
                    if (!(text in this.cache)) {
                        this.cache[text] = objectUrl;
                    }
                }).catch((err) => {
                    console.log("Voice API request failed: " + err);
                });
        }

        playAudio (url) {
            this.this.audio = document.createElement('audio');
            this.audio.src = url;
            this.audio.load();
            this.audio.play();
        }

        audioStop () {
            this.audio.pause();
        }

        normaliseRateToRSS (rate) {
            if (rate < 0) {
                console.log("Invalid speech rate, falling back to 0.");
            } else if (rate >= 0 && rate < 1) {
                return (1 - rate) * (-10);
            } else if (rate >= 1 && rate <= 10) {
                return rate;
            }

            console.log("Invalid speech rate, falling back to 10.");
            return 10;
        }
    }

    Kano.MakeApps.TextToSpeech = TextToSpeech;

})(window.Kano = window.Kano || {});