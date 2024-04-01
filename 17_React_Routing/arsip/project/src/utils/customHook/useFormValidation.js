import { useEffect, useState } from 'react';

const useFormValidation = (
    productName, productPrice, additionalDescription, productCategory, productFreshness, productImage
    ) => {
    const [productNameError, setProductNameError] = useState('');
    const [productCategoryError, setProductCategoryError] = useState('');
    const [productImageError, setProductImageError] = useState('');
    const [productFreshnessError, setProductFreshnessError] = useState('');
    const [additionalDescriptionError, setAdditionalDescriptionError] = useState('');
    const [productPriceError, setProductPriceError] = useState('');

    useEffect(() => {
        if (productName.length > 10) {
            setProductNameError('Product name cannot exceed 10 characters');
        } else {
            setProductNameError('');
        }
    }, [productName]);

    useEffect(() => {
        if (productPrice.length > 9) {
            setProductPriceError('Product price cannot exceed 9 characters');
        } else {
            setProductPriceError('');
        }
    }, [productPrice]);

    useEffect(() => {
        if (additionalDescription.length > 50) {
            setAdditionalDescriptionError('Additional description cannot exceed 50 characters');
        } else {
            setAdditionalDescriptionError('');
        }
    }, [additionalDescription]);
    
    useEffect(() => {
        if (productCategory) {
            setProductCategoryError('');
        }
    }, [productCategory]);

    useEffect(() => {
        if (productFreshness) {
            setProductFreshnessError('');
        }
    }, [productFreshness]);

    useEffect(() => {
        if (productImage) {
            setProductImageError('');
        }
    }, [productImage]);

    const validateForm = (productName, productCategory, productImage, productFreshness, additionalDescription, productPrice) => {
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
            return false;
        }

        return true;
    };

    return {
        productNameError,
        productCategoryError,
        productImageError,
        productFreshnessError,
        additionalDescriptionError,
        productPriceError,
        validateForm,
    };
};

export default useFormValidation;
