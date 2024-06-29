"use client";
import React, { useState } from "react";

export default function ContactForm() {
 
  

  return (
    <div id='Contact' className="sm:grid grid-cols-2 bg-white rounded-xl text-xl shadow-lg p-8">
      <form action="" method="POST" className="flex flex-col">
        <div className="text-3xl">Send us a message!</div>
      
        <div className="flex">
          <label for="First Name">First Name:</label>
          <input className="w-1/2"
            type="text"
            placeholder="John"
            required
          />
          <label for="Last Name">Last Name:</label>
          <input className="w-1/2"
            type="text"
            placeholder="Doe"
            required
          />
        </div>
        
        
        <div className="flex">
          <label for="Email">Email:</label>
          <input className="w-1/2"
            type="email"
            placeholder="mail@email.com"
            required
          />
          <label for="phone">Phone #:</label>
          <input className="w-1/2"
            type="tel"
            placeholder="000-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
      
        <input className="w-1/2"
          type="checkbox"
        /> 
        <input className="w-1/2"
          type="checkbox"
        /> 
        <label>Tell us about your project</label>
        <textarea className="min-h-[150px]"
         placeholder='Message'
        ></textarea>
        <button className="bg-red-500" type="submit">Submit</button>
      </form>

<div className="">
<h3>Contact Information</h3>
<p>1 &#x28;805&#x29; 406-9107</p>
<p>email@example.com</p>
<p>123 street, City, Country</p>


</div>


    </div>
  );
}
