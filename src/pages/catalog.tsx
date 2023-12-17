import { CatalogItemsBox } from "../components/catalogItems/catalogItemsBox";
import { Select } from "../components/select/select";
import { Header } from "../components/header/header";
import { useState } from "react";

export const Catalog = () => {
  const [sort, setSort] = useState("");

  return (
    <div className="wrapper">
      <Header title={"Каталог"} />
      <Select setSortSelect={setSort} />
      <CatalogItemsBox sort={sort} />
    </div>
  );
};
