import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Socials() {
  const socials = [
    {
      label: 'Twitter',
      icon: <FontAwesomeIcon icon={faTwitter} className="h-[30px] w-[30px]" />,
      url: 'https://twitter.com/4der',
    },
    {
      label: 'Github',
      icon: <FontAwesomeIcon icon={faGithub} className="h-[30px] w-[30px]" />,
      url: 'https://github.com/4der99',
    },
    {
      label: 'Linkedin',
      icon: <FontAwesomeIcon icon={faLinkedin} className="h-[30px] w-[30px]" />,
      url: 'https://www.linkedin.com/in/4der/',
    },
  ];
  return (
    <>
      <div className="fixed bottom-[30vh] right-0 hidden justify-start lg:flex lg:flex-col">
        <div className="flex flex-col gap-6">
          {socials.map(social => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              className={`border-white flex h-[55px] w-[55px] items-center justify-center border-[2px] transition-colors hover:text-primary`}
              rel="noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
        <div className="border-white ml-[30px] mt-[25px] h-[80px] w-0 border-[1px]" />
        <div className="border-white ml-[30px] h-0 w-[45px] border-[1px]" />
      </div>
      <div className="fixed bottom-0 flex h-12 w-full items-center justify-between bg-primaryBackground px-4 text-secondaryText lg:hidden">
        <span className="text-sm">You can find my socials here:</span>
        <div className="flex h-full items-center gap-4 object-contain">
          {socials.map(social => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              className={`transition-colors hover:text-primary`}
              rel="noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Socials;
