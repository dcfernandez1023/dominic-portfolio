import axios from "axios";

export const sendMessage = async (message: string, callback: () => void, onErr: (err: string) => void) => {
    try {
        const res = await axios.post("/api/sendEmail", { message: message });
        if (res.status !== 200) {
            onErr(res.data.message);
        } else {
            callback();
        }
    } catch (err: any) {
        console.error(err);
        onErr(err.message);
    }
}