// console.log("hi");

var data = {
  currentModalPopup: 0,
  currentColor: {
    colorName: "blue",
    color: "#1B19CD",
    offColor: "#7C7EFB"
  },
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

var monthData = [
  {
    monthIndex: 10,
    amountOfDays: 30,
    startingDay: 4,
    year: 2018
  },
  {
    monthIndex: 11,
    amountOfDays: 31,
    startingDay: 6,
    year: 2018
  },
  {
    monthIndex: 0,
    amountOfDays: 31,
    startingDay: 2,
    year: 2019
  },
  {
    monthIndex: 1,
    amountOfDays: 28,
    startingDay: 5,
    year: 2019
  },
  {
    monthIndex: 2,
    amountOfDays: 31,
    startingDay: 5,
    year: 2019
  },
  {
    monthIndex: 3,
    amountOfDays: 30,
    startingDay: 1,
    year: 2019
  },
  {
    monthIndex: 4,
    amountOfDays: 31,
    startingDay: 3,
    year: 2019
  },
  {
    monthIndex: 5,
    amountOfDays: 30,
    startingDay: 6,
    year: 2019
  },
  {
    monthIndex: 6,
    amountOfDays: 31,
    startingDay: 1,
    year: 2019
  },
  {
    monthIndex: 7,
    amountOfDays: 31,
    startingDay: 4,
    year: 2019
  },
  {
    monthIndex: 8,
    amountOfDays: 30,
    startingDay: 7,
    year: 2019
  },
  {
    monthIndex: 9,
    amountOfDays: 31,
    startingDay: 2,
    year: 2019
  },
  {
    monthIndex: 10,
    amountOfDays: 30,
    startingDay: 5,
    year: 2019
  },
  {
    monthIndex: 11,
    amountOfDays: 31,
    startingDay: 0,
    year: 2019
  },
  {
    monthIndex: 0,
    amountOfDays: 31,
    startingDay: 4,
    year: 2020
  }
];

var colorData = [
  {
    name: "blue",
    colorCode: "#1B19CD",
    offColorCode: "#7C7EFB"
  },
  {
    name: "red",
    colorCode: "#D01212",
    offColorCode: "#EEA19B"
  },
  {
    name: "purple",
    colorCode: "#721D89",
    offColorCode: "#EBADFB"
  },
  {
    name: "green",
    colorCode: "#158348",
    offColorCode: "#57C664"
  },
  {
    name: "orange",
    colorCode: "#EE742D",
    offColorCode: "#F7A77A"
  },
  {
    name: "deep-orange",
    colorCode: "#F13C26",
    offColorCode: "#F77D59"
  },
  {
    name: "baby-blue",
    colorCode: "#31B2FC",
    offColorCode: "#3D8DD9"
  },
  {
    name: "cerise",
    colorCode: "#EA3D69",
    offColorCode: "#FCBECC"
  },
  {
    name: "lime",
    colorCode: "#2ACC32",
    offColorCode: "#4FFA4F"
  },
  {
    name: "teal",
    colorCode: "#2FCCB9",
    offColorCode: "#7FE7E3"
  },
  {
    name: "pink",
    colorCode: "#F50D7A",
    offColorCode: "#FFB9EA"
  },
  {
    name: "black",
    colorCode: "#212524",
    offColorCode: "#687E7B"
  }
];

var modal = document.getElementById("modal");

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

function fillInCalendar() {
    updateCalendarDates();

    var monthToFillIn = {

    };

    var previousMonthIndex;

    monthData.forEach((month, i) => {
        if(month.year === data.calendar.year && month.monthIndex === data.calendar.month) {
            monthToFillIn = month;
            previousMonthIndex = i - 1;
            return;
        }
    });

    let days = document.getElementsByTagName("td");
    let currentMonthCount = 1;
    let previousMonthCount = monthData[previousMonthIndex].amountOfDays - monthToFillIn.startingDay + 1;
    let nextMonthCount = 1;
    removeCurrentDay();
    cleanCells(days);

    for(let i = 0; i < days.length; i++) {
        if(monthToFillIn.startingDay <= i && currentMonthCount <= monthToFillIn.amountOfDays) {
            // filling current month
            days[i].innerHTML = currentMonthCount;
            // highlight the current day
            if(currentMonthCount === data.currentDate.date && calendarIsCurrentMonth()) {
                days[i].setAttribute("id", "current-day");
            }
            currentMonthCount++
  
        } else if(currentMonthCount <= monthToFillIn.amountOfDays) {
            // filling previous month
            days[i].classList.add("color");
            days[i].innerHTML = previousMonthCount;
            if(previousMonthCount === monthData[previousMonthIndex].amountOfDays) {
                days[i].classList.add("prev-month-last-day");
            }
            previousMonthCount++;

        } else {
            // filling next month
            days[i].classList.add("color");
            days[i].innerHTML = nextMonthCount;
            nextMonthCount++;

        }
    }
}

function cleanCells(cells) {
    removeCurrentDay();

    for(let i = 0; i < cells.length; i++) {
        if(cells[i].classList.contains("color")) {
            cells[i].classList.remove("color");
        }
        if(cells[i].classList.contains("prev-month-last-day")) {
            cells[i].classList.remove("prev-month-last-day");
        }
    }

}

function removeCurrentDay() {
    if(document.getElementById("current-day")) {
        document.getElementById("current-day").removeAttribute("id");
    }
}

function calendarIsCurrentMonth() {
    if(data.currentDate.year === data.calendar.year && data.currentDate.month === data.calendar.month) {
        return true;
    } else {
        return false;
    }
}

function nextMonth() {
    // console.log("next");
    if(data.calendar.month != 11 || data.calendar.year === 2018) {
        data.calendar.month++;
    }
    if(data.calendar.month >= 12) {
        data.calendar.month = 0;
        data.calendar.year++;
    }
    fillInCalendar();
    
}

function previousMonth() {
    // console.log("prev");
    if (data.calendar.month != 11 || data.calendar.year === 2019) {
        data.calendar.month--;
    }
    if (data.calendar.month <= -1) {
        data.calendar.month = 11;
        data.calendar.year--;
    }
    fillInCalendar();
}

document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 37: previousMonth(); break;
        case 39: nextMonth(); break;
    }
}


function openModal(num) {
    modal.open = true;
    modal.classList.add("fade-in");
    switch(num) {
        case 1: data.currentModalPopup = 1; break;
        case 2: data.currentModalPopup = 2; break;
    }
}

function closeModal() {
    modal.open = false;
}

modal.addEventListener("animationend", () => {
    if (modal.classList.contains("fade-in")) {
        modal.classList.remove("fade-in");
        switch(data.currentModalPopup) {
            case 1: break;
            case 2: break;
        }  
    }

    if (modal.classList.contains("fade-out")) {
        modal.classList.remove("fade-out");
        closeModal();
    }
});

function init() {
    updateCurrentDates();
    updateCalendarDates();
    fillInCalendar();
}

init();


