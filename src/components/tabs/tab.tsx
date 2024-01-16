import OverviewBlock from './overview-block/overview-block';
import { Details } from './details/details';
import { Reviews } from './reviews/reviews';
import { useState } from 'react';

export function Tab() {
  const [tab, setTab] = useState('Overview');
  const getTab = () => {
    if (tab === 'Overview') {
      return <OverviewBlock />;
    }
    if (tab === 'Details') {
      return <Details />;
    }
    if (tab === 'Reviews') {
      return <Reviews />;
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
