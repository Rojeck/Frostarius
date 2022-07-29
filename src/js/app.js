// slider

$(document).ready(function(){
   
    $('.slider').slick({
        slidesToShow: 4,
        autoplay: false,
        adaptiveHeight: true,
        arrows: false,
        infinite: true,
        responsive: [
           
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,

                }
            }

        ]
    });
});

// goto

const menuLinks = document.querySelectorAll ('[data-goto]');
menuLinks.forEach (element => {
    element.addEventListener('click', goto)
})

function goto (e) {
    e.preventDefault();
    const menulink = e.target;
    const gotoObject = document.querySelector(menulink.dataset.goto);
    console.log(gotoObject);
    const gotoObjectValue = gotoObject.getBoundingClientRect().top + pageYOffset;
    console.log(gotoObjectValue);
    window.scrollTo({
        top: gotoObjectValue,
        behavior: "smooth"
    })}

   // Form functionality

    $('.form').on('submit', function(event) {
        event.preventDefault();
        const sendButton = this.querySelector('button'); // prevent reload 
        const form = this;
        if (validateForm(form)) {
            const formData = new FormData(form);
            formData.append('service_id', 'service_qd6sg5t');
            formData.append('template_id', 'template_wqwoxc1');
            formData.append('user_id', '9Mted7Y1TpHPSiEya');
            formLoading(form, true);
            disableInputs(form, true);
            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function() {
                formLoading(form, false);
                disableInputs(form, true);
                form.reset();
                changeFormText(form, "Заявка отправлена", "Мы свяжемся с вами в течение 30 минут");
            }).fail(function(error) {
                formLoading(form, false);
                disableInputs(form, false);
                changeFormText(form, "Произошла ошибка", "Пожалуйста, попробуйте позже");
            });
        }
    });

    function formLoading (form, loadingOn) {
        const formBtn = form.querySelector('button');
        if (loadingOn){
            disableInputs (form, true);
            formBtn.classList.add('btn-loading');
        } else {
            disableInputs (form, false);
            formBtn.classList.remove('btn-loading');
        }
    }

    function disableInputs (form, status) {
        const inputs = form.querySelectorAll('input');
        if (status) {
            inputs.forEach(input => {
                input.disabled = true;
            });
        } else {
            inputs.forEach(input => {
                input.disabled = false;
            });
        }
    }

    function changeFormText (form, title, subTitle) {
        const titleItem = form.closest('.container').querySelector('._form-title'),
             subTitleItem = form.closest('.container').querySelector('._form-sub-title');
             titleItem.textContent = title;
             subTitleItem.textContent = subTitle;
    }

    function validateForm (form) {
        const elements = form.querySelectorAll('._req');
        let validate = true;
         elements.forEach(element => {
            if (element.value === '') {
                element.classList.add('red-highlighted');
                validate = false;
            }  else if (element.classList.contains('red-highlighted')) {
                element.classList.remove('red-highlighted');
            }
        })
        return validate;
    }

    $('.request-form__close-btn').on('click', closeContactForm);
    $('.connect-btn').on('click', openContactForm);
    $('.cover').on('click',closeContactForm);
    
    function closeContactForm () {
        $('.contact-block')[0].removeAttribute('style');    
        $('.cover')[0].classList.remove('back-filter');
        $('.contact-block')[0].classList.remove('form-fixed');
        $('.request-form__close-btn')[0].classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
    
    function openContactForm (e) {
        e.preventDefault();
        $('.contact-block')[0].style.display = 'block';
        $('.cover')[0].classList.add('back-filter');
        $('.contact-block')[0].classList.add('form-fixed');
        $('.request-form__close-btn')[0].classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
    