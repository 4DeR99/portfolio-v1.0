import { contact } from 'assets/consts';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import React from 'react';

function Contact() {
  return (
    <div
      className="flex min-h-[80vh] flex-col items-center justify-center gap-16 p-5"
      id="contact">
      <div className="mx-auto my-auto flex w-11/12 flex-col gap-8 lg:m-auto lg:w-3/6">
        <Title title="_Contact()" />
        <p className="text-center">{contact}</p>
        <div className="flex justify-center">
          <Button
            onClick={() => open('mailto:oulmadouxz1@gmail.com')}
            buttonText="Contact Me"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
