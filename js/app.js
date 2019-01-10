// console.log("hi");

var data = {
    currentDate: {
        day: "",
        date: "",
        month: "",
        year: ""
    },
    calendar: {
        month: "",
        year: ""
    }
};

function updateCurrentDates() {
    const today = new Date();
    // console.log(today);

    // Store the current info into variables
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    // Transfer variables into currentDate data
    data.currentDate.day = day;
    data.currentDate.date = date;
    data.currentDate.month = month;
    data.currentDate.year = year;

    // Transter variables into calendar data
    data.calendar.month = month;
    data.calendar.year = year;

    // DOM for the current date info side
    document.getElementById("current-year").innerHTML = year;
    document.getElementById("current-day").innerHTML = translateToWeekdayName(day);
    document.getElementById("current-month").innerHTML = translateToMonthName(month);
    document.getElementById("current-date").innerHTML = addOrdinalIndicator(date);
}

function updateCalendarDates() {
    document.getElementById("cal-year").innerHTML = data.calendar.year;
    document.getElementById("cal-month").innerHTML = translateToMonthName(data.calendar.month);
}

function addOrdinalIndicator(date) {
    switch(date) {
        case 1:
        case 21:
        case 31: return date + "<sup>st</sup>";
        case 2:
        case 22: return date + "<sup>nd</sup>";
        case 3:
        case 23: return date + "<sup>rd</sup>";
        default: return date + "<sup>th</sup>";
    }
}

function translateToWeekdayName(day) {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
}

function translateToMonthName(month) {
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
}

function init() {
    updateCurrentDates();
    updateCalendarDates();
}

init();


