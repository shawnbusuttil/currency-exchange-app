import React from "react";
import { RenderResult, render, fireEvent } from "@testing-library/react";

import Pocket from "./Pocket";

describe("Pocket", () => {
	let wrapper: RenderResult;
	const onChangeMock = jest.fn();

	beforeEach(() => {
		wrapper = render(<Pocket code="GBP" symbol="£" amount={"40.00"}
			balance={60.00} onChange={onChangeMock} readonly={false} />);
	});

	it("should display the currency input", () => {
		expect(wrapper.getByTestId("currency-input")).not.toBeNull();
	});

	it("should display the currency input", () => {
		expect(wrapper.getByTestId("pocket-balance")).not.toBeNull();
	});

	it("calls the handler when given input", () => {
        const mockEvent = {
            target: { value: 50 }
        };

        const input = wrapper.getByTestId("input-field") as HTMLInputElement;
        fireEvent.change(input, mockEvent);
        expect(onChangeMock).toHaveBeenCalledWith(50);
    });
});