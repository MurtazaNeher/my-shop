import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Ckeckout = ({ cart,removeFromCart }) => {
  const router = useRouter();
  const [subTotal, setSubTotal] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    console.log("reloaded");

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i][2];
    }
    setSubTotal(total);
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-medium text-center title-font text-gray-900 mb-4">
              Checkout
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Your cart details
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {subTotal === 0 ? (
              <div className="mx-auto">
                <p className="leading-relaxed  mx-auto text-4xl">
                  Cart is empty :(
                </p>
                <button
                  className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => {
                    router.push("/products");
                  }}
                >
                  See products
                </button>
              </div>
            ) : (
              cart.map((item) => {
                return (
                  <div className="p-2 w-full" key={item.id}>
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center relative">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>

                      <div className="flex justify-between w-full">
                        <span className="title-font font-medium">
                          {item[1]}
                        </span>
                        <span className="title-font font-medium text-right">
                          {"₹" + item[2] + "/-"}
                        </span>
                        <img className="w-4 top-0 right-0 absolute cursor-pointer" src="/delete-icon.svg" style={{transform:"translate(-10px,10px)"}} onClick={()=>{removeFromCart(item)}}></img>
                      </div>
                    </div>
                    <p className="leading-relaxed  mx-auto text-4xl text-right mt-5">
                      Subtotal : {subTotal}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleFormChange}
                    value={form.name}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleFormChange}
                    value={form.email}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleFormChange}
                    value={form.phone}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={handleFormChange}
                    value={form.address}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ckeckout;
