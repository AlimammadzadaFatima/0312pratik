let nav = document.querySelectorAll(".nav-item");
let navArr = Array.from(nav);
function Delete (){
    navArr.forEach(element=>{
        element.classList.remove("active")
    })
}
navArr.forEach(element=>{
element.addEventListener("click",function()
{
     Delete();
     element.classList.add("active");
})
})
