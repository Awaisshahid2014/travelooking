import React from 'react';
import PrimaryHeader from './PrimaryHeader';
import PrimaryFooter from './PrimaryFooter';
import Colors from '@/utils/Colors';

const CustomLayout = ({ children }) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrimaryHeader padding={'10px 3rem'} height={''} background={Colors.main_primary} />
      <div style={{ minHeight: '80%', background: Colors.main_white }}>{children}</div>
      <PrimaryFooter padding={'2rem 3rem 0.5rem 3rem'} height={''} background={'#FFFFFF'} />
    </div>
  );
};

export default CustomLayout;
