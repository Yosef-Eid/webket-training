import cards from "../scripts/component/cards.js";
import hover from "../scripts/component/hover.js";





export default function home(){
    document.body.innerHTML = ""
    document.body.append(cards(),hover())
}