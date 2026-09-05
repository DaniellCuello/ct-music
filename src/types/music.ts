export type ImageSource = string | number;

export interface Song {
  id: string;
  title: string;
  artist: string;
  image: ImageSource;
  audio?: number;
}

export interface FeaturedItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface SectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: ImageSource;
  isArtist: boolean;
}

export interface HomeSection {
  title: string;
  items: SectionItem[];
}
