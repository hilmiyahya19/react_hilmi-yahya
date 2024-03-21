import { useState } from 'react';

function ArrayForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [dataArray, setDataArray] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here, e.g., sending data to backend
        console.log("Form submitted with data:", formData);
        // Add form data to array
        setDataArray(prevArray => [...prevArray, formData]);
        // Reset form after submission
        setFormData({
            username: '',
            password: ''
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="username" className="block">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input mt-1 block w-full"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input mt-1 block w-full"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
            <div className="mt-4">
                <h2>Data Array:</h2>
                <ul>
                    {dataArray.map((data, index) => (
                        <li key={index}>Username: {data.username}, Password: {data.password}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ArrayForm;
