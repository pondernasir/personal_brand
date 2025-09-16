function mobile(){
    const body = document.getElementById('body');
    body.classList.toggle('active');

    const background = document.getElementById('background');
    background.classList.toggle('active');

    const links = document.getElementById('links');
    links.classList.toggle('active');

    const menu_button = document.getElementById('menu_button');
    menu_button.classList.toggle('active');
}

window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) { // scroll distance before trigger
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});