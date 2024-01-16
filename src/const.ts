export const INITIAL_GENRE: Genre = 'All genres';
export type Genre = 'All genres' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids & Family' | 'Romance' | 'Sci-Fi' | 'Thriller';
export const genres: Genre[] = ['All genres', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thriller'];
export const INITIAL_COUNT_FILMS = 8;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum DescriptionRating{
  'Bad',
  'Normal',
  'Good',
  'Very good',
  'Awesome',
}

export type AuthData = {
  email: string;
  password: string;
};

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  SimilarFilms = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
}

export type FilmShortInfo = {
  id: string,
  name: string,
  previewImage: string,
  previewVideoLink: string,
  genre: Genre,
}

export type Review = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type Film = {
  id: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  name: string;
  genre: Genre;
  released: number;
  movie: string;
  description: string;
  rating: number;
  descriptionRating: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
  scoresCount: number;
  director: string;
  starring: [];
  videoLink: string;
  backgroundColor: string;
  runTime: 99;
  isFavorite: false;
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
