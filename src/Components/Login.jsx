import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const data = {
  //   username: "",
  //   password: "",
  // }; 
  
  
  // const [passData, setPassData] = useState(data);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetdata] = useState({});
  const navigate = useNavigate();
  

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setPassData({ ...passData, [name]: value });
  // };

  useEffect(() => {
    const Registered = localStorage.getItem("Buzo");
    const userInforr = JSON.parse(Registered);
    setGetdata(userInforr);
    console.log(getData);
  }, []);

  const handleSubmits = (e) => {
    e.preventDefault();
    getData?.username === username && getData?.password === password
      ? navigate("/dashboard")
      : alert("Details are incorrect");
  };
  return (
    <div>
    
      <form
        onSubmit={handleSubmits}
        action="login"
        className="w-full  h-screen flex flex-col justify-center items-center bg-gray-300"
      >
        <div className="border flex flex-col justify-center items-center p-8 gap-4 italic text-x bg-white rounded-md shadow-2xl  ">
          <h2 className="text-2xl uppercase text-black font-bold mb-3 ">
            Login
          </h2>
          <div className=" flex flex-col mb-2 w-[250px]">
            <label htmlFor="username" className="text-gray-700  mb-2">
              UserName
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
            />
          </div>
          <div className=" flex flex-col mb-2 w-[250px] relative">
            <label htmlFor="password" className="text-gray-700  mb-2">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              autoComplete={"on"}
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
            />
            <i
              className="absolute right-[0.6rem] top-[2.5rem] cursor-pointer text-2xl "
              onClick={() => setShow(!show)}
            >
              {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </i>
          </div>
          <button
            type="submit"
            className="px-6 py-2 border bg-slate-300 rounded-lg text-xl hover:bg-transparent hover:text-lg "
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
