import React from 'react';
import { UtensilsCrossed, Music, Scissors, Wind } from 'lucide-react';

const services = [
  {
    icon: <UtensilsCrossed className="w-12 h-12" />,
    title: 'Catering Services',
    description: 'Professional catering for events and celebrations. Pre-orders only, no delivery service available.',
    image: '/images/services/kamalo-kitchen (1) (1).jpg'
  },
  {
    icon: <Music className="w-12 h-12" />,
    title: 'Entertainment',
    description: 'Pool table, TV area, VIP lounge, live concerts and more exciting features coming soon!',
    image: '/images/services/entertainment-area (1) (1) (1) (1).jpg'
  },
  {
    icon: <Scissors className="w-12 h-12" />,
    title: 'Hair Cutting',
    description: 'Professional haircuts by experienced barbers',
    image: '/images/services/Barber 2 (1).jpg'
  },
  {
    icon: <Wind className="w-12 h-12" />,
    title: 'Shisha & Perfumes',
    description: 'Premium shisha experiences and exotic perfumes',
    image: '/images/services/kamalo-design (1) (1) (1) (1) (1) (1) (1) (2) (1) (1).png'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover What <span className="text-red-500">Kamalo City</span> Offers
          </h2>
          <p className="text-gray-400">Experience our wide range of services and offerings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden transition transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-red-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}