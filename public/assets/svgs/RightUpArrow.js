import * as React from 'react';
const SvgRightUpArrow = ({ title, titleId, ...props }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      clipPath="url(#right-up-arrow_svg__a)"
      stroke={'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M28.333 11.667 11.667 28.333M13.333 11.667h15v15" />
    </g>
    <defs>
      <clipPath id="right-up-arrow_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRightUpArrow;
