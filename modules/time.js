var os = require('os');
var uptime = os.uptime();

function secToMin(){
    return (uptime / 60).toFixed(0);
}
function secToHour() {
    return (uptime / 1200).toFixed(0);
    
}

exports.minute = secToMin;
exports.hour = secToHour;