window.KanoBehaviors = window.KanoBehaviors || {};

/**
 * Behavior common to all UI components
 * Adds the style object that can be used to give the user
 * customization features
 * @type {Object}
 */
window.KanoBehaviors.UIBehavior = {
    properties: {
        // Called userStyle to avoid conflict with DOM `style` attribute
        model: {
            type: Object,
            value: () => {
                return {
                    userStyle: {},
                    userProperties: {}
                };
            },
            notify: true
        }
    },
    getPartialStyle (attrs) {
        attrs = attrs || Object.keys(this.model.userStyle);
        return attrs.reduce((acc, key) => {
            acc += this.model.userStyle && this.model.userStyle[key] ? `${key}:${this.model.userStyle[key]};` : '';
            return acc;
        }, '');
    },
    save () {
        let tagName = this.tagName.toLowerCase();
        return `<${tagName}
                    id="${this.model.id}"
                    model="{{components.${this.model.id}}}">
                </${tagName}>`;
    },
    getPosition () {
        let rect = this.getBoundingClientRect();
        return {
            x: rect.left,
            y: rect.top
        };
    }
};

/**
 * Consumer behavior
 * @type {Object}
 */
window.KanoBehaviors.AsyncConsumer = {
    /**
     * Helps having sync like apis while processing async tasks
     * @param  {Promise|any}   data     Any kind of data you need or a Promise
     *                                  that will resolve this data
     * @param  {Function}      callback The function to call if and when the
     *                                  promise resolves
     * @return {Boolean}                Are we in an async case?
     */
    consume (data, callback) {
        if (data instanceof Promise) {
            data.then(callback.bind(this));
            return true;
        }
        return false;
    }
};
