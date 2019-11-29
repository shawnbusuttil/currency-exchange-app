import React, { useState } from "react";

import Pocket from "../../components/pocket/Pocket";
import Keypad from "../../components/keypad/Keypad";
import ExchangeRate from "../../components/exchange-rate/ExchangeRate";
import PocketSwitcher from "../../components/pocket-switcher/PocketSwitcher";

import useExchangeRates from "../../hooks/useExchangeRates";

import "./PocketManager.scss";

const PocketManager = () => {
	const [wallet, setWallet] = useState({
		"GBP": { code: "GBP", symbol: "£", balance: 100 },
		"EUR": { code: "EUR", symbol: "€", balance: 100 },
		"USD": { code: "USD", symbol: "$", balance: 100 }
	});

	const currencyCodes = Object.keys(wallet);

	const [baseValue, setBaseValue] = useState(0);
	const [sourceCurrency, setSourceCurrency] = useState("GBP");
	const [targetCurrency, setTargetCurrency] = useState("EUR");

	const { rates, isBusy } = useExchangeRates(sourceCurrency, currencyCodes);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		makeExchange(baseValue, rates![targetCurrency]);
		setBaseValue(0);
	};

	const makeExchange = (value: number, rate: number) => {
		const conversion = value * rate;
		const srcBalance = wallet[sourceCurrency].balance;
		const trgBalance = wallet[targetCurrency].balance;

		setWallet({
			...wallet,
			[sourceCurrency]: { ...wallet[sourceCurrency], balance: srcBalance - value },
			[targetCurrency]: { ...wallet[targetCurrency], balance: trgBalance + conversion }
		});
	}

	if (rates && !isBusy) {
		return <form className="pocket-manager" data-testid="pocket-manager" onSubmit={(e) => handleSubmit(e)}>
			<div className="pocket-manager-bar">
				<ExchangeRate fromSymbol={wallet[sourceCurrency].symbol}
					toSymbol={wallet[targetCurrency].symbol} rate={rates[targetCurrency].toFixed(2)} />
				<button data-testid="submit-btn">Exchange</button>
			</div>
			<div className="pocket-manager-group">
				<PocketSwitcher onPocketSwitch={(idx: number) => setSourceCurrency(currencyCodes[idx])} >
					{currencyCodes.map(key => <Pocket key={key} code={wallet[key].code} symbol={wallet[key].symbol}
						amount={baseValue.toFixed(2)} balance={wallet[key].balance}
						onChange={(val) => setBaseValue(val)} readonly={false} />)}
				</PocketSwitcher>
				<PocketSwitcher onPocketSwitch={(idx: number) => setTargetCurrency(currencyCodes[idx])} selectedIdx={1}>
					{currencyCodes.map(key => <Pocket key={key} code={wallet[key].code} symbol={wallet[key].symbol}
						amount={(baseValue * rates[targetCurrency]).toFixed(2)} balance={wallet[key].balance} readonly />)}
				</PocketSwitcher>
			</div>
			<Keypad />
		</form>;
	}
	else return <div>Rates could not be fetched.</div>;
}

export default PocketManager;