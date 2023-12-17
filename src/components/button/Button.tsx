interface ItemsProps {
  handleAction: () => void;
  textButton: string; 
}

export const Button = ({ handleAction, textButton}: ItemsProps) => {
  return (
    <button className="button" onClick={handleAction} style={{ backgroundColor: textButton === "Уже в корзине" ? '#00A82D' : '#296DC1' }}>
      {textButton}
    </button>
  );
};
