import { XMarkIcon } from "@heroicons/react/20/solid";

const DrawerHeader = ({ title, onClose }) => {
  return (
    <div className="drawer__header drawer__container">
      <span className="drawer__header__title">{title}</span>
      <button className="drawer__header__close" onClick={onClose}>
        <XMarkIcon />
      </button>
    </div>
  );
};

export default DrawerHeader;
