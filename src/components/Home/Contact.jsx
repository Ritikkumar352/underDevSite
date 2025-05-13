import { useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({
        type: "error",
        message: "Please fill out all required fields",
      });
      return;
    }

    // In a real application, you'd send this data to a server
    console.log("Form submitted:", formState);

    // Show success message
    setStatus({
      type: "success",
      message: "Message sent successfully! I will get back to you soon.",
    });

    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="retro-container">
        <h2 className="retro-header text-center">
          <span className="text-primary">&lt;</span>
          Contact
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div className="retro-terminal">
            <p className="font-vt323 text-xl md:text-2xl mb-6">
              <span className="text-retro-teal">$</span> contact --info
            </p>

            <div className="space-y-6 font-mono">
              <div className="flex items-start space-x-4">
                <Mail className="text-retro-teal mt-1" size={24} />
                <div>
                  <h3 className="font-vt323 text-xl mb-1">Email</h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-retro-teal mt-1" size={24} />
                <div>
                  <h3 className="font-vt323 text-xl mb-1">Email</h3>
                  <a 
                    href={`mailto:${"personalInfo.email2"}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email2}
                  </a>
                </div>
                
                
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-retro-teal mt-1" size={24} />
                <div>
                  <h3 className="font-vt323 text-xl mb-1">Phone</h3>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-retro-purple/30 text-sm">
                <p>
                  I'm always open to discussing new projects, opportunities, or
                  partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="retro-terminal">
            <p className="font-vt323 text-xl md:text-2xl mb-6">
              <span className="text-retro-teal">$</span> send --message
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-vt323 text-lg mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-background border-2 border-retro-purple/70 rounded font-mono"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-vt323 text-lg mb-1"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-background border-2 border-retro-purple/70 rounded font-mono"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-vt323 text-lg mb-1"
                >
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full p-2 bg-background border-2 border-retro-purple/70 rounded font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-vt323 text-lg mb-1"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="2"
                  className="w-full p-2 bg-background border-2 border-retro-purple/70 rounded font-mono"
                  required
                />
              </div>

              {status.message && (
                <div
                  className={`p-2 text-white rounded font-mono text-sm ${
                    status.type === "error" ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-retro-teal dark:bg-retro-purple text-black dark:text-white font-vt323 text-lg rounded flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
