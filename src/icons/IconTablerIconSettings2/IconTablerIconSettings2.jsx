/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconTablerIconSettings2 = ({ color = "#131313", className }) => {
  return (
    <svg
      className={`icon-tabler-icon-settings-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.25 4.17998C13.4791 4.31029 13.6694 4.4993 13.8012 4.72755C13.933 4.95581 14.0016 5.21507 14 5.47865V10.3346C14 10.874 13.7047 11.3713 13.228 11.6333L8.728 14.48C8.5049 14.6025 8.25451 14.6667 8 14.6667C7.74549 14.6667 7.4951 14.6025 7.272 14.48L2.772 11.6333C2.53878 11.5059 2.34408 11.3181 2.20827 11.0896C2.07247 10.8612 2.00053 10.6004 2 10.3346V5.47798C2 4.93865 2.29533 4.44198 2.772 4.17998L7.272 1.52665C7.50169 1.40001 7.75971 1.33359 8.022 1.33359C8.28429 1.33359 8.54231 1.40001 8.772 1.52665L13.272 4.17998H13.25Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
      <path
        className="path"
        d="M6 7.99999C6 8.53042 6.21071 9.03913 6.58579 9.4142C6.96086 9.78928 7.46957 9.99999 8 9.99999C8.53043 9.99999 9.03914 9.78928 9.41421 9.4142C9.78929 9.03913 10 8.53042 10 7.99999C10 7.46956 9.78929 6.96085 9.41421 6.58578C9.03914 6.2107 8.53043 5.99999 8 5.99999C7.46957 5.99999 6.96086 6.2107 6.58579 6.58578C6.21071 6.96085 6 7.46956 6 7.99999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconTablerIconSettings2.propTypes = {
  color: PropTypes.string,
};
