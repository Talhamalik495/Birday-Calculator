let output = document.getElementById("input")
let output1 = document.getElementById("input1")
let form = document.getElementById("form")
// is ma add karna ha text 
let user = document.getElementById("username");
let age = document.getElementById("user")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let a = (output.value.toUpperCase());
    user.innerHTML = "Welcome " + a
    let birthdaydate = new Date(output1.value)
    let date1 = birthdaydate.getDate();
    let year1 = birthdaydate.getFullYear();
    let month1 = birthdaydate.getMonth() + 1;
    let currentdate = new Date();
    let date2 = currentdate.getDate();
    let year2 = currentdate.getFullYear();
    let month2 = currentdate.getMonth() + 1;
    let date3, year3, month3;
    year3 = year2 - year1;

    if (month2 >= month1) {
        month3 = month2 - month1;
    }
    else {
        year3--;
        month3 = 12 + month2 - month1;
    }

    if (date2 >= date1) {
        date3 = date2 - date1;
    } else {
        month3--;
        date3 = getDaysMonth(year1, month2) + date2 - date1;
    }

    if (month3 < 0) {
        month3 = 11;
        year3--;
    }

    age.innerHTML = `YOU ARE ${year3} YEARS , ${month3} MONTHS AND ${date3} DAYS OLD`;

    function getDaysMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

})
