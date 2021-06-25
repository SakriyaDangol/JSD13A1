window.addEventListener('keydown', clicked);

function clicked(event){
    const keyCode = document.querySelector('.key-code');
    keyCode.innerHTML = event.which;

    const eventKey = document.querySelector('.key');
    eventKey.innerHTML = event.key;

    const eventWhich = document.querySelector('.which');
    eventWhich.innerHTML = event.which;
}

