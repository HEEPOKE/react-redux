import { Modal } from "react-bootstrap";
import ModalInterface from "../interface/ModalInterface";

export default function ModalCommon({
  title,
  content,
  show,
  setShow,
}: ModalInterface) {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {content}
    </Modal>
  );
}
