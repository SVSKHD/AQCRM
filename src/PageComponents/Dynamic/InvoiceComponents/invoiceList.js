import InvoiceOperations from "@/services/invoice";
import { useRouter } from "next/navigation";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaShare, FaEdit } from "react-icons/fa";

const AquaInvoicesList = () => {
  const [invoices, setInvoices] = useState([]);
  const { getInvoices } = InvoiceOperations();
  const Router = useRouter();
  useEffect(() => {
    getInvoices()
      .then((res) => {
        setInvoices(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <>
      {invoices.length
        ? invoices.map((r, i) => (
            <Card key={i} className="m-3 shadow-lg">
              <Card.Body>
                <Card.Title>{r.customerDetails.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {r.customerDetails.email}
                </Card.Subtitle>
                <Card.Text>
                  <h5 className="text-muted">Products</h5>
                  <hr />
                  {r.products.map((p, i) => (
                    <div>
                      <h5>
                        {i + 1}:{p.productName}
                      </h5>
                    </div>
                  ))}
                </Card.Text>
                <ButtonGroup size="md">
                  <Button
                    className="text-white"
                    onClick={() =>
                      Router.push(
                        { pathname: `invoice/${r._id}` },
                        { shallow: true }
                      )
                    }
                  >
                    <FaShare size={25} />
                  </Button>
                  <Button>
                    <FaEdit size={25} />
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          ))
        : "No load yet"}
    </>
  );
};
export default AquaInvoicesList;
