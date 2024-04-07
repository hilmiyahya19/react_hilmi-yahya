// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import CreateProduct from './CreateProduct';

// describe('CreateProduct Component', () => {
//   it('should render input fields correctly', () => {
//     const { getByLabelText } = render(<CreateProduct />);
    
//     const nameInput = getByLabelText('Product Name');
//     const priceInput = getByLabelText('Price');
//     const quantityInput = getByLabelText('Quantity');

//     expect(nameInput).toBeInTheDocument();
//     expect(priceInput).toBeInTheDocument();
//     expect(quantityInput).toBeInTheDocument();
//   });

//   it('should update state when input values change', () => {
//     const { getByLabelText } = render(<CreateProduct />);
    
//     const nameInput = getByLabelText('Product Name');
//     const priceInput = getByLabelText('Price');
//     const quantityInput = getByLabelText('Quantity');

//     fireEvent.change(nameInput, { target: { value: 'Test Product' } });
//     fireEvent.change(priceInput, { target: { value: '10' } });
//     fireEvent.change(quantityInput, { target: { value: '5' } });

//     expect(nameInput.value).toBe('Test Product');
//     expect(priceInput.value).toBe('10');
//     expect(quantityInput.value).toBe('5');
//   });

//   // Add more test cases as needed
// });