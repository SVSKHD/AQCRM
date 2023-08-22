import AquaDyanamicInvoicesComponent from "../../PageComponents/Dynamic/dynamicInvoice";

const AquaDyanamicInvoices = ({ params }) => {
  console.log("params", params);
  return (
    <>
      <AquaDyanamicInvoicesComponent id={params.id}/>
    </>
  );
};

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

export default AquaDyanamicInvoices;
