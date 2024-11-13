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

export interface formLink {
  title: string;
  link: string;
}

type Fee = {
  type: string;
  cost: string;
};

type Prize = {
  position: string;
  amount: string;
};

export interface Section  {
  title: string;
  description: string;
  points?: string[];
  details?: string[];
  fee?: Fee[];
  steps?: string[];
  benefits?: string;
  prizes?: Prize[];
  totalPrizePool?: string;
};