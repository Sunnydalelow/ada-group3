import { useState } from 'react';
import { mockFAQs } from '@data/mockFAQs';
import DottedGlowBackground from '@components/common/DottedGlowBackground';

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
    <DottedGlowBackground className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ada-near-black mb-4">Support Center</h1>
            <p className="text-ada-muted-gray text-lg max-w-2xl mx-auto">
              We're here to help. Find answers or reach out to our team.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            <div className="glass-card rounded-2xl p-6 text-center hover:scale-[1.02] transition-all">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-ada-red/10 to-ada-red-bright/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-ada-near-black mb-1.5">Phone Support</h3>
              <p className="text-ada-muted-gray text-sm mb-3">Mon–Fri 8:30am–5pm ET</p>
              <p className="text-ada-red font-bold">1-800-DIABETES</p>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center hover:scale-[1.02] transition-all">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-ada-teal/10 to-ada-teal/5 flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-ada-near-black mb-1.5">Live Chat</h3>
              <p className="text-ada-muted-gray text-sm mb-3">Get instant help anytime</p>
              <button className="px-5 py-2 bg-gradient-to-r from-ada-teal to-ada-teal/80 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all">
                Start Chat
              </button>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center hover:scale-[1.02] transition-all">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-bold text-ada-near-black mb-1.5">Email</h3>
              <p className="text-ada-muted-gray text-sm mb-3">Response within 24 hours</p>
              <p className="text-ada-teal font-medium text-sm">help@diabetes.org</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-ada-near-black mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {mockFAQs.slice(0, 8).map((faq) => (
                  <div key={faq.id} className="glass-card rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-white/60 transition-colors"
                    >
                      <span className="font-medium text-ada-near-black text-sm pr-4">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-ada-muted-gray flex-shrink-0 transform transition-transform ${
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
                      <div className="px-5 py-4 bg-gray-50/50 border-t border-gray-100">
                        <p className="text-ada-muted-gray text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-ada-near-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ada-dark-gray mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ada-red/20 focus:border-ada-red/30 transition-all text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ada-dark-gray mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ada-red/20 focus:border-ada-red/30 transition-all text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ada-dark-gray mb-1.5">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ada-red/20 focus:border-ada-red/30 transition-all text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ada-dark-gray mb-1.5">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ada-red/20 focus:border-ada-red/30 transition-all text-sm resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-ada-red to-ada-red-bright text-white rounded-xl font-medium hover:shadow-lg hover:shadow-ada-red/20 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DottedGlowBackground>
  );
}
