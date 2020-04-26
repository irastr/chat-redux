import {
  SEND_MESSAGE,
  DELETE_CHAT,
  EDIT_CHAT,
  SET_TYPING_VALUE,
  DELETE_CONTACT,
  SET_ACTIVE_USER_ID
} from "./action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const deleteContact = user_id => ({
  type: DELETE_CONTACT,
  payload: user_id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, userId, chatId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
    chatId
  }
});

export const deleteChat = (number, activeUserId) => ({
  type: DELETE_CHAT,
  payload: {
    number,
    activeUserId
  }
});

export const editChat = (number, activeUserId, text) => ({
  type: EDIT_CHAT,
  payload: {
    number,
    activeUserId,
    text
  }
});
