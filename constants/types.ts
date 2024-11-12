export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;

}

export interface Summit {
  id: number;
  title: string;
  images: string[];
}

export interface Guest {
  name: string;
  img: string;
  designation: string;
  organization: string;
}

export interface EventFeaturing {
  title: string;
  description: string;
  date: string;
  location: string;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
}
