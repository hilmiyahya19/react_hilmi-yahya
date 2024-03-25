function Footer2() {
    return (
      <div>
        <section className="bg-blue-300 flex items-center justify-between p-8">
          <div className="flex items-center">
            <h1 className="text-center text-white mr-4">© 2023 Infinite Loop - infinitelearning</h1>
          </div>
          <div className="flex items-center">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={`/img/twitter-32.png`} alt="Twitter" className="mr-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={`/img/instagram-32.png`} alt="Instagram" className="mr-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={`/img/facebook-32.png`} alt="Facebook"/>
            </a>
          </div>
        </section>
      </div>
    )
  }
  
  export default Footer2;