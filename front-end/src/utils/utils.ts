import { State } from "./types";

export const BASE_URL = "http://localhost:3000/";

export const fetcher = (...args) =>
  fetch(...args).then((response) => response.json());

export const levelsStrings = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export const mapSchoolToRow = (data: any, states: State[]) => {
  if (data && states) {
    return data.data.map((item) => {
      const uf = states.filter((state) => state.id === item.city.stateId)[0].uf;
      return {
        ...item,
        local: `${item.city.name}/${uf}`,
        classification:
          item.indicators.length > 0
            ? levelsStrings[item.indicators[0].classification - 1]
            : "N/A",
      };
    });
  }
  return [];
};

export const mapStateToStateCombobox = (states: State[]) => {
  if (states) {
    return states.map((item) => {
      return {
        label: item.uf,
        value: item.uf,
      };
    });
  }
  return [];
};
