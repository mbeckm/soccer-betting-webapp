import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../firebase";

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignup(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=> {
                console.log("You are registered")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
            <div>
                <label name="username">Email</label>
                <input onChange={(e) => {setEmail(e.target.value)}} type="text" name="username" placeholder="Password"></input>
            </div>
            <div>
                <label name="password">Password</label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" placeholder="Password"></input>
            </div>
                <button type="submit">Sign Up</button>

        </form>
    </div>
  )
}
