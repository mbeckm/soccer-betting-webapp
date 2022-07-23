import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-green-900 font-extrabold text-5xl text-center">Sports Betting App</h1>
      <Signup />
      <Login />
    </div>
  )
}
