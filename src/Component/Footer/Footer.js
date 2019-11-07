import React from 'react';

const footer = () => {
 const styleFoot = {
  display: 'inline-grid',
  width: '100%',
  height: '10vh',
  backgroundColor: '#232323',
  color: '#ffffff',
  justifyContent: 'center',
  alignItems: 'center',
 }
 return (
  <div style={styleFoot}>
   <p>© Copyright © 2019 AK. All Rights Reserved.</p>
  </div>
 );
}
export default footer;