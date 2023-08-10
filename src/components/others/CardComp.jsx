import React from 'react'
import PropTypes from 'prop-types';
import { Card } from '@mui/material';


const CardComp = ({ children, className, style, ...props}) => {
  return (
    <Card id={props.id} className={`__card__ ${className ? className : ''}`} style={{...style}}>
        {children} 
    </Card>
  )
}

CardComp.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
}

export default CardComp;