import Countries from "../scripts/component/Countries.js";


export default function Home(){
    document.body.innerHTML = ""
    document.body.append(Countries())
}