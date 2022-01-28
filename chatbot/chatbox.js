import { useEffect } from "react";
import { init, cleanup } from "../chatbot/chatbot";

export default function Chatbox() {
  useEffect(() => {
    console.log("Chatbox");
    init();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
}