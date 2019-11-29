import React from "react";

import "./Keypad.scss";

const KEYS = {
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: null,
	11: 0,
	12: "⌫"
};

const Keypad = () => {
	return <div className="keypad">
		{Object.keys(KEYS).map(k => <div key={k} className="keypad-button">
			<span>{KEYS[k]}</span>
		</div>)}
	</div>
}

export default Keypad;
