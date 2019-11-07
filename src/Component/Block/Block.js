import React from 'react';

const block = (props) => {
 let styleBlockOption = {
  display: 'inline-grid',
  width: '367px',
  height: '228px',
  boxShadow: '2px 6px 12px 5px #eeeeee',
  margin: '12px',
  padding: '37px',
  fontSize: '50px',
  justifyContent: 'center',
  alignItems: 'center',
 }
 return (
  <div style={styleBlockOption}>
   <p>{props.value}</p>
  </div>
 );
}
export default block;