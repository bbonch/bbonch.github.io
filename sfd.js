document.getElementsByClassName('copyright-year')[0].innerHTML = (new Date()).getFullYear();
document.getElementById('chrome-web-store').addEventListener('click', function () {
    gtag('event', 'ChromeWebStore');
});
