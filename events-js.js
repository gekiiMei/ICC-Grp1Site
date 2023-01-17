var id;
function showSlides(slides, slideIndex) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    id = setTimeout(function() {showSlides(slides, slideIndex)}, 2250);
};

function startShow(slideShowContainer) {
    var slides = slideShowContainer.getElementsByClassName('slides');
    var previewImage = slideShowContainer.getElementsByClassName('preview-image');
    var slideIndex = 0;
    previewImage[0].style.display  = "none";
    showSlides(slides, slideIndex);
}

function stopShow(slideShowContainer) {
    clearTimeout(id);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { 
       if (entry.isIntersecting) {
          entry.target.classList.add('show');        
       }
       else {
         entry.target.classList.remove('show');
       }
    });
 });
 
 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));



 let noOfCharac = 125;
 let contents = document.querySelectorAll(".content");
 contents.forEach(content => {
     //If text length is less that noOfCharac... then hide the read more button
     if(content.textContent.length < noOfCharac){
         content.nextElementSibling.style.display = "none";
     }
     else{
         let displayText = content.textContent.slice(0,noOfCharac);
         let moreText = content.textContent.slice(noOfCharac);
         content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
     }
 });
 
 function readMore(btn){
     let post = btn.parentElement;
     post.querySelector(".dots").classList.toggle("hide");
     post.querySelector(".more").classList.toggle("hide");
     btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
 }