import {combineReducers} from 'redux'
import { authReducer as auth } from '../components/utils/OAuth2'

import categoria from './categoria-reducer'
import theme from './theme-reducer'

let reducer = combineReducers({
    auth: auth,
    theme:theme,
    categoria: categoria,
    
})

export default reducer               