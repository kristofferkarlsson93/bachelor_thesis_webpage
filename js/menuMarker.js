/**
 * Created by Kristoffer on 2017-04-05.
 */


window.onscroll = function () {
    var menuItems = document.getElementsByClassName("menuItem");
    var noPages = document.getElementsByClassName("page").length + 2;
    var height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var totalHight = height * noPages;
    var pageHeight = totalHight / noPages;
    for(var i = 0; i < menuItems.length; i++) {
        menuItems[i].style.fontWeight = "normal";
    }
    if(pageYOffset < pageHeight && !(pageYOffset > pageHeight)) {
        menuItems[0].style.fontWeight = "bold";
        current = menuItems[0];
    }else if(pageYOffset > pageHeight && pageYOffset < pageHeight*2) {
        menuItems[1].style.fontWeight = "bold";
        current = menuItems[1];
    }else if (pageYOffset > pageHeight*2 && pageYOffset < pageHeight*3){
        menuItems[2].style.fontWeight = "bold";
        current = menuItems[2];
    }else if (pageYOffset > pageHeight*3){
        menuItems[3].style.fontWeight = "bold";
        current = menuItems[3];
    }/*else if (pageYOffset > pageHeight*5){
        menuItems[4].style.fontWeight = "bold";
        current = menuItems[4];
    }*/
}