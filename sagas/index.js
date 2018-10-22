import { all } from "redux-saga/effects";
import wallets from "./wallets";

export default function* rootSaga() {
  yield all([wallets()]);
}
