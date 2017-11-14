var day_array = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
var month_array = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября", "октября","ноября","декабря"];

var today = new Date(); //Создает объект Date с текущей датой и временем

var day_name = day_array[today.getDay()];
var month = month_array[today.getMonth()];
var date = today.getDate();
var year = today.getFullYear();

var hours = today.getHours();
var welcome_message;
if (hours > 3 && hours < 12) welcome_message = ("Доброе утро!");
if (hours > 11 && hours < 19) welcome_message = ("Добрый день!");
if (hours > 18 && hours < 24) welcome_message = ("Добрый вечер!");
if (hours > 23 || hours < 4 ) welcome_message = ("Пора спать!");

/*
mins = today.getMinutes();
secs = today.getSeconds();
if (hours < 10) {hours = "0" + hours }
if (mins < 10) {mins = "0" + mins }
if (secs < 10) {secs = "0" + secs }*/

var data_str = ("Сегодня :  " + date + " " + month + " " + year + " , " + day_name);
document.writeln(welcome_message);
document.writeln(data_str);