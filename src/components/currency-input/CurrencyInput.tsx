import React from "react";

import "./CurrencyInput.scss";

interface CurrencyInputProps {
	value: string;
	currencyCode: string;
	max: number;
	readonly: boolean;
	change: (e) => void
}

const CurrencyInput = (props: CurrencyInputProps) => {
	return <div data-testid="currency-input" className="currency-input">
		<div className="currency-input-code" data-testid="input-code">{props.currencyCode}</div>
		<input data-testid="input-field" type="number" name="currency" min={0} max={props.max} value={props.value} 
			onChange={props.change} readOnly={props.readonly} />
	</div>
}

export default CurrencyInput;