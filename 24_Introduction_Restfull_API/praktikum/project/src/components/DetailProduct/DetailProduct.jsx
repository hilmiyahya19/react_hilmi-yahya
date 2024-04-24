import PropTypes from 'prop-types'; // Import PropTypes
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../ui/Button/Button';

function DetailProduct({ data }) {
  console.log(data);
  // Mengambil ID produk dari URL menggunakan useParams
  const { id } = useParams();

  // kembali satu halaman
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Dapatkan data produk berdasarkan ID dari prop productData
  const selectedProduct = data.find(product => product.id === id);

  // Pastikan produk ditemukan sebelum menampilkan detailnya
  if (!selectedProduct) {
    return <div>
        <h1 className='mt-5 mb-5 text-2xl text-center font-semibold'>
          Product not found
        </h1>
        <div className='flex justify-center mb-6'>
          <Button onClick={goBack}>Go Back</Button>
        </div>
      </div>;
  }

  // Tampilkan detail produk
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Detail Product</h1>
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-2">{selectedProduct.productName}</h2>
          <p className="text-gray-600 mb-2">Category: {selectedProduct.productCategory}</p>
          <p className="text-gray-600 mb-2">Freshness: {selectedProduct.productFreshness}</p>
          <p className="text-gray-600 mb-2">Description: {selectedProduct.additionalDescription}</p>
          <p className="text-gray-600 mb-2">Price: {selectedProduct.productPrice}</p>
          <p className="text-gray-600 mb-4">id: {selectedProduct.id}</p>
          {/* Tampilkan gambar produk */}
          <div className="flex justify-center">
            <img src={selectedProduct.productImage} alt={selectedProduct.productName} className="max-w-full lg:max-w-96 h-auto"/>
          </div>
        </div>
      </div>
      <div className='flex justify-center mb-6'>
        <Button onClick={goBack}>Go Back</Button>
      </div>
    </div>
  );
}

// Define prop types for DetailProduct
DetailProduct.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productFreshness: PropTypes.string.isRequired,
    additionalDescription: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
  })).isRequired,
};


export default DetailProduct;
