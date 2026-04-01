import kalma from "../assets/images/kalma.jpeg";
import leaf from "../assets/images/leaf.jpeg";
import whale from "../assets/images/whale.jpeg";
import astaghfar from "../assets/images/astaghfar.jpeg";
import alhumdulillah from "../assets/images/alhumdulillah.jpeg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Whale Calligraphy',
    price: 25000,
    description: 'Beautiful handcrafted Whale 3D calligraphy on premium canvas.',
    longDescription: 'This exquisite piece features the Whale meticulously handcrafted on a premium canvas. The golden accents catch the light beautifully, making it a stunning centerpiece for any room. Perfect for bringing blessings and a touch of elegance to your home.',
    image: whale,
    gallery: [
      whale,
      'https://images.unsplash.com/photo-1584285405624-b184281f621e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    name: 'Kalma Tayyaba Wood Art',
    price: 22000,
    description: 'Intricately carved Kalma Tayyaba on solid walnut wood, perfect for home decor.',
    longDescription: 'A masterfully carved Kalma Tayyaba on solid walnut wood. The deep, rich tones of the wood contrast beautifully with the precise calligraphy, creating a warm and inviting piece of art that serves as a constant spiritual reminder.',
    image: kalma,
    gallery: [
      '/src/assets/images/kalma.jpeg',
      'https://images.unsplash.com/photo-1608228079968-c768181b8134?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '3',
    name: 'Astaghfirullah Wall Piece',
    price: 18000,
    description: 'Elegant wall piece featuring the phrase "Astaghfirullah".',
    longDescription: 'This elegant wall piece features verses, surrounded by traditional Islamic geometric motifs. Painted with high-quality acrylics and finished with a protective varnish, it is designed to last generations.',
    image: astaghfar,
    gallery: [
      '/src/assets/images/astaghfar.jpeg',
      'https://images.unsplash.com/photo-1584285405624-b184281f621e?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '4',
    name: 'Leaf Wall Piece',
    price: 20000,
    description: 'A Leaf made with putty and lightly painted with acrylics.',
    longDescription: 'A beautiful leaf wall piece made with putty and lightly painted with acrylics. The delicate details and subtle colors make it a perfect addition to any space, bringing a touch of nature and tranquility to your home.',
    image: leaf,
    gallery: [
      leaf
    ]
  },
  {
    id: '5',
    name: 'Alhumdulillah Geometric Pattern',
    price: 10000,
    description: 'Hand-painted geometric Islamic star pattern with rich earthy tones.',
    longDescription: 'A mesmerizing hand-painted geometric star pattern. The rich earthy tones of brown, ochre, and deep red reflect traditional Islamic architecture and design principles.',
    image: alhumdulillah,
    gallery: [
      alhumdulillah
    ]
  },
  {
    id: '6',
    name: 'Bismillah Copper Engraving',
    price: 25000,
    description: 'Premium copper plate engraved with Bismillah, oxidized for an antique finish.',
    longDescription: 'A premium, heavy copper plate meticulously engraved with Bismillah. The copper has been carefully oxidized to give it a beautiful, timeless antique finish that will only improve with age.',
    image: '/src/assets/images/bismillah-copper.jpg',
    gallery: [
      '/src/assets/images/bismillah-copper.jpg'
    ]
  },
  {
    id: '7',
    name: 'Durood Sharif Canvas',
    price: 14000,
    description: 'Durood Sharif beautifully written in Diwani script on a textured canvas.',
    longDescription: 'This textured canvas features the Durood Sharif written in the flowing, elegant Diwani script. The background is subtly textured to give the piece depth and character.',
    image: '/src/assets/images/durood-canvas.jpg',
    gallery: [
      '/src/assets/images/durood-canvas.jpg',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '8',
    name: 'Mashallah Wooden Plaque',
    price: 6000,
    description: 'A small, elegant wooden plaque featuring Mashallah, perfect for gifting.',
    longDescription: 'A beautifully finished wooden plaque featuring the word Mashallah. Its compact size makes it an ideal gift for housewarmings, weddings, or new beginnings.',
    image: '/src/assets/images/mashallah-plaque.jpg',
    gallery: [
      '/src/assets/images/mashallah-plaque.jpg'
    ]
  },
  {
    id: '9',
    name: '99 Names of Allah Masterpiece',
    price: 45000,
    description: 'A large, breathtaking masterpiece featuring all 99 names of Allah.',
    longDescription: 'Our most ambitious piece: a large, breathtaking canvas featuring all 99 names of Allah (Asma-ul-Husna). Each name is written with precision and care, creating a stunning visual dhikr for your home.',
    image: '/src/assets/images/99-names.jpg',
    gallery: [
      '/src/assets/images/99-names.jpg',
      'https://images.unsplash.com/photo-1584285405624-b184281f621e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608228079968-c768181b8134?auto=format&fit=crop&q=80&w=800'
    ]
  }
];
