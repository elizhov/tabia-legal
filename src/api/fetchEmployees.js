import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchEmployees = async () => {
    try {
        const colRef = collection(db, "employees");
        const q = query(colRef, orderBy("createdAt", "asc"));
        const snapshot = await getDocs(q);
        const employees = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return employees;
    } catch (error) {
        console.error("Error fetching employees:", error);
        return [];
    }
};