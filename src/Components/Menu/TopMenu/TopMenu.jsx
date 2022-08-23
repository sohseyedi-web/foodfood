import { useState } from "react";
import Select from "react-select";
import { RiSearch2Line } from "react-icons/ri";
import "./TopMenu.scss";

const rangeOptions = [
  { value: "highest", label: "گران ترین" },
  { value: "lowest", label: "ارزان ترین" },
];
const nameOptions = [
  { value: "all", label: "همه" },
  { value: "pizza", label: "پیتزا" },
  { value: "burger", label: "برگر" },
  { value: "chicken", label: "مرغ" },
  { value: "drink", label: "نوشیدنی" },
];

const TopMenu = ({ dispatch }) => {
  const [search, setSearch] = useState("");
  const [range, setRange] = useState("");
  const [name, setName] = useState("");

  const sortHandler = (rangeOptions) => {
    dispatch({ type: "SORT_PRICE", rangeOptions });
    setRange(rangeOptions);
  };
  const sortName = (nameOptions) => {
    dispatch({ type: "SORT_NAME", nameOptions });
    setName(nameOptions);
  };
  return (
    <div className="menu-container__header">
      <form className="menu-container__header-inputs">
        <input
          type="text"
          placeholder="جست و جو ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span>
          <RiSearch2Line size={32} />
        </span>
      </form>
      <div className="menu-container__header-select">
        <Select
          options={rangeOptions}
          placeholder="قیمت ..."
          value={range}
          onChange={sortHandler}
        />
      </div>
      <div className="menu-container__header-select">
        <Select
          options={nameOptions}
          value={name}
          onChange={sortName}
          placeholder="نام ..."
        />
      </div>
    </div>
  );
};

export default TopMenu;
