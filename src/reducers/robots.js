import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from '../config/constants';

const initialStateSearch = {
  searchField: '',
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateRequest = {
  robots: [],
  error: '',
  isPending: false,
};

export const requestRobots = (state = initialStateRequest, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.payload,
      });
    default:
      return state;
  }
};
