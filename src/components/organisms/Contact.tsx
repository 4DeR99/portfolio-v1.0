import { contact } from 'assets/consts';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col p-5 gap-16 items-center justify-center min-h-[80vh]">
      <div className="flex flex-col w-11/12 mx-auto my-auto lg:w-3/6 lg:m-auto gap-8">
        <Title title="_Contact()" />
        <p className="text-center">{contact}</p>
        <div className="flex justify-center">
          <Button buttonText="Contact Me" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
