import Button from "../button/Button";

interface ButtonProps {
  onClickSearchButton?: () => void;
  onClickSaveButton?: () => void;
}

function Buttons(props: ButtonProps) {
  return (
    <div className="flex justify-center gap-2 w-[100%]">
      <Button
        bgColor="bg-blue-700"
        textColor="text-white"
        content="Buscar"
        onClick={props?.onClickSearchButton}
      />
      <Button
        bgColor="bg-green-700"
        textColor="text-white"
        content="Salvar"
        onClick={props.onClickSaveButton}
      />
    </div>
  );
}

export default Buttons;
