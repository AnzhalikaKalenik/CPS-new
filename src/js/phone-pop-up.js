//pop-up
const phonePopUps = document.querySelectorAll('.phone-pop-up');
const popUp = document.querySelector('.pop-up');
const closee = document.querySelector('.closee');

for (var i=0; i<phonePopUps.length; i++){
    var phonePopUp = phonePopUps[i];

    phonePopUp.addEventListener('click', () => {
    popUp.classList.toggle('visible');
    });
}

popUp.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popUp.classList.toggle('visible');
    }
});

closee.addEventListener('click', () => {
    popUp.classList.toggle('visible');
});


//pop-up2
const chatPopUps = document.querySelectorAll('.chat-pop-up');
const popUp2 = document.querySelector('.pop-up2');
const closee2 = document.querySelector('.closee2');

for (var i=0; i<chatPopUps.length; i++){
    var chatPopUp = chatPopUps[i];

    chatPopUp.addEventListener('click', () => {
    popUp2.classList.toggle('visible');
    });
}

popUp2.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up2')) {
        popUp2.classList.toggle('visible');
    }
});

closee2.addEventListener('click', () => {
    popUp2.classList.toggle('visible');
});
