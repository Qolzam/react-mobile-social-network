// - Import firebase components
import {firebaseAuth, firebaseRef} from '../firebase'
import store from '../config/store'

// - Check user if is authorized
export var isAuthorized = () => {
  var state:any = store.getState()
  return state.authorize.authed

}

export var isAdmin = () =>{

return true;

}
