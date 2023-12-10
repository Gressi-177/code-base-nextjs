import * as React from 'react';
const SvgTwitter = ({ title, titleId, ...props }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#twitter_svg__a)" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9.333 9.333 12.711 17.334h4.623L13.956 9.333H9.333Z" fill="#fff" />
      <path d="m9.333 26.667 7.332-7.332m2.665-2.665 7.337-7.337" strokeWidth={1.5} />
    </g>
    <defs>
      <clipPath id="twitter_svg__a">
        <path fill="#fff" transform="translate(5 5)" d="M0 0h26v26H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTwitter;
