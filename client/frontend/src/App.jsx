import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (e) => {
    e.preventDefault();
  // axios is a package  which is used for communication btw repositiries to install axios cmd is npm i axios
    try {
      const res = await axios.post("http://localhost:3000/",{
        email: email,
        password: password,
      });
      if (res) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  //   fetch("http://localhost:8000/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   })
  // //     .then((response) => {
  // //       if (response.status === 201) {
  // //         toast.success("Registered Successfully. Login to continue!", {
  // //           position: toast.POSITION.TOP_CENTER,
  // //         });
  // //       } else {
  // //         toast.error("User already in use. Try to login", {
  // //           position: toast.POSITION.TOP_CENTER,
  // //         });
  // //       }
  // //     })
  // //     .catch((err) => {
  // //       toast.error("An error occured try again later!", {
  // //         position: toast.POSITION.TOP_CENTER,
  // //       });-
  // //     });
  }
 
  
  return (
    <div class="h-screen bg-gradient-to-r from-violet-500 to-fuchsia p-8 ">
    <div class=" bg-purple-50  mt-[2rem] ml-[28rem] p-10 mt-[8rem] flex-col justify-center px-6 lg:px-2 rounded shadow-md max-w-md transform transition-all duration-300 hover:scale-105">
      <h2 class="text-2xl font-semibold mb-6">log into YOUR ACCOUNT</h2>
      <form id="loginForm" class="space-y-4">
        <div class="flex flex-col transition-all duration-300 transform hover:translate-x-2">
          <label for="email" class="text-sm font-medium text-gray-10">Email</label>
          <input type="email" id="email" name="email" class="px-4 py-2 border focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300"   onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div class="flex flex-col transition-all duration-300 transform hover:translate-x-2">
          <label for="password" class="text-sm font-medium text-gray-10">Password</label>
          <input type="password" id="password" name="password" class="px-4 py-2 border focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
          <div>
       <button 
       onClick={(e) => Login(e)}
       type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover ">submit</button>
          </div>
        </form>
    
         </div>
         </div>
      )
    }
  
export default App
