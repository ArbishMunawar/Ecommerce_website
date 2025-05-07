import React from 'react';
import Freeshipping from '../../../assets/icons/Freeshipping'
import Moneyback from '../../../assets/icons/Moneyback'
import Support from '../../../assets/icons/Support'
import Securepayments from '../../../assets/icons/Securepayments'

const services = [
  {
    icon: <Freeshipping />,
    title: 'Free Shipping',
    subtitle: 'Free shipping on orders over $100',
  },
  {
    icon: <Moneyback />,
    title: 'Money Back Guarantee',
    subtitle: '30-day money-back guarantee',
  },
  {
    icon: <Securepayments />,
    title: 'Secure Payments',
    subtitle: 'Your payment info is protected',
  },
  {
    icon: <Support />,
    title: 'Online Support',
    subtitle: '24/7 customer support service',
  },

];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-12 lg:max-w-[1120px] mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-[#F3F5F7] p-6  hover:shadow-lg transition-shadow"
        >
          <div className="mb-4 text-4xl text-[#2A2A2A]">{service.icon}</div>
          <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
          <p className="text-sm text-gray-500">{service.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
