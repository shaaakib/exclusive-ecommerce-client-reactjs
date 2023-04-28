import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftNav from '../Pages/Shared/LeftNav/leftNav';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-[1fr_3fr] container mx-auto">
        <div>
          <LeftNav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
