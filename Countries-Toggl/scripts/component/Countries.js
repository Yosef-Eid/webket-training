import comket from "../../comket/html.js";


export default function Countries(){
    let countries = comket.div({
        class:"countries",
        children:[
            Total(),
            Other(),
        ]
    })
    return countries
}

function Total(){
    let total = comket.div({
        class:"total",
        onclick:open,
        children:[
            comket.img({src:"Countries-Toggl/medea/22.png"}),
            comket.p({text:"Choose a country"}),
            comket.Element("ion-icon",{name:"chevron-down-outline" , class:"down"}),
        ]
    })
    return total
}

function open(){
    let other = document.querySelector(".other")
    let down = document.querySelector(".down")
    if(other.style.height == "470px"){
        other.style.height = "0px"
        down.name = "chevron-down-outline"
    }
    else{
        other.style.height = "470px"
        down.name = "chevron-up-outline"
    }
}


function Other(){
    let other = comket.div({
        class:"other",
        children:[
            comket.div({
                onclick:change,
                class:"algeria",
                children:[
                    comket.img({src:"Countries-Toggl/medea/33.webp"}),
                    comket.p({text:"Algeria"}),
                ]}),
                comket.div({
                    onclick:change,
                    class:"brazil",
                    children:[
                        comket.img({src:"Countries-Toggl/medea/brazil.png"}),
                        comket.p({text:"Brazil"}),
                    ]}),
                    comket.div({
                        onclick:change,
                        class:"canada",
                        children:[
                            comket.img({src:"Countries-Toggl/medea/canada.png"}),
                            comket.p({text:"Canada"}),
                        ]}),
                        comket.div({
                            onclick:change,
                            class:"china",
                            children:[
                                comket.img({src:"Countries-Toggl/medea/china.png"}),
                                comket.p({text:"China"}),
                            ]}),
                            comket.div({
                                onclick:change,
                                class:"egypt",
                                children:[
                                    comket.img({src:"Countries-Toggl/medea/egypt.png"}),
                                    comket.p({text:"Egypt"}),
                                ]}),
                                comket.div({
                                    onclick:change,
                                    class:"japan",
                                    children:[
                                        comket.img({src:"Countries-Toggl/medea/japan.png"}),
                                        comket.p({text:"Japan"}),
                                    ]}),
        ]
    })
    return other
}

function change(e){
    let total = document.querySelector(".total")
    total.children[0].src = e.target.children[0].src
    total.children[1].innerHTML = e.target.children[1].innerHTML
    let other = document.querySelector(".other")
    other.style.height = "0px"
    let down = document.querySelector(".down")
    down.name = "chevron-down-outline"
}



















