export const POCKET_ACTIONS = {
	setBaseValue: "[Pocket] Set Base Value",
	switchPockets: "[Pocket] Switch Pockets"
}

export const pocketActions = {
	setBaseValue(payload) {
		return {
			type: POCKET_ACTIONS.setBaseValue,
			payload
		}
	},
	switchPockets(payload) {
		return {
			type: POCKET_ACTIONS.switchPockets,
			payload
		};
	},
}