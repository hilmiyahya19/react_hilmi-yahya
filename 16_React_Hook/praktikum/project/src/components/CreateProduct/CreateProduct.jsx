import { useState, useEffect } from 'react';
import tailwind from '/src/assets/tailwind.png'
import article from '../../articleData';
import Alert from '../Alert/Alert';
import Button from '../ui/Button/Button';
import { v4 as uuidv4 } from 'uuid'; 

function CreateProduct() {
    const [data, setData] = useState([
        {
          id: uuidv4(), 
          productName: "Kaos",
          productCategory: "Clothing and Accessories",
          productImage: "kaos.jpg",
          productFreshness: "brand-new",
          additionalDescription: "bagus",
          productPrice: 100000,
        },
        {
          id: uuidv4(), 
          productName: "Laptop",
          productCategory: "Electronics and Technology",
          productImage: "laptop.jpg",
          productFreshness: "second-hand",
          additionalDescription: "bagus",
          productPrice: 10000000,
        }, 
    ]);

    const [editData, setEditData] = useState(null);

    useEffect (() => {
        setData(data);
      }, [data]);

    // Saat menyimpan data baru
    const addData = () => {
        if (productName === '' || productCategory === '' || productImage === '' || productFreshness === '' ||additionalDescription === '' || productPrice === '') {
            alert('Semua data harus diisi');
            return;
        }

        // Menyimpan objek file gambar di state productImage
        const file = productImage;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64String = reader.result;
            const newData = {
                id: uuidv4(), 
                productName,
                productCategory,
                productImage: base64String,
                productFreshness,
                additionalDescription,
                productPrice,
            };
    
        setData([...data, newData]);
    
        setProductName("");
        setProductCategory("");
        setProductImage(""); 
        setProductFreshness("");
        setAdditionalDescription("");
        setProductPrice("");
        };
    }

    const deleteData = (id) => { 
        const newData = data.filter((item) => item.id !== id); 
        setData(newData);
    }

    const [language, setLanguage] = useState('en'); 
    const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
    };

    const handleEditData = (id, e) => { 
        e.preventDefault();
        const editItem = data.find(item => item.id === id); 
        setEditData(editItem);
        setProductName(editItem.productName);
        setProductCategory(editItem.productCategory);
        setProductImage(editItem.productImage);
        setProductFreshness(editItem.productFreshness);
        setAdditionalDescription(editItem.additionalDescription);
        setProductPrice(editItem.productPrice);
    }

    const updateData = () => {
        if (productName === '' || productCategory === '' || productImage === '' || productFreshness === '' ||additionalDescription === '' || productPrice === '') {
            alert('Semua data harus diisi');
            return;
    }

    const updatedData = data.map(item => {
        if (item.id === editData.id) {
          return {
            id: item.id, 
            productName: productName,
            productCategory: productCategory,
            productImage: productImage,
            productFreshness: productFreshness,
            additionalDescription: additionalDescription,
            productPrice: productPrice,
          };
        }
        return item;
      });
  
      setData(updatedData);
  
      setEditData(null);
      setProductName("");
      setProductCategory("");
      setProductImage("");
      setProductFreshness("");
      setAdditionalDescription("");
      setProductPrice("");
    }


    // Product Name
    const [productName, setProductName] = useState('');

    // Product Category
    const [productCategory, setProductCategory] = useState('');

    // Product Image
    const [productImage, setProductImage] = useState('');

    // Product Freshness
    const [productFreshness, setProductFreshness] = useState("");

    // Additional Description
    const [additionalDescription, setAdditionalDescription] = useState('');

    // Product Price
    const [productPrice, setProductPrice] = useState('');

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
            <form>
                <section className="mt-7">
                    <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 mx-5 sm:mx-5 md:mx-20 lg:mx-72">
                    <div>
                        <h2 className="text-lg font-semibold">Detail Product</h2>
                        <div className="mt-2">
                            <h3 htmlFor="productName" className="block mb-2">Product name</h3>
                            <input id="productName" type="text" 
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none focus:border-blue-300 focus:ring-blue-300 flex-1 text-md`}
                            value={productName} onChange={(e) => setProductName(e.target.value)}/>
                           
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productCategory" className="block mb-2">Product Category</h3>
                            <select id="productCategory" className="form-select mt-1 block w-full  focus:outline-none border rounded-md" value={productCategory} 
                            onChange={(e) => setProductCategory(e.target.value)}>
                                <option disabled value="">Choose...</option>
                                <option value="Clothing and Accessories">Clothing and Accessories</option>
                                <option value="Electronics and Technology">Electronics and Technology</option>
                                <option value="Food and Beverages">Food and Beverages</option>
                                <option value="Home and Garden">Home and Garden</option>
                                <option value="Health and Beauty">Health and Beauty</option>
                                <option value="Sports and Outdoors">Sports and Outdoors</option>
                                <option value="Toys and Games">Toys and Games</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productImage" className="block mb-2">Image of Product</h3>
                            <input id="productImage" type="file" className="form-input mt-1 block w-full" 
                            onChange={(e) => setProductImage(e.target.files[0])}/>
                        </div>
                        <div className="mt-5">
                            <h3 className="block">Product Freshness</h3>
                            <div className="mt-2">
                                <label htmlFor="brandNew" className="inline-flex items-center">
                                    <input id="brandNew" type="radio" className="form-radio" name="freshness" value="brand-new" checked={productFreshness === "brand-new"} 
                                    onChange={(e) => setProductFreshness(e.target.value)}/>
                                    <span className="ml-2">Brand New</span>
                                </label>
                                <label htmlFor="secondHand" className="inline-flex items-center ml-6">
                                    <input id="secondHand" type="radio" className="form-radio" name="freshness" value="second-hand" checked={productFreshness === "second-hand"}
                                    onChange={(e) => setProductFreshness(e.target.value)}/>
                                    <span className="ml-2">Second hand</span>
                                </label>
                                <label htmlFor="refurbished" className="inline-flex items-center ml-6">
                                    <input id="refurbished" type="radio" className="form-radio" name="freshness" value="refurbished" checked={productFreshness === "refurbished"}
                                    onChange={(e) => setProductFreshness(e.target.value)}/>
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
                    <div className="grid grid-cols-1 gap-6 mx-5 sm:mx-5 md:mx-20 lg:mx-72">
                    <div>
                        <div className="mt-2">
                            <h3 htmlFor="additionalDescription" className="block mb-2">Additional Description</h3>
                            <textarea id="additionalDescription" 
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none focus:border-blue-300 focus:ring-blue-300 flex-1 text-md`} 
                            value={additionalDescription} 
                            onChange={(e) => setAdditionalDescription(e.target.value)}>
                            </textarea>
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productPrice" className="block mb-2">Product Price</h3>
                            <input id="productPrice" type="number" 
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none focus:border-blue-300 focus:ring-blue-300 flex-1 text-md`}
                            value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
                        </div>
                    </div>            
                    </div>
                    </div>
                </section>

                <section className="mt-20 mb-5">
                    <div className="text-center">
                    {editData ? (
                        <Button className='mt-3' variant='primary' type='button' onClick={updateData}>Update Data</Button>
                    ) : (
                        <Button className='mt-3' variant='primary' type='button' onClick={addData}>Tambah Data</Button>
                    )}
                    </div>
                </section>             
                
                {/* List Product */}
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
                                <td className="border px-4 py-2"><strong>Hapus Data</strong></td>
                                <td className="border px-4 py-2"><strong>Edit Data</strong></td>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.productName}</td>
                                <td className="border px-4 py-2">{item.productCategory}</td>
                                <td className="border px-4 py-2">
                                {item.productImage && (
                                <img src={item.productImage} alt='product image' className="h-16 w-auto"/>
                                )}
                                </td>
                                <td className="border px-4 py-2">{item.productFreshness}</td>
                                <td className="border px-4 py-2">{item.additionalDescription}</td>
                                <td className="border px-4 py-2">{item.productPrice}</td>
                                <td>
                                    <Button variant='delete' onClick={() => deleteData(item.id)}>Hapus Data</Button>
                                </td>
                                <td>
                                    <Button variant='edit' onClick={(e) => handleEditData(item.id, e)}>Edit Data</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
                    </div>
                </section>

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