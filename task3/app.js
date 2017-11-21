var input_string = "Сделать задание #3 по web-программированию";

var theInput = document.createElement('input');
theInput.setAttribute('id', 'add_task_input');
theInput.setAttribute('type', 'text');
var add_task_button = document.createElement('button');
add_task_button.setAttribute('id', 'add_task');
add_task_button.onclick = function () {
    add_my_tags(theInput.value);
};

add_task_button.innerHTML = "Добавить";

document.getElementById("root").appendChild(theInput);
document.getElementById("root").appendChild(add_task_button);
/*$('#root').prepend($('#add_task')); // делаю эл-т первым
$('#root').prepend($('#add_task_input'));*/
var theUl = document.createElement('ul');
add_my_tags(input_string);

function add_my_tags(input_string) {
    var theLi = document.createElement('li');
    var theSpan = document.createElement('span');
    theSpan.innerHTML = input_string;
    var button = document.createElement('button');
    button.setAttribute("name", "Удалить");
    button.innerText = "Удалить";
    button.addEventListener('click', my_delete);
    theLi.appendChild(theSpan);
    theLi.appendChild(button);
    theUl.appendChild(theLi);
    //$('#root').append(theUl); // jQuery
}

function my_delete () {
    //this.parentNode.parentNode.removeChild(this.parentNode);
    this.remove();
}

document.getElementById("root").appendChild(theUl); //DOM API

document.getElementById("body").addEventListener('keydown', enter_click);
function enter_click (e) {
    if(e.keyCode == "13") {
        add_task_button.onclick();
    }
    if(e.keyCode == "46"){
        theUl.remove();
    }
}
