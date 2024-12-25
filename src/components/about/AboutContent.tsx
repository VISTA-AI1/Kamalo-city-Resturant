import React from 'react';

export default function AboutContent() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Dedicated Team</h3>
            <p className="text-gray-300 mb-8">
              Behind every exceptional dining experience at Kamalo City is our talented and passionate team. From our skilled chefs who craft authentic African dishes to our attentive service staff who ensure your comfort, each member contributes to making your visit memorable.
            </p>
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Want to meet our amazing team? Chat with our automation bot to learn more about the dedicated individuals who make Kamalo City special!
              </p>
              <button
                onClick={() => window.open('https://wa.me/27731598909', '_blank')}
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
              >
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}