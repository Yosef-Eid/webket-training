import comket from "../../comket/html.js";


export default function Filter(){
let filter = comket.div({
    class:"filter",
    children:[
        Title(),
        Nav(),
        CardsAll(),
    ]
})
return filter
}


function Title(){
    let title = comket.div({
        class:"title",
        children:[
            comket.h1({text:"Projects Section"})
        ]
    })
    return title
}


function Nav(){
    let nav = comket.div({
        class:"nav",
        children:[
            comket.p({text:"All"  ,          onclick:All}),
            comket.p({text:"Web Design" ,    onclick:Web}),
            comket.p({text:"Front End" ,     onclick:Front}),
            comket.p({text:"BAck End" ,      onclick:Back}),
            comket.p({text:"Full Stack" ,    onclick:Full}),
            comket.p({text:"Stack Over" ,    onclick:Stack}),
        ]
    })
    return nav
}

function All(e){
    document.querySelector(".cards").innerHTML = ""
    document.querySelector(".cards").append(CardsAll())
    e.target.style.borderBottom = "3px solid black"
    e.target.parentElement.children[1].style.border = "0"
    e.target.parentElement.children[2].style.border = "0"
    e.target.parentElement.children[3].style.border = "0"
    e.target.parentElement.children[4].style.border = "0"
    e.target.parentElement.children[5].style.border = "0"
}

function Web(e){
    document.querySelector(".cards").innerHTML = ""
    document.querySelector(".cards").append(CardsWeb())
    e.target.style.borderBottom = "3px solid black"
    e.target.parentElement.children[0].style.border = "0"
    e.target.parentElement.children[2].style.border = "0"
    e.target.parentElement.children[3].style.border = "0"
    e.target.parentElement.children[4].style.border = "0"
    e.target.parentElement.children[5].style.border = "0"

}

function Front(e){
    document.querySelector(".cards").innerHTML = ""
    document.querySelector(".cards").append(CardsFront())
    e.target.style.borderBottom = "3px solid black"
    e.target.parentElement.children[1].style.border = "0"
    e.target.parentElement.children[0].style.border = "0"
    e.target.parentElement.children[3].style.border = "0"
    e.target.parentElement.children[4].style.border = "0"
    e.target.parentElement.children[5].style.border = "0"
}

function Back(e){
    document.querySelector(".cards").innerHTML = ""
    document.querySelector(".cards").append(CardsBack())
    e.target.style.borderBottom = "3px solid black"
    e.target.parentElement.children[1].style.border = "0"
    e.target.parentElement.children[2].style.border = "0"
    e.target.parentElement.children[0].style.border = "0"
    e.target.parentElement.children[4].style.border = "0"
    e.target.parentElement.children[5].style.border = "0"
}

function Full(e){
    document.querySelector(".cards").innerHTML = ""
    document.querySelector(".cards").append(CardsFull())
    e.target.style.borderBottom = "3px solid black"
    e.target.parentElement.children[1].style.border = "0"
    e.target.parentElement.children[2].style.border = "0"
    e.target.parentElement.children[3].style.border = "0"
    e.target.parentElement.children[0].style.border = "0"
    e.target.parentElement.children[5].style.border = "0"
}

function Stack(e){
    document.querySelector(".cards").innerHTML = ""
    document.querySelector(".cards").append(CardsStack())
    e.target.style.borderBottom = "3px solid black"
    e.target.parentElement.children[1].style.border = "0"
    e.target.parentElement.children[2].style.border = "0"
    e.target.parentElement.children[3].style.border = "0"
    e.target.parentElement.children[4].style.border = "0"
    e.target.parentElement.children[0].style.border = "0"
}


function CardsAll(){
    let cards = comket.div({
        class:"cards",
        children:[
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/1.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/2.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/3.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/4.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/5.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/6.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/7.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/8.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/9.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                    
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/2.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),

                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/3.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                    comket.div({
                        class:"card",
                        children:[
                            comket.img({src:"media/7.png"}),
                            comket.h2({text:"Sign in to smarix"}),
                            comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                            comket.button({text:"View Project"}),
                        ]}),
        ]
    })
    return cards
}
function CardsWeb(){
    let cards = comket.div({
        class:"cards",
        children:[
            
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/2.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/3.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/5.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/1.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/7.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/3.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                    comket.div({
                        class:"card",
                        children:[
                            comket.img({src:"media/6.png"}),
                            comket.h2({text:"Sign in to smarix"}),
                            comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                            comket.button({text:"View Project"}),
                        ]}),

                        comket.div({
                            class:"card",
                            children:[
                                comket.img({src:"media/4.png"}),
                                comket.h2({text:"Sign in to smarix"}),
                                comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                                comket.button({text:"View Project"}),
                            ]}),
            
        ]
    })
    return cards
}
function CardsFront(){
    let cards = comket.div({
        class:"cards",
        children:[
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/3.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/4.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/7.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/5.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
                
                    
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/2.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),

                
                    comket.div({
                        class:"card",
                        children:[
                            comket.img({src:"media/7.png"}),
                            comket.h2({text:"Sign in to smarix"}),
                            comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                            comket.button({text:"View Project"}),
                        ]}),
        ]
    })
    return cards
}
function CardsBack(){
    let cards = comket.div({
        class:"cards",
        children:[
            
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/3.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/4.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/5.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),

            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/7.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/8.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),

                        comket.div({
                            class:"card",
                            children:[
                                comket.img({src:"media/1.png"}),
                                comket.h2({text:"Sign in to smarix"}),
                                comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                                comket.button({text:"View Project"}),
                            ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/9.png"}),
                                    comket.h2({text:"Sign in to smarix"}),
                                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                                    comket.button({text:"View Project"}),
                                ]}),
                            
                        comket.div({
                            class:"card",
                            children:[
                                comket.img({src:"media/2.png"}),
                                comket.h2({text:"Sign in to smarix"}),
                                comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                                comket.button({text:"View Project"}),
                            ]}),
        ]
    })
    return cards
}
function CardsFull(){
    let cards = comket.div({
        class:"cards",
        children:[
            
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/2.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/3.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
            
            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/5.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/1.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/7.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/3.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                    comket.div({
                        class:"card",
                        children:[
                            comket.img({src:"media/6.png"}),
                            comket.h2({text:"Sign in to smarix"}),
                            comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                            comket.button({text:"View Project"}),
                        ]}),

                        comket.div({
                            class:"card",
                            children:[
                                comket.img({src:"media/4.png"}),
                                comket.h2({text:"Sign in to smarix"}),
                                comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                                comket.button({text:"View Project"}),
                            ]}),
            
        ]
    })
    return cards
}

function CardsStack(){
    let cards = comket.div({
        class:"cards",
        children:[

            comket.div({
                class:"card",
                children:[
                    comket.img({src:"media/8.png"}),
                    comket.h2({text:"Sign in to smarix"}),
                    comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                    comket.button({text:"View Project"}),
                ]}),
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/9.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                    
                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/2.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),

                comket.div({
                    class:"card",
                    children:[
                        comket.img({src:"media/3.png"}),
                        comket.h2({text:"Sign in to smarix"}),
                        comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                        comket.button({text:"View Project"}),
                    ]}),
                    comket.div({
                        class:"card",
                        children:[
                            comket.img({src:"media/7.png"}),
                            comket.h2({text:"Sign in to smarix"}),
                            comket.p({text:"Lorem ipsum dolor sit amet con..."}),
                            comket.button({text:"View Project"}),
                        ]}),
        ]
    })
    return cards
}