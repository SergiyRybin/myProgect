import { Component } from "react";
import { createPortal } from "react-dom";
import s from "../Modal/Modal.module.css";

const modalRoot = document.querySelector("#modal");

interface IClass {
  children: string;
  escClose(): void;
  onClose(): void
}


class Modal extends Component<IClass> {
  componentDidMount() {
    window.addEventListener("keydown", this.escClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.escClose);
  }

  escClose = (e: KeyboardEvent): void => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  bacdropClose = (e: Event) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} 
      // onClick={this.bacdropClose}
      >
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot as HTMLDivElement
    );
  }
}

export default Modal;
