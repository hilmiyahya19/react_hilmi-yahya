import { useEffect, useMemo, useState } from 'react';

const useFormValidation = (
    productName, productPrice, additionalDescription, productCategory, productFreshness, productImage
    ) => {
    const [productNameError, setProductNameError] = useState('');
    const [productCategoryError, setProductCategoryError] = useState('');
    const [productImageError, setProductImageError] = useState('');
    const [productFreshnessError, setProductFreshnessError] = useState('');
    const [additionalDescriptionError, setAdditionalDescriptionError] = useState('');
    const [productPriceError, setProductPriceError] = useState('');

    // Regex untuk memeriksa apakah string hanya terdiri dari huruf dan spasi
    const regex = useMemo(() => /^[A-Za-z ]*$/, []); 

    useEffect(() => {
        if (productName.length > 10) {
            setProductNameError('Product name cannot exceed 10 characters');
        } else if (!regex.test(productName)) {
            setProductNameError('Product name must contain only letters and spaces');
        } else {
            setProductNameError('');
        }
    }, [productName, regex]);

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
        } else if (!regex.test(additionalDescription)) {
            setAdditionalDescriptionError('Additional description must contain only letters and spaces');
        } else {
            setAdditionalDescriptionError('');
        }
    }, [additionalDescription, regex]);
    
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

    const validateForm = () => {
        let isValid = true;

        if (!productName) {
            setProductNameError('Product Name must be filled in');
            isValid = false;
        } else if (productName.length > 10 || !regex.test(productName)) {
            setProductNameError('Product name must contain only letters and spaces and cannot exceed 10 characters');
            isValid = false;
        } else {
            setProductNameError('');
        }

        if (!productCategory) {
            setProductCategoryError('Product Category must be filled in');
            isValid = false;
        } else {
            setProductCategoryError('');
        }

        if (!productImage) {
            setProductImageError('Product Image must be filled in');
            isValid = false;
        } else {
            setProductImageError('');
        }

        if (!productFreshness) {
            setProductFreshnessError('Product Freshness must be filled in');
            isValid = false;
        } else {
            setProductFreshnessError('');
        }

        if (!additionalDescription) {
            setAdditionalDescriptionError('Additional Description must be filled in');
            isValid = false;
        } else if (additionalDescription.length > 50 || !regex.test(additionalDescription)) {
            setAdditionalDescriptionError('Additional description must contain only letters and spaces and cannot exceed 50 characters');
            isValid = false;
        } else {
            setAdditionalDescriptionError('');
        }

        if (!productPrice) {
            setProductPriceError('Product Price must be filled in');
            isValid = false;
        } else {
            setProductPriceError('');
        }

        return isValid;
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
