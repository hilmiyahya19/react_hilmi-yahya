import { useEffect, useState } from "react";

function ContactMe() {
  // firt name
  const [firstName, setFirstName] = useState('');
  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value)
  }
  const [firstNameError, setFirstNameError] = useState('');
  useEffect(() => {
    if (firstName.length > 10) {
      setFirstNameError('first name cannot exceed 10 characters');
  } else {
      setFirstNameError('');
  }
  }, [firstName])

  // last name
  const [lastName, setLastName] = useState('');
  const handleChangeLastName = (event) => {
    setLastName(event.target.value)
  }
  const [lastNameError, setLastNameError] = useState('');
  useEffect(() => {
    if (lastName.length > 10) {
      setLastNameError('last name cannot exceed 10 characters');
  } else {
      setLastNameError('');
  }
  }, [lastName])

  // email
  const [email, setEmail] = useState('');
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const [emailError, setEmailError] = useState('');
  useEffect(() => {
    if (email.length > 30) {
      setEmailError('email cannot exceed 30 characters');
  } else {
      setEmailError('');
  }
  }, [email])

  // description
  const [description, setDescription] = useState('');
  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const [descriptionError, setDescriptionError] = useState('');
  useEffect(() => {
    if (description.length > 90) {
      setDescriptionError('description cannot exceed 90 characters');
  } else {
      setDescriptionError('');
  }
  }, [description])
  
  
  // Sequence Number
  const [sequenceNumber, setSequenceNumber] = useState(1);

  // Submit
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const messageObject = {
      firstNameName: "",
      lastName: "",
      email: "",
      description: "",
    };
  const handleSubmit = (event) => {
      event.preventDefault();
      if (!firstName) {
          setFirstNameError('First Name must be filled in');
      } else {
          setFirstNameError('');
      }

      if (!lastName) {
          setLastNameError('Last Name must be filled in');
      } else {
          setLastNameError('');
      }

      if (!email) {
          setEmailError('Email must be filled in');
      } else {
          setEmailError('');
      }

      if (!description) {
          setDescriptionError('Description must be filled in');
      } else {
          setDescriptionError('');
      }

      if (!firstName || !lastName || !email || !description) {
          console.log('Please fill in all fields');
          return;
      }

      const newMessage = {
          ...messageObject,
          sequenceNumber: sequenceNumber, 
          firstName,
          lastName,
          email,
          description,
        };

      setMessageList([...messageList, newMessage]);

        // Clear form fields after submission
        setSequenceNumber(sequenceNumber + 1);
        setFirstName("");
        setLastName("");
        setEmail("");
        setDescription("");

      // Set isSubmitted to true when all fields are filled
      setIsSubmitted(true);
      console.log('Submit clicked');
  };
  
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto mt-3 md:mt-5 lg:mt-10 mb-5 md:mb-5 lg:mb-10">
        <div className="md:col-span-1 lg:col-span-1 m-5 sm:m-5 md:m-10 lg:m-20 pt-5">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <p className="text-md">Need to get in touch with us? Either fill out the form with your inquiry or find the department email you would like to contact below</p>
        </div>
        <div className="md:col-span-1 lg:col-span-1 m-5 sm:m-5 md:m-10 lg:m-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="mt-2">
                  <h3 htmlFor="firstName" className="block mb-2">First Name</h3>
                  <input id="firstName" type="text" 
                    className={`border-gray-300 border rounded-lg py-1 focus:outline-none ${firstNameError ? 'focus:border-red-500 focus:ring-red-500 border-red-500' : 'focus:border-blue-300 focus:ring-blue-300'} w-full md:w-auto lg:w-auto text-md`}
                    value={firstName} onChange={handleChangeFirstName}/>
                    <br/>
                    {firstNameError && <small className="text-red-500">{firstNameError}</small>}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
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
      <div className="flex justify-center mb-20">
        <section>
          {isSubmitted && (   
            <div className="text-center text-black">
              <h2 className="text-3xl font-semibold mb-5">List Message</h2>
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
          )}
        </section>
      </div>
    </>
  );
}

export default ContactMe;