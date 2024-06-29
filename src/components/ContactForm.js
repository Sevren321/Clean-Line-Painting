"use client";
import React, { useState } from "react";

export default function ContactForm() {
 
  

  return (
    <div id='Contact' className="bg-white rounded-xl shadow-lg p-8">
      <form action="" method="POST" className="flex flex-col">
        <div className="">Send us a message!</div>
      
        <label for="First Name">First Name:</label>
        <input
          type="text"
          placeholder="John"
          required
        />
        <label for="Last Name">Last Name:</label>
        <input
          type="text"
          placeholder="Doe"
          required
        />
        <label for="Email">Email:</label>
        <input
          type="email"
          placeholder="mail@email.com"
          required
        />
        <label for="phone">Phone #:</label>
        <input
          type="tel"
          placeholder="000-000-0000"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      
        <input
          type="checkbox"
        /> Interior
        <input
          type="checkbox"
        /> Exterior
        <label>Tell us about your project</label>
        <textarea
         placeholder='Message'
        ></textarea>
        <button className="bg-red-500" type="submit">Submit</button>
      </form>
    </div>
  );
}
