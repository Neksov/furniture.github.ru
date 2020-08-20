//ТАБЫ
function openCity(evt, cityName) {
  var i, tabcontent, tablinks, tabcontentFirst, tablinksFirst;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabcontentFirst = document.getElementsByClassName("tabcontentFirst");
  for (i = 0; i < tabcontentFirst.length; i++) {
    tabcontentFirst[i].style.display = "none";
  }

  tablinksFirst = document.getElementsByClassName("tablinksFirst");
  for (i = 0; i < tablinksFirst.length; i++) {
    tablinksFirst[i].className = tablinksFirst[i].className.replace(" active", "");
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoHeight: true,
  spaceBetween: 100,
  autoplay: {
    delay: 8000,
  },
});

//плавный якорь
$(function () {
  $('a[href^="#"]').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $("html, body").animate({
        scrollTop: dn,
      },
      1000
    );

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});

$(document).ready(function () {

  let modal = $(".modal"); //помещаем модальное окно
  modalBtn = $("[data-toggle = modal]"); //
  closeBtn = $(".modal__close"); //

  modalBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modal").removeClass("modal--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".modal")) {
      modal.toggleClass("modal--visible");
    }
  });

  //открытие модального окна ПОДПИСКИ
  $(".modalSend-btn").on("click", function (event) {
    event.preventDefault();
    $(".modalSend").fadeIn();
  });
  //закрытие по esc окна ПОДПИСКИ
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modalSend").fadeOut();
    }
  });
  // закрытие по клику вне окна  ПОДПИСКИ
  $(document).on("click", function (e) {
    $(".modalSend").fadeOut();
  });

  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: !0,
        minlength: 16
      },
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Некорректно введен номер"
      }
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendModal.php",
        data: $(".modal__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          $(".modalSend").fadeIn();
        }
      });
    }
  });

  $(".consultation__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: !0,
        minlength: 16
      },
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Некорректно введен номер"
      }
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "consultation.php",
        data: $(".consultation__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          $(".modalSend").fadeIn();
        }
      });
    }
  });

  $(".hero__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: !0,
        minlength: 16
      },
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Некорректно введен номер"
      }
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "hero.php",
        data: $(".hero__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          $(".modalSend").fadeIn();
        }
      });
    }
  });
  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:"
  });
});

//бургер меню
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('menu-icon-active');
  mobileNavContainer.classList.toggle('mobile-nav--active');
}
$(".nav__item").click(function (event) {
  $(".menu-icon").removeClass(
    "menu-icon-active"
  );
  $(".mobile-nav").removeClass(
    " mobile-nav--active"
  );
});