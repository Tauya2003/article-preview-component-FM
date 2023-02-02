document.addEventListener('DOMContentLoaded', () => {
    const btnShare = document.querySelector('.share');
    const shar = document.querySelector('.shar');
    const overlay = document.querySelector('.overlay');

    shar.addEventListener('click', (e) => {
        if (e.target.className != 'shar'){
            e.target.parentElement.parentElement.style.display = 'none';
        }else{
            e.target.parentElement.style.display = 'none';
        };
    });

    btnShare.addEventListener('click', showOverlay);

    function showOverlay(){
        if (overlay.style.display == 'none'){
            overlay.style.display = 'grid';
        }else{
            overlay.style.display = 'none';
        };
    };
});