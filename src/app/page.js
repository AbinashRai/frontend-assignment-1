"use client";
import Header from "./components/Header";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="w-[83%] mx-auto"> tanStack query</div>
    </div>
  );
}
