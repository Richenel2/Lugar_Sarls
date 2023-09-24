import { Department } from "./department";

export class Metier {
  id!: number;
  img!: string;
  name!: string;
  rating!: number;
  fee!: string;
  desc!: string;
  departments!: Department[];
}
