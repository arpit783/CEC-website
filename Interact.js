// var slideIndex = 1;
// showSlides(slideIndex);

// function currentSlide(n){
//     showSlides(slideIndex=n);
// }

// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("slide");
//     var thumbs = document
// }
// var x = ["samuel-oakes-Fr_XUMvQ9AU-unsplash 1","train-running-on-train-track-under-gray-sky-at-daytime-212229 1","architecture-building-business-construction-236698 1","black-and-silver-solar-panels-159397 1"];
// id = document.getElementById("slide")
// url = "url(images/"
// format = ".png"
// function changeBackground(n){
//     id = document.getElementById("slide")
//     url = "url(images/"
//     format = ".png"
//     urllib = url + x[n] + format ;
//     document.getElementById("slide").setProperty('background-image',urllib);
// }
var n;
function changeImg(n){
    var x = ["images/Background_image.png","images/Background2.png","images/Background3.png","images/Background4.png"];
    img = document.getElementById("change")
    img.src = x[n] 
    console.log(img.src)
    console.log(typeof(img.src))
}