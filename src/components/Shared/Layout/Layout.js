import React from 'react'
import Header from './Header';

const Layout = ({children}) => {
  return (
    <>
    <div className ="header"> <Header/></div>
    <div className = "row g-0">
        <div className="col-md-3">sidebar</div>
        <div className="content">{children}</div>
    </div>
    </>
  );
};

export default Layout;
