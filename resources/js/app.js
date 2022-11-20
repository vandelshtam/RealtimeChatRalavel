import './bootstrap';

import Alpine from 'alpinejs';
import Echo from 'laravel-echo';

window.Alpine = Alpine;

Alpine.start();

// Echo.private('notifications')
//     .listen('UserSessionChanged', (e) => {
//         console.log(e);
//     }); 
// Echo.channel('notifications')
//     .listen('UserSessionChanged', (e) => {
//         console.log(e.order.name);
//     });  
// Echo.private('notifications')
//     .listen('UserSessionChanged', (e) => {
//         const notificationElement = document.getElementById('notification');

//         notificationElement.innerText = e.message;

//         notificationElement.classList.remove('invisible');
//         notificationElement.classList.remove('alert-success');
//         notificationElement.classList.remove('alert-danger');

//         notificationElement.classList.add('alert-' + e.type);
//     });



    window.axios.get('/api/users')
        .then((response) => {
            const usersElement = document.getElementById('users');
            let users = response.data;
            users.forEach((user, index) => {
                let element = document.createElement('li');
                element.setAttribute('id', user.id);
                element.innerText = user.name;
                usersElement.appendChild(element);
            });
        });

    // Echo.channel('users')
    //     .listen('UserCreated', (e) => {
    //         const usersElement = document.getElementById('users');
    //         let element = document.createElement('li');
    //         element.setAttribute('id', e.user.id);
    //         element.innerText = e.user.name;
    //         usersElement.appendChild(element);
    //     })
    //     .listen('UserUpdated', (e) => {
    //         const element = document.getElementById(e.user.id);
    //         element.innerText = e.user.name;
    //     })
    //     .listen('UserDeleted', (e) => {
    //         const element = document.getElementById(e.user.id);
    //         element.parentNode.removeChild(element);
    //     });

    Echo.channel('notifications')
        .listen('UserSessionChanged', (e) => {
            console.log(e.order.name);
        });  