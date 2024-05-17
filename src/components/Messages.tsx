function Messages({ messages }: { messages: string[] }) {
  console.log(messages);

  return (
    <div>
      {messages.map((message, index) => {
        return (
          <p key={index} style={{ color: "black" }}>
            {message}
          </p>
        );
      })}
    </div>
  );
}

export default Messages;
