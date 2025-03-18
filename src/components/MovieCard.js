import React from 'react'
import styled from 'styled-components';

function MovieCard({ movie }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    return (

        <>
            <Img src={IMAGE_BASE_URL + movie.poster_path}
                className='w-[110px] md:w-[200px] rounded-lg
                hover:border-[3px] border-gray-400 cursor-pointer
                hover:scale-110 transition-all duration-150 ease-in'
            />
        </>


    )
}

export default MovieCard

const Img = styled.img`
`