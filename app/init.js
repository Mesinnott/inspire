
// var userName=''
// var userCity=''
function setUpAlerts(){
    var userName= prompt('name?', 'Turd Ferguson')
    // var userCity= prompt('city', 'Boise')
    $('#welcome').append(`Welcome, ${userName}`)
    // return userCity
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    //  + '<br>' + 'wElcome, ' + userName
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime()



