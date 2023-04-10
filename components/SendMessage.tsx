import { sendMessage } from "@/services/emailService";
import { Input, Button, Typography, Divider } from "antd";
import { useState } from "react";

const { TextArea } = Input;
const { Title, Text } = Typography;

export default function SendMessage() {
    const [error, setError] = useState<string>();
    const [successMsg, setSuccessMsg] = useState<string>();
    const [message, setMessage] = useState<string>("");

    const onSend = async () => {
        setError(undefined);
        setSuccessMsg(undefined);
        if (!message || message.trim().length === 0) {
            setError("Please write a message before sending");
            return;
        }
        await sendMessage(
            message, 
            () => {
                setMessage("");
                setSuccessMsg("Sent successfully ✔️");
                setError(undefined);
            },
            (errMsg: string) => { 
                setSuccessMsg(undefined);
                setError(errMsg);
            }
        );
    }

    return (
        <div id="contact">
            <Divider
                orientation="left" 
                orientationMargin="0"
            >
                <Typography>
                    <Title>Get In Touch</Title>
                </Typography>
            </Divider>
            {error ? 
                <div>
                    <Text style={{ color: "red", fontSize: "17px" }}>
                        {error}
                    </Text>
                    <div style={{ height: 20 }} />
                </div>
                : 
                <div />
            }
            {successMsg ?
                <div>
                    <Text style={{ color: "#64ffda", fontSize: "17px" }}>
                        {successMsg}
                    </Text>
                    <div style={{ height: 20 }} />
                    <br />
                </div>
                : 
                <div />
            }
            <div style={{ textAlign: "center" }}>
                <TextArea 
                    id="message-textbox" 
                    rows={8} 
                    placeholder="Write your message here"
                    showCount
                    maxLength={1000}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                />
                <br />
                <br />
                <Button size="large" style={{ color: "#64ffda" }} onClick={onSend}>Send</Button>
            </div>
        </div>
    );
}