const Banner = () => {
  return (
    <div className="flex justify-between items-center px-24 mb-20 2xl:px-[250px]">
      <div className={'flex items-center justify-center gap-5'}>
        <img src="/car.svg" alt="" className="" />
        <p className="text-2xl text-main-text">Free shipping over 50$</p>
      </div>
      <span className="w-[1px] h-20 bg-black"></span>
      <div className={'flex items-center justify-center gap-5'}>
        <img src="/star.svg" alt="" className="" />
        <p className="text-2xl text-main-text">Save with loyalty points</p>
      </div>
      <span className="w-[1px] h-20 bg-black"></span>
      <div className={'flex items-center justify-center gap-5'}>
        <img src="/book.svg" alt="" className="" />
        <p className="text-2xl text-main-text">Read a few pages</p>
      </div>
    </div>
  );
};

export default Banner;
