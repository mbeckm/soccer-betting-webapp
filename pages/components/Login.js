import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../firebase";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("logged in");
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="border border-solid flex justify-center items-center my-10">
            <form 
                onSubmit={handleLogin} 
                className="border border-solid justify-center max-w-lg flex flex-col flex-1">
                <label name="username" className="px-2">Username</label>
                <input  
                    onChange={(e) => {setEmail(e.target.value)}} 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    className="border border-solid px-2"></input>
                <label name="password" className="px-2">Password</label>
                <input 
                    onChange={(e) => {setPassword(e.target.value)}} 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="border border-solid px-2"></input>
                <button 
                    type="submit" 
                    className="border border-solid max-w-xs bg-slate-600 text-slate-100 duration-300 hover:bg-slate-900">Login</button>
            </form>
        </div>
    )
}