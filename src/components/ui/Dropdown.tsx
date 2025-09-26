type Props = {
  title: string;
  value: string;
  default: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = (props: Props) => {
  return (
    <div className="flex-1 grid gap-2">
      <p className="font-semibold">{props.title}</p>
      <select
        className="border-2 border-slate-200 rounded p-2 px-3 focus:outline-slate-300"
        value={props.value}
        onChange={props.onChange}
      >
        <option value={props.default} disabled>
          {props.value}
        </option>
        {props.options.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
