  document.addEventListener("DOMContentLoaded", function () {
    console.log('PAGE A DOMContentLoaded');
  })

  document.addEventListener("turbo:visit", function () {
    console.log('PAGE A turbo:visit');
  });

  document.addEventListener("turbo:before-cache", function () {
    console.log('PAGE A turbo:before-cache');
  });

  document.addEventListener("turbo:before-render", function () {
  console.log('PAGE A turbo:before-render');
  });

  document.addEventListener("turbo:render", function () {
    console.log('PAGE A turbo:render');
  });

  document.addEventListener("turbo:load", function () {
    console.log('PAGE A turbo:load');
  });
