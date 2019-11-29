import { POCKET_ACTIONS } from "./pocket.actions";

const initialState = {
	pockets: {
		sourceCurrency: "GBP",
		targetCurrency: "EUR",
		baseValue: 0
	},
	wallet: {
		"GBP": { code: "GBP", symbol: "£", balance: 100 },
		"EUR": { code: "EUR", symbol: "€", balance: 100 },
		"USD": { code: "USD", symbol: "$", balance: 100 }
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case POCKET_ACTIONS.setBaseValue: {
			return {
				...state,
				pockets: {
					...state.pockets,
					baseValue: action.payload
				}
			};
		}
		case POCKET_ACTIONS.switchPockets: {
			const { direction, code } = action.payload;

			return {
				...state,
				pockets: {
					...state.pockets,
					[direction]: code
				}
			};
		}
		default:
			return state;
	}
}

export default reducer;