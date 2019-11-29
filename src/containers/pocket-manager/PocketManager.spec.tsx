import React from "react";
import { RenderResult, fireEvent, render, waitForElement, getByTestId } from "@testing-library/react";

import PocketManager from "./PocketManager";

describe("PocketManager", () => {
	let wrapper: RenderResult;

	beforeEach(() => {
		wrapper = render(<PocketManager />);
	});
	
	it("should have two pocket switchers", async () => {
		window.fetch = jest.fn().mockImplementation(() => ({
			json: () => Promise.resolve({
				base: "GBP",
				rates: {
					"EUR": 1.17,
					"USD": 1.20,
					"GBP": 1
				}
			})
		}));

		await waitForElement(() => wrapper.getByTestId("pocket-manager"));
		
		expect(wrapper.getAllByTestId("pocket-switcher").length).toEqual(2);
	});

	describe("when an amount is converted", () => {
		it("should update the wallet balances", () => {
			const input = wrapper.getAllByTestId("input-field")[0];
			fireEvent.change(input, { target: { value: 20 } });

			const form = wrapper.getByTestId("pocket-manager");
			fireEvent.submit(form);

			expect(wrapper.getAllByTestId("pocket-balance")[0].textContent).toContain(80.00);
			expect(wrapper.getAllByTestId("pocket-balance")[1].textContent).toContain(100 + (20 * 1.17));
		});
	});
});