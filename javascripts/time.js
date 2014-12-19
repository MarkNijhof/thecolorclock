function getMsSinceMidnight(d) {
    var e = new Date(d);
    return d - e.setHours(0,0,0,0);
}

var secondsInADay = 86400;
var min           = 100;
var max           = 255;
var diff          = max - min;
var diff_time     = (4 * 60 * 60) / diff;

setInterval(function() {
    var currentSeconds = getMsSinceMidnight(new Date()) / 1000;
    var R, G, B = 0;

    setTime();
    setDate();

    // 00:00:00
    // R 107 242
    // G 107 107
    // B 242 242
    if (currentSeconds < (14400*1)) {
        R = min + Math.round(diff / (1 / (currentSeconds / 14400)));
        G = min;
        B = max;
        setBackgroundColor(R,G,B);
        return
    }

    // 04:00:00
    // R 242 242
    // G 107 107
    // B 242 107
    if (currentSeconds < (14400*2)) {
        R = max;
        G = min;
        B = max - Math.round(diff / (1 / (currentSeconds / 14400 - 1)));
        setBackgroundColor(R,G,B);
        return
    }

    // 08:00:00
    // R 242 242
    // G 107 242
    // B 107 107
    135/(1/((75500/14400)-5))
    if (currentSeconds < (14400*3)) {
        R = max;
        G = min + Math.round(diff / (1 / (currentSeconds / 14400 - 2)));
        B = min;
        setBackgroundColor(R,G,B);
        return
    }

    // 12:00:00
    // R 242 107
    // G 242 242
    // B 107 107
    if (currentSeconds < (14400*4)) {
        R = max - Math.round(diff / (1 / (currentSeconds / 14400 - 3)));
        G = max;
        B = min;
        setBackgroundColor(R,G,B);
        return
    }

    // 16:00:00
    // R 107 107
    // G 242 242
    // B 107 242
    if (currentSeconds < (14400*5)) {
        R = min;
        G = max;
        B = min + Math.round(diff / (1 / (currentSeconds / 14400 - 4)));
        setBackgroundColor(R,G,B);
        return
    }

    // 20:00:00
    // R 107 107
    // G 242 107
    // B 242 242
    if (currentSeconds < (14400*6)) {
        R = min;
        G = max - Math.round(diff / (1 / (currentSeconds / 14400 - 5)));
        B = max;
        setBackgroundColor(R,G,B);
        return
    }

}, 500)

function setBackgroundColor(R,G,B) {
    console.log("RGB", R, G, B);
    document.body.style.background = 'rgb(' + R + ',' + G + ',' + B + ')';
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function setTime() {
    var today = new Date();
    var h = checkTime(today.getHours());
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
}

function setDate() {
    document.getElementById("date").innerHTML = moment().format("dddd, MMMM Do YYYY");;
}
