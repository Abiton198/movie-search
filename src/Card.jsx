import React from 'react'

export default function Card({movie}) {
   
    return (
    
  
        <div className='movie col-sm-2 ml-5 p-5'>
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
              className='movie--image' alt= {`${movie.title} + poster`} width='250px'/>
                <h3 className='title'>{movie.title}</h3>
                  <p className='release-date'><small>Release Date:{movie.release_date}</small></p>
                    <p className='font-weight-bold rating'>Rating:{movie.vote_average}</p>
                      <p className='text-justify'>{movie.overview}</p>              
                        <hr className='line-under'/>
                            </div>
   
    
  )
}
