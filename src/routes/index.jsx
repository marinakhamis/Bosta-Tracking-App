import { Suspense, useEffect } from "react";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";

import { Home, ShipmentDetails } from "../pages/index.js"
import { NavBar } from "../components/index.js";
import { changeHtmlDirection } from "../helpers/index.js";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import i18n from "dayjs/locale/ar";
import i18next from "i18next";

const Layout = () => {
    useEffect(() => {
        changeHtmlDirection(localStorage.getItem("lang"));
        dayjs.locale(i18next.language);
    }, []);
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#e30613",
                    fontFamily: "Cairo, sans-serif",
                },
            }}
        >
            <NavBar />
            <Outlet />
        </ConfigProvider>
    )
};
const Router = () => {
    const router = createBrowserRouter([
        {
            element: (
                <Layout />
            ),
            children: [
                {
                    index: true,
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/tracking-shipments/:id",
                    element: <ShipmentDetails />,
                },

            ],
        },
    ]);

    return (
        <Suspense fallback={<></>}>
            <RouterProvider router={router}></RouterProvider>
        </Suspense>
    );
};

export default Router;
