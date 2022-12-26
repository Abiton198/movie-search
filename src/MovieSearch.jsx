import React, {useEffect, useState} from 'react'

export default function MovieSearch() {
const [query, setQuery] = useState('') //state for query
const [movies, setMovies] = useState([]) //state for movies from database(data.results)

  //asychronised function to handle the search func
 const searchMovie = async (e) => {
      e.preventDefault()
      console.log('submitting')

    const api =`https://api.themoviedb.org/3/search/movie?api_key=51f27ac29b8bf7f2c114e9bbc83a156a&language=en-US&query=${query}&page=1&include_adult=false`

      
      const res = await fetch(api)
      const data = await res.json()
      setMovies(data.results) //update state of movies array
      console.log(data)

      //handling error internally if anthing happens that prevents the page from loading
          try{
            const res = await fetch(api)
            const data = await res.json()
            console.log(data)
          }catch(error){
            console.log('error')
          }

  }
        return (
<>

          <form onSubmit={searchMovie}>
            <div className='form-group row m-2'>
                        <label htmlFor='query' className='col-sm-3 col-form-label'>Movie Name</label>
                        
                        <div className='col-sm-9'>
                          <input className='form-control' 
                                name='query' type="query" 
                                placeholder='eg: Black Panther Wakanda' 
                                value={query}
                                onChange={(e)=>setQuery(e.target.value)}/>
                            </div>

                          <div className='col-sm-9 offset-3 '>
                            <button type='submit' className='btn btn-dark mt-2 w-100'>Search</button>
                        <div className='row'>
                              </div>
                                </div>
                  </div>
            </form>

    <div className='movie-list row'>
      {movies.map(movie => (
        <div className='movie col-sm-2 ml-5 p-5' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
              className='movie--image' alt= {`${movie.title} + poster`}/>
                <br/><hr/>
                  </div>
          ))} 
    </div>
 </>
  )
}

