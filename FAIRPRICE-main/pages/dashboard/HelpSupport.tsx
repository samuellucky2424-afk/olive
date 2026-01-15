import React from 'react';
import { Phone, MessageCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const HelpSupport: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    const faqs = [
        {
            question: "How long does delivery take?",
            answer: "Delivery typically takes between 30 to 60 minutes depending on your location and order volume."
        },
        {
            question: "What is the refund policy?",
            answer: "We offer refunds for incorrect or damaged orders. Please contact support immediately if you have an issue."
        },
        {
            question: "Can I cancel my order?",
            answer: "You can cancel your order within 5 minutes of placing it if it hasn't been prepared yet."
        },
        {
            question: "Do you offer home delivery?",
            answer: "Yes, we offer home delivery to all locations within Agbor."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header>
                <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
                <p className="text-gray-500">We are here to help you</p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Options */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary-600" /> Contact Us
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Call Support</p>
                                <p className="text-sm text-gray-500">0812 345 6789</p>
                            </div>
                            <a href="tel:08123456789" className="ml-auto text-sm font-bold text-primary-600 hover:underline">Call</a>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">WhatsApp</p>
                                <p className="text-sm text-gray-500">Chat with us</p>
                            </div>
                            <button onClick={() => alert("Redirect to WhatsApp")} className="ml-auto text-sm font-bold text-green-600 hover:underline">Chat</button>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                        <HelpCircle className="w-5 h-5 text-primary-600" /> Frequently Asked Questions
                    </h2>

                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-700 text-sm">{faq.question}</span>
                                    {openFaq === index ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </button>
                                {openFaq === index && (
                                    <div className="p-4 pt-0 text-sm text-gray-500 bg-gray-50 border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
