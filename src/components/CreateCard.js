import React, { useContext, useState } from 'react'
import { AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, CardText, CardTitle, Form, FormGroup, Input, Label, UncontrolledAccordion } from 'reactstrap'
import Swal from 'sweetalert2'
import { createPacket } from '../services/packet.service'
import { UpdateContext } from '../views/ChatBox'

const CreateCard = ({ className,onSubmit }) => {
    const [textrow, settextrow] = useState(2)
    const [updateAlert, setupdateAlert] = useContext(UpdateContext)

    const textChange = (e) => {
        settextrow(e.target.value.split('\n').length + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('message',e.target.message.value)
        if(e.target.file.files.length !== 0){
            formData.append('file',e.target.file.files[0])
        }
        createPacket(formData).then(response => {
            setupdateAlert(!updateAlert)
            Swal.fire(
                'Success!',
                'Your packet has been submitted',
                'success'
              )
        })
    }

    return (
        <div className={className}>
            <UncontrolledAccordion>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        Create New Packet
                    </AccordionHeader>
                    <AccordionBody style={{ visibility: "visible" }} accordionId="1">
                        {/* <Card body > */}
                            <Form onSubmit={e => handleSubmit(e)}>
                                <FormGroup>
                                    <div className='text-left'>
                                        <Label size='lg'>Message</Label>
                                    </div>
                                    <Input id='message' onChange={e => textChange(e)} rows={textrow} type='textarea' />
                                </FormGroup>
                                <FormGroup>
                                    <div className='text-left'>
                                        <Label size='lg'>Attach File</Label>
                                    </div>
                                    <Input id='file' type='file' />
                                </FormGroup>

                                <div className='text-right'>
                                    <Button color='success' type='submit' size='lg'>
                                        Share
                                    </Button>
                                </div>
                            </Form>
                        {/* </Card> */}
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>

        </div>
    )
}

export default CreateCard