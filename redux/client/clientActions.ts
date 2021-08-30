import * as actionTypes from './actionTypes'
import { Client } from '../../interfaces/types'

export type Actions = 
| { type: typeof actionTypes.GET_ALLCLIENT; payload: [] } 
| { type: typeof actionTypes.GET_CLIENT; payload: number }
| { type: typeof actionTypes.POST_CLIENT; payload: {} }
| { type: typeof actionTypes.UPDATE_CLIENT; payload: { id: String; client: {} } }
;

export const GetAllClients = ( client: Client[] ) => {
    return function (dispatch) {
       dispatch({type: actionTypes.GET_ALLCLIENT, payload: client})
    }
}