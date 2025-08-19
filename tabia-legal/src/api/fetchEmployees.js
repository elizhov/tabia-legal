import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchEmployees = async () => {
    try {
        const colRef = collection(db, "employees");
        const snapshot = await getDocs(colRef);
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
