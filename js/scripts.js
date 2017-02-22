//BACKEND
var leapyear = function(year) {
  return false;
};

var leapyear = function(year) {
  if (year % 4 === 0) {
    return true;
  }
  else {
    return false;
  }
};

var leapyear = function(year) {
  if (year % 100 === 0) {
    return false;
  }

      else if (year % 4 === 0) {
        return true;
  }
         else {
           return false;
  }
};

var leapyear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
}
    else {
      return false;
}
};

var leapyear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
}
    else {
      return false;
}
};





//FRONTEND
$(document).ready(function(){
  $("form#leapyear").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#year").val());
    var result = leapyear(year);
    $("#result").text(result);


  });


});


/*$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});*/
