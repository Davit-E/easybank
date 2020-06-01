var hamburger = document.querySelector('.hamburger');
var hamburgerExit = document.querySelector('.hamburger-exit');
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop');
hamburger.addEventListener('click', function(){
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
  hamburger.classList.remove('open');
  hamburgerExit.classList.add('open');
});

backdrop.addEventListener('click', closeMobileNav);
hamburgerExit.addEventListener('click', closeMobileNav);

function closeMobileNav(){
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
  hamburgerExit.classList.remove('open');
  hamburger.classList.add('open');
}