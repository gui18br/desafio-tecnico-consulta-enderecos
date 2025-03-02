import Button from "../button/Button";

function Buttons() {
  return (
    <div className="flex justify-center gap-2 w-[100%]">
      <Button bgColor="bg-blue-700" textColor="text-white" content="Buscar" />
      <Button bgColor="bg-green-700" textColor="text-white" content="Salvar" />
    </div>
  );
}

export default Buttons;
