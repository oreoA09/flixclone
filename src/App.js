import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>

      <Row title="Trending" movieUrl={requests.fetchTrending} isLargeRow />

      <Row title="Original" movieUrl={requests.fetchNetflixOriginals} />

      <Row title="Top Rated" movieUrl={requests.fetchTopRated} />

      <Row title="Action" movieUrl={requests.fetchActionMovies} />

      <Row title="Comedy" movieUrl={requests.fetchComedyMovies} />

      <Row title="Horror" movieUrl={requests.fetchHorrorMovies} />

      <Row title="Romance" movieUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" movieUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
