// This script will add loading bar on the top of HTML document on every link click
var links = document.getElementsByTagName("a"),
i = 0, l = links.length,
html = document.body;

for(i<l;i++) {
    links[i].addEventListener("click",function(){
        html.className = "page-loading";
    },false);
}
