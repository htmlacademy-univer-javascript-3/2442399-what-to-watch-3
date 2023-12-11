export type Overview = {
  director: string;
  rating: number;
  actors: string[];
  descriptionRating: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
  countRating: number;
  description: string;
  id: number;
}

export const overviews: Overview[] = [{
  id: 0,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.

    Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  rating: 8.9,
  descriptionRating: 'Very good',
  countRating: 24083,
  director: 'Wes Anderson',
  actors: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe and other', 'others'],
}];
