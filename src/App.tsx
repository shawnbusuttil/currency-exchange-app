import React, { FC } from "react";

import "./App.scss";

import PocketManager from "./containers/pocket-manager/PocketManager";

const App: FC = () => {
    return <div className="app">
        <PocketManager />
    </div>
};

export default App;

