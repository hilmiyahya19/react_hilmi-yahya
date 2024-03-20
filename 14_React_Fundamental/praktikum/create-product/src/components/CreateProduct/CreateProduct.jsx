import { useState } from 'react';
import tailwind from '/src/assets/tailwind.png'

function CreateProduct() {
//   const [productName, setProductName] = useState('');
//   const [productCategory, setProductCategory] = useState('');
//   const [productImage, setProductImage] = useState('');
//   const [productFreshness, setProductFreshness] = useState('');

//   const selectCategory = (category) => {
//     setProductCategory(category);
//   };

//   const selectFreshness = (freshness) => {
//     setProductFreshness(freshness);
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  const [productName, setProductName] = useState('');

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  const [productImage, setProductImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
  };

  return (
    <>
        <section className="mt-5 mx-5 sm:mx-5 md:mx-5 lg:mx-0">
            <div className="text-center">
                <img className="w-16 h-auto mx-auto" src={tailwind} alt="tailwind"/>
            </div>
            <div className="text-center mt-1">
                <h1 className="text-2xl font-semibold">Create Product</h1>
                <p className="mt-2">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>
        </section>

        <section>
            <form onSubmit={handleSubmit}>
                <section className="mt-5">
                    <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 sm:mx-5 md:mx-5 lg:mx-0">
                    <div>
                        <h2 className="text-lg font-semibold">Detail Product</h2>
                        <div className="mt-2">
                            <label htmlFor="productName" className="block">Product name</label>
                            <input id="productName" type="text" className="form-input mt-1 block w-full border rounded-md" value={productName} onChange={handleInputChange}/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="productCategory" className="block">Product Category</label>
                            <select id="productCategory" className="form-select mt-1 block w-full border rounded-md">
                                <option>Clothing and Accessories</option>
                                <option>Electronics and Technology</option>
                                <option>Health and Beauty</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="productImage" className="block">Image of Product</label>
                            <input id="productImage" type="file" className="form-input mt-1 block w-full" value={productImage} onChange={handleFileChange}/>
                        </div>
                        <div className="mt-4">
                            <label className="block">Product Freshness</label>
                            <div className="mt-2">
                                <label htmlFor="brandNew" className="inline-flex items-center">
                                    <input id="brandNew" type="radio" className="form-radio" name="freshness" value="brand-new"/>
                                    <span className="ml-2">Brand New</span>
                                </label>
                                <label htmlFor="secondHand" className="inline-flex items-center ml-6">
                                    <input id="secondHand" type="radio" className="form-radio" name="freshness" value="second-hand"/>
                                    <span className="ml-2">Second hand</span>
                                </label>
                                <label htmlFor="refurbished" className="inline-flex items-center ml-6">
                                    <input id="refurbished" type="radio" className="form-radio" name="freshness" value="refurbished"/>
                                    <span className="ml-2">Refurbished</span>
                                </label>
                            </div>
                        </div>
                    </div>        
                    </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="container mx-auto" >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5 sm:mx-5 md:mx-5 lg:mx-0">
                    <div>
                        <div className="mt-2">
                            <label htmlFor="additionalDescription" className="block">Additional Description</label>
                            <textarea id="additionalDescription" className="form-textarea mt-1 block w-full h-24 border rounded-md"></textarea>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="productPrice" className="block">Product Price</label>
                            <input id="productPrice" type="text" className="form-input mt-1 block w-full border rounded-md"/>
                        </div>
                    </div>            
                    </div>
                    </div>
                </section>

                <section className="mt-5 mb-5">
                    <div className="text-center text-white">
                    <button className="btn-primary py-2 px-4 bg-blue-600 w-1/3 rounded-md hover:bg-blue-800">Submit</button>
                    </div>
                </section>
        </form>
      </section>
    </>
  );
}

export default CreateProduct;
