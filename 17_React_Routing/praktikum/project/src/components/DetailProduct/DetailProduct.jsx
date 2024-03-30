// import PropTypes from 'prop-types'; // Import PropTypes
// import { useParams } from 'react-router-dom';

// function DetailProduct({ data }) {
//   const { id } = useParams();
//   console.log("ID Produk:", id); 
//   const selectedProduct = data.find(product => product.id === id);

//   if (!selectedProduct) {
//     console.log("Produk tidak ditemukan");
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>Detail Product</h1>
//       <div>
//         <h2>{selectedProduct.productName}</h2>
//         <p>Category: {selectedProduct.productCategory}</p>
//         <p>Freshness: {selectedProduct.productFreshness}</p>
//         <p>Description: {selectedProduct.additionalDescription}</p>
//         <p>Price: {selectedProduct.productPrice}</p>
//         <img src={selectedProduct.productImage} alt={selectedProduct.productName} />
//       </div>
//     </div>
//   );
// }

// // Define prop types for DetailProduct
// DetailProduct.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     productName: PropTypes.string.isRequired,
//     productCategory: PropTypes.string.isRequired,
//     productImage: PropTypes.string.isRequired,
//     productFreshness: PropTypes.string.isRequired,
//     additionalDescription: PropTypes.string.isRequired,
//     productPrice: PropTypes.string.isRequired,
//   })).isRequired,
// };


// export default DetailProduct;

// =================================================================================================================

import PropTypes from 'prop-types'; // Import PropTypes
import { useParams } from 'react-router-dom';

function DetailProduct({ productData }) {
  // Mengambil ID produk dari URL menggunakan useParams
  const { id } = useParams();

  // Dapatkan data produk berdasarkan ID dari prop productData
  const selectedProduct = productData.find(product => product.id === id);

  // Pastikan produk ditemukan sebelum menampilkan detailnya
  if (!selectedProduct) {
    return <div>Product not found</div>;
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
          <p className="text-gray-600 mb-4">Price: {selectedProduct.productPrice}</p>
          {/* Tampilkan gambar produk */}
          <div className="flex justify-center">
            <img src={selectedProduct.productImage} alt={selectedProduct.productName} className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Define prop types for DetailProduct
DetailProduct.propTypes = {
  productData: PropTypes.arrayOf(PropTypes.shape({
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
