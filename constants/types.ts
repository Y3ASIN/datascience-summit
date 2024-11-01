export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export interface Summit {
  id: number;
  title: string;
  images: string[];
}
