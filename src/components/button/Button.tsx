import "../../index.css";

interface ButtonProps {
  content: string;
  bgColor: string;
  textColor: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${props.bgColor} ${props.textColor} p-2 rounded-md border-1 border-black cursor-pointer
                  transition-opacity duration-300 hover:opacity-90
                  w-[100%]
                `}
    >
      {props.content}
    </button>
  );
};

export default Button;
