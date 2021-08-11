import * as actionType from "../action_types/actionTypes";
import { Actions } from "./clientActions";
import { Store } from "./interfaceClient";

let client = {
  id:               "",
  nameContact:      "",
  RS:               "",
  email:            "",
  bussines:         "",
  phone:            0,
  permission:       "",
  regAFIP:          "",
  PC:               0,
  deliveryAddress:  "",
}



const InitialState = {
  allClients: [],
  client: client,
};

function clientReducer(state: Store = InitialState, actions: Actions) {
      return state;
}


export default clientReducer;