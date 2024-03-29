export type School = {
  id: string;
  code: string;
  name: string;
  local: string;
  city: City;
  adminType: "Federal" | "Estadual" | "Municipal";
  localType: "Urbana" | "Rural";
  indicators: Indicator[];
};

export type SchoolTable = {
  id: string;
  code: string;
  name: string;
  local: string;
  adminType: "Federal" | "Estadual" | "Municipal";
};

export type City = {
  id: string;
  code: string;
  name: string;
  state: State;
  area: "Capital" | "Interior";
};

export type State = {
  id: string;
  code: number;
  name: string;
  uf: string;
  region: "Norte" | "Nordeste" | "Sudeste" | "Sul" | "Centro-Oeste";
};

export type Indicator = {
  id: string;
  average: number;
  quantity: number;
  classification: number;
  year: number;
  school: School;
  levelOne: number;
  levelTwo: number;
  levelThree: number;
  levelFour: number;
  levelFive: number;
  levelSix: number;
  levelSeven: number;
  levelEight: number;
};
