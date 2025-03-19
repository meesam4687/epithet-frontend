function ChatBubble(props) {
  return (
    <div className={"chatBubble"+props.alignment}>
      <p>{props.message}</p>
    </div>
  )
}

export default ChatBubble