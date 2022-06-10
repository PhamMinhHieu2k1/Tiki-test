import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import { HeaderContext } from "../store/headerContext";

function DefaultLayout() {
    const [headerContext, setHeaderContext] = useState({ setShowLogin, showLogin: null });
    function setShowLogin(loginFnc) {
        setHeaderContext({ ...headerContext, showLogin: loginFnc });
    }

    return (
        <HeaderContext.Provider value={headerContext}>
            <Header />
            <main className="bg-blue-50">
                <div
                    className="mx-auto"
                    style={{
                        width: "90%",
                        minWidth: "1024px",
                    }}
                >
                    <Outlet />
                </div>
            </main>
            <Footer />
        </HeaderContext.Provider>
    );
}

export default DefaultLayout;
