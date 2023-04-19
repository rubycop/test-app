import React from "react";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../store/modalSlice";

export const Popup = ({ title, children }) => {
  const isOpen = useSelector((state) => state.modal.opened);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal open={isOpen} onClose={() => dispatch(close())}>
        <div className="bg-white p-4 absolute top-1/2 left-1/2 w-1/3 shadow-2xl -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-xl font-semibold mb-10">{title}</h2>
          {children}
        </div>
      </Modal>
    </div>
  );
};
