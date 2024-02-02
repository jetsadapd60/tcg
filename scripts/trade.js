const buttonActive = () => {
    const buttons = document.getElementsByClassName('link');

    console.log(buttons)
    buttons[0].addEventListener('click', (e) => console.log(e))
    // for(let i=0; i<buttons.length; i++) {
    //     const button = buttons[i];
    //     button.addEventListener('click', (e) => {
    //         if(e.target === 'div.link') {
    //             console.log(e)

    //         }
    //     })
    
    // }

    // if(buttons) {

    //     buttons.forEach((button) => {
    //         button.addEventListener('click', (e) => { 
    //             console.log(e)
    //             // console.log(e.target.className)
    //         });
    //     });
    // }
}

function handleClick(clickedElement) {
    // Remove 'active' class from all links
    const allLinks = document.querySelectorAll('.link');
    allLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    clickedElement.classList.add('active');

    // Add your custom logic or actions here
    // For example, you can get the text content of the clicked link
    const linkText = clickedElement.querySelector('span').textContent;
    console.log(`Clicked on: ${linkText}`);
}

const main = () => {
    buttonActive();
}

// main();