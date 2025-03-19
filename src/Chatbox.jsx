import { useState } from 'react';
import sendButton from './assets/icons/sendButton.svg';
let i = 0
function Chatbox() {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const messageContainer = document.querySelector('.messageContainer');
    if (messageContainer) {
      const chatBubble = document.createElement('div');
      chatBubble.className = 'chatBubbleRight';
      const chatBubbleP = document.createElement('p');
      chatBubbleP.innerHTML = document.querySelector('.chatInput').value;
      chatBubble.appendChild(chatBubbleP);
      messageContainer.appendChild(chatBubble);
    }
    setInputValue('');
    document.querySelector('.messageContainer').scrollTo(0, document.querySelector('.messageContainer').scrollHeight);
    setTimeout(() => {
      const responseChatBubble = document.createElement('div');
      responseChatBubble.className = 'chatBubbleLeft';
      responseChatBubble.id = i
      const responseChatBubbleP = document.createElement('p');
      responseChatBubbleP.innerHTML = `
      <svg height="10" width="40" class="loader">
      <circle class="dot" cx="10" cy="4" r="3" style="fill:#232634;" />
      <circle class="dot" cx="20" cy="4" r="3" style="fill:#232634;" />
      <circle class="dot" cx="30" cy="4" r="3" style="fill:#232634;" />
      </svg>
      `;
      responseChatBubble.appendChild(responseChatBubbleP);
      messageContainer.appendChild(responseChatBubble);
      document.querySelector('.messageContainer').scrollTo(0, document.querySelector('.messageContainer').scrollHeight);
      fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: '4687',
          prompt: inputValue,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          document.getElementById(i).innerHTML = `<p>${data.response}</p>`
          i = i+1
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, 1500);
  };

  return (
    <div className="chatbox" onClick={() => document.querySelector('.chatInput').focus()}>
      <div className="textContainer">
        <input
          type="text"
          className="chatInput"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
      </div>
      <div className="sendButton clickable" onClick={handleSendMessage}>
        <img className='buttonIcon' src={sendButton} alt="Send" />
      </div>
    </div>
  );
}

export default Chatbox;