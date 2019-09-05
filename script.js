//Show /Hide CV sections based on the links clicked
let tabLinks = document.querySelectorAll('.nav-link');
let details = document.querySelectorAll('.details');

for(let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', (e) => {
        e.preventDefault();
        
        var id = tabLinks[i].hash.replace("#", "");

         for(j = 0; j < details.length; j++) {
            section = details[j];
            section.classList.remove('is-visible');
            tabLinks[j].classList.remove('is-active');

            if(section.id === id) {
                section.classList.add('is-visible');
            }
        } 
        tabLinks[i].classList.add('is-active');
    });
}

//Form validation starts here

let contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let contactName = document.querySelector('#name');
    let contactMail = document.querySelector('#mail');
    let contactTitle = document.querySelector('#title');
    let contactMsg = document.querySelector('#message');

    let mailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (contactName.value.length < 4) {
        alert('Name should be at least 4 characters');
        contactName.focus();
    }

    if (!(mailTest.test(contactMail.value)) || contactMail.value === '') {
        alert('Please enter a valid email address');
        contactMail.focus();
    }

    if (contactTitle.value === '') {
        alert('Please Specify a title for your correspondence');
        contactTitle.focus();
    }
    else {
        contactTitle.value = stringToReplace.replace(/[^\w\s]/gi, '');
    }

    if (contactMsg.value.length < 20) {
        alert('Dont be shy, tell me more.');
        contactMsg.focus();
    }
    else {
        contactMsg.value = replace(/[^\w\s]/gi, '');
    }

})
