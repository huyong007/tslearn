"use strict";
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        return "beep beep";
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        return "tick tock";
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
setTimeout(() => {
    console.log(1);
    location.reload(true);

}, 5000);
