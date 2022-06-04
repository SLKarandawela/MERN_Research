import React from 'react'
import { Card } from 'react-bootstrap'




const InMessage = () => {
  return (
      <div>
          <Card className='recieveMessage'>
              <h6>Recieved by</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <h6 className='messageTime'>Time</h6>
          </Card>
          
    </div>
  )
}

export default InMessage