import AquaDyanamicInvoicesComponent from "@/PageComponents/dynamic/dynamicInvoice";
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
