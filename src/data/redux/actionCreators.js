import { SET_EPISODES } from "./constants";

export const setEpisodes = payload => {
  return { type: SET_EPISODES, payload };
};
