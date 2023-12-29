import React from "react";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const ButtonSetting = () => {
    return (
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="TopCenter">
                <button
                    type="button"
                    className="text-3xl p-3
                            hover:drop-shadow-xl hover:bg-light-gray text-white"
                    style={{
                        background: "green",
                        borderRadius: "50%",
                    }}>
                    <FiSettings />
                </button>
            </TooltipComponent>
        </div>
    );
};

export default ButtonSetting;
