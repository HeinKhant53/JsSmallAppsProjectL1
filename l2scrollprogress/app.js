var getprogressbar = document.getElementById('progress-bar');

//jQuery --> $(document).scroll();
window.onscroll = function(){
    scrollpoint();
};

function scrollpoint(){
    // scrollPoint =  scrollTop * 100 / (documentHeight - windowHeight)

    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);

    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);

    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    var getcalcheight = getscrollheight - getclientheight;
    // console.log(getcalcheight);

    // var getfinal = Math.round((getscrolltop * 100)/ getcalcheight);
    var getfinal = Math.round((getscrolltop/ getcalcheight)*100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`
};


// printer
function printme(){
    window.print();
}