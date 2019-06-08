import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

import _ from "lodash";
import streams from "../apis/streams";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case DELETE_STREAM: {
      const newState = {
        ...state
      };
      delete newState[action.payload];
      return newState;
    }

    // return {
    //   ...state, [action.payload]: undefined
    // };
    // return delete state[action.payload];
    // return Object.assign({}, state, {
    //   streams: [...state.streams.filter(item => item.id !== action.payload)],
    // });

    case FETCH_STREAMS: {

      const {
        streams,
        ...newState
      } = state;


      let streamsnew = _.mapKeys(action.payload, "id");

      return {
        ...newState,
        ...streamsnew

      };



      // return {
      //   ...newState, streamsnew

      // };
    }
    // return {
    //   ...state,..._.mapKeys(action.payload, "id")
    // };

    default:
      return state;
  }
};