function time(){
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
   
    if(seconds < 10){ 
      seconds = "0" + seconds;
    }

    if(minutes < 10){
      minutes = "0" + minutes;
    }
    
    if(hours < 10){ 
      hours = "0" + hours;
    }

    let hours_span = document.getElementById('time-hour');
    let minutes_span = document.getElementById('time-minute');
    let seconds_span = document.getElementById('time-second');

    hours_span.innerHTML = hours;
    minutes_span.innerHTML = " : " + minutes;
    seconds_span.innerHTML = " : " + seconds;
    
    const hour_input = document.querySelector('.hours').value;
    const minute_input = document.querySelector('.minutes').value;
    
    const sound = document.querySelector('.song');

    if(hour_input == hours && minute_input == minutes){
      sound.play();
    }
  }
  
setInterval(time,100)