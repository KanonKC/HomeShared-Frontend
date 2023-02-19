import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'

const PacketCard = ({className}) => {
    return (
        <Card body className={className}>
            <CardTitle tag="h5">
                Special Title Treatment
            </CardTitle>
            <CardText>
                With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
                Go somewhere
            </Button>
        </Card>
    )
}

export default PacketCard