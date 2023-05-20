import axios from "axios";
import { ref } from "vue";

export default function useContacts() {
    const contacts = ref([]);

    const getContacts = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/getContacts");
        contacts.value = response.data.data;
    }

    return {
        getContacts
    }
}