function timer(s){
    var sec = s;
    var timer = setInterval(function(){
        document.getElementById('otptimer').innerHTML='00:'+sec;
        document.getElementById('timer-pause').value=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.getElementById('timer-widget').innerHTML = "OTP Expired!";
            document.getElementById('getotp').disabled = false;
            document.getElementById('email').disabled = false;

        }
    }, 1000);
}
