var slides = document.getElementsByClassName('carousel-item');
// console.log(slides); //HTML Collection (3)

var dots = document.querySelectorAll('.dot');
// console.log(dots);  //NodeList (3)

var currslide = 1;  //start carousel item


//Previous btn
document.getElementById('prev').addEventListener('click',function(){
    carousel(currslide -= 1);
});

//Next btn
document.getElementById('next').addEventListener('click',function(){
    carousel(currslide += 1);
});

//dots ko loop lot
for(var q=0; q < dots.length; q++){
    dots[q].addEventListener('click',function(){
        // console.log(this.getAttribute("data-bs-slide-to"));

        currslide = this.getAttribute("data-bs-slide-to");
        carousel(currslide); 

    });
}

carousel(currslide);
function carousel(slidenum){

    //all carousel-items ko display none lot
    for(var x=0; x<slides.length; x++){
        slides[x].style.display = 'none';
    }

    for(var y=0; y<dots.length; y++){
        // dots[y].classList.remove("active");
        // dots[y].className = "dot";
        dots[y].className = dots[y].className.replace("active","");
    }


    //result for currslides 1 to 3 & 3 to 1 (4 to 1)  (0 to 4)
    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }
    // console.log(currslide);

    slides[currslide-1].style.display = 'block';
    // dots[currslide-1].className = "dot active";
    // dots[currslide].className += " active";
    dots[currslide].classList.add('active');

}