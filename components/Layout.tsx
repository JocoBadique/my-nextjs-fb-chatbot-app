import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../chatbot/chatbox';

const Layout = ({children}) => {
  return (
    <>
    <div>
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
    </div>
    </>
  )
};

export default Layout;
