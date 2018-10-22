import { WALLETS_FETCH, WALLETS_FETCH_SUCCESS, WALLETS_FETCH_FAILURE } from "../actions/walletsActions";

export default (state, action) => {
  switch (action.type) {
    case WALLETS_FETCH:
      return {
        wallets: null,
        loading: true
      };

    case WALLETS_FETCH_FAILURE:
      return {
        wallets: null,
        loading: false
      };

    case WALLETS_FETCH_SUCCESS:
    return {
      wallets: action.wallets,
      loading: false
    };

    default:
      return (
        state || {
          wallets: null,
          loading: false
        }
      );
  }
};
