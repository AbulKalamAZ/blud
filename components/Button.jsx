const Button = ({
  link,
  text,
  newWindow,
  fontSize = "text-lg md:text-xl",
  className,
}) => {
  return (
    <a
      href={link}
      target={newWindow === true ? "_blank" : ""}
      className={`relative inline-block ${fontSize} z-40 `}
    >
      <span
        className={`relative z-10 block px-5 py-3 overflow-hidden font-ExtraBoldCond leading-tight text-white border-2 border-white rounded-lg hover:bg-white transition-all duration-300 hover:text-black cursor-pointer ${className}`}
      >
        {text}
      </span>
    </a>
  );
};

export default Button;
