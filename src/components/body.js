import React from 'react';
import "./body.css";
import lillies from "../images/monet_waterlillies.jpg";
import { Parallax, Background } from 'react-parallax';

function body() {
    return (
        <>
           
            <Parallax strength={200}>
                <Background className="bodyimg">
                <img src="https://www.moma.org/media/W1siZiIsIjI0Njc4NCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=3a1ed95974c1c0be" alt="monet_waterlillies" />
                </Background>
            </Parallax>
        </>
    )
}

export default body;