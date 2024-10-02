/* eslint-disable no-unused-vars */
import { doc, getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
import { app } from "./config";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getProducts = async (setItems) => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const items = [];

  querySnapshot.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    items.push(data);
  });
  setItems(items);
};

export const getSingleProduct = async (id) => {
  const docRef = doc(db, "productos", id);
  const querySnapshot = await getDoc(docRef);

  if (querySnapshot.exists()) return querySnapshot.data();
};

export const getTags = async (setCategories) => {
  const docRef = doc(db, "tags", "dCoD7qyV0YsxesHcIM3D");
  const querySnapshot = await getDoc(docRef);

  if (querySnapshot.exists()) {
    const data = querySnapshot.data();
    const tagArray = data.tags;
    setCategories(tagArray);
  }
};
