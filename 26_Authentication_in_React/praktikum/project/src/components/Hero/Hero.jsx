function Hero() {
  return (
    <>
    <section className="items-center mt-5 md:mt-10 lg:mt-20 mb-10 md:mb-16 lg:mb-28">
      <div className="mx-auto items-center flex flex-wrap">
        <div className="md:w-full lg:w-full xl:w-11/12 px-4"> 
          <div className="flex flex-wrap md:flex-nowrap">
            {/* hero bagian kiri */}
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-0 sm:pt-0 md:pt-5 lg:pt-10 mx-2"> 
              <h2 className="font-semibold text-4xl">
                Welcome to MyWebsite
              </h2>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque eaque tempora mollitia veniam repudiandae nisi, ratione in facilis natus, recusandae, nam vel perferendis commodi ipsum cumque? Eius, tempora qui?
              </p>
              <div className="mt-12">
                <button className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 uppercase text-sm shadow hover:shadow-lg">
                  Get started
                </button>
                <button className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 uppercase text-sm shadow hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            {/* hero bagian kanan */}
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-10 mx-5 flex items-center"> 
              <img src={`/img/su.png`} className="rounded-lg w-full"/> 
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Hero;

