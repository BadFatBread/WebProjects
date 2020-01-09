$('.card__text').each(function () {
  $(this).prop("Counter", 0).animate({
    Counter: $(this).text()
  }, {
    duration: 2800,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});


let lis = document.querySelectorAll("ul li");
let li;

for (let i = 0; i < lis.length; i += 1) {
  li = lis.item(i);
  li.style.width = li.getBoundingClientRect().width + "px";
}