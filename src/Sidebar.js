
import React from 'react';
import { FaHome, FaLifeRing, FaBullhorn, FaProductHunt, FaUsers, FaDollarSign } from 'react-icons/fa';

const sidebarItems = [
  { icon: <FaHome />, name: 'Dashbord' },
  { icon: <FaProductHunt />, name: 'Product' },
  { icon: <FaUsers />, name: 'Customers' },
  { icon: <FaDollarSign />, name: 'Income' },
  { icon: <FaBullhorn />, name: 'Promote' },
  { icon: <FaLifeRing />, name: 'Help' },
];
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <ul >
          <h1 className='sidebar-title'><FaHome/> Dashbord</h1>
          {sidebarItems.map((item, index) => (
            <li key={index} >
              <p className='sidebar-items'>  {item.icon} {item.name}   <span className="arrow">   {'>'} </span></p>
            </li>
          ))}
        </ul>
      </div>
      <div className='profile'>
        <div className='profile-details'>
          <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg' width={50} height={50} />
          <div className='person-details'>
            <h6>Profile Name</h6>
            <p>About Profile </p>
          </div>
         <span > {'⋎'}</span>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;





