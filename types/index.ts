export interface Prayer {
  id: string;
  prayer: string;
  location: {
    lat: number;
    lng: number;
  };
  inviter: User;
  participants: User[];
  guests_male: number;
  guests_female: number;
  schedule_time: string;
  description: string;
}

export interface User {
  id: string;
  full_name: string;
  gender: string;
  email: string;
}
