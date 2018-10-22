export const WALLETS_FETCH = "WALLETS_FETCH";
export const WALLETS_FETCH_SUCCESS = "WALLETS_FETCH_SUCCESS";
export const WALLETS_FETCH_FAILURE = "WALLETS_FETCH_FAILURE";

export const fetchWallets = () => ({
  type: WALLETS_FETCH
});

export const fetchWalletsSuccess = wallets => ({
  type: WALLETS_FETCH_SUCCESS,
  wallets
});

export const fetchWalletsFailure = error => ({
  type: WALLETS_FETCH_FAILURE,
  error
});
