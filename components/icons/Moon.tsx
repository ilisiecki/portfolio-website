type Props = {
  className: string;
};

const Moon = (props: Props) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className={props.className}>
      <mask id="moon-mask-main-nav">
        <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
        <circle cx="10" cy="2" r="8" fill="black"></circle>
      </mask>
      <circle
        cx="9"
        cy="9"
        fill="var(--color-text)"
        mask="url(#moon-mask-main-nav)"
        r="8"
      ></circle>
    </svg>
  );
};

export default Moon;
