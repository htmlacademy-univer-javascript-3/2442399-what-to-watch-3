import { Review, Overview, Film } from '../../const';
import OverviewBlock from './overview-block/overview-block';
import { Details } from './details/details';
import { Reviews } from './reviews/reviews';
import { useState } from 'react';
import { details } from '../../mocks/details';
import {Detail} from '../../const';

type TabProps = {
    film: Film;
    overview: Overview;
    reviews: Review[];
    details: Detail[];
}

export function Tab({ film, overview, reviews }: TabProps) {
  const [tab, setTab] = useState('Overview');
  const getTab = () => {
    if (tab === 'Overview') {
      return <OverviewBlock overview={overview} />;
    }
    if (tab === 'Details') {
      return <Details detail={details.at(0)} />;
    }
    if (tab === 'Reviews') {
      return <Reviews reviews={reviews} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${tab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <div onClick={() => setTab('Overview')} className="film-nav__link">Overview</div>
          </li>
          <li className={`film-nav__item ${tab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <div onClick={() => setTab('Details')} className="film-nav__link">Details</div>
          </li>
          <li className={`film-nav__item ${tab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <div onClick={() => setTab('Reviews')} className="film-nav__link">Reviews</div>
          </li>
        </ul >
      </nav >
      {getTab()}
    </div >
  );
}
