"use client"
import React from 'react'
import classes from "./Service5Props.module.css"
import MyButton from '../../Button/Button'
import Image from 'next/image'

const Service5Props = (props) => {
  return (
    <div className= {classes.Service5Main}>
    <div className= {`container ${classes.Service5Parent}`}>

        <div className= {classes.Service5Child}>

            <h6>{props.header} </h6>
            <h2>{props.subHeader} </h2>
            <p>{props.paragraph} </p>  

            <MyButton text={props.initial}/>
        </div> 

        <div>
            <Image src={props.Glad} alt="" quality={100} width={500}/>
        </div>
    </div> 
  
</div>
  )
}

export default Service5Props;
