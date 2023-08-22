import AquaLayout from "../Layout/Layout";
import AquaInput from "../reusbales/AquaInput";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"
import InvoiceOperations from "../services/invoice";
import AquaInvoicesList from "./Dynamic/InvoiceComponents/invoiceList";
import AquaPlaceHolderInput from "../reusbales/AquaPlaceHolderInput";
import AquaCardLayover from "../reusbales/cardLayover";

const InvoiceComponent = () => {
  const [readMode, setReadMode] = useState(false)
  const [gst, setGst] = useState(false)
  const initialData = {
    customerDetails: {
      name: '',
      phone: '',
      email: '',
      address: '',
    },
    gstDetails: {
      gstName: '',
      gstNo: '',
      gstPhone: '',
      gstEmail: '',
      gstAddress: '',
    },
    transport: {
      deliveredBy: '',
      deliveryDate: '',
    },
    gst: gst, // Set an initial value for gst
    products: [
      {
        productName: '',
        productQuantity: '',
        productPrice: '',
        productSerialNo: '',
      }
    ],
    paidStatus: '',
    paymentType: '',
  };

  const [data, setData] = useState(initialData);

  // Common function to handle input changes
  const handleInputChange = (section, field, value, index = null) => {
    setData((prevData) => {
      const newData = { ...prevData };
      if (index !== null) {
        newData[section][index][field] = value;
      } else {
        console.log(newData[section][field])
        newData[section][field] = value;
      }
      return newData;
    });
  };

  const handleAddProduct = () => {
    setData((prevData) => ({
      ...prevData,
      products: [
        ...prevData.products,
        {
          productName: '',
          productQuantity: '',
          productPrice: '',
          productSerialNo: '',
        },
      ],
    }));
  };

  const handleRemoveProduct = (index) => {
    setData((prevData) => {
      const newProducts = [...prevData.products];
      newProducts.splice(index, 1);
      return {
        ...prevData,
        products: newProducts,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    InvoiceOperations().createInvoice(data).then((res)=>{
      console.log(res)
    })
    console.log(data); // You can see the updated data in the console
  };
  return (
    <>
      <AquaLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <AquaCardLayover title="Invoices" >
                <AquaInvoicesList />
              </AquaCardLayover>
            </div>
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <AquaCardLayover title="Create Invoices">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={() => setReadMode(!readMode)}
                  />
                </div>
                <form>





                </form>
                <form onSubmit={handleSubmit}>
                  {/* ... (other input fields) ... */}
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <h4>Customer Details</h4>
                      <hr />
                      <AquaInput
                        label={"Name"}
                        placeholder={"Enter Name"}
                        type={"name"}
                        name="name"
                        value={data.customerDetails.name}
                        handleChange={(e) => handleInputChange('customerDetails', 'name', e.target.value)}
                      />
                      <AquaInput
                        label={"Email"}
                        placeholder={"Enter Email"}
                        type={"email"}
                        name="email"
                        value={data.customerDetails.email}
                        handleChange={(e) => handleInputChange('customerDetails', 'email', e.target.value)}
                      />
                      <AquaInput
                        label={"Phone"}
                        placeholder={"Enter Phone No"}
                        type={"number"}
                        maxlength={"10"}
                        value={data.customerDetails.phone}
                        handleChange={(e) => handleInputChange('customerDetails', 'phone', e.target.value)}
                      />
                      <AquaInput
                        label={"Address"}
                        placeholder={"Enter Address"}
                        type={"address"}
                        value={data.customerDetails.address}
                        handleChange={(e) => handleInputChange('customerDetails', 'address', e.target.value)}
                        Address={true}
                      />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          onChange={() => setGst(!gst)}
                        />
                      </div>
                      {gst ? (
                        <>
                          <h4>GST Details</h4>
                          <hr />
                          <AquaInput
                            label={"Gst Name"}
                            placeholder={"Enter Gst Name"}
                            type={"name"}
                            value={data.gstDetails.gstName}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstName', e.target.value)}
                          />
                          <AquaInput
                            label={"Gst No"}
                            placeholder={"Enter Gst No"}
                            type={"name"}
                            value={data.gstDetails.gstNo}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstNo', e.target.value)}
                          />
                          <AquaInput
                            label={"Gst PhoneNo"}
                            placeholder={"Enter Gst Phone No"}
                            value={data.gstDetails.gstPhone}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstPhone', e.target.value)}
                            type={"number"}
                          />
                          <AquaInput
                            label={"Gst Address"}
                            placeholder={"Enter Gst Address"}
                            type={"address"}
                            value={data.gstDetails.gstAddress}
                            handleChange={(e) => handleInputChange('gstDetails', 'gstAddress', e.target.value)}
                            Address={true}
                          />
                        </>
                      ) : (
                        <>
                          <h4>Switch toggle for Gst details entry</h4>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Products */}
                  <hr />
                  <div className="row text-center">
                    <div className="col"> <Button onClick={handleAddProduct}>Add Product</Button></div>
                    <div className="col"> <h3 className="text-center">Product & Transit Details</h3></div>
                  </div>
                  <hr />

                  <hr />
                  <div>
                    {data.products.length > 1 ? data.products.map((product, index) => (
                      <>
                        <div className="row" key={index}>
                          <div className="col-lg-3 col-md-3">
                            <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Name" value={product.productName}
                              handleChange={(e) => handleInputChange('products', 'productName', e.target.value, index)} />
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Quantity" value={product.productQuantity}
                              handleChange={(e) => handleInputChange('products', 'productQuantity', e.target.value, index)} />
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Price" value={product.productPrice}
                              handleChange={(e) => handleInputChange('products', 'productPrice', e.target.value, index)} />
                          </div>
                          <div className="col-lg-2 col-md-2">
                            <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Serials" value={product.productSerialNo}
                              handleChange={(e) => handleInputChange('products', 'productSerialNo', e.target.value, index)} />
                          </div>
                          <div className="col-lg-1 col-md-1">
                            <Button type="button" variant="danger" onClick={() => handleRemoveProduct(index)}><FaTrash size={20} /></Button>
                          </div>
                        </div>
                      </>
                    )) : data.products.map((product, index) => (
                      <div className="row" key={index}>
                        <div className="col-lg-3 col-md-3">
                          <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Name" value={product.productName}
                            handleChange={(e) => handleInputChange('products', 'productName', e.target.value, index)} />
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Quantity" value={product.productQuantity}
                            handleChange={(e) => handleInputChange('products', 'productQuantity', e.target.value, index)} />
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Price" value={product.productPrice}
                            handleChange={(e) => handleInputChange('products', 'productPrice', e.target.value, index)} />
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <AquaPlaceHolderInput type="text" class="form-control" placeholder="Product Serials" value={product.productSerialNo}
                            handleChange={(e) => handleInputChange('products', 'productSerialNo', e.target.value, index)} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">

                      <AquaInput
                        label={"Delivery Status"}
                        placeholder={"Enter Delivery Status"}
                        type={"name"}
                        value={data.transport.deliveredBy}
                        handleChange={(e) => handleInputChange('transport', 'deliveredBy', e.target.value)}
                      />
                      <AquaInput
                        label={"Delivery Date and time"}
                        placeholder={"Enter Delivery date and time"}
                        type={"number"}
                        value={data.transport.deliveryDate}
                        handleChange={(e) => handleInputChange('transport', 'deliveryDate', e.target.value)}
                      />
                      <AquaInput
                        label={"Transfer Type"}
                        placeholder={"Enter Transfer Type"}
                        type={"name"}
                        value={data.paidStatus}
                        handleChange={(e) => setData((prevData) => ({
                          ...prevData,
                          paidStatus: e.target.value,
                        }))}
                      />
                      <AquaInput
                        label={"Paid Status"}
                        placeholder={"Enter Paid Status"}
                        type={"name"}
                        value={data.paymentType}
                        handleChange={(e) => setData((prevData) => ({
                          ...prevData,
                          paymentType: e.target.value,
                        }))}
                      />


                    </div>
                    <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 d-flex mt-auto flex-column">
                      <div className="d-grid gap-2 ">
                        <Button
                          onClick={handleSubmit}
                          variant="primary"
                          size="lg"
                          type="submit"
                          className="m-1"
                        >
                          Save
                        </Button>

                      </div>
                    </div>
                  </div>


                  {/* ... (other input fields) ... */}

                </form>
              </AquaCardLayover>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default InvoiceComponent;
