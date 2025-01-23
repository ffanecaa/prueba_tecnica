import { RiDeleteBin2Line } from "react-icons/ri";

interface ButtonEliminarProps {
  onClick: () => void;
}
const ButtonEliminar :React.FC<ButtonEliminarProps> = ({ onClick }) => {
  return (
    <div className="btn_eliminar" onClick={onClick}>
      <RiDeleteBin2Line/>
    </div>
  )
}

export default ButtonEliminar




