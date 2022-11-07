import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const Movie = () => {
    let params = useParams();
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.filmId}`, {
            headers: {
                'X-API-KEY': 'd4429fbe-488d-4996-826e-3c392e7de57a',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => setMovieData(res));
    }, [params]);
    return (
        <div>
            <div className="p-6 block lg:flex md:block content-center">
                <img className="align-top rounded-lg" src={movieData.posterUrlPreview} alt=""/>
                <div className="text-left lg:ml-5">
                    <h1 className="my-5 font-semibold text-2xl lg:text-3xl mt-0 ">{movieData.nameRu}</h1>
                    <p className="font-medium mb-1 inline-flex items-center rounded-lg">
                        Рейтинг:{' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        {' '}
                        {movieData.ratingKinopoisk}{' '}
                    </p>
                    <p className="font-medium mb-1">Год: {movieData.year}</p>
                    <p className="font-medium mb-1">Жанр: </p>
                    <p className="font-medium mb-1">Страна: США</p>
                    <p className="mb-1">Описание: {movieData.description}</p>
                </div>
            </div>
            <iframe
                src={`https://voidboost.net/embed/${params.filmId}`}
                className="p-6 w-full h-80 lg:h-screen"
                title="Видео"
                frameborder="0"
                allowFullScreen></iframe>
        </div>
    );
};

export default Movie;
