import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";
import Footer from "./Footer";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-24 pb-2 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Get In Touch</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ContactInfo />
        <ContactForm />
      </div>

      <SocialLinks />
      <Footer />
    </section>
  );
};

export default ContactSection;
