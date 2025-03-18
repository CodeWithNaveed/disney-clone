import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
import { Link } from 'react-router-dom';

function MovieList({ genreId, index_ }) {
    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef(null);
    useEffect(() => {
        getMovieByGenreId();
    }, [genreId]);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results);
        });
    };

    const slideRight = (element) => {
        element.scrollLeft += 500;
    };
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    };

    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            />
            <Link to="/detail">
                <div ref={elementRef} className='flex overflow-x-hidden gap-8 scroll-smooth pt-4 px-3 pb-4'>
                    {movieList.map((item) =>
                        index_ % 3 === 0 ? (
                            <HrMovieCard key={item.id} movie={item} />
                        ) : (
                            <MovieCard key={item.id} movie={item} />
                        )
                    )}
                </div>
            </Link>

            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            />
        </div>
    );
}

export default MovieList;
