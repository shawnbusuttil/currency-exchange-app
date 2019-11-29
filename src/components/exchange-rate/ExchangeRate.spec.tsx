import React from "react";
import { RenderResult, render } from "@testing-library/react";

import ExchangeRate from "./ExchangeRate";

describe("ExchangeRate", () => {
	let wrapper: RenderResult;

	it("should show the exchange rate", () => {
		wrapper = render(<ExchangeRate fromSymbol="£" toSymbol="$" rate={1.3} />)
		expect(wrapper.getByTestId("exchange-rate").textContent).toEqual("£1 = $1.3");
	});
});