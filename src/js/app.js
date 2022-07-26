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

    $('.form').on('submit', function(event) {
        event.preventDefault();
        const sendButton = this.querySelector('button'); // prevent reload 
        console.log(sendButton);
        sendButton.classList.toggle('.fz');
        if (validateForm(this)) {
            var formData = new FormData(this)  
            formData.append('service_id', 'service_qd6sg5t');
            formData.append('template_id', 'template_wqwoxc1');
            formData.append('user_id', '9Mted7Y1TpHPSiEya');
            sendButton.classList.toggle('.fz');
            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function() {
                sendButton.classList.toggle('.fz');
                form.reset();
            }).fail(function(error) {
                sendButton.classList.toggle('.fz');
                alert('Oops... ' + JSON.stringify(error));
            });
        }
    });

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





