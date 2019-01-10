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
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    data.currentDate.day = day;
    data.currentDate.date = date;
    data.currentDate.month = month;
    data.currentDate.year = year;

    data.calendar.month = month;
    data.calendar.year = year;
}
