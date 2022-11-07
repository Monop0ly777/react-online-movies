import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Card from '../components/Card';
import Search from '../components/Search';

const MoviesList = () => {
    const [movies, setMoviesData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('search')) {

        } else {
            fetch(
                'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
                {
                    headers: {
                        'X-API-KEY': 'd4429fbe-488d-4996-826e-3c392e7de57a',
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then((res) => res.json())
                .then((res) => setMoviesData(res.films));
        }
    }, []);

    useEffect(() => {
        if (searchParams.get('search')) {
            fetch(
                `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchParams.get(
                    'search',
                )}&page=1`,
                {
                    headers: {
                        'X-API-KEY': 'd4429fbe-488d-4996-826e-3c392e7de57a',
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then((res) => res.json())
                .then((res) => setMoviesData(res.films));
        } else {
            fetch(
                `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
                {
                    headers: {
                        'X-API-KEY': 'd4429fbe-488d-4996-826e-3c392e7de57a',
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then((res) => res.json())
                .then((res) => setMoviesData(res.films));
        }
    }, [searchParams]);

    return (
        <div>
            <Search/>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6">
                {movies.map((data) => (
                    <Card {...data} />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;