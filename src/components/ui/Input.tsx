type Props = {
  title: string;
  value: string | number;
  placeHolder: string;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <div className="grid gap-2">
      <p className="font-semibold">{props.title}</p>
      <input
        className="border-2 border-slate-200 rounded p-2 px-3 focus:outline-slate-300"
        placeholder={props.placeHolder}
        type="text"
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength}
      />
    </div>
  );
};

export default Input;
