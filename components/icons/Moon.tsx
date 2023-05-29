type Props = {
  className: string;
};

const Moon = (props: Props) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className={props.className}>
      <circle cx="9" cy="9" r="8"></circle>
      <circle cx="14" cy="4" r="8" className="fill-neutral-800"></circle>
    </svg>
  );
};

export default Moon;
