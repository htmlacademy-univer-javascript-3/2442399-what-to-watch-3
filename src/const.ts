export const INITIAL_GENRE : Genre = 'All genres';
export type Genre = 'All genres' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thriller';
export const genres : Genre[] = ['All genres', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thriller'];

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
  genre: Genre;
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

export type Detail = {
    filmId: number;
    director: string;
    runTime: string;
    actors: string[];
    genre: Genre;
    dateRelease: number;
}
