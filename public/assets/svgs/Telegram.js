import * as React from 'react';
const SvgTelegram = ({ title, titleId, ...props }) => (
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
    <path
      d="M29.958 8.701 25.587 27c-.206.861-1.157 1.305-1.937.896l-5.527-2.898-2.614 4.343c-.711 1.184-2.511.67-2.511-.713v-4.84c0-.375.154-.732.42-.993L24.19 12.35c-.009-.131-.146-.244-.283-.148l-12.854 9.087-4.32-2.263c-1.01-.53-.968-2.02.078-2.48l21.296-9.428c1.02-.453 2.116.479 1.85 1.584Z"
      fill="#fff"
    />
  </svg>
);
export default SvgTelegram;
