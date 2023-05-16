import * as React from "react";
const BackIcon = (props) => (
    <svg
        width={30}
        height={30}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <mask
            id="mask0_606_496"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={40}
            height={40}
        >
            <rect width={40} height={40} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_606_496)">
            <path
                d="M20.001 33.334L6.66797 20.001L20.001 6.66797L21.959 8.62597L11.959 18.626H33.334V21.376H11.959L21.959 31.376L20.001 33.334Z"
                fill="#532D63"
            />
        </g>
    </svg>
);
export default BackIcon;
