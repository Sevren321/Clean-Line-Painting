"use client";
import React from "react";

export default function ContactForm() {
  return (
    <div
      id="Contact"
      className="flex flex-col md:grid md:grid-cols-2 bg-base  text-xl  p-8 h-full"
    >
      <div className="bg-text container shadow-lg rounded-xl  min-h-[500px] lg:max-w-[700px] ">
        <form action="" method="POST" className=" ">
          <div className="text-4xl font-bold p-3 pl-5">Send us a message!</div>

          <div className="pl-7 pr-7">
            <div className="xl:grid xl:grid-cols-2">
              <div className="">
                <label for="First Name" className="block mt-5">
                  First Name:
                </label>
                <input
                  className="border block p-1 w-52 "
                  type="text"
                  placeholder="John"
                  required
                />
              </div>

              <div className="">
                <label for="Last Name" className="block mt-5">
                  Last Name:
                </label>
                <input
                  className="border p-1  w-52"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>

              <div className="">
                <label for="Email" className="block mt-5">
                  Email:
                </label>
                <input
                  className="border p-1 w-52"
                  type="email"
                  placeholder="mail@email.com"
                  required
                />
              </div>

              <div className="">
                <label for="phone" className="block mt-5">
                  Phone #:
                </label>
                <input
                  className="border p-1 block max-w-40"
                  type="tel"
                  placeholder="000-000-0000"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </div>
            </div>

            <div className="">
              <input className="border p-1 mt-8 " type="checkbox" />
              <label className="ml-2">Interior</label>
              <input className="border p-1 ml-10 i" type="checkbox" />
              <label className="ml-2">Exterior</label>
            </div>

            <label className="block mt-5">Tell us about your project</label>
            <textarea
              className="min-h-64 min-w-full border "
              placeholder="Message"
            ></textarea>

            <input
              className="border bg-alt mt-9 w-full mb-5 h-10"
              type="submit"
            />
          </div>
        </form>
      </div>

      <div className="bg-text flex flex-col rounded-xl h-full w-full  min-h-[500px]">
        <h3 className="font-extrabold text-4xl p-3 pl-5">
          Contact Information
        </h3>

        <div className="flex flex-col justify-center h-full items-center"> 
          <p className="">1 &#x28;805&#x29; 406-9107</p>
          <p className="">email@example.com</p>
          <p className="">123 street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
