const burger = document.getElementById("burger");

const items = document.getElementById("items");

burger.addEventListener("click", function(){
    if (items.classList.contains("display-nav")){
        items.classList.remove("display-nav");
    }else{
        items.classList.add("display-nav");
    }
}
);