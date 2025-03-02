interface InputProps {
  id: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputLabel(props: InputProps) {
  return (
    <div className="mb-5">
      <label className="text-black mr-2">CEP</label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="bg-blue-50 text-black rounded-sm p-1 border-black border-1"
      />
    </div>
  );
}

export default InputLabel;
