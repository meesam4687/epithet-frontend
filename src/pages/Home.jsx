import Navbar from '../Navbar'
import Chatbox from '../Chatbox'
import MessageContainer from '../MessageContainer'
import { Analytics } from "@vercel/analytics/react"

async function Home() {
  if (!localStorage.getItem('token')) {
    window.location.href = '/login';
  }

  await fetch('https://meesam4687-epithet.hf.space/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password'),
      token: localStorage.getItem('token'),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== 'ok') {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.href = '/login';
      }
    })
  return (
    <div className='main'>
      <Navbar />
      <MessageContainer />
      <Chatbox />
      <Analytics />
    </div>
  )
}

export default Home;
