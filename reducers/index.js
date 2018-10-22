import { combineReducers } from "redux";

import appConfig from "./appConfig";
import wallets from "./wallets";

export default combineReducers({ appConfig, wallets });
