import { useRoutes } from "react-router-dom";

import router from "./routes/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLogin } from "./store/user";

import "./App.css";

function App() {
    const routes = useRoutes(router);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(autoLogin());
    }, []);

    return <div className="App">{routes}</div>;
}

export default App;
