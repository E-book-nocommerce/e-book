import BreadCrumbs from '../organims/BreadCrumbs.tsx';
import TextBlock from '../molecules/TextBlock.tsx';
import ContactBlock from '../organims/ContactBlock.tsx';
import TextBlockImage from '../organims/TextBlockImage.tsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
      <BreadCrumbs></BreadCrumbs>
      <div className=" 2xl:px-[200px] px-24 pt-6 pb-8">
        <TextBlockImage
          heading={'About us'}
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ]}
          image={'/Logo.svg'}
          id={'about-us'}
        />
        <TextBlockImage
          heading={'Privacy Policy'}
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ]}
          image={'/privacy-policy.svg'}
          className={'flex-row-reverse'}
          id={'privacy-policy'}
        />
        <TextBlockImage
          heading={'Warranty'}
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ]}
          image={'/warranty.svg'}
          id={'warranty'}
        />

        <TextBlockImage
          heading={'Shipping'}
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ]}
          image={'/shipping.svg'}
          className={'flex-row-reverse'}
          id={'shipping'}
        />

        <TextBlock
          heading={'Returns'}
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ]}
          id={'returns'}
        />
      </div>
      <ContactBlock></ContactBlock>
    </>
  );
};

export default About;
