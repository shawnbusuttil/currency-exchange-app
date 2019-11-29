import React from "react";

interface PocketBalanceProps {
	symbol: string;
	balance: number;
}

const PocketBalance = (props: PocketBalanceProps) => {
	return <p className="pocket-balance" data-testid="pocket-balance">
		You have {props.symbol + props.balance.toFixed(2)}.
	</p>
}

export default PocketBalance;