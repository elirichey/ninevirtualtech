const DocumentOutline = ({ className }) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      className={className}
      //stroke="currentColor"
    >
      <path
        d="M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
      <path
        d="M256,56V176a32,32,0,0,0,32,32H408"
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinejoin: "round",
          strokeWidth: "32px",
        }}
      />
    </svg>
  );
};

export default DocumentOutline;
