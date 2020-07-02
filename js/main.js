"use strict" 
document.addEventListener('DOMContentLoaded', function() {

// definimos la app Vue
let app = new Vue({
    el:"#app-comments",
    data: {
        counter:0, 
        comments:[]
    }
});

let count2= document.getElementById("btn-restar");
if (count2){
    count2.addEventListener('click', e => app.counter--);
}
let count= document.getElementById("btn-sumar");
if (count){
    count.addEventListener('click', e => app.counter++);
}



let idCurso= document.querySelector("#idcurso").value;
loadComments(idCurso);

function loadComments(idCurso) {
    
    fetch('api/courses/'+idCurso+'/comments')
    .then(response => response.json())
    .then(jasonComment => {
        
        app.comments = jasonComment; 
        
    });
}

});
