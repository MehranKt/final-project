import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
} from "../components";
import { closeMenu } from "../store/drawerSlice";

const MenuDrawer = () => {
  const showMenu = useSelector((state)=> state.drawer.showMenu)
  const dispatch = useDispatch()
  const handleClose = ()=>{
    dispatch(closeMenu())
  }
  return (
    <Drawer isVisible={showMenu} onClose={handleClose} placement="left">
      <DrawerHeader onClose={handleClose} title={"Menu"} />
      <DrawerContent>
        <div>salam</div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
