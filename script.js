const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",() => {
    //toggle mobile menu dikhega
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click",() => menuOpenButton.click());
    //toggle mobile menu close hoga
    




