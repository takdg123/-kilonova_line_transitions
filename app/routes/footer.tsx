
import React from 'react';


const Footer = () => { 
  return (
    <footer className="bg-white dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 ">
            <p className="sm:flex sm:items-center">© 2024 Donggeun Tak. Powered by Remix and Flowbite.</p>
            <p className="sm:flex sm:items-center">(contact: <a href="mailto:donggeun.tak@gmail.com">donggeun.tak@gmail.com</a>)</p>
        </div>
        <style jsx>{`
        footer {
          position: relative;
          bottom: 0;
          left: 0;
          width: 100%;
        }
      `}</style>
    </footer>
  );
}

export default Footer;

