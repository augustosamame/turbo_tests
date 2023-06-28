  document.addEventListener("DOMContentLoaded", function () {
    console.log('PAGE B DOMContentLoaded');
  })

  document.addEventListener("turbo:visit", function () {
    console.log('PAGE B turbo:visit');
  });

  document.addEventListener("turbo:before-cache", function () {
    console.log('PAGE B turbo:before-cache');
  });

  document.addEventListener("turbo:before-render", function () {
  console.log('PAGE B turbo:before-render');
  });

  document.addEventListener("turbo:render", function () {
    console.log('PAGE B turbo:render');
  });

  document.addEventListener("turbo:load", function () {
    console.log('PAGE B turbo:load');
  });
