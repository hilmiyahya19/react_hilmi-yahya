function Footer() {
  const github = `https://github.com/hilmiyahya19`;
  const instagram = `https://instagram.com/hyhlmyhy?igshid=MzRlODBiNWFlZA==`; 
  const facebook = `https://www.facebook.com/hilmi.yahya.963?mibextid=ZbWKwL`;

  return (
    <footer className="bg-blue-500 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Column 1 */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-white text-lg mb-2 font-semibold">My Social Media</h1>
          <p className="text-white mb-4">Connect with me :</p>
          <div className="flex items-center">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img src={`/img/github-32.png`} alt="Github" className="mr-4" />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <img src={`/img/instagram-32.png`} alt="Instagram" className="mr-4" />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <img src={`/img/facebook-32.png`} alt="Facebook" />
            </a>
          </div>
        </div>
        {/* Column 2 */}
        <div className="mb-8 md:mb-0">
          <img src={`/img/fire.png`} alt="MyWebsite" className="mr-2 w-8 md:w-12 lg:w-20 h-8 md:h-12 lg:h-20"/>
          <h2 className="text-white text-lg mt-2">MyWebsite</h2>
        </div>
        {/* Column 3 */}
        <div>
          <p className="text-white mb-2">1234 Jalan Contoh</p>
          <p className="text-white mb-2">Kota Contoh</p>
          <p className="text-white mb-2">12345</p>
          <p className="text-white mb-2">Telepon: (123) 456-7890</p>
          <p className="text-white mb-2">Email: example@example.com</p>
          <section className="">
            <div className="text-blue-800 font-bold">
              <button className="btn-primary px-5 py-2 bg-white rounded-md hover:bg-blue-100">Contact</button>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
