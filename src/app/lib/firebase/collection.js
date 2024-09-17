import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import db from "./firebase.config";

export const addData = async (data) => {
  try {
    const response = await addDoc(collection(db, "wishes"), {
      ...data,
      project: "UNDANGAN_REIKI",
    });
  } catch (e) {
    console.error("Gagal menambahkan data", e);
  }
};

export const getAllData = async (projectName) => {
  try {
    const q = query(
      collection(db, "wishes"),
      where("project", "==", projectName)
    );
    let data = [];
    const response = await getDocs(q);
    response.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (e) {
    console.error("Gagal mendapatkan semua data", e);
  }
};
