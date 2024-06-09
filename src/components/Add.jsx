import React, { useState } from 'react'

const Add = () => {
    let [quotes,setQuotes]=useState(
        {
            "ti":"",
            "au":"",
            "de":""
        }
    )
    const inputHandler=(event)=>{
        setQuotes({...quotes,[event.target.name]:event.target.value})
    }
    const read=()=>{
        console.log(quotes)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='ti' value={quotes.ti} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" name='au' value={quotes.au} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea type="text" className="form-control" name='de' value={quotes.de} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={read}>Add Quotes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add