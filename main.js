let modal = document.querySelector('.modal');
let loginBtn = document.querySelector('.login-btn');
let closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal) {
        closeModal();
    }
}