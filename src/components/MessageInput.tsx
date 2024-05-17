import { useState } from "react";

function MessageInput({ send }: { send: (value: string) => void }) {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => send(value)}>send</button>
    </div>
  );
}

export default MessageInput;
