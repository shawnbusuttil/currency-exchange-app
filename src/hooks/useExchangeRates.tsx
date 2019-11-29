import { useState, useEffect } from "react";

const useExchangeRates = (base: string, currencyCodes: string[]) => {
	const [result, setResult] = useState<{ isBusy: boolean, rates?: {}, error?: string}>({
		isBusy: true
	});

	useEffect(() => {
		async function fetchRates() {
			const response = await fetch(`https://api.exchangeratesapi.io/latest
				?app_id=2dc62285c3d3417d98f3fb237de049aa
				&base=${base}
				&symbols=${currencyCodes.join(",")}`);
			const data = await response.json();

			if (response.type === "error") {
				setResult({
					error: data.error,
					isBusy: false
				});
				return;
			}

			setResult({ rates: data.rates, isBusy: false });
		}

		fetchRates();
		const interval = setInterval(fetchRates, 10000);
		return () => clearInterval(interval);
	}, [base]);

	return result;
}

export default useExchangeRates;