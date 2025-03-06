import Image from "next/image";

const SlidingCard = ({ title, description, logo, className }) => {
  return (
    <div
      className={`shadow-[#16404D] shadow-2xl relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-80 w-64 rounded-2xl hover:duration-700 ${className}`}
    >
      <div className="w-64 h-80 bg-[#ead7bb] text-gray-800 flex justify-center items-center">
      <Image src={logo} alt="logo" width={90} height={90} />

  </div>

      {/* Hover content */}
      <div className="absolute bg-[#ffffff] -bottom-20 w-64 p-5 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-[#113946]/[0.9] font-bold text-xl">
          {title}
        </span>
        <p className="text-[#113946]">
          {description}
        </p>
        
        
      </div>
      
    </div>
  );
};

export default SlidingCard;
