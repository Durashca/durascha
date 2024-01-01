"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
    console.log(this.value); // выведет ссылку

    function child() {
        console.log(this.value); // выведет undifiend
    }
    child();
}