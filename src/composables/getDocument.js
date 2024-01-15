import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const getDocument = async () => {
  const docRef = doc(db, "pizzas", "tWiq6ICggRJ42AjkHIfV");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
};