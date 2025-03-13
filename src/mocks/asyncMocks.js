const products = [
    { id: '1', name: 'Toyota Corolla', category: 'sedan', price: 20000, description: 'Un sedan confiable', image: 'https://via.placeholder.com/200' },
    { id: '2', name: 'Ford Explorer', category: 'suv', price: 35000, description: 'SUV espaciosa y potente', image: 'https://via.placeholder.com/200' },
    { id: '3', name: 'Chevrolet Silverado', category: 'camioneta', price: 45000, description: 'Potente camioneta para el trabajo', image: 'https://via.placeholder.com/200' },
  ];
  
  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(category ? products.filter(p => p.category === category) : products);
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === id));
      }, 1000);
    });
  };
  