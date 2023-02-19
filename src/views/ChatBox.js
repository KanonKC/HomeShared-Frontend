import React, { createContext, useEffect, useState } from 'react'
import CreateCard from '../components/CreateCard'
import PacketCard from '../components/PacketCard'
import { getAllPackets } from '../services/packet.service'

export const UpdateContext = createContext()

const ChatBox = () => {

  const [packets, setpackets] = useState([])
  const [updateAlert, setupdateAlert] = useState(false)


  useEffect(() => {
    getAllPackets().then(response => {
      setpackets(response.data.packets)
    })
  }, [updateAlert])

  return (
    <div>
      <UpdateContext.Provider value={[updateAlert, setupdateAlert]}>

        <h1 className='mt-10'>HomeShared</h1>
        <CreateCard className={'mx-auto mt-10 w-3/4'} />
        <div>
          {
            packets.reverse().map(packet => (<PacketCard className={'mx-auto mt-10 w-3/4'} text={packet.message} file_url={packet.file} time={packet.time} />))
          }
        </div>
      </UpdateContext.Provider>
    </div>

  )
}

export default ChatBox