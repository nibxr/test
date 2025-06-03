import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: 'steelblue', color: '#fff', padding: '20px' }}>
      &copy; 2024 Lab developed by Virtual Labs, IIT Roorkee
    </Footer>
  );
};

export default AppFooter;