$(function(){
  // header_clock
  function clock(){
    var getTime = new Date();
    var getHour = getTime.getHours();
    var getMin = getTime.getMinutes();

    var degreeHour = getHour / 12 * 360;
    var degreeMin = getMin / 60 * 360;

    $('#clock_hour').css('transform', `rotate(${degreeHour}deg)`);
    $('#clock_min').css('transform', `rotate(${degreeMin}deg)`);
  };
  setInterval(clock, 1000);
})
