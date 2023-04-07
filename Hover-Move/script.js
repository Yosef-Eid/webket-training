

let div = document.getElementById("hover")
let h = document.getElementById("h")

div.addEventListener("click" , (e) =>{
    h.style.height = e.y +"px"

    div.addEventListener("mousemove" ,(e) => {
        console.log();
        h.style.height = e.y +"px"
        h.style.filter = plur()
    
    })
})


