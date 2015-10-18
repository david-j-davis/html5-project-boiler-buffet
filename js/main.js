//(function($) { //for wordpres
/*-----  Global Variables  ------*/


// var isMobileSize = false,
// 	numberCounting = false;

/*-----  Global functions  ------*/


function isScrolledIntoView(elem) {

    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop) && (elemBottom >= docViewTop));

}


/*-----  DOM Ready functions ------*/

$(document).ready(function() {
    

});

/*-----  Scroll functions ------*/

$(window).scroll(function() {
    

    if(isScrolledIntoView($('.transastions')) && !numberCounting){

        numberCounting = true;
        //run number animation
      

        //console.log(numberCounting);

    } else if (!isScrolledIntoView($('.transastions')) && numberCounting){

        numberCounting = false;
        //console.log(numberCounting);
        //Pause stuff or do nothing

    }



});
$(window).resize(function() {

});
//})( jQuery ); //for wordpress
