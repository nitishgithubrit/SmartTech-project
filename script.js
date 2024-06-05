// script.js

document.addEventListener('DOMContentLoaded', function () {
    const joinNowBtn = document.getElementById('join-now-btn');
    const getStartedBtn = document.getElementById('get-started-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    joinNowBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    getStartedBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
