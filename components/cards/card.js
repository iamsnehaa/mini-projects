import Image from "next/image";
const SlidingCard = ({ title, description, logo, className }) => {
  return (
    <div
      className={`text-gray-50 h-80 w-64 rounded-2xl relative group duration-500 cursor-pointer overflow-hidden hover:duration-700 ${className}`}
    >
      <div className="w-full h-full bg-[#ead7bb] text-gray-800 flex justify-center items-center">
        <Image src={logo} alt="logo" width={90} height={90} />
      </div>

      {/* Hover Content */}
      <div className="absolute bg-[#ffffff] -bottom-18 w-64 p-5 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-[#113946]/[0.9] font-bold text-xl">{title}</span>
        <p className="text-[#113946]">{description}</p>
      </div>
    </div>
  );
};

export default SlidingCard;
