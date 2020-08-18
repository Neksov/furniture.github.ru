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
}

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoHeight: true,
  spaceBetween: 100,
  autoplay: {
    delay: 8000,
  },
})