import { useState } from "react";
import Dropdown from "./ui/Dropdown";
import Input from "./ui/Input";
import { months, years } from "../utils/data";

const Card = () => {
  const [person, setPerson] = useState<string>("");
  const [num, setNum] = useState<number>();
  const [month, setMonth] = useState<string>("AA");
  const [year, setYear] = useState<string>("YY");
  const [cvv, setCvv] = useState<number>(0);

  const handleSubmit = () => {
    alert(`Kart Bilgileri:
      Kart Üzerindeki İsim  : ${person}
      Kart Numarası         : ${num}
      Son Kullanma          : ${month}/${year}
      Güvenlik Kodu         : ${cvv}`);
  };

  return (
    <div className="border-2 p-6 max-w-lg rounded-lg border-slate-200">
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div>
          <h2 className="text-3xl font-semibold">Ödeme Bilgileri</h2>
          <p className="text-lg text-slate-500">
            Kredi kartı bilgilerinizi giriniz
          </p>
        </div>
        <Input
          title={"Kart Üzerindeki İsim"}
          placeHolder={"Ahmet Yılmaz"}
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          maxLength={50}
        />
        <Input
          title={"Kart Numarası"}
          placeHolder={"0000 0000 0000 0000"}
          value={num || ""}
          onChange={(e) => setNum(Number(e.target.value))}
          maxLength={16}
        />
        <div className="flex gap-4">
          <Dropdown
            title={"Ay"}
            default={"AA"}
            value={month}
            options={months}
            onChange={(e) => setMonth(e.target.value)}
          />
          <Dropdown
            title={"Yıl"}
            default={"YY"}
            value={year}
            options={years}
            onChange={(e) => setYear(e.target.value)}
          />
          <Input
            title={"Güvenlik Kodu"}
            placeHolder={"123"}
            value={cvv || ""}
            onChange={(e) => setCvv(Number(e.target.value))}
            maxLength={3}
          />
        </div>
        <button
          className="bg-gray-950 p-2 w-sm md:w-md text-white font-base rounded"
          type="submit"
        >
          Şimdi Öde
        </button>
      </form>
    </div>
  );
};

export default Card;
