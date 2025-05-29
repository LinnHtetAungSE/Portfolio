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
          <p>0823148288</p>
        </div>

        <div>
          <h3 className="font-bold">Email</h3>
          <p>linnh3064@gmail.com</p>
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
