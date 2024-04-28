import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../ui/Button/Button';

function DetailProduct() {
  // Mengambil ID produk dari URL menggunakan useParams
  const { id } = useParams();

  // Buat state untuk menyimpan data produk
  const [product, setProduct] = useState(null);

  // Lakukan fetching data produk dari API berdasarkan ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://660fae7f356b87a55c520818.mockapi.io/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]); // Dependensi useEffect adalah id

  // kembali satu halaman
  const goBack = () => {
    window.history.back();
  };

  // Pastikan produk ditemukan sebelum menampilkan detailnya
  if (!product) {
    return (
      <div>
        <h1 className='mt-5 mb-5 text-2xl text-center font-semibold'>Product not found</h1>
        <div className='flex justify-center mb-6'>
          <Button onClick={goBack}>Go Back</Button>
        </div>
      </div>
    );
  }

  // Tampilkan detail produk
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Detail Product</h1>
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
          <p className="text-gray-600 mb-2">Category: {product.productCategory}</p>
          <p className="text-gray-600 mb-2">Freshness: {product.productFreshness}</p>
          <p className="text-gray-600 mb-2">Description: {product.additionalDescription}</p>
          <p className="text-gray-600 mb-2">Price: {product.productPrice}</p>
          <p className="text-gray-600 mb-4">id: {product.id}</p>
          {/* Tampilkan gambar produk */}
          <div className="flex justify-center">
            <img src={product.productImage} alt={product.productName} className="max-w-full lg:max-w-96 h-auto"/>
          </div>
        </div>
      </div>
      <div className='flex justify-center mb-6'>
        <Button onClick={goBack}>Go Back</Button>
      </div>
    </div>
  );
}

export default DetailProduct;

