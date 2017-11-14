function set_new_img_path_zubr() {
    document.getElementById('animal_img').setAttribute('src', 'img/Zubr.bmp');
}

document.getElementById('Zubr').addEventListener('click', set_new_img_path_zubr);

function set_new_img_path_lion() {
    document.getElementById('animal_img').setAttribute('src', 'img/Lion.png');
}

document.getElementById('Lion').addEventListener('click', set_new_img_path_lion);

function set_new_img_path_panda() {
    document.getElementById('animal_img').setAttribute('src', 'img/Panda.gif');
}

document.getElementById('Panda').addEventListener('click', set_new_img_path_panda);
