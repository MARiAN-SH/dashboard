import React from "react";
import { Link, NavLink } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";


import { links } from "../data/dummy";
const SideBar = () => {
    const activeMenu = true;

    const actiLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto p-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/"
                            onClick={() => {}}
                            className="items-center  gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                            <SiShopware className="text-3xl" />{" "}
                            <span>Shoppy</span>
                        </Link>
                        <TooltipComponent
                            content="Menu"
                            position="BottomCenter">
                            <button
                                type="button"
                                onClick={() => {}}
                                className="text-3xl router-full hover:drop-shadow-xl hover:bg-light-gray block "
                                style={{ borderRadius: "50%" }}>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="md-10">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}}`}
                                        key={link.name}
                                        onClick={() => {}}
                                        className={({ isActive }) =>
                                            isActive ? actiLink : normalLink
                                        }>
                                        {link.icon}
                                        <span className="capitalize">
                                            {link.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SideBar;
