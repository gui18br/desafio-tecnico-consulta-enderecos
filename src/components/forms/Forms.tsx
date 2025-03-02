import Buttons from "../buttons/Buttons";
import InputLabel from "../inputLabel/InputLabel";
import Title from "../title/Title";

function Forms() {
  return (
    <form
      action="get"
      className="flex flex-col justify-center text-center w-100%"
    >
      <Title />
      <div>
        <InputLabel />
        <Buttons />
      </div>
    </form>
  );
}

export default Forms;
