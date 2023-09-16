import React from 'react'
import "./HomeScreen.css"
import Banner from '../Banner'
import Nav from "../Nav"
import Row from "../Row"
import requests, { fetchGenreIds } from '../Requests'

export default function HomeScreen() {
  return (
    <div className='homeScreen'>
      < Nav />


      <Banner />


      <Row 
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
      />
      <Row 
          title='Trending Now'
          fetchUrl={requests.fetchTrending}
      />
      <Row 
          title='Top Rated'
          fetchUrl={requests.fetchTopRated}
      />
      <Row 
          title='Action Movies'
          fetchUrl={requests.Action}
      />
      <Row 
          title='Comedy Movies'
          fetchUrl={requests.Comedy}
      />
      <Row 
          title='Horror Movies'
          fetchUrl={requests.Horror}
      />
      <Row 
          title='Romance Movies'
          fetchUrl={requests.Romance}
      />
      <Row 
          title='Documentaries'
          fetchUrl={requests.Documentaries}
      />


    </div>
  )
}
