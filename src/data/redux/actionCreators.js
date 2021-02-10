import { SET_EPISODES, SET_SERIALS } from "./constants";

export const setEpisodes = payload => {
  return { type: SET_EPISODES, payload };
};
export const setSerials = payload => {
  return { type: SET_SERIALS, payload };
};
