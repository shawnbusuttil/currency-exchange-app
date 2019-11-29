import React, { useState, ReactElement } from "react";

import "./PocketSwitcher.scss";

interface PocketSwitcher {
	children: ReactElement[];
	onPocketSwitch: (idx: number) => void;
	selectedIdx?: number;
}

const PocketSwitcher = (props: PocketSwitcher) => {
	const [activePocket, setActivePocket] = useState(props.selectedIdx || 0);

	const switchPocket = (idx) => {
		setActivePocket(idx);
		props.onPocketSwitch(idx);
	};

	return <div className="pocket-switcher" data-testid="pocket-switcher">
		{props.children[activePocket]}
		<div className="pocket-switcher-tabs">
			{props.children.map((pocket: any, idx: number) => <div className="pocket-switcher-tabs-item"
				key={idx} data-testid="switcher-tabs"
				onClick={() => switchPocket(idx)}>
				{pocket.props.code}
			</div>)}
		</div>
	</div>
}

export default PocketSwitcher;