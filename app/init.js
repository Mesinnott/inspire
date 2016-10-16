
// var userName=''
// var userCity=''
function setUpAlerts(){
    var userName= prompt('name?', 'Turd Ferguson')
    // var userCity= prompt('city', 'Boise')
    // console.log('blacrh===' +.h)
    var today = new Date();
    var hr = today.getHours()
    var greet = greeting(hr)
    console.log(greet)
    $('#welcome').append(`${greet}, ${userName}`)
    // return userCity
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var g = greeting(h)
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    //  + '<br>' + 'wElcome, ' + userName
    var t = setTimeout(startTime, 500);
}



function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function greeting(i){
    var greeting = ''
    if (i<6){
        greeting ='Go To Bed'
    }else if(i<11){
        greeting = 'Good Morning'
    } else if(i<17){
        greeting = 'Good Afternoon'
    } else if(i<20){
        greeting = 'Good Evening'
    }else{
        greeting='Good Night'
    }
return greeting
}

startTime()



