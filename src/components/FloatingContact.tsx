import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { colors } from '../assets/colors';

function FloatingContact() {
  const socials = [
    {
      label: 'Twitter',
      icon: <FontAwesomeIcon icon={faTwitter} className="w-[30px] h-[30px]" />,
      url: 'https://twitter.com/4der',
    },
    {
      label: 'Github',
      icon: <FontAwesomeIcon icon={faGithub} className="w-[30px] h-[30px]" />,
      url: 'https://github.com/4der99',
    },
    {
      label: 'Linkedin',
      icon: <FontAwesomeIcon icon={faLinkedin} className="w-[30px] h-[30px]" />,
      url: 'https://www.linkedin.com/in/4der/',
    },
  ];
  return (
    <div className="flex flex-col justify-start fixed right-0 bottom-[35vh]">
      <div className="flex flex-col gap-6">
        {socials.map(social => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            className={`transition-colors hover:text-primary border-[2px] border-white flex justify-center items-center w-[55px] h-[55px]`}
            rel="noreferrer">
            {social.icon}
          </a>
        ))}
      </div>
      <div className="h-[80px] w-0 border-white border-[1px] ml-[27px] mt-[25px]" />
      <div className="w-[80px] h-0 border-white border-[1px] ml-[27px]" />
    </div>
  );
}

export default FloatingContact;
