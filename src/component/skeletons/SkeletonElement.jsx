import React from 'react';
import './skeleton.css';

const SkeletonElement = (props) => {
    const { type } = props;

    const classes = `skeleton ${type}`



  return (
    <div className={classes}></div>
  )
}

export default SkeletonElement