const Button = ({ onClick, icon, text, style }) => {
  return (
    <button onClick={onClick} className={`flex items-center space-x-2 ${style} cursor-pointer px-4 py-2 rounded-md  hover:opacity-90 transition`}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
