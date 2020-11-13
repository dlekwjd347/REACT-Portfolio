import React from 'react';
import "./body.css";
import lillies from "../images/monet_waterlillies.jpg";
import { Parallax, Background } from 'react-parallax';

function body() {
    return (
        <>
           
            <Parallax strength={200}>
                <Background className="bodyimg custom-bg">
                <img src={require("../images/monet_waterlillies.jpg")} alt="monet_waterlillies" />
                </Background>
            </Parallax>

           
    <Parallax
        bgImage="/path/to/another/image"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '50%',
                    top: '50%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
            />
        )}
    >
    
    </Parallax>


        </>
    )
}

export default body;