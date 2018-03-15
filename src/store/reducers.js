// import { combineReducers } from 'redux';
import constants from '../../constants/constants';

export const appReducer = (state, action) => {
  switch (action.type) {
    case constants.SET_STATUS:
      return Object.assign({}, state, {
        members: state.members.map((member) => {
          if (member.name === action.member.name) {
            return Object.assign({}, member, {
              status: action.member.status,
            });
          }
          return member;
        }),
      });
    default:
      return state;
  }
};
// export const boards = (state = [], action) => {
//   switch (action.type) {
//     case constants.ADD_MEMBER:
//       console.log(state);
//       return [
//         ...state,
//         action.payload,
//       ];
//     // fix this^
//     case constants.REMOVE_MEMBER:
//       return state[action.currentBoard].members.filter((member, i) => i !== action.payload);
//
//     default: return state;
//   }
// };
//
// export default combineReducers({
//   boards,
// });

export default appReducer;
