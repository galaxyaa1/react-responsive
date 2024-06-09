import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => navigate('/')
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info',
      command: () => navigate('/about')
    },
    {
      label: 'Services',
      icon: 'pi pi-fw pi-cog',
      command: () => navigate('/services')
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
      command: () => navigate('/contact')
    }
  ];

  const start = <img alt="logo" src="/images/asif.png" height="40" className="logo" />;
 
  return (
    <div className="custom-navbar">
      <Menubar model={items} start={start} />
    </div>
  );
};

export default Header;
