import React from "react";
import { RenderResult, render } from "@testing-library/react";

import CurrencyInput from "./CurrencyInput";

describe("CurrencyInput", () => {
	let wrapper: RenderResult;

	it("should show the currency code", () => {
		wrapper = render(<CurrencyInput currencyCode="GBP" max={100} value={"50"} change={jest.fn()} readonly />)
		
		expect(wrapper.getByTestId("input-code").textContent).toEqual("GBP");

		const inputField = wrapper.getByTestId("input-field") as HTMLInputElement;

		expect(inputField.max).toEqual("100");
		expect(inputField.value).toEqual("50");
		expect(inputField.readOnly).toEqual(true);
	});
});