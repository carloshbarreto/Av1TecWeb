"use strict";
var lista = [];
var form = document.querySelector('.form');
var username = document.querySelector('.username');
var ul = document.querySelector('.ul');
var lis = document.getElementById('lis');
var botao = document.querySelector('button');
var sublinhado = 'sub';
form.addEventListener('submit', function (event) {
    event.preventDefault();
    lista.push(username.value);
    var li = document.createElement("li");
    console.clear();
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i] + ' ' + [i]);
        // AddLista(lista[i])
        li.innerText = lista[i];
        lis === null || lis === void 0 ? void 0 : lis.appendChild(li);
        if (i != 0) {
            console.log("passei por aqui" + [i]);
            li.classList.add(sublinhado);
        }
        else {
            console.log("Não funcionou" + [i]);
        }
    }
});
