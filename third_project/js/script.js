document.querySelector('.btn_toggle').addEventListener('click', function () {
    document.querySelector('.nav_list').classList.toggle('active_nav');
    this.classList.toggle('btn_toggle_active')
})

window.addEventListener("click", function (e) {
    let btn = document.querySelector('.btn_toggle');
    let header = document.querySelector('header#header');

    if (!btn.contains(e.target) && !header.contains(e.target)) {
        document.querySelector('.nav_list').classList.remove('active_nav');
        btn.classList.remove('btn_toggle_active')
    }
})