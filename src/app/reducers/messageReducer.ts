export const messageReducer = (state = [], action) => {
  switch(action.type){
    case "SEND_MESSAGE":
      debugger;
      return [
        ...state,
        action.payload
      ];

    default:
      return state;
  }
}
