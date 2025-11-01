import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black text-2xl font-bold underline">Hello World</div>
      {/* 1. 타이포그래피 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-xs</div>
      <div className="text-lg text-[#55bbff]">text-xs</div>
      <div className="text-xl font-bold">text-xs</div>
      <div className="h-20 w-20 bg-amber-500 text-2xl">text-xs</div>
      <div className="w-full bg-blue-500 text-[30px]">text-30px</div>

      <div className="h-50 w-50 bg-red-400 pt-5 pr-5 pb-10 pl-10">
        <div className="mt-8 h-full w-full bg-blue-400"></div>
      </div>

      <div className="m-5 border-x-5 border-y-2 bg-yellow-100">border</div>

      <div className="flex items-center justify-between">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </>
  );
}

export default App;
