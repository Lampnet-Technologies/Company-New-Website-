import React from 'react'
import classes from "./Service7Props.module.css"
import Image from 'next/image'
import MyButton from '../../Button/Button'

const Service7Props = (props) => {
  return (
    <div>
      <div className={classes.Service7Main}>
        <div className={`container ${classes.Service7Parent}`}>
          <div className={classes.Service7Bro}>
            <Image src={props.Group} alt="" quality={100} width={400} />
          </div>

          <div className={classes.Service7Child}>
            <h6>{props.header}</h6>
            <h2>
              {props.subHeader} 
            </h2>  
            <p>
              {props.paragraph}
            </p>
            <MyButton text={props.initial} />
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Service7Props
