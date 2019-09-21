$("#media-article-0").iziModal();
$("#media-article-1").iziModal();
$("#media-article-2").iziModal();
$("#media-article-3").iziModal();


$(document).ready(function() {
            $('.slide_one').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav: false, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:2000, //Время движения слайда
                autoplayTimeout:3000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:4
                    }
                }
            });

            $('.sect_slide_from').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav: false, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:2000, //Время движения слайда
                autoplayTimeout:3000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

            $('.wrapp_sect_answer_question').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav: false, //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                smartSpeed:2000, //Время движения слайда
                autoplayTimeout:3000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:2
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:2
                    }
                }
            });
            $('.tabs').tabs();
            $('.collapsible').collapsible();

            $('.return-money-wrapp-sl').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav: false, //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                smartSpeed:2000, //Время движения слайда
                autoplayTimeout:3000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        });



