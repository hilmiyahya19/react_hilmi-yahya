import { useState, useEffect } from 'react';
import tailwind from '/src/assets/tailwind.png'
import article from '../../articleData';
import Alert from '../Alert/Alert';

function CreateProduct() {
    const [language, setLanguage] = useState('en'); 
    const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
    };

    // Sequence Number
    const [sequenceNumber, setSequenceNumber] = useState(1);

    // Product Name
    const [productName, setProductName] = useState('');
    const handleChangeProductName = (event) => {
        setProductName(event.target.value);
    };
    const [productNameError, setProductNameError] = useState('');
    useEffect(() => {
        if (productName.length > 10) {
            setProductNameError('Product name cannot exceed 10 characters');
        } else {
            setProductNameError('');
        }
    }, [productName]);

    // Product Category
    const [productCategory, setProductCategory] = useState('');
    const handleChangeProductCategory = (event) => {
        setProductCategory(event.target.value);
    };
    const [productCategoryError, setProductCategoryError] = useState('');
    useEffect(() => {
        // logic
    }, [productCategory]);
   
    // Product Image
    const [productImage, setProductImage] = useState('');
    const handleChangeProductImage = (event) => {
        const file = event.target.files[0];
        setProductImage(file);
    };
    const [productImageError, setProductImageError] = useState('');
    useEffect(() => {
        // logic
    }, [productImage]);

    // Product Freshness
    const [productFreshness, setProductFreshness] = useState("");
    const handleChangeProductFreshness = (event) => {
        setProductFreshness(event.target.value);
    };
    const [productFreshnessError, setProductFreshnessError] = useState('');
    useEffect(() => {
        // logic
    }, [productFreshness]);

    // Additional Description
    const [additionalDescription, setAdditionalDescription] = useState('');
    const handleChangeAdditionalDescription = (event) => {
        setAdditionalDescription(event.target.value);
    };
    const [additionalDescriptionError, setAdditionalDescriptionError] = useState('');
    useEffect(() => {
        if (additionalDescription.length > 20) {
            setAdditionalDescriptionError('Additional Description cannot exceed 20 characters');
        } else {
            setAdditionalDescriptionError('');
        }
    }, [additionalDescription]);

    // Product Price
    const [productPrice, setProductPrice] = useState('');
    const handleChangeProductPrice = (event) => {
        setProductPrice(event.target.value);
    };
    const [productPriceError, setProductPriceError] = useState('');
    useEffect(() => {
        if (productPrice.length > 15) {
            setProductPriceError('Product Price cannot exceed 15 characters');
        } else {
            setProductPriceError('');
        }
    }, [productPrice]);
 
    // Submit
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [productList, setProductList] = useState([]);
    const productObject = {
        productName: "",
        productCategory: "",
        productImage: "",
        productFreshness: "",
        additionalDescription: "",
        productPrice: "",
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!productName) {
            setProductNameError('Product Name must be filled in');
        } else {
            setProductNameError('');
        }

        if (!productCategory) {
            setProductCategoryError('Product Category must be filled in');
        } else {
            setProductCategoryError('');
        }

        if (!productImage) {
            setProductImageError('Product Image must be filled in');
        } else {
            setProductImageError('');
        }

        if (!productFreshness) {
            setProductFreshnessError('Product Freshness must be filled in');
        } else {
            setProductFreshnessError('');
        }
    
        if (!additionalDescription) {
            setAdditionalDescriptionError('Additional Description must be filled in');
        } else {
            setAdditionalDescriptionError('');
        }
    
        if (!productPrice) {
            setProductPriceError('Product Price must be filled in');
        } else {
            setProductPriceError('');
        }

        if (!productName || !productCategory || !productImage || !productFreshness || !additionalDescription || !productPrice) {
            console.log('Please fill in all fields');
            return;
        }

        const newProduct = {
            ...productObject,
            sequenceNumber: sequenceNumber, 
            productName,
            productCategory,
            productImage,
            productFreshness,
            additionalDescription,
            productPrice,
          };

        setProductList([...productList, newProduct]);

          // Clear form fields after submission
          setSequenceNumber(sequenceNumber + 1);
          setProductName("");
          setProductCategory("");
          setProductImage("");
          setProductFreshness("");
          setAdditionalDescription("");
          setProductPrice("");

        // Set isSubmitted to true when all fields are filled
        setIsSubmitted(true);
        console.log('Submit clicked');
    };
    
    // random number  
    const [count, setCount] = useState('');
    const handleRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 1000); // Menghasilkan angka acak antara 0 dan 999
        console.log('Random number:', randomNumber);
        setCount(randomNumber); // Simpan nilai angka acak ke dalam state count
    };

  return (
    <>
        <Alert/>
        <section className="mt-5 mx-5 sm:mx-5 md:mx-20 lg:mx-52">
            <div className="text-center">
                <img className="w-16 h-auto mx-auto" src={tailwind} alt="tailwind"/>
            </div>
            <div className="text-center mt-2">
                <h1 className="text-2xl font-semibold">{article.title[language]}</h1>
                <p className="mt-2">{article.description[language]}.</p>
            </div>
        </section>

        <section>
            <form onSubmit={handleSubmit}>
                <section className="mt-7">
                    <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 mx-5 sm:mx-5 md:mx-20 lg:mx-72">
                    <div>
                        <h2 className="text-lg font-semibold">Detail Product</h2>
                        <div className="mt-2">
                            <h3 htmlFor="productName" className="block mb-2">Product name</h3>
                            <input id="productName" type="text" 
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none ${productNameError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} flex-1 text-md`}
                            value={productName} onChange={handleChangeProductName}/>
                            {productNameError && <small className="text-red-500">{productNameError}</small>}
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productCategory" className="block mb-2">Product Category</h3>
                            <select id="productCategory" className="form-select mt-1 block w-full border rounded-md" value={productCategory} onChange={handleChangeProductCategory}>
                                <option disabled value="">Choose...</option>
                                <option value="Clothing and Accessories">Clothing and Accessories</option>
                                <option value="Electronics and Technology">Electronics and Technology</option>
                                <option value="Health and Beauty">Health and Beauty</option>
                            </select>
                            {productCategoryError && <small className="text-red-500">{productCategoryError}</small>}
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productImage" className="block mb-2">Image of Product</h3>
                            <input id="productImage" type="file" className="form-input mt-1 block w-full" onChange={handleChangeProductImage}/>
                            {productImageError && <small className="text-red-500">{productImageError}</small>}
                        </div>
                        <div className="mt-5">
                            <h3 className="block">Product Freshness</h3>
                            <div className="mt-2">
                                <label htmlFor="brandNew" className="inline-flex items-center">
                                    <input id="brandNew" type="radio" className="form-radio" name="freshness" value="brand-new" checked={productFreshness === "brand-new"} 
                                    onChange={handleChangeProductFreshness}/>
                                    <span className="ml-2">Brand New</span>
                                </label>
                                <label htmlFor="secondHand" className="inline-flex items-center ml-6">
                                    <input id="secondHand" type="radio" className="form-radio" name="freshness" value="second-hand" checked={productFreshness === "second-hand"}
                                    onChange={handleChangeProductFreshness}/>
                                    <span className="ml-2">Second hand</span>
                                </label>
                                <label htmlFor="refurbished" className="inline-flex items-center ml-6">
                                    <input id="refurbished" type="radio" className="form-radio" name="freshness" value="refurbished" checked={productFreshness === "refurbished"}
                                    onChange={handleChangeProductFreshness}/>
                                    <span className="ml-2">Refurbished</span>
                                </label>
                            </div>
                            {productFreshnessError && <small className="text-red-500">{productFreshnessError}</small>}
                        </div>
                    </div>        
                    </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="container mx-auto" >
                    <div className="grid grid-cols-1 gap-6 mx-5 sm:mx-5 md:mx-20 lg:mx-72">
                    <div>
                        <div className="mt-2">
                            <h3 htmlFor="additionalDescription" className="block mb-2">Additional Description</h3>
                            <textarea id="additionalDescription" 
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none ${additionalDescriptionError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} flex-1 text-md`} 
                            value={additionalDescription} 
                            onChange={handleChangeAdditionalDescription}></textarea>
                            {additionalDescriptionError && <small className="text-red-500">{additionalDescriptionError}</small>}
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productPrice" className="block mb-2">Product Price</h3>
                            <input id="productPrice" type="text" 
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none ${productPriceError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} flex-1 text-md`}
                            value={productPrice} onChange={handleChangeProductPrice}/>
                            {productPriceError && <small className="text-red-500">{productPriceError}</small>}
                        </div>
                    </div>            
                    </div>
                    </div>
                </section>

                <section className="mt-20 mb-5">
                    <div className="text-center text-white">
                    <button className="btn-primary py-2 px-4 bg-blue-600 w-1/3 rounded-md hover:bg-blue-800">Submit</button>
                    </div>
                </section>
                
                {/* List Product */}
                {isSubmitted && (
                <section className="mt-20 mb-5">
                    <div className="text-center text-black">
                        <h2 className="text-3xl font-semibold mb-5">List Product</h2>
                        <table className="table-auto mx-auto">
                        <thead>
                            <tr>
                                <td className="border px-4 py-2"><strong>No</strong></td>
                                <td className="border px-4 py-2"><strong>Product Name</strong></td>
                                <td className="border px-4 py-2"><strong>Product Category</strong></td>
                                <td className="border px-4 py-2"><strong>Product Image</strong></td>
                                <td className="border px-4 py-2"><strong>Product Freshness</strong></td>
                                <td className="border px-4 py-2"><strong>Additional Description</strong></td>
                                <td className="border px-4 py-2"><strong>Product Price</strong></td>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {productList.map((product) => (
                            <tr key={product.productName}>
                                <td className="border px-4 py-2">{product.sequenceNumber}</td>
                                <td className="border px-4 py-2">{product.productName}</td>
                                <td className="border px-4 py-2">{product.productCategory}</td>
                                <td className="border px-4 py-2">{product.productImage.name}</td>
                               
                                <td className="border px-4 py-2">{product.productFreshness}</td>
                                <td className="border px-4 py-2">{product.additionalDescription}</td>
                                <td className="border px-4 py-2">{product.productPrice}</td>
                            </tr>
                        ))}
                       </tbody>
                        </table>
                    </div>
                </section>
                )}
            </form>
        </section>

        {/* random number */}
        <section className="mt-5 mx-5 sm:mx-5 md:mx-20 lg:mx-52">
            <section className="mt-20">
                <h1 className='text-center mb-2 text-md font-semibold'>Random Number : {count}</h1>
                <div className="text-center text-white">
                    <button className="btn-primary py-2 px-4 bg-gray-400 w-1/3 rounded-md hover:bg-gray-600" 
                    value={count} onClick={handleRandomNumber}>
                        Generate Random Number 
                    </button>
                </div>
            </section>
        </section>

        {/* Tombol untuk mengubah bahasa */}
        <section className="mt-5 mx-5 sm:mx-5 md:mx-20 lg:mx-52 mb-20">
            <section className="mb-5">
                <h1 className='text-center mb-2 text-md font-semibold'>Ganti Bahasa</h1>
                <div className="text-center text-white">
                    <button className="btn-primary py-2 px-4 bg-gray-400 w-1/3 rounded-md hover:bg-gray-600" onClick={handleLanguageChange}>
                    {language === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
                    </button>
                </div>
            </section>
        </section>
    </>
  );
}

export default CreateProduct;