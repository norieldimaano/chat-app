import React, { useContext } from 'react'
import Cam from '../images/Cam.png'
import Add from '../images/Add.png'
import More from '../images/More.png'
import Messages from '../components/Messages'
import Input from '../components/Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt=""/>
          <img src={Add}alt=""/>
          <img src={More}alt=""/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat