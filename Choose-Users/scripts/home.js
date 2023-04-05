
import Users from "../scripts/component/users.js";

export default function Home(){
    document.body.innerHTML = ""
    document.body.append(Users())
}