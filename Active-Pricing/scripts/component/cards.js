import comket from "../../comket/html.js";



export default function cards(){
    let cards = comket.div({class:"cards", 
                            children:[
                                        comket.div({class:"card-1",
                                                    onmouseover: function(){
                                                    let chingValue1 = document.querySelector(".chingValue-1")
                                                    let chingValue2 = document.querySelector(".chingValue-2")
                                                    let chingValue3 = document.querySelector(".chingValue-3")
                                                    chingValue1.style.width = "5%"
                                                    chingValue2.style.width = "5%"
                                                    chingValue3.style.width = "5%"
                                                    },
                                                        onmouseout: function(){
                                                        let chingValue1 = document.querySelector(".chingValue-1")
                                                        let chingValue2 = document.querySelector(".chingValue-2")
                                                        let chingValue3 = document.querySelector(".chingValue-3")
                                                        chingValue1.style.width = "0%"
                                                        chingValue2.style.width = "0%"
                                                        chingValue3.style.width = "0%"
                                                        },
                                            children:[comket.h2({text:"Basic",}) , comket.h1({text:"$5"}) , comket.p({text:"per month"}),
                                                        comket.h3({text:"" , class:"val"}), comket.h3({text:"" , class:"val", style:{width:"120px"}}), comket.h3({text:"" , class:"val", style:{width:"140px"}}), comket.h3({text:"" , class:"val" , style:{width:"100px"}}) ],
                                                    }),
                                                
                                    
                                comket.div({class:"card-2",
                                            onmouseover: function(){
                                                let chingValue1 = document.querySelector(".chingValue-1")
                                                let chingValue2 = document.querySelector(".chingValue-2")
                                                let chingValue3 = document.querySelector(".chingValue-3")
                                                chingValue1.style.width = "30%"
                                                chingValue2.style.width = "70%"
                                                chingValue3.style.width = "50%"
                                                },
                                                    onmouseout: function(){
                                                    let chingValue1 = document.querySelector(".chingValue-1")
                                                    let chingValue2 = document.querySelector(".chingValue-2")
                                                    let chingValue3 = document.querySelector(".chingValue-3")
                                                    chingValue1.style.width = "0%"
                                                    chingValue2.style.width = "0%"
                                                    chingValue3.style.width = "0%"
                                                    },
                                            children:[comket.h2({text:"pro",}) , comket.h1({text:"$10"}) , comket.p({text:"per month"}),
                                                        comket.h3({text:"" , class:"val"}), comket.h3({text:"" , class:"val", style:{width:"120px"}}), comket.h3({text:"" , class:"val", style:{width:"140px"}}), comket.h3({text:"" , class:"val" , style:{width:"100px"}}) ]
                            }),
                                comket.div({class:"card-3",
                                            onmouseover: function(){
                                                let chingValue1 = document.querySelector(".chingValue-1")
                                                let chingValue2 = document.querySelector(".chingValue-2")
                                                let chingValue3 = document.querySelector(".chingValue-3")
                                                chingValue1.style.width = "100%"
                                                chingValue2.style.width = "100%"
                                                chingValue3.style.width = "100%"
                                                },
                                                    onmouseout: function(){
                                                    let chingValue1 = document.querySelector(".chingValue-1")
                                                    let chingValue2 = document.querySelector(".chingValue-2")
                                                    let chingValue3 = document.querySelector(".chingValue-3")
                                                    chingValue1.style.width = "0%"
                                                    chingValue2.style.width = "0%"
                                                    chingValue3.style.width = "0%"
                                                    },
                                            children:[comket.h2({text:"premium",}) , comket.h1({text:"$20"}) , comket.p({text:"per month"}),
                                                        comket.h3({text:"" , class:"val"}), comket.h3({text:"" , class:"val", style:{width:"120px"}}), comket.h3({text:"" , class:"val", style:{width:"140px"}}), comket.h3({text:"" , class:"val" , style:{width:"100px"}}) ]
                            }),
                            ]
})

return cards 
}












