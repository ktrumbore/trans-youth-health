const input = document.querySelector('#nav-toggle');
const nav = document.querySelector('nav ul');
const anchors = document.querySelectorAll ('a');

function checkAll(){
    input.checked = false;
}

window.onload = function(){
    window.addEventListener('resize', checkAll, false);
    nav.addEventListener('click', checkAll, false);
}

anchors.forEach((e) => {
    e.addEventListener('click', checkAll, false);
})

window.onscroll = function (){
    if (window.scrollY > 100){
        checkAll();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.form-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('clicked')) {
                this.classList.remove('clicked');
                this.style.color = ''; // Reset to default text color
            } else {
                // Remove 'clicked' class from all buttons
                buttons.forEach(btn => btn.classList.remove('clicked'));

                // Apply 'clicked' class to the clicked button
                this.classList.add('clicked');
                this.style.color = 'var(--egg)'; 
            }

            // Toggle background color and border color
            this.style.backgroundColor = this.classList.contains('clicked') ? '#499BBF' : '';
            this.style.borderColor = this.classList.contains('clicked') ? '#499BBF' : '';
        });
    });
});