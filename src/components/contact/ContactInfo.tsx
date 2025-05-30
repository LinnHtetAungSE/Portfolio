const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Contact Information
      </h2>
      <p className="mb-6">
        I am always open to exploring new opportunities, collaborating on
        exciting projects, and engaging in meaningful discussions. Whether you
        have a challenging project, a potential job opportunity, or simply want
        to connect, feel free to reach out.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold">Phone</h3>
          <a href="tel:0823148288" className="hover:underline">
            0823148288
          </a>
        </div>

        <div>
          <h3 className="font-bold">Email</h3>
          <a href="mailto:linnhtet3064@gmail.com" className="hover:underline">
            linnh3064@gmail.com
          </a>
        </div>

        <div>
          <h3 className="font-bold">Location</h3>
          <p>Chiang Mai, TH.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
