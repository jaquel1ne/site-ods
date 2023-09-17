// Função Data
function showDate() {
    const dateElement = document.getElementById("date");
    
    const date = new Date();
    const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dayOfWeek = weekDays[date.getDay()];
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    dateElement.innerHTML = `<i class="fas fa-clock mr-2"></i> ${dayOfWeek}, ${day}/${month}/${year}, ${hours}:${minutes}`;
}

showDate();

//Menu Hamburger
// Ação do botão Hamburger
$(".close-menu").click(function() {
    $("#navbarNav").removeClass('show');
    $("#menu-icon").removeClass('fa-times').addClass('fa-bars');
});

// Fechar o menu ao clicar em um item
$("#navbarNav .nav-link").click(function() {
    $("#navbarNav").removeClass('show');
    $("#menu-icon").removeClass('fa-times').addClass('fa-bars');
});

//Top-bar
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('sticky-nav');
    } else {
        $('.navbar').removeClass('sticky-nav');
    }
});


//Função Scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$(document).ready(function() {
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

