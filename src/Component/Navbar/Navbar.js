import React from 'react';

const navbar = () => {
 const styleNavbar = {
  marginBottom: '0',
 }
 const styleNavInverse = {
  backgroundImage: 'none',
  backgroundColor: '#002a5d',
  borderColor: '#00315a',
 }
 const styleNavA = {
  backgroundImage: 'linear-gradient(to bottom,#080808 0,#f52828 100%)',
 }
 return (
  <nav style={styleNavbar} className="navbar navbar-inverse navbar-fixed-top" style={styleNavInverse}>
   <div className="container-fluid">
    <div className="navbar-header">
     <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand" href="#" style={{ color: '#e8e8e8' }}>WebSiteName</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
     <ul className="nav navbar-nav">
      <li className="active"><a href="#home" style={styleNavA}>Home</a></li>
      <li><a href="#about" style={{ color: '#e8e8e8' }}>About</a></li>
      <li><a href="#block" style={{ color: '#e8e8e8' }}>Block</a></li>
     </ul>
     <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
     </ul>
    </div>
   </div>
  </nav>
 )
}
export default navbar;