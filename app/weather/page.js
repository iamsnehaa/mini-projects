export default function Weather() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card />
    </div>
  );
}

const Card = () => {
  return (
    <>
      <div
        className="shadow-[#195366b9] shadow-xl rounded-2xl
      bg-[linear-gradient(
    to_right,
    _#ffffff_0%,
    _#17485a_15%,
    _#134152_30%,
    _#113946_50%,
    _#134152_70%,
    _#17485a_85%,
    _#195366_100%
)]

      h-60 w-40"
      ></div>
      <div className="bg-card h-25 w-40 m-5 border"></div>
    </>
  );
};

// bg-gradient-to-r from-[#195366] via-[#113946] to-[#195366]
