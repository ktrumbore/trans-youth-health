document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.querySelector('.ck-button input[type="checkbox"]');
    var ckButton = document.querySelector('.ck-button');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            ckButton.style.background = '#499BBF';
        } else {
            ckButton.style.background = 'var(--orange)';
        }
    });

    ckButton.addEventListener('mouseenter', function() {
        if (!checkbox.checked) {
            this.style.background = 'var(--wave)';
        }
    });

    ckButton.addEventListener('mouseleave', function() {
        if (!checkbox.checked) {
            this.style.background = 'var(--orange)';
        }
    });
});

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