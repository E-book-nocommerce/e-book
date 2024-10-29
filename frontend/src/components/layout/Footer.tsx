const Footer = () => {
  return (
    <footer>
      <div className="2xl:px-[250px] px-24 py-12 bg-[#937DC2] flex justify-between items-start text-white">
        <div className="">
          <a href="/" className="mb-auto">
            <img src="/Logo.svg" alt="" className="w-20" />
          </a>
          <div className="flex gap-4 items-center mt-44">
            <a href="" className="">
              <img src="/facebook.svg" alt="" className="" />
            </a>
            <a href="" className="">
              <img src="/instagram.svg" alt="" className="" />
            </a>
            <a href="" className="">
              <img src="/twitter.svg" alt="" className="" />
            </a>
          </div>
        </div>

        <ul className="flex flex-col justify-between items-start">
          <a href="" className="">
            <li className="mb-5">
              <b>Categories</b>
            </li>
          </a>
          <a href="" className="">
            <li className="mb-4">Psychology</li>
          </a>
          <a href="" className="">
            <li className="mb-4">Self-Help</li>
          </a>
          <a href="" className="">
            <li className="mb-4">Romance</li>
          </a>
          <a href="" className="">
            <li className="">Mystery</li>
          </a>
        </ul>

        <ul className="flex flex-col justify-between items-start">
          <a href="" className="">
            <li className="mb-5">
              <b>For kids</b>
            </li>
          </a>
          <a href="" className="">
            <li className="mb-4">Games</li>
          </a>
          <a href="" className="">
            <li className="mb-4">Comics</li>
          </a>
          <a href="" className="">
            <li className="mb-4">Fantasy</li>
          </a>
        </ul>
        <ul className="flex flex-col justify-between items-start">
          <a href="" className="">
            <li className="mb-5">
              <b>E-book</b>
            </li>
          </a>
          <a href="" className="">
            <li className="mb-4">Fiction</li>
          </a>
          <a href="" className="">
            <li className="mb-4">Historical</li>
          </a>
          <a href="" className="">
            <li className="mb-4">Horror</li>
          </a>
        </ul>
        <ul className="flex flex-col justify-between items-start">
          <li className="mb-5">
            <b>Help & Contacts</b>
          </li>
          <a href="tel:+44587999000">
            <li className="mb-4 flex items-center gap-2.5">
              <img src="/phone.svg" alt="" className="" />
              +445 87 999 000
            </li>
          </a>

          <li className="mb-4 flex items-center gap-2.5">
            <img src="/clock.svg" alt="" className="" />
            Mo-Fri, 9 AM to 11 PM
          </li>
          <a href="mailto:b.world@store.ro">
            <li className="mb-4 flex items-center gap-2.5">
              <img src="/mail.svg" alt="" className="" />
              b.world@store.ro
            </li>
          </a>
        </ul>

        <div className="">
          <p className=""></p>
          <button className=""></button>
          <div className="">
            <a href="" className="">
              <img src="" alt="" className="" />
            </a>
            <a href="" className="">
              <img src="" alt="" className="" />
            </a>
            <a href="" className="">
              <img src="" alt="" className="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
