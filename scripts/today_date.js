date_lang("RU");

function date_lang(lang) {
    var day_array = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    if (lang === "ENG") day_array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var month_array = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября", "октября","ноября","декабря"];
    if (lang === "ENG") month_array = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep", "Oct","Nov","Dec"];

    var today = new Date(); //Создает объект Date с текущей датой и временем

    var day_name = day_array[today.getDay()];
    var month = month_array[today.getMonth()];
    var date = today.getDate();
    var year = today.getFullYear();

    var hours = today.getHours();
    var welcome_message;
    if (hours > 3 && hours < 12 && lang === "RU") welcome_message = ("Доброе утро!");
    if (hours > 11 && hours < 19 && lang === "RU") welcome_message = ("Добрый день!");
    if (hours > 18 && hours < 24 && lang === "RU") welcome_message = ("Добрый вечер!");
    if (hours > 23 || hours < 4 && lang === "RU") welcome_message = ("Пора спать!");

    if (hours > 3 && hours < 12 && lang === "ENG") welcome_message = ("Good morning!");
    if (hours > 11 && hours < 19 && lang === "ENG") welcome_message = ("Good day!");
    if (hours > 18 && hours < 24 && lang === "ENG") welcome_message = ("Good evening!");
    if (hours > 23 || hours < 4 && lang === "ENG") welcome_message = ("It's time to sleep!");

    /*
    mins = today.getMinutes();
    secs = today.getSeconds();
    if (hours < 10) {hours = "0" + hours }
    if (mins < 10) {mins = "0" + mins }
    if (secs < 10) {secs = "0" + secs }*/

    var data_str = ("Сегодня :  ");
    if (lang === "ENG") data_str = ("Today is:  ");
    data_str = data_str + date + " " + month + " " + year + " , " + day_name;
    document.getElementById("date").innerHTML = (welcome_message) + "\n" + data_str;
}
