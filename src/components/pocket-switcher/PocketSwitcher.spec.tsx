import React from "react";
import { RenderResult, render, fireEvent } from "@testing-library/react";

import PocketSwitcher from "./PocketSwitcher";

import Pocket from "../pocket/__mocks__/Pocket";

describe("PocketSwitcher", () => {
	let wrapper: RenderResult;
	
	beforeEach(() => {
		wrapper = render(<PocketSwitcher selectedIdx={1} onPocketSwitch={jest.fn()}>
			<Pocket code={"GBP"} />
			<Pocket code={"USD"} />
		</PocketSwitcher>)
	});

	it("should show the active pocket", () => {
		expect(wrapper.getByTestId("pocket").textContent).toEqual("USD");
	});

	it("should show the pocket tabs", () => {
		const codes = ["GBP", "USD"];
		const tabs = wrapper.getAllByTestId("switcher-tabs");

		expect(tabs.length).toEqual(2);
		tabs.map((t, i) => expect(t.textContent).toEqual(codes[i]));
	});

	describe("when a pocket is changed", () => {
		it("should switch to that pocket", () => {
			const tab = wrapper.getAllByTestId("switcher-tabs")[0];
			fireEvent.click(tab);

			expect(wrapper.getByTestId("pocket").textContent).toEqual("GBP");
		});
	});
});