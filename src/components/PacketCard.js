import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { BACKEND_URL } from '../services/constant.service'

const PacketCard = ({ className, text, file_url, time="" }) => {

    const [formatted_time,useformatted_time] = useState("")

    useEffect(() => {
        if(time !== ""){
            let spt = time.split('T')
            let t = spt[1].split('.')[0]
            useformatted_time(`${spt[0]} ${t}`)
        }
    },[time])

    return (
        <Card body className={className}>
            <CardText className='mb-0 text-right'>
                <span >
                    { formatted_time }
                </span>
            </CardText>
            <CardTitle className='mb-3' tag="h5">
                {text}
            </CardTitle>
            {file_url &&
                <a href={`${BACKEND_URL}${file_url}`} download>
                    <Button color='primary'>
                        Download Attachment
                    </Button>
                </a>
            }

        </Card>
    )
}

export default PacketCard