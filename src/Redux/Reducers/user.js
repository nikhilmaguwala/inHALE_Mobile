import {USER_DETAIL, AUTH_TOKEN} from '../Types';

const initialState = {
  userDetail: {},
  authToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAIL: {
      return {
        ...state,
        userDetail: action.payload,
      };
    }
    case AUTH_TOKEN: {
      return {
        ...state,
        authToken: action.payload,
      };
    }
    default:
      return state;
  }
};
