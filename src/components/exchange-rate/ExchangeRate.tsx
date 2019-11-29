import React from "react";

import "./ExchangeRate.scss";

interface ExchangeRateProps {
	fromSymbol: string;
	toSymbol: string;
	rate: number;
}

const ExchangeRate = (props: ExchangeRateProps) => {
	return <div className="exchange-rate" data-testid="exchange-rate">
		{`${props.fromSymbol}1 = ${props.toSymbol}${props.rate}`}
	</div>
}

export default ExchangeRate;