export class Listeners {

    constructor() {
        this.list = {};
    }
    
    create(eventName, id, cb) {
        if (!this.list[eventName]) {
            this.list[eventName] = {};
        }
        this.list[eventName][id] = cb;
    }

    destroy(eventName, id) {
        delete this.list[eventName][id];
    }

    fire(eventName, args) {
        this.list[eventName].forEach(cb => {
            cb.apply(window, args);
        });
    }

}

export class EventBus {
    constructor() {
        this.listeners = new Listeners();
    }

    listenTo(eventName, id, cb, once) {
        this.listeners.create(eventName, id, cb);

        if (once) {
            this.stopListening(eventName, id);
        }
    }

    listenToOnce(eventName, id, cb) {
        this.listenTo(eventName, id, cb, true);
    }

    stopListening(eventName, id) {
        this.listeners.destroy(eventName, id);
    }

    trigger(eventName, args) {
        this.listeners.fire(eventName, args);
    }
}
