import React, {useEffect, useState} from 'react'
import Card from './Card'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'

export default function MovieSearch() {
const [query, setQuery] = useState('') //state for query
const [movies, setMovies] = useState([]) // state for movies from database(data.results)
const [video, setVideo] = useState('inception') 
const [videoURL, setVideoURL] = useState('https://www.youtube.com/watch?v=_Z3QKkl1WyM') //stte for the youtube video default   "https://youtu.be/sa9l-dTv9Gk"




  //asychronised function to handle the search func
 const searchMovie = async (e) => {
      e.preventDefault()
      console.log('submitting')

      //API from TMBD to fetch data from open source
    const api =`https://api.themoviedb.org/3/search/movie?api_key=51f27ac29b8bf7f2c114e9bbc83a156a&language=en-US&query=${query}&page=1&include_adult=true`

    
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

  //function to fetch the required URL and update state of videoURL
  function handleSearch(){
    movieTrailer(video).then((res)=> {
      setVideoURL(res)
    })
  }
        return (
<div className="align-self-center">

          <form onSubmit={searchMovie} >
                  {/* Movie Trailer */}
                             <div className='ml-4' width='100px'>
                              <ReactPlayer url={videoURL} controls={true}/>
                                 </div>

                          <div className='form-group row m-2'> 
                              <label  className='col-sm-2 col-form-label'>Movie Trailer: { " " }</label>
                                          
                                          <div className='col-sm-3'>
                                            <input className='form-control' 
                                                  type="text" 
                                                  placeholder='eg: Black Panther Wakanda' 
                                                  onChange={(e)=>{setVideo(e.target.value)}}/>
                                              </div>

                                            <div className='col-sm-1 offset-1 '>
                                              <button className='btn btn-dark mt-2 w-100' onClick={()=>{handleSearch()}}>Search</button>
                                                  </div>
                                            
                              </div>

           {/* Movie overview */}
            <div className='form-group row m-2'>
                        <label htmlFor='query' className='col-sm-2 col-form-label'>Movie Overview</label>
                        
                        <div className='col-sm-3'>
                          <input className='form-control' 
                                name='query' type="query" 
                                placeholder='eg: Black Panther Wakanda' 
                                value={query}
                                onChange={(e)=>setQuery(e.target.value)}/>
                            </div>

                          <div className='col-sm-1 offset-1 '>
                            <button type='submit' className='btn btn-dark mt-2 w-100'>Search</button>
                                </div>

                          <div className='movie-list row'>
                              {movies.map(movie => (
                                <Card movie={movie} key={movie.id}/>
                                  ))} 
                                  </div>

                  </div>


            </form>

<p className='small-text'>@abitondev</p>
    
 </div>
  )
}

//https://api.themoviedb.org/3/search/movie?api_key=51f27ac29b8bf7f2c114e9bbc83a156a&language=en-US&query=${query}&page=1&include_adult=true`