import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isHidden } from "../features/snackbar/snackbar";

const SnackBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isOpen, message } = useSelector((state) => state.snackbar);

  useEffect(() => {
    setTimeout(() => dispatch(isHidden()), 5000);
  }, [isOpen]);
  return (
    isOpen && (
      <div className="absolute left-[50%] bottom-2 -translate-x-[50%] -translate-y-[50%]">
        <div className="bg-[#003366] text-white p-2">{message}</div>
      </div>
    )
  );
};

export default SnackBar;
