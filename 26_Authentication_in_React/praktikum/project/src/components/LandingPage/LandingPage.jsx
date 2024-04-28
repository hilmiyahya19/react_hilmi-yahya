function LandingPage() {
  return (
    <div className="lg:max-w-screen">
      {/* section 1 */}
      <section className="flex flex-wrap bg-blue-900 justify-between py-16">
        <div className="flex items-center m-5 md:m-20 lg:m-14">
            <div>
                <h1 className="text-white text-4xl mb-4 font-bold">Better Solutions For Your Business</h1>
                <p className="text-white text-lg mb-8">We are a team of talented designers making websites with Bootstrap.</p>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full mr-4 mb-4 md:mb-0">Get Started</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-full">Watch Video</button>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center mx-auto lg:mx-10">
          <img src={`/img/hero-img.png`} alt="Hero Image" className="w-full max-w-[600px] h-auto py-2"/>
        </div>
      </section>

      {/* section 2 */}
      <section className="bg-gray-200 py-8">
        <div className="flex flex-col mx-2 items-center">
          <h1 className="text-blue-700 text-3xl py-2">Join Our Newsletter</h1>
          <p className="text-black mb-5 text-md flex text-center">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <div className="w-full flex justify-center mb-2">
            <input type="text" placeholder="" className="px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 focus:outline-none">Subscribe</button>
          </div>
        </div> 
      </section>

      {/* section 3 */}
      <section className="py-12 px-8 md:px-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h1 className="text-blue-700 text-3xl mb-4">ARSHA</h1>
            <p className="p-1 text-gray-600">A108 Adam Street</p>
            <p className="p-2 text-gray-600">New York, NY 535022</p>
            <p className="p-2 text-gray-600">United States</p>
            <p className="p-1 text-gray-600"><span className="font-bold">Phone:</span> +1 5589 55488 55</p>
            <p className="p-1 text-gray-600"><span className="font-bold">Email:</span> info@example.com</p>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-blue-700 text-xl mb-4">Useful Links</h3>
            <p className="p-3 text-gray-600">Home</p>
            <p className="p-3 text-gray-600">About Us</p>
            <p className="p-3 text-gray-600">Services</p>
            <p className="p-3 text-gray-600">Terms of service</p>
            <p className="p-3 text-gray-600">Privacy Policy</p>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-blue-700 text-xl mb-4">Our Services</h3>
            <p className="p-3 text-gray-600">Web Design</p>
            <p className="p-3 text-gray-600">Web Development</p>
            <p className="p-3 text-gray-600">Product Management</p>
            <p className="p-3 text-gray-600">Marketing</p>
            <p className="p-3 text-gray-600">Graphic Design</p>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-blue-700 text-xl mb-4">Our Social Networks</h3>
            <p className="p-1 text-gray-600">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="container-circle flex">
              <div className="circle bg-blue-500"></div>
              <div className="circle bg-blue-500"></div>
              <div className="circle bg-blue-500"></div>
              <div className="circle bg-blue-500"></div>
              <div className="circle bg-blue-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="bg-blue-900 py-5">
        <div className="flex flex-wrap justify-between">
          <div className="px-4 pl-2 md:pl-5 lg:pl-12">
            <p className="p-1 text-white">© Copyright <span className="font-bold">Arsha</span>. All Rights Reserved</p>
          </div>
          <div className="px-4 pr-2 md:pr-5 lg:pr-12">
            <p className="p-2 text-white">Designed by <span style={{ color: '#47B2E4' }}>BootstrapMade</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
