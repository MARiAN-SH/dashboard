import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    ButtonSetting,
    NavBar,
    SideBar,
    ThemeSettings,
    Footer,
} from "./components";

import {
    Ecommerce,
    Orders,
    Calendar,
    Employees,
    Stacked,
    Customers,
    Kanban,
    Area,
    Bar,
    Line,
    Financial,
    Pie,
    ColorMapping,
    ColorPicker,
    Pyramid,
    Editor,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";
import { drawings } from "@syncfusion/ej2";

const App = () => {
    const { activeMenu } = useStateContext();
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <ButtonSetting />

                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <SideBar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <SideBar />
                        </div>
                    )}
                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full ${
                            activeMenu ? "md:ml72" : "w-full"
                        }`}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <NavBar />
                        </div>
                    </div>
                    <div className="">
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<Ecommerce />} />
                            <Route path="/ecommerce" element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/customers" element={<Customers />} />

                            {/* Pages */}
                            <Route path="/kanban" element={<Kanban />} />
                            <Route path="/editor" element={<Editor />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route
                                path="/color-piker"
                                element={<ColorPicker />}
                            />

                            {/* Chsrts */}
                            <Route path="/line" element={<Line />} />
                            <Route path="/area" element={<Area />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/financial" element={<Financial />} />
                            <Route
                                path="/color-maping"
                                element={<ColorMapping />}
                            />
                            <Route path="/pyramid" element={<Pyramid />} />
                            <Route path="/stacked" element={<Stacked />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
