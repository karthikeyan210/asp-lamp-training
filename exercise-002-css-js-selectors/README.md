/**
 * JS selectors for exercise1
 */
var i = "";
var th = document.querySelector(".simple").rows[0];
th.style.fontWeight = "bold";
var rows = document.querySelector(".complex").rows;
for (i = 0; i<rows.length; i++) {
    rows[i].style.backgroundColor = "grey";
    i=i+1;
}



/**
 * JS selectors for exercise2
 */
var firstPara = document.querySelector("p");
firstPara.style.fontWeight = "bold";



/**
 * JS selectors for exercise3
 */
var paragraphs = document.querySelectorAll("p");
for (var i =0; i < paragraphs.length; i++) {
    var result = paragraphs[i].textContent.split(" ");
    var len = result.length;
    var color = result[len-1];
    paragraphs[i].style.color = color;
}



/**
 * JS selectors for exercise4
 */
var link = document.querySelectorAll("a");
for (var i =0; i < link.length; i++) {
    linkContent = link[i].textContent.trim();
    if (linkContent == "Disclaimer") {
        link[i].style.color = "red";
    } else {
        link[i].style.color = "green";
    }
}



/**
 * JS selectors for exercise5
 */
var link = document.querySelectorAll("a");
for (var i =0; i < link.length; i++) {
    hrefText = link[i].href;
    result = hrefText.match(/http:/);
    if (result == "http:") {
        link[i].style.color = "red";
    } else {
        link[i].style.color = "green";
    }
}