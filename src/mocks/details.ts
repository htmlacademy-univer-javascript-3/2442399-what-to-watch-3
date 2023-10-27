import { Genre } from "./genre";

export type Detail = {
    filmId: number;
    director: string;
    runTime: string;
    actors: string[];
    genre: Genre;
    dateRelease: number;
}

export const details:Detail[]=[{
    filmId: 0,
    director: "Wes Anderson",
    runTime: "1h 39m",
    actors: ["Bill Murray", "Edward Norton", "Jude Law","Willem Dafoe","Saoirse Ronan",
        "Tony Revoloru","Tilda Swinton", "Tom Wilkinson", "Owen Wilkinson", "Adrien Brody",
        "Ralph Fiennes", "Jeff Goldblum"],
    genre: "Comedy",
    dateRelease: 2014
}]