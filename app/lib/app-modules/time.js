import AppModule from './app-module.js';

class TimeModule extends AppModule {
    constructor() {
        super();
        this.timeouts = [];
        this.intervals = [];
        this.frames = {};

        this.incr = 0;

        this.addMethod('every', '_every');
        this.addMethod('later', '_later');

        this.addLifecycleStep('stop', '_stop');
    }

    static get id() { return 'time'; }

    getId() {
        return this.incr++;
    }

    _every(interval, unit, callback) {
        if (unit === 'frames') {
            let loopId = this.getId(),
                startTimestamp,
                func,
                dt,
                diff;
            // Round and min to 1
            interval = Math.max(1, Math.round(interval));
            // Time interval between frames
            dt = (1000 / 60) * interval;
            func = (timestamp) => {
                // Stop right here is the code is not running
                if (!this.isRunning) {
                    startTimestamp = null;
                    return;
                }
                // First time in the loop, start right away
                if (!startTimestamp) {
                    startTimestamp = timestamp;
                    callback();
                }
                diff = timestamp - startTimestamp;
                // Enough time passed since last frame, execute the code
                if (diff >= dt) {
                    startTimestamp = timestamp;
                    callback();
                }
                this.frames[loopId] = requestAnimationFrame(func);
            };
            this.frames[loopId] = requestAnimationFrame(func);
        } else {
            // Round and min to 1
            interval = unit === 'milliseconds' ? interval : interval * 1000;
            interval = Math.max(1, Math.round(interval));
            const id = setInterval(callback, interval);
            this.intervals.push(id);
        }
    }

    _later(delay, unit, callback) {
        delay = unit === 'milliseconds' ? delay : delay * 1000;
        const id = setTimeout(callback, Math.max(1, delay));
        this.timeouts.push(id);
    }

    _stop() {
        this.timeouts.forEach(id => clearTimeout(id));
        this.intervals.forEach(id => clearInterval(id));
        Object.keys(this.frames).forEach(loopId => cancelAnimationFrame(this.frames[loopId]));
        this.timeouts = [];
        this.intervals = [];
        this.frames = {};
        this.incr = 0;
    }
}

export default TimeModule;
