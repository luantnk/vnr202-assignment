import { createPortal } from "react-dom";

export default function ModalPortal({ open, children }) {
  if (!open) return null;
  return createPortal(children, document.body);
}