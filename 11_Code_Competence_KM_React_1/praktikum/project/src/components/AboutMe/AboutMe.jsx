function About() {
    const instagram = `https://instagram.com/hyhlmyhy?igshid=MzRlODBiNWFlZA==`; 
    const facebook = `https://www.facebook.com/hilmi.yahya.963?mibextid=ZbWKwL`

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto mt-20">
          <div className="md:col-span-1 lg:col-span-1 m-5 sm:m-5 md:m-10 lg:m-20"> 
            <h1 className="text-3xl font-semibold">Hilmi Yahya</h1>
            <p className="text-lg mt-3">beginner programmer, interested in becoming a fullstack web developer</p>
            <div className="flex items-center mt-10">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={`/img/twitter-32.png`} alt="Twitter" className="mr-4" />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <img src={`/img/instagram-32.png`} alt="Instagram" className="mr-4" />
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <img src={`/img/facebook-32.png`} alt="Facebook"/>
              </a>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1 m-5 sm:m-5 md:m-10 lg:m-15 flex justify-center items-center">
            <img src={`/img/hilmi.jpg`} className="rounded-lg w-72 mx-auto"/>
          </div>
        </section>
    );
  }

export default About;