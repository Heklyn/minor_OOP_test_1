window.addEventListener('load', function() {
    const nav = document.querySelector('.header__nav');
    nav.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('header__nav__item')){
            event.target.classList.add('header__nav__item_hold');
        }
    });
    nav.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('header__nav__item')){
            event.target.classList.remove('header__nav__item_hold');
        }
    });

    const logo = document.querySelectorAll('.logo');
    const logo_text = document.querySelectorAll('.logo__text');
    const logo_img = document.querySelectorAll('.logo__img');

    for (let i = 0; i < 2; i++) {
        logo[i].addEventListener('mouseover', (event) => {
            logo_text[i].classList.add('logo__text_hold');
            logo_img[i].classList.add('logo__img_hold');
        })
        logo[i].addEventListener('mouseout', (event) => {
            logo_text[i].classList.remove('logo__text_hold');
            logo_img[i].classList.remove('logo__img_hold');
        })
    }
});

