import React from "react";
import "./Image.css";


const Image = (props) => {
 return( <img className="mx-auto" src={props.imageAuChoix} alt={props.alt} />
);
};  

export default Image;