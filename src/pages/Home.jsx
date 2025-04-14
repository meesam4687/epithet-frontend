import Navbar from '../Navbar'
import Chatbox from '../Chatbox'
import MessageContainer from '../MessageContainer'
import { Analytics } from "@vercel/analytics/react"

function Home() {
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
