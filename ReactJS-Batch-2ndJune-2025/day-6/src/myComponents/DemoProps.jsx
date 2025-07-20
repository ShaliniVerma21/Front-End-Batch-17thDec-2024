import React from 'react'
import './CSS/DemoProps.css'
export default function DemoProps(props) {
  return (
    <>
    <div className='user'>
      <h1>User Information</h1>
      <h3>Name : {props.name}</h3>
      <h3>Job : {props.job}</h3>
      <h3>Salary : {props.salary}</h3>
    </div>
    </>
  );
}
