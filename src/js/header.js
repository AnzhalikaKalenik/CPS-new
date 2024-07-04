//header
document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
});

///читать далее
const aboutButton = document.querySelector('.about__button');
const aboutTabletText = document.querySelector('.about__tablet-text');
const aboutDeviceText = document.querySelector('.about__device-text');
const aboutAllText = document.querySelector('.about__all-text');

aboutButton.onclick = function() {

    if(window.innerWidth > 1119) {

        if (aboutAllText.style.display === "block") {
            aboutAllText.style.display = "none";
            aboutButton.innerHTML = "Читать далее";
        } else {
            aboutAllText.style.display = "block";
            aboutButton.innerHTML = "Свернуть";
        }

    } else if(window.innerWidth > 767) {

        if (aboutAllText.style.display === "block") {
            aboutDeviceText.style.display = "none";
            aboutAllText.style.display = "none";
            aboutButton.innerHTML = "Читать далее";
        } else {
            aboutDeviceText.style.display = "inline";
            aboutAllText.style.display = "block";
            aboutButton.innerHTML = "Свернуть";
        }


    } else 
    if (aboutAllText.style.display === "block") {
        aboutTabletText.style.display = "none";
        aboutDeviceText.style.display = "none";
        aboutAllText.style.display = "none";
        aboutButton.innerHTML = "Читать далее";
      } else {
        aboutTabletText.style.display = "block";
        aboutDeviceText.style.display = "inline";
        aboutAllText.style.display = "block";
        aboutButton.innerHTML = "Свернуть";
      }

      
}

