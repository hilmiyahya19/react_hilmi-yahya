function Welcome() {
  return (
    <>
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Notus Tailwind JS - A beautiful extension for Tailwind CSS.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Notus Tailwind JS is Free and Open Source. It does not change any
              of the CSS from{' '}
              <a href="https://tailwindcss.com/?ref=creativetim" className="text-blueGray-600" target="_blank">
                Tailwind CSS.
              </a>{' '}
              It features multiple HTML elements and it comes with dynamic
              components for ReactJS, Vue and Angular.
            </p>
            <div className="mt-12">
              <a href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index" target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                Get started
              </a>
              <a href="https://github.com/creativetimofficial/notus-js?ref=njs-index" className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">
                Github Star
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Welcome;
