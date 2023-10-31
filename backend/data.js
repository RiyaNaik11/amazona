import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Anjali',
      email: 'anjali@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Sahil',
      email: 'sahil@gmail.com',
      password: bcrypt.hashSync('abcdef'),
      isAdmin: true,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Floral pink dress',
      slug: 'Floral-pink-dress',
      category: 'Dress',
      image: '/images/p1.jpg', //679 x829
      price: 200,
      countInStock: 10,
      brand: 'brand',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality',
    },
    {
      //_id: '2',
      name: 'yellow floral dress',
      slug: 'yellow-floral-dress',
      category: 'Dress',
      image: '/images/p2.jpg',
      price: 300,
      countInStock: 15,
      brand: 'brand',
      rating: 4.3,
      numReviews: 12,
      description: 'high quality',
    },
    {
      //_id: '3',
      name: 'Burgandy Maxi Dress',
      slug: 'Burgandy-Maxi-Dress',
      category: 'Dress',
      image: '/images/p3.jpg',
      price: 600,
      countInStock: 10,
      brand: 'brand',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality',
    },
  ],
};
export default data;
