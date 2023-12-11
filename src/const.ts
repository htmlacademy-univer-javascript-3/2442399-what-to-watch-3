export type Review = {
    id: number;
    idFilm: number;
    text: string;
    name: string;
    date: string;
    rating: number;
}

export type Film = {
  id: number;
  imagePath: string;
  name: string;
  genre: string;
  yearRelease: number;
  video: string;
}

export type Overview = {
    director: string;
    rating: number;
    actors: string[];
    descriptionRating: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
    countRating: number;
    description: string;
    id: number;
}

export type Genre = 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thriller';

export type Detail = {
    filmId: number;
    director: string;
    runTime: string;
    actors: string[];
    genre: Genre;
    dateRelease: number;
}
