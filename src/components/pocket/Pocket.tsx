import React from "react";

import CurrencyInput from "../currency-input/CurrencyInput";
import PocketBalance from "../pocket-balance/PocketBalance";

import "./Pocket.scss";

interface PocketProps {
	code: string;
	amount: string;
	symbol: string;
	balance: number;
	readonly: boolean;
	max?: number;
	onChange?: (amount: number) => void;
}
const Pocket = (props: PocketProps) => {
	const handleChange = (e) => {
		let amount = Math.round(e.target.value * 100) / 100;
		props.onChange!(amount);
	}

	return <div className="pocket" data-testid="pocket">
		<CurrencyInput currencyCode={props.code}
			value={props.amount} change={(e) => handleChange(e)}
			readonly={props.readonly} max={props.balance} />
		<PocketBalance symbol={props.symbol} balance={props.balance} />
	</div>
}

export default Pocket;