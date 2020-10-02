const Keyboard = {
    elements: {
        main :null,
        keysContainer: null,
        keys: []
    },

    eventHandlers : {
        oninput : null,
        onlose: null,
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {

    },

    _createKeys() {

    },

    _triggerEvent(handlerName) {
        console.log("Event Triggered! Event Name: " + handlerName);
    },

    _triggerCapsLock() {
        console.log("Caps Lock Triggered!");
    },

    open(initialValue, oninput, onclose) {

    },

    close() {

    }

};

window.addEventListener("DOMContentLoaded", function() {
    Keyboard.init();

});