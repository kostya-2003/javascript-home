"Use strict";

const btn = document.querySelector("button");
const mobileMenu = document.querySelector(".mobile_menu");
const menuList = document.querySelector(".mobile_menu > ul");

btn.addEventListener("click", () => {
    mobileMenu.style.cssText = `
        width: 100%;
        height: 100vh;
    `,
    menuList.style.cssText =   `
        margin: auto;
        left: 0;
        right: 0;
        opacity: 1;
    `
})

mobileMenu.addEventListener("click", (e) => {
    mobileMenu.style.cssText = `
        width: 0;
    `,
    menuList.style.cssText =   `
        right: -100%;
        opacity: 0;
    `
    if(e.target.nodeName === "UL"){
        mobileMenu.style.cssText = `
        width: 100%;
        height: 100vh;
        `
    }
})

