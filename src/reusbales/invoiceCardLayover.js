import Card from "react-bootstrap/Card";
const AquaInvoiceCardLayover = (props) => {
  return (
    <>
      <Card className="shadow-lg m-5">
        <Card.Body className="m-1">{props.children}</Card.Body>
      </Card>
    </>
  );
};
export default AquaInvoiceCardLayover;
