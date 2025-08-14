let buttons = document.querySelectorAll('.button');
let body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(m){
        console.log(m);
        console.log(m.target);
        if(m.target.id === 'grey'){
            body.style.backgroundColor = m.target.id;
        }
        if(m.target.id === 'white'){
            body.style.backgroundColor = m.target.id;
        }
        if(m.target.id === 'blue'){
            body.style.backgroundColor = m.target.id;
        }
        if(m.target.id === 'yellow'){
            body.style.backgroundColor = m.target.id;
        }
    })
})

