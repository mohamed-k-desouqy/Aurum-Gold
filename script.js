const openMenuBtn = document.querySelector('.menu-button');
const closeMenuBtn = document.querySelector('.menu-button-close')
const MenuBody = document.querySelector('.menu-burger')
const menuItemsBtns = document.querySelectorAll('.menu-item-btn')
const sendMessage = document.querySelector('.contact-table-btn')
const textArea = document.querySelector('textarea');
const firstName = document.querySelector('#first-name');
const lastNAme = document.querySelector('#last-name');
const emailAdress = document.querySelector('#email-input')
const phoneNumber = document.querySelector('#phone-input');




const displayMenu = function() {
    MenuBody.classList.remove('translate-x-full')
}

const hideMenu = function() {
    MenuBody.classList.add('translate-x-full')
}


for(let i = 0; i < menuItemsBtns.length; i++) {
   menuItemsBtns[i].addEventListener('click',hideMenu) 
}
openMenuBtn.addEventListener('click', displayMenu)
closeMenuBtn.addEventListener('click',hideMenu)

sendMessage.addEventListener('click', function() {
    if(firstName.value.trim() === '' || lastNAme.value.trim() === '' || 
       emailAdress.value.trim() === '' || phoneNumber.value.trim() === '' || 
       textArea.value.trim() === '') {
        alert('Please fill in all fields');
    } else {
        alert('Message sent successfully');
        firstName.value = '';
        lastNAme.value = '';
        emailAdress.value = '';
        phoneNumber.value = '';
        textArea.value = '';
    }
})

