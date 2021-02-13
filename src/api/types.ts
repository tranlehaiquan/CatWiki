export type BreedImage = {
  height: number;
  width: number;
  id: string;
  url: string;
};

export type Breed = {
  alt_names: string;
  experimental: number;
  hairless: number;
  hypoallergenic: number;
  id: string;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string | null;
  rex: number;
  short_legs: number;
  suppressed_tail: number;
  temperament: string;
  weight_imperial: string;
  wikipedia_url: string;
  image?: BreedImage;
  description: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
};

export type BreedWithImg = {
  image: BreedImage;
} & Breed;

export type BreedWithImgRef = {
  reference_image_id: string | null;
} & Breed;
