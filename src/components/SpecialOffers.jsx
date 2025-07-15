import React from "react";



const SpecialOffers = () => {
  return (
    <div className="bg-black text-white py-12 px-6 space-y-12">
      <h2 className="text-4xl font-bold text-center mt-20">Special Offers</h2>

      {/* Aqua Serenity Offer */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-30">
        <img
          src="/images/aqua-serenity.jpg" alt="Aqua Serenity"

          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="text-left md:w-1/2 space-y-4">
          <h3 className="text-xl md:text-5xl font-semibold text-white-400">
            Limited Time Offer: 20% OFF <br /> on Aqua Serenity Perfume!
          </h3>
          <h4 className="text-4xl font-bold mt-50">Aqua Serenity</h4>
          <p className="text-cyan-300 font-medium text-4xl">Embrace the Tranquil Tides</p>
          <p className="text-gray-300 mt-20">
            Immerse yourself in the calming embrace of Aqua Serenity, a captivating
            fragrance that evokes the essence of water.
          </p>
          <button className="border border-white px-4 py-2 hover:bg-white hover:text-black transition mt-10 rounded-md">
            Know More
          </button>

        </div>
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mt-40">
        <img
          src="/images/golden-angel.jpg"
          alt="Golden Angel Perfume"
          className="w-full md:w-1/2 h-[650px] object-cover rounded-lg shadow-lg"
        />
        <div className="text-left md:w-1/2 space-y-4">
          <h3 className="text-xl md:text-5xl font-semibold text-white-400">
            Limited Time Offer: 25% OFF <br /> on Golden Angel Perfume!
          </h3>
          <h4 className="text-4xl font-bold mt-50">Golden Angel</h4>
          <p className=" text-yellow-400 font-medium text-4xl">Unleash Your Divine Glow</p>
          <p className="text-gray-300 mt-20">
            Indulge in the divine allure of Golden Angel, a fragrance that embodies
            celestial elegance and radiance.
          </p>
          <button className="border border-white px-4 py-2 hover:bg-white hover:text-black transition mt-10 rounded-md">
            Know More
          </button>

        </div> 
      </div>
    </div>
  );
};

export default SpecialOffers;
