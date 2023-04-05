
import comket from "../../comket/html.js";


export default function Users(){
    let users = comket.div({
        class:"users",
        children:[
            top(),
            Cards(),
            Bottom()
        ]
    })
    return users
}


function top(){
    let top = comket.div({
        class:"top",
        children:[
            comket.div({
                class:"text",
                children:[
                    comket.h1({text:"Select user"}),
                    comket.p({text:"Add user to the dashboard so they can manage the content"}),
                ]
            }),
            comket.button({text:"Select all" , onclick:selectAll})
        ]
    })
    return top
}
let z = 0

function selectAll(e){
    if(e.target.innerHTML == "close all"){
        e.target.innerHTML = "Select all"
        z = 0
        document.getElementById("number").innerHTML = z
        document.querySelectorAll(".icon")[0].style.display = "none"
        document.querySelectorAll(".icon")[1].style.display = "none"
        document.querySelectorAll(".icon")[2].style.display = "none"
        document.querySelectorAll(".icon")[3].style.display = "none"
        document.querySelectorAll(".icon")[4].style.display = "none"
        document.querySelectorAll(".icon")[5].style.display = "none"
        document.querySelectorAll(".icon")[6].style.display = "none"

    }
    else{
        e.target.innerHTML = "close all"
        z = 6
        document.getElementById("number").innerHTML = z
        document.querySelectorAll(".icon")[0].style.display = "flex"
        document.querySelectorAll(".icon")[1].style.display = "flex"
        document.querySelectorAll(".icon")[2].style.display = "flex"
        document.querySelectorAll(".icon")[3].style.display = "flex"
        document.querySelectorAll(".icon")[4].style.display = "flex"
        document.querySelectorAll(".icon")[5].style.display = "flex"
        document.querySelectorAll(".icon")[6].style.display = "flex"
    }
}

function Cards(){
    let cards = comket.div({
        class:"cards",
        children:[

            comket.div({
                
                class:"card", 
                children:[ 
                    comket.img({class:"icon" , src:"media/check-mark.png"}),
                    comket.div({
                        class:"up",
                        onclick:select,
                    }),
                    comket.img({src:"media/yousef.jpg"}),
                    comket.div({
                        children:[
                            comket.h2({text:"Yousef-Eid"}),
                            comket.p({text:"Web Developer"}),
                        ]}),]}),

                        comket.div({
                            
                            class:"card",
                            children:[
                    comket.img({class:"icon" , src:"media/check-mark.png"}),
                                comket.div({
                                    class:"up",
                                    onclick:select,
                                }),
                                comket.img({src:"media/yousef.jpg"}),
                                comket.div({
                                    children:[
                                        comket.h2({text:"Yousef-Eid"}),
                                        comket.p({text:"Web Developer"}),
                                    ]}),]}),

                                    comket.div({
                                        class:"card",
                                        children:[
                                            comket.img({class:"icon" , src:"media/check-mark.png"}),
                                            comket.div({
                                                class:"up",
                                                onclick:select,
                                            }),
                                            comket.img({src:"media/yousef.jpg"}),
                                            comket.div({
                                                children:[
                                                    comket.h2({text:"Yousef-Eid"}),
                                                    comket.p({text:"Web Developer"}),
                                                ]}),]}),

                                                comket.div({
                                                    class:"card",
                                                    children:[
                                                        comket.img({class:"icon" , src:"media/check-mark.png"}),
                                                        comket.div({
                                                            class:"up",
                                                            onclick:select,
                                                        }),
                                                        comket.img({src:"media/yousef.jpg"}),
                                                        comket.div({
                                                            children:[
                                                                comket.h2({text:"Yousef-Eid"}),
                                                                comket.p({text:"Web Developer"}),
                                                            ]}),]}),

                                                            comket.div({
                                                                class:"card",
                                                                children:[
                                                                    comket.img({class:"icon" , src:"media/check-mark.png"}),
                                                                    comket.div({
                                                                        class:"up",
                                                                        onclick:select,
                                                                    }),
                                                                    comket.img({src:"media/yousef.jpg"}),
                                                                    comket.div({
                                                                        children:[
                                                                            comket.h2({text:"Yousef-Eid"}),
                                                                            comket.p({text:"Web Developer"}),
                                                                        ]}),]}),

                                                                        comket.div({
                                                                            class:"card",
                                                                            children:[
                                                                                comket.img({class:"icon" , src:"media/check-mark.png"}),
                                                                                comket.div({
                                                                                    class:"up",
                                                                                    onclick:select,
                                                                                }),
                                                                                comket.img({src:"media/yousef.jpg"}),
                                                                                comket.div({
                                                                                    children:[
                                                                                        comket.h2({text:"Yousef-Eid"}),
                                                                                        comket.p({text:"Web Developer"}),
                                                                                    ]}),]}),

        ]
    })
    return cards
}

function Bottom(){
    let bottom = comket.div({
        class:"bottom",
        children:[
            comket.p({text:"You will add"}),
            comket.p({text:z , class:"number" , id:"number"}),
            comket.p({text:"users"}),
            comket.button({text:"Next Step"}),
        ]
    })
    return bottom
}

function select(e){
    if(e.target.style.width == "99%"){
        z--
        e.target.style.width = "100%"
        e.target.parentElement.children[0].style.display = "none"
        document.getElementById("number").innerHTML = z
    }
    else if(e.target.parentElement.children[0].style.display == "flex"){
        z--
        e.target.parentElement.children[0].style.display = "none"
        document.getElementById("number").innerHTML = z

    }
    
    else{
        z++
        e.target.style.width = "99%"
        e.target.parentElement.children[0].style.display = "flex"
        document.getElementById("number").innerHTML = z
    }
}















