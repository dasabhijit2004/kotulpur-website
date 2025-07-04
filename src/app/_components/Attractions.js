import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // optional: for location icon

const attractions = [
  {
    name: 'Bishnupur',
    img: '/card1.png',
    desc:
      "Famous for its terracotta temples and Baluchari sarees, Bishnupur is a cultural hub showcasing Bengal's architectural heritage.",
    distance: '30 KM from Kotulpur',
    mapLink: 'https://maps.app.goo.gl/XFpufjebgL8Ss9rb9',
  },
  {
    name: 'Joyrambati',
    img: '/card2.png',
    desc:
      'Birthplace of Sri Sarada Devi, spiritual consort of Ramakrishna Paramahamsa, featuring temples and spiritual retreats.',
    distance: '12 KM from Kotulpur',
    mapLink: 'https://maps.app.goo.gl/EKmiNumigNMt246P6',
  },
  {
    name: 'Kamarpukur',
    img: '/card3.png',
    desc:
      'Birthplace of Sri Ramakrishna Paramahamsa, this spiritual destination attracts devotees from around the world.',
    distance: '15 KM from Kotulpur',
    mapLink: 'https://maps.app.goo.gl/s2cv8Gx1rkQDZZoK7',
  },
  {
    name: 'Susunia Hills',
    img: '/card4.png',
    desc:
      'A popular trekking destination with ancient rock inscriptions and diverse flora and fauna, perfect for nature lovers.',
    distance: '90 KM from Kotulpur',
    mapLink: 'https://maps.app.goo.gl/1C9CSZE8TesRvNHz8',
  },
  {
    name: 'Mukutmanipur',
    img: '/card5.png',
    desc:
      'Home to the second largest earthen dam in India, offering scenic views and boating opportunities on the Kangsabati River.',
    distance: '100 KM from Kotulpur',
    mapLink: 'https://maps.app.goo.gl/eBrFmEZfQRJ5B2iv6',
  },
  {
    name: 'Jhargram',
    img: '/card6.png',
    desc:
      'A former princely state with a royal palace, surrounded by dense forests and tribal villages showcasing rural Bengal.',
    distance: '120 KM from Kotulpur',
    mapLink: 'https://maps.app.goo.gl/XFpufjebgL8Ss9rb9',
  },
];

const Attractions = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 md:p-10 flex-col bg-gray-50">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center text-gray-800 mt-20">
        Nearby Attractions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {attractions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full aspect-[2] object-cover object-center"
            />
            <div className="p-4 flex flex-col gap-2">
              <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  {item.distance}
                </div>
                <a
                  href={item.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Attractions;
