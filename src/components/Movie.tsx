import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import {ProgressSpinner} from 'primereact/progressspinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import { useMovieFetch } from '../hooks/useMovieFetch';
import NoImage from '../images/no_image.jpg';

const Movie: React.FC = () => {
    const { movieId } = useParams();
    const tempMovieId = movieId ? movieId : ''
    const { state: movie, loading, error } = useMovieFetch(tempMovieId);

    if (loading) return <ProgressSpinner className='flex justify-content-center' />;
    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;