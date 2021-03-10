import { SET_EPISODES, SET_SERIALS, SET_TEXT } from "./constants";

export const setEpisodes = payload => {
  return { type: SET_EPISODES, payload };
};
export const setSerials = payload => {
  return { type: SET_SERIALS, payload };
};
export const setText = payload => {
  return { type: SET_TEXT, payload };
}
