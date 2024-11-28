window.addEventListener('load', () => {
   
    setTimeout(() => {
        
        document.getElementById('intro-screen').style.opacity = 0;
        

        setTimeout(() => {
            document.getElementById('intro-screen').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            document.getElementById('content').style.opacity = 1;
        }, 1000);  
    }, 1000);  // Sets how long the intro screen stays visible (4 seconds)
});




const form = document.getElementById('portfolio-form');
const popupNotification = document.getElementById('popup-notification');
const closePopupBtn = document.getElementById('close-popup');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate Form
    if (form.name.value && form.email.value && form.message.value) {
        popupNotification.style.display = 'block';

        setTimeout(() => {
            popupNotification.style.display = 'none';
        }, 3000); // Hides popup after 3 seconds
    }
});

closePopupBtn.addEventListener('click', function () {
    popupNotification.style.display = 'none';
});