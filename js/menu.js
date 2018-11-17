$(function(){

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    //menu responsive
    //Calculamos el ancho de la pagina

    var ancho = $(window).width();
    var menu = $('#menu');
    var btnMenu = $('#btn-menu');
    var icono = $('#btn-menu .icono');

        if(ancho < 1000){
            menu.hide(); 
            icono.addClass('fa-bars'); 
    }

    btnMenu.on('click', function(e){
        menu.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');

    });

    $(window).on('resize', function(){
        
        if($(this).width() > 1000){
            menu.show();
            iconos.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            menu.hide();
            iconos.addClass('fa-bars');
            icono.removeClass('fa-times');
        }

    });




});


