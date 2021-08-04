import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes.js";

const initState = {
  todo: [
    {
      id: 1234,
      title: "learn redux",
      status: false
    }
  ]
};
export const reducerFunction = (state = initState, { type, payload }) => {
  console.log(type, payload);
  console.log("state", state.todo);
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    case DELETE_TODO:
      state = {
        todo: state.todo.filter((ele) => {
          return ele.id !== payload.id;
        })
      };
      return state;
    case TOGGLE_TODO:
      state.todo.map((ele) => {
        if (ele.id === payload.id) {
          ele.status = !ele.status;
        }
      });
      return state;
    default:
      return state;
  }
};
