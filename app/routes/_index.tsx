import type { MetaFunction } from "@remix-run/node";
import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Patners from "~/components/Patners";
import Navbar from "~/components/Navbar";
import Services from "~/components/Services";
import ServicesGrid from "~/components/ServicesGrid";
import TransformationJourney from "~/components/TransformationJourney";
import contactbg from "~/assests/contactus.png"
export const meta: MetaFunction = () => {
  return [
    { title: "BITS" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
   <div className="bg-white">
   <Navbar/>
   <Hero/>
   <Services/>
   <TransformationJourney/>
   <ServicesGrid/>
  
    <Patners/>
   <ContactForm bgimage = {contactbg}/>
   <Footer/>
   </div>
  );
}


