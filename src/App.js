import Modal from "./Compopnents/Modal/Modal";
import { useModalStore } from "./Compopnents/Modal/useModalStore";
import { Books } from "./Pages/Books";
import { Cakes } from "./Pages/Cakes";

function App() {
  const { setToggleModal, setModalPayload } = useModalStore((store) => ({
    setModalPayload: store.setModalPayload,
    setToggleModal: store.setToggleModal,
  }));

  return (
    <>
      <Modal />
      <button
        onClick={() => {
          setModalPayload(<Cakes />);
          setToggleModal("block");
        }}
      >
        Cakes
      </button>
      <button
        onClick={() => {
          setModalPayload(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo enim, blanditiis nulla sint architecto, iste cumque voluptate"
          );
          setToggleModal("block");
        }}
      >
        Tekst
      </button>

      <button
        onClick={() => {
          setModalPayload(<Books />);
          setToggleModal("block");
        }}
      >
        Books
      </button>
    </>
  );
}

export default App;
