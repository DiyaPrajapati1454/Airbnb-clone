import { Property } from '../model/property.model';


export const PROPERTY_DATA: Property = {
  name: 'Serene Hillside Villa',
  location: 'Lonavala, Maharashtra, India',

  description:
    'Enjoy a peaceful stay in this beautiful hillside villa surrounded by greenery. The property offers comfortable rooms, a spacious living area and a relaxing outdoor space, making it suitable for families and small groups.',

  images: [
    'assets/images/property-1.jpg',
    'assets/images/property-2.jpg',
    'assets/images/property-3.jpg',
    'assets/images/property-4.jpg',
    'assets/images/property-5.jpg'
  ],

  price: 8500,
  rating: 4.8,
  reviewCount: 24,

  bedrooms: 3,
  bathrooms: 2,
  guests: 6,
  propertyType: 'Entire villa',

  reviews: [
    {
      name: 'Rahul',
      rating: 5,
      comment:
        'Beautiful property with a peaceful location. The rooms were clean and comfortable.'
    },
    {
      name: 'Priya',
      rating: 4.7,
      comment:
        'Great place for a family trip. The property looked exactly like the pictures.'
    },
    {
      name: 'Amit',
      rating: 4.8,
      comment:
        'Very comfortable stay and a lovely view. Would definitely consider visiting again.'
    }
  ]
};