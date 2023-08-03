import axios from "axios";

export const createCard = async (cards, setCards) => {
  try {
    const res = await axios.post("http://localhost:8000/notes/newnote");
    if (res.status === 200) {
      console.log("nota creada:", res.data);
      setCards((prev) => [...prev, res.data]);
    }
  } catch (error) {
    console.log("error in creating note:", error);
  }
};

export const getAllCards = async (setCards) => {
  try {
    const res = await axios.get("http://localhost:8000/notes");
    console.log("notas obtenidas:", res.data);
    if (res.status === 200) {
      setCards(res.data);
    }
  } catch (error) {
    console.log("error in getting all notes:", error);
  }
};
