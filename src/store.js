import { reactive } from "vue";

const defaultState = {
  accessToken: null,
  user: null,
};

const initState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

export const state = reactive(initState);

export const setState = (newState) => {
  Object.assign(state, newState);

  localStorage.setItem("authState", JSON.stringify(newState));
};

export const clearState = () => {
  Object.assign(state, defaultState);

  localStorage.removeItem("authState");
  localStorage.clear();
};
