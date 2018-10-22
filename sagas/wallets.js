import { call, put, takeEvery } from "redux-saga/effects";

import { WALLETS_FETCH, fetchWalletsSuccess } from "../actions/walletsActions";
import { getWallets } from "../apis/walletInfo";

export function* fetchWallets() {
  const data = yield call(getWallets);
  yield put(fetchWalletsSuccess(data));
}

export default function* wallets() {
  yield takeEvery(WALLETS_FETCH, fetchWallets);
}
