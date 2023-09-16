import axios from "axios";


const API_KEY = "9a7c557c1aaa56e972623dd1eb2aa889";

const requests={
       fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
       fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
       fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
       fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_generes=28`,
       fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_generes=35`,
       fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_generes=27`,
       fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_generes=10749`,
       fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_generes=99`,
  }
  export default requests;

//   export async function fetchGenreIds(){
//     try {
//         let response;
//         response = await axios.get(
//             `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
//           );
      
//           console.log('API Response:', response.data);
          
//         const genres = response.data.genres;

//         const genreIds = {
//             'Action' : null,
//             'Comedy': null,
//             'Horror': null,
//             'Romance': null,
//             'Documentary': null,
//         };

//         genres.forEach((genre)=> {
//             if (genre.name in genreIds){
//                 genreIds[genre.name] = genre.id;
//             }
//         });
//         console.log('Genre IDs:', genreIds);
//   } catch (error) {
//     console.error('Error fetching genre IDs:', error);
//   }
//     }
//   fetchGenreIds();
 

// // https://api.themoviedb.org/3//trending/all/week?api_key=9a7c557c1aaa56e972623dd1eb2aa889&language=en-US