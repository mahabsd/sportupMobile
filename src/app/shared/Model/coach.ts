import { User } from "./User";

export class Coach {
  id: string;
  adresse: string;
  ville: string;
  codePostal: number;
  lieuTravail: string;
  pays: string;
  situation: string;
  school: string;
  genre: string;
  user: User;
}
