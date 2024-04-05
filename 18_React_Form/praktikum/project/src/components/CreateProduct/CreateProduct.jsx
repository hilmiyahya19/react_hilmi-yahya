import { useState, useEffect, useRef } from 'react';
import tailwind from '/src/assets/tailwind.png'
import article from '../../articleData';
import Alert from '../Alert/Alert';
import Button from '../ui/Button/Button';
import { v4 as uuidv4 } from 'uuid'; 
import Modal from '../ui/Modal/Modal';
import useFormValidation from '../../utils/customHook/useFormValidation';
import { Link } from 'react-router-dom';
import productData from './productData'; 

function CreateProduct() {
    useEffect(() => {
        console.log("Data produk:", productData); // memastikan data produk tersedia
        setData(productData);
    }, []);
    
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productFreshness, setProductFreshness] = useState("");
    const [additionalDescription, setAdditionalDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const productImageRef = useRef(null);

    // useFormValidation
    const {
        productNameError,
        productCategoryError,
        productImageError,  
        productFreshnessError,
        additionalDescriptionError,
        productPriceError,
        validateForm,
    } = useFormValidation(
        productName, productPrice, additionalDescription, productCategory, productFreshness, productImage
        );

    // productData
    const [data, setData] = useState(productData);
    useEffect (() => {
        setData(data);
      }, [data]);

    // tambah data
    const addData = (event) => {
        event.preventDefault(); 

        const isValid = validateForm(
            productName,
            productCategory,
            productImage,
            productFreshness,
            additionalDescription,
            productPrice
        );

        if (!isValid) {
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
                productImage:base64String, 
                productFreshness,
                additionalDescription,
                productPrice,
            };
    
        setData([...data, newData]);

        console.log("Added item with id:", newData.id); // Console log ID data yang baru saja ditambahkan
    
        setProductName("");
        setProductCategory("");
        setProductImage(""); 
        productImageRef.current.value = ''; // Reset nilai input file
        // URL.revokeObjectURL(file); // Menghapus URL gambar dari memori
        setProductFreshness("");
        setAdditionalDescription("");
        setProductPrice("");
        };
    }

    // hapus data
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null); // State untuk menyimpan item yang dipilih

    const deleteData = (id) => { 
        const selectedItem = data.find(item => item.id === id); // Menyimpan item yang dipilih
        setSelectedItem(selectedItem); // Menyimpan item yang dipilih ke dalam state
        setShowModal(true); // Menampilkan modal konfirmasi saat tombol delete di klik
    }

    const confirmDelete = (id) => {
        const newData = data.filter((item) => item.id !== id); 
        setData(newData);
        console.log("Deleted item with id:", id); // Console log ID data yang baru saja dihapus
        setShowModal(false); // Menutup modal setelah konfirmasi
    }

    const cancelDelete = () => {
        setShowModal(false); // Menutup modal jika pengguna memilih untuk tidak menghapus
    }

    // edit data
    const [editData, setEditData] = useState(null);
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

    // update data
    const updateData = () => {
        if (productName === '' || productCategory === '' || productImage === '' || productFreshness === '' ||additionalDescription === '' || productPrice === '') {
            alert('Semua data harus diisi');
            return;
    }

        const reader = new FileReader();
        reader.readAsDataURL(productImage);
        reader.onloadend = () => {
            const base64String = reader.result;
            const updatedData = data.map(item => {
                if (item.id === editData.id) {
                    return {
                        ...item,
                        productName,
                        productCategory,
                        productImage: base64String, // Menggunakan gambar baru
                        productFreshness,
                        additionalDescription,
                        productPrice,
                    };
                }
            return item;
          });
  
        setData(updatedData);
  
        setEditData(null);
        setProductName("");
        setProductCategory("");
        setProductImage("");
        productImageRef.current.value = ''; // Reset nilai input file
        // URL.revokeObjectURL(productImage); // Menghapus URL gambar dari memori
        setProductFreshness("");
        setAdditionalDescription("");
        setProductPrice("");
        };
    };

    // ganti bahasa
    const [language, setLanguage] = useState('en'); 
    const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
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
        <section className="mt-16 md:mt-20 lg:mt-20 mx-5 sm:mx-5 md:mx-20 lg:mx-52">
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
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none ${productNameError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} flex-1 text-md`}
                            value={productName} onChange={(e) => setProductName(e.target.value)}
                            />
                            {productNameError && <small className="text-red-500">{productNameError}</small>}
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productCategory" className="block mb-2">Product Category</h3>
                            <select id="productCategory" className="form-select mt-1 block w-full  focus:outline-none border rounded-md py-1 focus:border-blue-300" 
                            value={productCategory} 
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
                            {productCategoryError && <small className="text-red-500">{productCategoryError}</small>}
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productImage" className="block mb-2">Image of Product</h3>
                            <input id="productImage" type="file" className="form-input mt-1 block w-full" 
                            onChange={(e) => setProductImage(e.target.files[0])} ref={productImageRef}/>
                            {/* onChange={(e) => setProductImage(URL.createObjectURL(e.target.files[0]))} */}
                            {productImageError && <small className="text-red-500">{productImageError}</small>}
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
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none focus:border-blue-300 focus:ring-blue-300 flex-1 text-md`} 
                            value={additionalDescription} 
                            onChange={(e) => setAdditionalDescription(e.target.value)}>
                            </textarea>
                            {additionalDescriptionError && <small className="text-red-500">{additionalDescriptionError}</small>}
                        </div>
                        <div className="mt-4">
                            <h3 htmlFor="productPrice" className="block mb-2">Product Price</h3>
                            <input id="productPrice" type="number" 
                            className={`border-gray-300 border rounded-lg w-full py-1 focus:outline-none focus:border-blue-300 focus:ring-blue-300 flex-1 text-md`}
                            value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
                            {productPriceError && <small className="text-red-500">{productPriceError}</small>}
                        </div>
                    </div>            
                    </div>
                    </div>
                </section>

                {/* Modal konfirmasi */}
                {showModal && (
                <Modal show={showModal}>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">apakah anda yakin ingin menghapus data ini?</h2>
                        <div className="mt-4">
                            <Button className='mx-1' variant="close" onClick={cancelDelete}>Tidak</Button>
                            <Button className='mx-1' variant="delete" onClick={() => confirmDelete(selectedItem.id)}>Ya</Button>      
                        </div>
                    </div>
                </Modal>
                )}

                <section className="mt-14 mb-5">
                    <div className="text-center">
                    {editData ? (
                        <Button className='mt-3' variant='update' type='button' onClick={updateData}>Update Data</Button>
                    ) : (
                        <Button className='mt-3' variant='primary' type='button' onClick={addData}>Tambah Data</Button>
                    )}
                    </div>
                </section>             
                
                {/* List Product */}
                <section className="mt-16 mb-5">
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
                                <td className="border px-4 py-2"><strong>Detail</strong></td>  
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
                                    <Button variant='delete' onClick={() => deleteData(item.id)} type='button'>Hapus Data</Button>
                                </td>
                                <td>
                                    <Button variant='edit' onClick={(e) => handleEditData(item.id, e)}>Edit Data</Button>
                                </td>
                                <td>
                                    {/* Tombol/link untuk mengarahkan ke halaman detail */}
                                    <Link to={`/products/detail-product/${item.id}`}>
                                        <Button variant='primary'>Detail Data</Button>
                                    </Link>
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