
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard'; // adjust path as needed
import { Quote } from 'lucide-react';

const EventOverview = () => {
  const testimonials = [
    {
      id: 1,
      imageUrl: "ilias-photo.png",
      
      quote: "I am thrilled to participate in the International Conference on Biomedical Engineering (ICBE-2026), a globally renowned event that brings together top researchers, healthcare professionals, and innovators to discuss cutting-edge developments in biomedical technology. This conference provides an exceptional platform for collaboration, knowledge exchange, and advancing innovations that are transforming modern healthcare.",
      name: "DR. ROGER ACHKAR",
      title: "General Manager\nEpic Bio",
      companyLogoUrl: "new_phhc_portco_epic.webp",
    },
    {
      id: 2,
      imageUrl: "roger-achkar-photo-mar-2025-crop.jpg",
      quote: "The International Conference on Biomedical Engineering (ICBE-2026) is a distinguished event bringing together global leaders to advance the future of healthcare through technology and innovation. This conference provides an exceptional platform for collaboration, knowledge sharing, and transformative biomedical solutions. We look forward to engaging in impactful discussions and contributing to innovations that enhance patient care and medical technology worldwide.",
      name: "Dr. Roger Achkar",
      title: "Senior Manager\nLindus Health",
      companyLogoUrl: "108008.png",
    },
    // Add more if needed
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Show each for 4 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id='testimonial-section' className="py-16 bg-gray-50 scroll-mt-40">
      <div className="container mx-auto px-4">
        
        {/* Single testimonial carousel */}
        <div className="flex justify-center items-center">
          <TestimonialCard
            key={testimonials[current].id}
            imageUrl={testimonials[current].imageUrl}
            quote={testimonials[current].quote}
            name={testimonials[current].name}
            title={testimonials[current].title}
            companyLogoUrl={testimonials[current].companyLogoUrl}
          />
        </div>

        {/* Optional Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? 'bg-[#3333fd]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
