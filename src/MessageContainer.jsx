import ChatBubble from "./ChatBubble";
function MessageContainer() {
  return (
    <div className="messageContainer">
      <div className="messageContainer-spacer"></div>
      <ChatBubble message="Hello, my name is Epithet (bear with the slow response times please, I am running the ai on free tier backends. Also note that this is a preview, it WILL give unexpected responses)" alignment="Left"/>
    </div>
  );
}

export default MessageContainer;