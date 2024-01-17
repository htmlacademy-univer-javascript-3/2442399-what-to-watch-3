import { Link } from 'react-router-dom';
import { FilmShortInfo } from '../../const';
import { useEffect, useState } from 'react';
import { VideoPlayer } from '../video-player/video-player';
import { useNavigate } from 'react-router-dom';

type FilmCardProps = {
  film: FilmShortInfo;
}

const DELAY = 1000;

function FilmCard({film}: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPointed, setIsPointed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPointed) {
      const timeout = setTimeout(() => setIsPlaying(true), DELAY);
      return () => clearTimeout(timeout);
    }
  }, [isPlaying, isPointed]);

  const handleMouseEnter = () => {
    setIsPointed(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    setIsPointed(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image" onClick={()=>navigate(`/films/${film.id}`)}>
        {isPlaying ?
          <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} isMuted isPlaying={isPlaying} /> :
          <img
            src={film.previewImage}
            alt={film.name}
            width={280}
            height={175}
          />}
      </div>
      {!isPlaying &&
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>}
    </article>
  );
}

export default FilmCard;
