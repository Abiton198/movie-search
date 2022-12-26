import React from 'react'

export default function MovieSearch() {
  return (
    <form >
   
            <div className='form-group row m-2'>
              

                  <label htmlFor='query' className='col-sm-3 col-form-label'>Movie Name</label>
                  
                  <div className='col-sm-9'>
                    <input className='form-control' name='query' type="query" placeholder='eg: Black Panther Wakanda' />
                      </div>

                    <div className='col-sm-9 offset-3 '>
                      <button type='submit' className='btn btn-dark mt-2 w-100'>Search</button>
                  <div className='row'>
                        </div>
                          </div>
            </div>
      </form>

 
  )
}

