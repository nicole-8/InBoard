import constants from '../constants/constants';

export function setStatus(member) {
  return { type: constants.SET_STATUS, member };
}

export function doSomething(status) {
  return { type: constants.SET_STATUS, status };
}
