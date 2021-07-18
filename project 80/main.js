menu_list_array = ["Veg Margherita Pizza", "chicken tandoori pizza", "veg Supreme Pizza", "paneer tikka Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_arry.lenght;i++){
    htmldata='<li>' + menu_list_arry[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
var item=document.getElementById("add_item").value;
menu_list_arry.push(item);
menu_list_arry.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_arry.lenght;i++){
    htmldata=htmldata+'<div class="cards">' + '<img scr="images//pizzaImg.png"/>' + menu_list_array[i]
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}