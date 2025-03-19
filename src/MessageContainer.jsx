import ChatBubble from "./ChatBubble";
function MessageContainer() {
  return (
    <div className="messageContainer">
      <div className="messageContainer-spacer"></div>
      <ChatBubble message="Hello, my name is Epithet (bear with the slow response times please, i am running the ai on free tier backends)" alignment="Left"/>
    </div>
  );
}

export default MessageContainer;