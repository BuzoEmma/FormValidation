import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";

const Dashboard = () => {
  const elements = localStorage.getItem("Buzo");
  const element = JSON.parse(elements);
  console.log(element);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("Buzo");

    navigate("/");
  };
  const [set, setSet] = useState(false);

  return (
    <>

      <div className="flex flex-col  bg-white">
        <div className=" flex flex-row justify-between items-center border-none italic text-x   shadow-lg px-6 py-2 rounded-br-lg rounded-bl-lg  ">
          <div>
            <h1 className="text-4xl">BUZO</h1>
          </div>
          {/* <h2 className="capitalize">click on the image to view your profile</h2> */}
          <div className="flex flex-col justify-center items-center w-12 h-12 pt-3 border rounded-full  shadow-md ">
            <div
              className="flex flex-col cursor-pointer  items-center justify-center"
              onClick={() => setSet(!set)}
            >
              <p className="-mt-4  cursor-pointer">
                <img
                  src={ profile}
                  alt=""
                  className="w-6 h-8 flex justify-center items-center "
                />
              </p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div
            className={
              set
                ? "flex flex-col md:w-[50%]  justify-center items-center fixed top-0 right-0 w-full  border py-4 italic text-x bg-gray-50 rounded-md shadow-2xl"
                : "hidden"
            }
          >
            <div className="flex flex-row justify-between items-center w-full px-10  py-4">
              <p
                className=" cursor-pointer hover:border-b hover:border-blue-300 text-2xl italic"
                onClick={logout}
              >
                Logout
              </p>
              <i onClick={() => setSet(!set)} className="text-2xl">
                <GrClose />
              </i>
            </div>
            <div className="py-4 w-full flex flex-col ">
              <p className="flex justify-center items-center my-4 text-3xl">
                My Profile
              </p>
              <hr />
              <div className="py-3 text-2xl pl-10">{element.fullname}</div>
              <div className=" text-xl pl-10">
                <p className="py-3"> Username: {element.username}</p>
                <p>Email: {element.email}</p>
              </div>
              <div className="flex gap-6 text-xl pl-10 py-3">
                <p>Gender: {element.select}</p>
                <p> Age: {element.age}</p>

                
              </div>

              <div className="flex gap-6 text-xl pl-10 ">
                <p> City: {element.city}</p>
     
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className="flex flex-col justify-center items-center w-full h-screen text-4xl p-6">
        <h1>You're Welcome</h1> <br />
        {/* <h1>Bless U</h1> */}
      </div>
     
    </>
  );
};

export default Dashboard;
