
//Javascript for tab navigation horizontal scroll buttons

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = tabMenu.scrollLeft;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}


btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    IconVisibility();
});


btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    IconVisibility();
});







//Javascript to make the tab navigation draggable

//Javascript to view tab contents on click tab buttons

