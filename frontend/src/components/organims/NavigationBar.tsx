import Button from '../atoms/Button';

const NavigationBar = () => {
  return (
    <nav
      className={
        'px-24 border-solid border-b-[1px] border-t-[1px] border-purple py-4 text-[#4D4C4C] 2xl:px-[250px]'
      }
    >
      <div className="flex justify-between items-center ">
        <ul className={'flex gap-6 '}>
          <a href="" className="">
            <li className="">The must read</li>
          </a>
          <a href="" className="">
            <li className="">News</li>
          </a>
          <a href="" className="">
            <li className="">Promotion of the mount</li>
          </a>
          <a href="" className="">
            <li className="">Publish</li>
          </a>
          <a href="#contact-form" className="">
            <li className="">Subscribe to the newsletter</li>
          </a>
        </ul>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center mr-9 gap-2">
            <img src="/phonePurple.svg" alt="" className="" />
            <p>+445 87 999 000</p>
          </div>
          <Button
            className={
              'px-8 bg-transparent text-purple border-solid border-[1px] border-purple'
            }
            type={'button'}
          >
            Request a call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
