type Props = {
  className: string;
};

const Sun = (props: Props) => {
  return (
    <svg width="19" height="18" viewBox="0 0 18 18" className={props.className}>
      <circle cx="9" cy="9" r="5"></circle>
      <circle cx="17" cy="9" r="1.5"></circle>
      <circle cx="14" cy="16" r="1.5"></circle>
      <circle cx="5" cy="16" r="1.5"></circle>
      <circle cx="1" cy="9" r="1.5"></circle>
      <circle cx="5" cy="2.0" r="1.5"></circle>
      <circle cx="13" cy="2.0" r="1.5"></circle>
    </svg>
  );
};

export default Sun;
