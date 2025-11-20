
import React from 'react';
import GuestCard from './GuestCard';
import CompanyCarousel from './CompanyCarousel';
import Imagedivthree from './Imagedivthree';
import SponsorsSection from './SponsorsSection';

function Mixcomponents() {
  const speakersData = [
    {
      imageUrl: 'speakerone-jpg.jpg',
      name: 'Shuji Nakamura',
      title: 'Nobel Prize in Chemistry',
      company: 'EDF Renewables'
    },
    {
      imageUrl: 'Gemini_Generated_Image_t9b2kot9b2kot9b2.jpg',
      name: 'John M. Essigmann',
      title: 'Massachusetts Institute of Technology, USA',
      company: 'McKinsey'
    },
    {
      imageUrl: 'Gemini_Generated_Image_c3h0tdc3h0tdc3h0.jpg',
      name: 'Daniel Franklin',
      title: 'University of Toronto, USA',
      company: 'McKinsey'
    },
    {
      imageUrl: 'Gemini_Generated_Image_jqk2sjjqk2sjjqk2.jpg',
      name: 'Young Bin Choy',
      title: 'Seoul National University, South Korea',
      company: 'Deloitte'
    },
    {
      imageUrl: 'Gemini_Generated_Image_oytya2oytya2oyty.jpg',
      name: 'Domitilla Del Vecchio',
      title: 'Massachusetts Institute of Technology, USA',
      company: 'KPMG'
    },
    
  ];










  return (


<div id='speakers-section' className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:px-6 ">
  {/* Left Side (Main Content) */}
  <div className="col-span-full md:col-span-4 p-4">

    <h1
      style={{ fontFamily: "'Manrope', sans-serif", color: '#3434ff', paddingBottom: '0.5rem' }}
      className="text-center text-xl md:text-3xl font-bold mb-6"
    >
      SPEAKERS
    </h1>



<div id='Speakers-section' className="relative overflow-hidden h-[520px] scroll-mt-48">
  <div className="flex gap-6 animate-[scroll_40s_linear_infinite] w-max">
    {[...speakersData, ...speakersData].map((speaker, idx) => (
      <div key={idx} className="flex-shrink-0">
        <GuestCard
          imageUrl={speaker.imageUrl}
          name={speaker.name}
          title={speaker.title}
          company={speaker.company}
        />
      </div>
    ))}
  </div>
</div>




    <div className="mt-10">
      <h1
        style={{ fontFamily: "'Manrope', sans-serif", color: '#3434ff', textTransform: 'uppercase' }}
        className="text-center text-2xl md:text-3xl font-bold mb-4"
      >
        Universities Participating in the Conference
      </h1>
      <CompanyCarousel />
    </div>

    {/* Image Section */}

  </div>

  {/* Right Side (Sponsors) */}
  <SponsorsSection />
</div>


  );
}

export default Mixcomponents;