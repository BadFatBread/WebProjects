




var menu__passive = document.querySelector('div.item');
var menu_active_frame = document.querySelector('div.menu-active');
var menu_close = document.querySelector('nav.nav-close');
var active_anim = document.querySelector('div.item');
var menu_list = document.querySelector('ul.list');

// menu_active_frame.style.opacity = "0";
menu_active_frame.classList.add('dn');

menu__passive.addEventListener('click', function (event) {
  menu_active_frame.classList.remove('dn');
  menu_active_frame.classList.add('df');
  active_anim.classList.add('open__menu');
  menu_list.classList.add('opacity');

  setTimeout(function () {
    menu_list.classList.add('open__list')
  },200)
})

menu_close.addEventListener('click', function(event){
  menu_list.classList.remove('open__list')
  active_anim.classList.remove('open__menu');
  active_anim.classList.add('close__menu');
  menu_active_frame.classList.remove('df');
  menu_active_frame.classList.add('dn');

  setTimeout(function(){
    active_anim.classList.remove('close__menu');
  },205)
})

