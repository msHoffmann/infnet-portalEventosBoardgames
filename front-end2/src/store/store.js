import { combineReducers, createStore } from 'redux'
import { userReducer } from './User/user.reducer'

const rootReducer = combineReducers({
    userData: userReducer,
    // Se tiver carrinho: cartData: cartReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
