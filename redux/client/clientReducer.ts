import * as actionType from "./actionTypes";
import { Actions, GetAllClients } from "./clientActions";

type InitialStateType = {
  allClients: any[],
  client: {}
}

const InitialState = {
  allClients: [],
  client: {},
};

function clientReducer(state = InitialState, actions: Actions): InitialStateType {
  switch (actions.type){
    case actionType.GET_ALLCLIENT:
      return {
        ...state,
        allClients: actions.payload
      }
    case actionType.GET_CLIENT:
      return {
        ...state,
        client: actions.payload
      }
    case actionType.UPDATE_CLIENT:
      return{
        allClients: state.allClients.map( (client) =>
          (client.id === actions.payload.id) ? actions.payload.client : client
        ),
        client: {}
      }
    default:
      return state;
  }
}


export default clientReducer;