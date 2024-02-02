

function main() {


    let isSlash = false;
    const eyeIcon = document.querySelector('#eye-icon');
    const inputPassword = document.querySelector('#input-password');

    eyeIcon.addEventListener('click', (el) => {
        
        if(!isSlash) {
            eyeIcon.className = 'bi-eye-slash eye-icon';
            inputPassword.setAttribute('type', 'text');
        };
        if(isSlash) {
            eyeIcon.className = 'bi-eye eye-icon'
            inputPassword.setAttribute('type', 'password');
        };
        isSlash = !isSlash;
    });

}

main();