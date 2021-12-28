import { TOGGLE_MOVIE } from "./videos.action";
import { defaultState } from "../../server/defaultState";

export const videosReducer = (state = defaultState.video, action) => {
  switch (action.type) {
    case TOGGLE_MOVIE:
      return { video: action.video };
    default:
      return state;
  }
};
