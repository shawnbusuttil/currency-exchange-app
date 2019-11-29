import React from "react";
import { RenderResult, render } from "@testing-library/react";

import PocketBalance from "./PocketBalance";

describe("PocketBalance", () => {
	let wrapper: RenderResult;

	it("should show the pocket balance", () => {
		wrapper = render(<PocketBalance symbol="£" balance={40} />)
		expect(wrapper.getByTestId("pocket-balance").textContent).toEqual("You have £40.00.");
	});
});