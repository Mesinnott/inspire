

function setUpAlerts(){
    var userName= prompt('name?', 'Turd Ferguson')
    var today = new Date();
    var hr = today.getHours()
    var greet = greeting(hr)
    // console.log(greet)
    $('#welcome').append(`${greet}, ${userName}`)

}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var g = greeting(h)
    var military=''

    if (flag%2!=0){
        military = '24hr'
        if(h>12){
            h=h-12
        }
    } else{military = '12 hr'}
    $('#toggle').html(military)
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
 var flag =1


$('#toggle').on('click',function(e){
    e.preventDefault()
    debugger
    flag ++
    console.log(flag)

})




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



