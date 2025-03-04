import Image from "next/image";

const Nav = () => {
  return (
    <>
      <div className="bg-inherit flex justify-center items-center">
        <Image
          className="mx-8 mt-1 mb-0 "
          src="/sneha.svg"
          alt="logo"
          width={80}
          height={80}
        />
      </div>
      <div className="mx-8">
        <div className="w-full h-[1px] bg-[#EAD7BB]" />
      </div>
    </>
  );
};

export default Nav;
