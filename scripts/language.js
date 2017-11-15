var RU = document.getElementById('RU_button');
var ENG = document.getElementById('ENG_button');
var lang;

function set_russian_lang() {
    //Кнопки
    document.getElementById('Zubr').innerHTML = "Зубр";
    document.getElementById('Lion').innerHTML = "Лев";
    document.getElementById('Panda').innerHTML = "Панда";
    //Текст
    document.getElementById('welcome').innerHTML = "Добро пожаловать!";
    lang = "RU";
    date_lang(lang);
}

RU.addEventListener('click', set_russian_lang);

function set_english_lang() {
    //Button's
    document.getElementById('Zubr').innerHTML = "Bison";
    document.getElementById('Lion').innerHTML = "Lion";
    document.getElementById('Panda').innerHTML = "Panda";
    //Text
    document.getElementById('welcome').innerHTML = "Welcome!";
    lang = "ENG";
    date_lang(lang);
}

ENG.addEventListener('click', set_english_lang);