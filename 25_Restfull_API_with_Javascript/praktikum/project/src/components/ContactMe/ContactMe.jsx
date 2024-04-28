import { useEffect, useState } from "react";

function ContactMe() {
  const [messageList, setMessageList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [sequenceNumber, setSequenceNumber] = useState(1);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages'));
    if (storedMessages) {
      setMessageList(storedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messageList));
  }, [messageList]);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  // Submit
  const handleSubmit = (event) => {
      event.preventDefault();
      if (!firstName) {
          setFirstNameError('First Name must be filled in');
      } else if (firstName.length > 10) {
        setFirstNameError('First Name cannot exceed 10 characters');
        console.log('First Name cannot exceed 10 characters');
        return;
      } else {
          setFirstNameError('');
      }

      if (!lastName) {
          setLastNameError('Last Name must be filled in');
      } else if (lastName.length > 10) {
        setLastNameError('Last Name cannot exceed 10 characters');
        console.log('Last Name cannot exceed 10 characters');
        return;
      } else {
          setLastNameError('');
      }

      if (!email) {
          setEmailError('Email must be filled in');
      } else if (email.length > 30) {
        setEmailError('Email cannot exceed 30 characters');
        console.log('Email cannot exceed 30 characters');
        return;
      } else {
          setEmailError('');
      }

      if (!description) {
          setDescriptionError('Description must be filled in');
      } else if (description.length > 90) {
          setDescriptionError('Description cannot exceed 90 characters');
          console.log('Description cannot exceed 90 characters');
          return;
      } else {
          setDescriptionError('');
      }

      if (!firstName || !lastName || !email || !description) {
          console.log('Please fill in all fields');
          return;
      }

      // Buat objek pesan baru
      const newMessage = {
        sequenceNumber: sequenceNumber,
        firstName: firstName,
        lastName: lastName,
        email: email,
        description: description,
      };

      // Update messageList dengan pesan baru
      setMessageList([...messageList, newMessage]);

        // Reset form setelah submit
        setSequenceNumber(sequenceNumber + 1);
        setFirstName("");
        setLastName("");
        setEmail("");
        setDescription("");

      console.log('Submit clicked');
  };
  

  return (
    <>
      <section className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 mx-auto mt-3 md:mt-5 lg:mt-10 mb-5">
        <div className="m-5 sm:m-5 md:m-10 lg:m-20 pt-5 md:pl-5 lg:pl-24">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <p className="text-md">Need to get in touch with us? Either fill out the form with your inquiry or find the department email you would like to contact below</p>
        </div>
        <div className="m-5 sm:m-5 md:m-10 lg:m-20 md:pr-5 lg:pr-24">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2">
              <div className="w-full">
                <div className="mt-2">
                  <h3 htmlFor="firstName" className="block mb-2">First Name</h3>
                  <input id="firstName" type="text" 
                    className={`border-gray-300 border rounded-lg py-1 focus:outline-none ${firstNameError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} w-full md:w-auto lg:w-auto text-md`}
                    value={firstName} onChange={handleChangeFirstName}/>
                    <br/>
                    {firstNameError && <small className="text-red-500">{firstNameError}</small>}
                </div>
              </div>
              <div className="w-full">
                <div className="mt-2">
                  <h3 htmlFor="lastName" className="block mb-2">Last Name</h3>
                  <input id="lastName" type="text" 
                    className={`border-gray-300 border rounded-lg py-1 focus:outline-none ${lastNameError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} w-full md:w-auto lg:w-auto text-md`}
                    value={lastName} onChange={handleChangeLastName}/>
                    <br/>
                    {lastNameError && <small className="text-red-500">{lastNameError}</small>}
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="mt-2">
                  <h3 htmlFor="email" className="block mb-2">Email</h3>
                  <input id="email" type="email" 
                    className={`border-gray-300 border rounded-lg py-1 focus:outline-none ${emailError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} w-full text-md`}
                    value={email} onChange={handleChangeEmail}/>
                    {emailError && <small className="text-red-500">{emailError}</small>}
                </div>
              </div>
            </div>
            <div className="flex">
            <div className="w-full">
              <div className="mt-2">
                <h3 htmlFor="description" className="block mb-2">What can we help you with?</h3>
                  <textarea id="description" type="text" 
                    className={`border-gray-300 border rounded-lg py-5 focus:outline-none ${descriptionError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} w-full text-md`}
                    value={description} onChange={handleChangeDescription}></textarea>
                    {descriptionError && <small className="text-red-500">{descriptionError}</small>}
                </div>
              </div>
            </div>
            <div className="text-white mt-4">
              <button className="btn-primary py-2 px-4 bg-blue-600 w-1/3 rounded-md hover:bg-blue-800">Submit</button>
            </div>
          </form>
        </div>
      </section>

      {/* table hasil submit form */}
      <div className="mb-20">
        <section>
            <div className="text-center text-black">
              <h2 className="text-3xl font-semibold mb-5">List Message</h2>
              <div className="w-full sm:w-auto overflow-x-auto">
                <table className="table-auto mx-auto">
                  <thead>
                    <tr>
                      <td className="border px-4 py-2"><strong>No</strong></td>
                      <td className="border px-4 py-2"><strong>First Name</strong></td>
                      <td className="border px-4 py-2"><strong>Last Name</strong></td>
                      <td className="border px-4 py-2"><strong>Email</strong></td>
                      <td className="border px-4 py-2"><strong>Description</strong></td>
                    </tr>
                  </thead>
                  <tbody>
                    {messageList.map((message) => (
                    <tr key={message.firstName}>
                      <td className="border px-4 py-2">{message.sequenceNumber}</td>
                      <td className="border px-4 py-2">{message.firstName}</td>
                      <td className="border px-4 py-2">{message.lastName}</td>
                      <td className="border px-4 py-2">{message.email}</td>
                      <td className="border px-4 py-2">{message.description}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>  
            </div>
        </section>
      </div>
    </>
  );
}

export default ContactMe;