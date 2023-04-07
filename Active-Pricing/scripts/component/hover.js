
import comket from "../../comket/html.js";



export default function hover(){
    let hover = comket.div({class:"hover", 
                            children:[
                                comket.div({class:"user",
                                children:[
                                    comket.p({text:"5 Users"}),
                                    comket.p({text:"100 Users"}),
                                    comket.div({class:"after" , children:[comket.h1({text:"",class:"chingValue-1"})]})
                                ]
                            }),
                                comket.div({class:"GB",
                                children:[
                                    comket.p({text:"20 GB"}),
                                    comket.p({text:"200 GB"}),
                                    comket.div({class:"after", children:[comket.h1({text:"",class:"chingValue-2"})]})
                                ]
                            }),
                                comket.div({class:"project",
                                children:[
                                    comket.p({text:"1 project"}),
                                    comket.p({text:"50 project"}),
                                    comket.div({class:"after" , children:[comket.h1({text:"",class:"chingValue-3"})]})
                                ] 
                            }),
                            ]
})
    return hover
}
