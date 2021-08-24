$("#slideshow > div:gt(0)").hide();
$("#slideshow1 > div:gt(0)").hide();
$("#slideshow2 > div:gt(0)").hide();
$("#slideshow3 > div:gt(0)").hide();
$("#slideshow4 > div:gt(0)").hide();
$("#slideshow5 > div:gt(0)").hide();
$("#slideshow6 > div:gt(0)").hide();
$("#slideshow7 > div:gt(0)").hide();
$("#slideshow9 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 10000);

setInterval(function() {
  $('#slideshow1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
}, 10000);

setInterval(function() {
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
}, 10000);

setInterval(function() {
  $('#slideshow3 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow3');
}, 10000);

setInterval(function() {
  $('#slideshow4 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow4');
}, 10000);

setInterval(function() {
  $('#slideshow5 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow5');
}, 10000);

setInterval(function() {
  $('#slideshow6 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow6');
}, 10000);

setInterval(function() {
  $('#slideshow7 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow7');
}, 10000);

setInterval(function() {
  $('#slideshow9 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow9');
}, 10000);