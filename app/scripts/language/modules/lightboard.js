import HardwareAPI from '../../service/hardware-api';

let lightboard;

export default lightboard = {
    backgroundColor: '#333333',
    lights: Array(128),
    shapes: {},
    debounceId: null,
    bitmap: Array(128),
    getIndex (x, y) {
        return 16 * parseInt(y) + parseInt(x);
    },
    updateBitmap () {
        let shape,
            shapesBitmap = new Array(128);
        // Generate a bitmap combining background color, shapes and lights
        Object.keys(lightboard.shapes).forEach((key) => {
            shape = lightboard.shapes[key];
            if (shape.type === 'rectangle') {
                for (let x = shape.x; x < shape.x + shape.width; x++) {
                    for (let y = shape.y; y < shape.y + shape.height; y++) {
                        shapesBitmap[lightboard.getIndex(x, y)] = shape.color;
                    }
                }
            }
        });
        for (let i = 0; i < 128; i++) {
            lightboard.bitmap[i] = lightboard.lights[i] || shapesBitmap[i] || lightboard.backgroundColor;
        }
        return lightboard.bitmap;
    },
    drawLights () {
        return HardwareAPI.light.on(lightboard.bitmap.slice(0));
    },
    /**
     * Call the drawLight methods on the next event loop. Allows to do a set of actions but call the api only once
     */
    syncApi () {
        clearTimeout(lightboard.debounceId);
        lightboard.debounceId = setTimeout(lightboard.drawLights, 1);
    },
    methods: {
        updateOrCreateShape (id, shape) {
            lightboard.shapes[id] = shape;
            lightboard.updateBitmap();
            lightboard.syncApi();
            return lightboard.bitmap;
        },
        turnOn (light, color) {
            if (light.type === 'all') {
                // Set all the saved lights to the color
                lightboard.lights = lightboard.lights.map(_ => color);
                lightboard.updateBitmap();
                lightboard.syncApi();
                return lightboard.bitmap;
            } else if (light.type === 'single') {
                let index = lightboard.getIndex(light.x, light.y);
                // Set the saved light to the color
                lightboard.lights[index] = color;
                lightboard.updateBitmap();
                lightboard.syncApi();
                return lightboard.bitmap;
            }
        },
        turnOff (light) {
            if (light.type === 'all') {
                // Resets the saved lights
                lightboard.lights = new Array(128);
                lightboard.updateBitmap();
                lightboard.syncApi();
                return lightboard.bitmap;
            } else if (light.type === 'single') {
                let index = lightboard.getIndex(light.x, light.y);
                // Reset the saved light
                lightboard.lights[index] = null;
                // Turn the lightboard light to the background color
                lightboard.updateBitmap();
                lightboard.syncApi();
                return lightboard.bitmap;
            }
        },
        setBackgroundColor (color) {
            // Save the backgroundColor
            lightboard.backgroundColor = color;
            lightboard.updateBitmap();
            lightboard.syncApi();
            return lightboard.bitmap;
        }
    },
    lifecycle: {
        stop () {
            lightboard.lights = new Array(128);
            lightboard.shapes = {};
            HardwareAPI.clearAllCalls();
        }
    },
    config (opts) {
        lightboard.api = HardwareAPI.config(opts);
    }
};
