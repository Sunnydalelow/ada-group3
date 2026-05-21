import { useState } from 'react';
import { mockFAQs } from '@data/mockFAQs';

export default function Support() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-12">
      <div className="max-w-container mx-auto px-4">
        <h1 className="text-4xl font-bold text-ada-navy mb-4">Support Center</h1>
        <p className="text-ada-gray text-lg mb-12">
          We're here to help. Find answers or reach out to our team.
        </p>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-ada-border text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-ada-navy mb-2">Phone Support</h3>
            <p className="text-ada-gray text-sm mb-4">Mon-Fri 8:30am-5pm ET</p>
            <p className="text-ada-red font-bold">1-800-DIABETES</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-ada-border text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-ada-navy mb-2">Live Chat</h3>
            <p className="text-ada-gray text-sm mb-4">Get instant help</p>
            <button className="px-6 py-2 bg-ada-blue text-white rounded-lg hover:bg-ada-blue/90 transition-colors">
              Start Chat
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-ada-border text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="font-bold text-ada-navy mb-2">Email</h3>
            <p className="text-ada-gray text-sm mb-4">Response within 24 hours</p>
            <p className="text-ada-blue font-medium">help@diabetes.org</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-ada-navy mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {mockFAQs.slice(0, 8).map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg border border-ada-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-ada-light transition-colors"
                  >
                    <span className="font-medium text-ada-navy">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-ada-gray transform transition-transform ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 py-4 bg-ada-light border-t border-ada-border">
                      <p className="text-ada-gray">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-ada-navy mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-ada-border space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ada-navy mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-ada-border rounded-lg focus:ring-2 focus:ring-ada-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ada-navy mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-ada-border rounded-lg focus:ring-2 focus:ring-ada-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ada-navy mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-ada-border rounded-lg focus:ring-2 focus:ring-ada-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ada-navy mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-ada-border rounded-lg focus:ring-2 focus:ring-ada-blue focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-ada-red text-white rounded-lg hover:bg-ada-red/90 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
