import ContractForm from "../components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me a message"/>
      </Head>
      <ContractForm />;
    </Fragment>
  );
}

export default ContactPage;
