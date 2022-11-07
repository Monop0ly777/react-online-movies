import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import MovieList from './layouts/MoviesList';
import Movie from './pages/Movie';

function App() {
    return (
        <Fragment>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<MovieList/>}/>
                    <Route path="movie/:filmId" element={<Movie/>}/>
                </Routes>
            </Router>
        </Fragment>
    );
}

export default App;
