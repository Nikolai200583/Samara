
interface NewTodoFormPropsSelect { 
  setSortSelect: (str: string) => void, 
}
export const Select: React.FC<NewTodoFormPropsSelect> =({setSortSelect}) => {
  return (
    <div className="selectBox center">
      <h1 className="selectBox__main-title">Каталог товаров</h1>    
      {/* <select onChange={(e) => setSortSelect(e.target.value)} className="selectBox__select">
        <option value="дешевые">сперва дешевые</option>
        <option value="дорогие">сперва дорогие</option>
      </select> */}
    </div>
  );
};
