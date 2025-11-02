import { useState } from "react";

export default function useModal(initialState = false) {
  const [modalState, setModalState] = useState(initialState);

  const open = () => setModalState(true);
  const close = () => setModalState(false);

  return { modalState, setModalState, open, close };
}
