import './bootstrap';

import Alpine from 'alpinejs';
import Echo from 'laravel-echo';

window.Alpine = Alpine;

Alpine.start();

// Echo.private('notifications')
//     .listen('UserSessionChanged', (e) => {
//         console.log(e);
//     }); 
Echo.channel('notifications')
    .listen('UserSessionChanged', (e) => {
        console.log(e.order.name);
    });  
// Echo.private('notifications')
//     .listen('UserSessionChanged', (e) => {
//         const notificationElement = document.getElementById('notification');

//         notificationElement.innerText = e.message;

//         notificationElement.classList.remove('invisible');
//         notificationElement.classList.remove('alert-success');
//         notificationElement.classList.remove('alert-danger');

//         notificationElement.classList.add('alert-' + e.type);
//     });