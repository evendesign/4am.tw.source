// 移動 dom
// $( ".main-nav ul" ).appendAround();

// scrollable
var scrollable = document.getElementById('scrollable')
new ScrollFix(scrollable)

// image lazyload
// $("img.lazy").lazyload();
$('img.lazy').lazyload({
  effect: 'fadeIn',
})

var banana =
  '' +
  '\n' +
  '🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌\n' +
  '█████████████████████████████████\n' +
  '\n' +
  '  2022    2023    2024    2025\n' +
  '  黃國昌、白國昌、藍國昌、紅國昌\n' +
  '\n' +
  '█████████████████████████████████\n' +
  '🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌\n' +
  '\n' +
  ''
console.log(banana)
