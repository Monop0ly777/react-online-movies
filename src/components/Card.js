import React from 'react';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

const Card = ({ filmId, nameRu, rating, posterUrlPreview, year, countries, isLoading }) => {
  return (
    <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      {isLoading ? (
        <Preloader />
      ) : (
        <Link to={`movie/${filmId}`}>
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img src={posterUrlPreview} alt="wallpaper" />

            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span className="ml-1 text-sm text-slate-400">{rating}</span>
            </div>
          </div>
        </Link>
      )}
      <div className="mt-1 p-2">
        <h2 className="text-slate-700">{nameRu}</h2>
        <p className="mt-1 text-sm text-slate-400">{year}</p>

        <div className="mt-2 flex items-end justify-between">
          <p>
            {countries.map((res) => (
              <span className="text-sm text-slate-400">{res.country} </span>
            ))}
            {/* <span class="text-lg font-bold text-green-500">$1,421</span>
		  <span class="text-sm text-slate-400">/night</span> */}
          </p>

          <div className="group inline-flex rounded-xl bg-green-100 p-2 hover:bg-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-500 group-hover:text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
