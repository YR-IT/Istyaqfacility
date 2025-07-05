// components/FAQBlock.tsx
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQBlock: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold text-amber-900 mb-8">Frequently Asked Questions</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h4 className="font-semibold text-amber-900 mb-2">{faq.question}</h4>
            <p className="text-amber-800 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQBlock;
