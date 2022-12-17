import React from "react"
import "./index.css";
import apple from './apple.jpg'
import banana from './banana.jpg'
import peach from './peach.jpg'
import pineapple from './pineapple.jpg'
import pear from './pear.jpg'
import cherry from './cherry.jpg'

import Header from "./components/Header"
import Content from './components/Content'
import Image from "./components/Image"

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Image />
            <div className="fruits">
                <GoodsCard name="Apple" price={15} image={apple} />
                <GoodsCard name="Banana" price={25} image={banana} />
                <GoodsCard name="Peach" price={31} image={peach} />
                <GoodsCard name="Pineapple" price={50} image={pineapple} />
                <GoodsCard name="Pear" price={32} image={pear} />
                <GoodsCard name="Cherry" price={42} image={cherry} />
            </div>
        </div>
        
        
    )
}
  
function GoodsCard(props) {
    return (
      <div>
        <img src={props.image} width="20%" height="50%"></img>
        <p>{props.name}</p>
        <p>Price: {props.price} USD</p>
      </div>
    );
  }

export default App


