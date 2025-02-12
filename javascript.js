const nevegation = document.querySelector(".responsive-nevegation");
const burger = document.querySelector(".burger");

burger.addEventListener("click", ()=>{
    // nevegation.classList.add("transform");

    if(nevegation.classList.contains("transform")){
        nevegation.classList.remove("transform");
    }
    else{
        nevegation.classList.add("transform");
    }
    
})
// burger.addEventListener("click", ()=>{
//     resp_nevegation.classList.add = "transform-proper";
// })
