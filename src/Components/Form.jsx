import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
export const Notification = ""

const Form = () => {
  const data = {
    username: "",
    fullname: "",
    password: "",
    city: "",
    age: "",
    select: "",
    img: "",
    email: "",
    checked: false,
  };
  const [userData, setUseData] = useState(data);
  const [show, setShow] = useState(false);
const {username, fullname, password, city, age, select, img, email, checked} = userData
  const navigate = useNavigate();

  const handleData = (event) => {
    const { name, value, type, checked } = event.target;
    setUseData({ ...userData, [name]: type === "checkbox" ? checked : value });
  };
  console.log(userData);

  const handlesubmit = (e) => {
    e.preventDefault();
    const user = JSON.stringify(userData);
    localStorage.setItem("Buzo", user);
    sessionStorage.setItem("Buzo", user);
    navigate("/login");
  };


  return (
    <>
      <form
        onSubmit={handlesubmit}
        action=""
        className="w-full max-w h-screen flex flex-col justify-center items-center bg-gray-200"
      >
        <div className="border flex flex-col justify-center items-center px-8 py-4  italic text-x bg-white rounded-md shadow-2xl  ">
          <h1 className="text-2xl uppercase text-black font-bold mb-3 ">
            Registration
          </h1>
          <div className=" flex flex-col mb-2 w-[250px]">
            <label htmlFor="username" className="text-gray-700  mb-2">
              USERNAME:
            </label>
            <input
              name={"username"}
              value={username}
              onChange={handleData}
              required
              type="text"
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
              placeholder="Buzo"
            />
          </div>
          <div className=" flex flex-col mb-2 w-[250px]">
            <label htmlFor="username" className="text-gray-700  mb-2">
              PROFILE PICTURE
            </label>
            <input
              name={"img"}
              value={img}
              onChange={handleData}
              type="file"
              accept="image/*"
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
            />
          </div>
          <div className="w-full flex flex-col mb-1">
            <label htmlFor="username" className="text-gray-700  mb-1">
              FULL NAME:
            </label>
            <input
              value={fullname}
              onChange={handleData}
              name={"fullname"}
              required
              type="text"
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
              placeholder="Emma......"
            />
          </div>
          <div className="w-full flex flex-col mb-1">
            <label htmlFor="username" className="text-gray-700  mb-1">
              EMAIL:
            </label>
            <input
              value={email}
              onChange={handleData}
              name={"email"}
              required
              type="text"
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
              placeholder="Emma......"
            />
          </div>
          <div className="w-full flex flex-col mb-2 relative">
            <label htmlFor="username" className="text-gray-700">
              PASSWORD:
            </label>

            <input
              value={password}
              onChange={handleData}
              name={"password"}
              required
              type={show ? "text" : "password"}
              autoComplete="on"
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
              placeholder="***************"
            />
            <i
              className="absolute right-[0.6rem] top-[2rem] cursor-pointer text-xl "
              onClick={() => setShow(!show)}
            >
              {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </i>
          </div>
          <div className="w-full flex flex-col mb-1">
            <label htmlFor="username" className="text-gray-700 ">
              CITY:
            </label>
            <input
              value={city}
              onChange={handleData}
              name={"city"}
              required
              type="text"
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
              placeholder="Small villa"
            />
          </div>{" "}
          {/* <div className="w-full flex flex-col mb-1">
            <label htmlFor="username" className="text-gray-700 ">
              ZIP CODE:
            </label>
            <input
              value={userData.zipcode}
              onChange={handleData}
              name={"zipcode"}
              required
              type="text"
              className="outline-none focus-none border shadow-md p-2 appearance-none focus:outline-none "
              placeholder="56100"
            />
          </div> */}
          <div className="w-full mt-2">
            <label htmlFor="age" className="text-gray-700 pr-2">
              AGE:
            </label>
            <input
              type="number"
              value={age}
              onChange={handleData}
              required
              name={"age"}
              className="outline-none focus-none border-b"
            />
          </div>
          <div className="flex mt-2">
            <label htmlFor=" gender" className="text-gray-700 pr-2">
              Gender:
            </label>
            <select
              name={"select"}
              required
              value={select}
              onChange={handleData}
            >
              <option value="">Choose ur gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="confuse">Confuse</option>
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="agreement">Agree to teams </label>
            <input
              type="checkbox"
              value={checked}
              required
              name={"checked"}
              onChange={handleData}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-1 border bg-slate-300 rounded text-xl hover:bg-transparent hover:text-lg mb-3"
          >
            Register
          </button>
          <p className="text-sm capitalize mt-2 ">
            already have an account?
            <Link to={"/login"} className="text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
