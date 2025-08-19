import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config.js"; // adjust path to your firebase config

export const fetchPosts = async () => {
    try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};
