import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Modal from './Component/Modal/Modal';
import Slider from './Component/Slider/Slider';
import Block from './Component/Block/Block';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';

class App extends Component {
  state = {
    blockHeading: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACTJS', 'REACTNATIVE'],
    selectBlock: null,
  }

  render() {
    let block = null;
    block = this.state.blockHeading.map((block, index) => {
      console.log(block)
      return (
        <Block key={index} value={block} />
      );
    })

    return (
      <div className="App" >
        <div>
          <Navbar />
        </div>
        <div>
          <Modal />
        </div>
        <div id='home'>
          <Slider />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='block'>
          <div style={{ paddingTop: '4rem', height: '100vh' }}>
            {/* <Block /> */}
            <h1 style={{ textAlign: 'center' }}>BLOCK</h1>
            {block}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
