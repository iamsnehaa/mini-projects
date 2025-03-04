import Image from "next/image";

const SlidingCard = ({ className }) => {
  return (
    <div
      className={`shadow-[#16404D] shadow-2xl relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 ${className}`}
    >
      <div className="w-56 h-72 bg-[#ead7bb] text-gray-800">
        <svg
          class="w-32 h-32 p-6 text-yellow-800 fill-current animate-[spin_5s_linear_infinite;]"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
          <rect
            class="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="16"
            x="240"
            height="48"
            width="32"
          ></rect>
          <rect
            class="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="448"
            x="240"
            height="48"
            width="32"
          ></rect>
          <rect
            class="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="240"
            x="448"
            height="32"
            width="48"
          ></rect>
          <rect
            class="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="240"
            x="16"
            height="32"
            width="48"
          ></rect>
          <rect
            class="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45 416 416)"
            y="393.373"
            x="400"
            height="45.255"
            width="32"
          ></rect>
          <rect
            class="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45 96 96)"
            y="73.373"
            x="80"
            height="45.255"
            width="32.001"
          ></rect>
          <rect
            class="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45.001 96.002 416.003)"
            y="400"
            x="73.373"
            height="32"
            width="45.255"
          ></rect>
          <rect
            class="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45 416 96)"
            y="80"
            x="393.373"
            height="32.001"
            width="45.255"
          ></rect>
        </svg>
      </div>

      {/* Hover content */}
      <div className="absolute bg-[#ffffff] -bottom-20 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-[#113946]/[0.9] font-bold text-3xl">
          Weather App
        </span>
        <p className="text-inherit-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default SlidingCard;
