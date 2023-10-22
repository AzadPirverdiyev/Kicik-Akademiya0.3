function toggleMenu() {
  var menuDiv = document.getElementById("menu");
  menuDiv.classList.toggle("show");
}

const heroDivs = document.querySelectorAll('.links a');

heroDivs.forEach(div => {
  div.addEventListener('mouseover', () => {
    heroDivs.forEach(otherDiv => {
      if (otherDiv !== div) {
        otherDiv.classList.add('blur');
      }
    });
  });

  div.addEventListener('mouseout', () => {
    heroDivs.forEach(otherDiv => {
      otherDiv.classList.remove('blur');
    });
  });
});

{
const heroDivs = document.querySelectorAll('.hero-wrapper4');

heroDivs.forEach(div => {
  div.addEventListener('mouseover', () => {
    heroDivs.forEach(otherDiv => {
      if (otherDiv !== div) {
        otherDiv.classList.add('blur');
      }
    });
  });

  div.addEventListener('mouseout', () => {
    heroDivs.forEach(otherDiv => {
      otherDiv.classList.remove('blur');
    });
  });
});
}
document.querySelector('a[href="#enalt"]').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo(0, window.scrollY - 100);
});
