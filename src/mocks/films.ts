import { Genre } from './genre';

export type Film = {
    id: number;
    imagePath: string;
    name: string;
    genre: Genre;
    yearRelease: number;
    video: string;
}

export const films: Film[] = [{
  id: 0,
  imagePath: 'public/img/the-grand-budapest-hotel-poster.jpg',
  name: 'The Grand Budapest Hotel poster',
  genre: 'Drama',
  yearRelease: 2014,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
},
{
  id: 1,
  imagePath: 'public/img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  name: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Drama',
  yearRelease: 2014,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
},
{
  id: 2,
  imagePath: 'public/img/bohemian-rhapsody.jpg',
  name: 'Bohemian Rhapsody',
  genre: 'Drama',
  yearRelease: 2018,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
},
{
  id: 3,
  imagePath: 'public/img/macbeth.jpg',
  name: 'Macbeth',
  genre: 'Drama',
  yearRelease: 2015,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
},
{
  id: 4,
  imagePath: 'public/img/aviator.jpg',
  name: 'Aviator',
  genre: 'Drama',
  yearRelease: 2004,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
},
{
  id: 5,
  imagePath: 'public/img/we-need-to-talk-about-kevin.jpg',
  name: 'We need to talk about Kevin',
  genre: 'Thriller',
  yearRelease: 2011,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
}, {
  id: 6,
  imagePath: 'public/img/what-we-do-in-the-shadows.jpg',
  name: 'What We Do in the Shadows',
  genre: 'Comedy',
  yearRelease: 2019,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
}, {
  id: 7,
  imagePath: 'public/img/revenant.jpg',
  name: 'Revenant',
  genre: 'Drama',
  yearRelease: 2015,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
}, {
  id: 8,
  imagePath: 'public/img/johnny-english.jpg',
  name: 'Johnny English',
  genre: 'Comedy',
  yearRelease: 2003,
  video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
}];
