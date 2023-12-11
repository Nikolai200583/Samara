
interface NewTodoFormPropsSelect { 
  setSortSelect: (str: string) => void, 
}
export const Select: React.FC<NewTodoFormPropsSelect> =({setSortSelect}) => {
  return (
    <div className="selectBox center">    
      <select onChange={(e) => setSortSelect(e.target.value)} className="select">
        <option value="дешевые">сперва дешевые</option>
        <option value="дорогие">сперва дорогие</option>
      </select>
    </div>
  );
};
