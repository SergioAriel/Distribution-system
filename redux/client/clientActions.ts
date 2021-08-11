import * as actionTypes from './actionTypes'
import { Client } from '../../interfaces/types'

export type Actions = 
| { type: typeof actionTypes.GET_ALLCLIENT; payload: Client[] } 
| { type: typeof actionTypes.GET_CLIENT; payload: Client }
| { type: typeof actionTypes.POST_CLIENT; payload: Client }
| { type: typeof actionTypes.UPDATE_CLIENT; payload: { id: String; client: Client} }
;

export const GetAllClients = ( client: Client[] ) => {
    return function (dispatch) {
       dispatch({type: actionTypes.GET_ALLCLIENT, payload: client})
    }
}