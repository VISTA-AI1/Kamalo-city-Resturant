import React from 'react';

export default function OwnerSection() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {/* Owners Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Meet Our Founders</h2>
              <p className="text-gray-300 leading-relaxed">
                Kamalo City was founded by Pitchou Ntumba and his wife, who together have created Cape Town's premier African dining and entertainment destination. Their combined vision and expertise in hospitality have transformed this space into a vibrant celebration of African cuisine and culture.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Under their leadership, Kamalo City has evolved into more than just a restaurant – it's a cultural hub where people come together to enjoy authentic African cuisine, premium shisha experiences, professional grooming services, and entertainment.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="/images/staff/file (30) (1) (1) (1).jpg"
                alt="Pitchou Ntumba and Wife - Owners of Kamalo City"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}