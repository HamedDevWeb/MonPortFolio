const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab (tabname) {
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
   
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    console.log(tabcontent)
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.querySelector("#sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
