// import { contacts } from "../static-data";

// export default (state = { contacts }, action) => {
//     return state;
// };

import contacts from "./contacts";
import user from "./user";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import activeChatId from "./activeChatId";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing,
  activeChatId
});
