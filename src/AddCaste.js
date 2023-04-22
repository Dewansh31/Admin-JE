import React from 'react'
import "./AddCaste.css"

function AddCaste() {
  return (
    <div className='d1'>
  <div className="wrapper">
    <div className="title">
      Add New Caste
    </div>
    <div className="form">
      <div className="inputfield">
        <label>Name</label>
        <input type="text" className="input"/>
      </div>  
     
      <div className="inputfield">
        <input type="submit" value="Save" className="btn" />
      </div>
    </div>
  </div>
  <div className="wrapper1">
    <div className="title1">
      Add New Caste
    </div>
    <div className="form1">
      <div className="inputfield">
        <label>Name</label>
        <input type="text" className="input"/>
      </div>  
     
      <div className="inputfield">
        <input type="submit" value="Save" className="btn" />
      </div>
    </div>
  </div>
</div>
  )
}

export default AddCaste
