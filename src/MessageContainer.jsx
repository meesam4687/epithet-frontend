import ChatBubble from "./ChatBubble";
function MessageContainer() {
  return (
    <div className="messageContainer">
      <div className="messageContainer-spacer"></div>
      <ChatBubble message="Hello, my name is Epithet" alignment="Left"/>
    </div>
  );
}

export default MessageContainer;