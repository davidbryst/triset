import { useRef } from "react";

function Test() {
  const elementRef = useRef<HTMLDivElement>(null);

  const changeBackground = () => {
    if (elementRef.current) {
      elementRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div>
      {/* <div ref={elementRef} className=''>Element avec fond à modifier</div>
      <button onClick={changeBackground}>Changer le fond</button> */}
      <div className="flex h-screen w-screen gap-5 p-5">
        <div className="flex-1 bg-pink-50 rounded-xl"></div>
        <div className="flex-[2] bg-pink-50 rounded-xl grid grid-cols-3 grid-rows-6 p-5 gap-5 items">
          {[...Array(4)].map(() => (
            <div className="relative bg-white rounded-xl px-4 py-2 flex flex-col gap-0.5 shadow-sm border border-pink-100">
              <span className="text-xl font-bold">David Abraham</span>
              <span>Dona Blanch <span className="rounded-lg bg-pink-500 px-2 py-0.5 text-[10px] font-bold text-white">XL</span></span>
              <span className="w-full flex justify-between text-sm bg-pink-50 px-2 py-1 rounded-lg font-semibold text-pink-600"><span>+225 0710007746</span> <span className="">Cocody Riviera 2</span></span>
              <div className="absolute bg-pink-700 text-white px-2 py-0 rounded-md right-2">X</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
