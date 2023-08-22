import Card from 'react-bootstrap/Card';
const AquaCardLayover = (props) => {
    const {title} = props
    return (
        <>
            <Card className='shadow-lg m-5'>
                <Card.Body className='m-1'>
                    <Card.Title className='display-6'>{title}</Card.Title>
                    <hr/>
                    {props.children}
                </Card.Body>
            </Card>
        </>
    )
}
export default AquaCardLayover