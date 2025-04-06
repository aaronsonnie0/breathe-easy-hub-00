
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Living with asthma for 15 years',
    content: 'This platform has completely changed how I manage my asthma. The diary feature helps me identify patterns I never noticed before, and the emergency access gave me peace of mind during a recent flare-up.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Parent of child with asthma',
    content: 'As a parent of a child with asthma, the reminders and trigger tracking have been invaluable. The chatbot helped us understand how to better manage his symptoms during sports, which has made a huge difference.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Recently diagnosed with asthma',
    content: 'Being newly diagnosed with asthma was overwhelming, but this app made the learning curve much easier. The lung visualizations helped me understand what was happening and why my medications work the way they do.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Marathon runner with exercise-induced asthma',
    content: 'The score assessment helped me realize my asthma wasn't as controlled as I thought. After adjusting my management plan, I've been able to improve my running times without breathing issues. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 5,
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Using BreatheEasy for 2 years',
    content: 'The trigger identification feature helped me discover that certain cleaning products were causing my symptoms. Once I switched to asthma-friendly alternatives, my quality of life improved dramatically.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3; // Number of testimonials to show at once on desktop
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Function to get the testimonials to display based on current index
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleTestimonials; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Read how BreatheEasy has helped people manage their asthma and improve their quality of life.
          </p>
        </div>
        
        {/* Desktop Carousel - Multiple Items */}
        <div className="hidden md:block relative">
          <div className="flex gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-tertiary-light rounded-xl p-6 shadow-sm border border-gray-100 flex-1"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 h-8 w-8 text-primary-light opacity-50 transform -scale-x-100" />
                  <p className="text-gray-600 pl-6">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        {/* Mobile Carousel - Single Item */}
        <div className="md:hidden relative">
          <div className="bg-tertiary-light rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-1 h-8 w-8 text-primary-light opacity-50 transform -scale-x-100" />
              <p className="text-gray-600 pl-6">{testimonials[currentIndex].content}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 mx-1 rounded-full ${
                index === currentIndex ? 'bg-primary-dark' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
