export default function Home() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <section className="footer-contact d-none d-md-block">
          <ul>
            <li>
              <a href="tel:+" title="Call us">
                call us <br /> +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:" title="email us">
                emil customer care
              </a>
            </li>

            <li>
              <a
                className="text-decoration-underline"
                href=""
                title="see mobile version"
              >
                see mobile version
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-nav">
          <ul className="footer-nav-first">
            <li>
              <a href="" title="style & fit advice">
                style & fit advice
              </a>
            </li>

            <li>
              <a href="" title="faqs">
                faqs
              </a>
            </li>

            <li>
              <a href="" title="delivery">
                delivery
              </a>
            </li>

            <li>
              <a href="" title="exchanges & returns">
                exchanges & returns
              </a>
            </li>
          </ul>

          <ul className="footer-nav-last">
            <li>
              <a href="" title="about us">
                about us
              </a>
            </li>

            <li>
              <a href="" title="careers">
                careers
              </a>
            </li>

            <li>
              <a href="" title="affiliates">
                affiliates
              </a>
            </li>

            <li>
              <a href="" title="advertising">
                advertising
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-connect">
          <div className="fooder-connect-header">
            <h1 className="d-block d-md-none">Lets connect</h1>
            <p className="d-block d-md-none">
              Be the first to receive exclusives offers
            </p>
          </div>

          <form action="" className="footer-newsletter">
            <label htmlFor="email" className="d-none d-md-flex">
              sign up for newsletter
            </label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
            <button type="submit" className="button button-submit">
              Submit
            </button>
          </form>

          <div className="footer-social">
            <div className="footer-headings d-md-none">
              <h1 className="d-block d-md-none">We are highly likeable</h1>
              <p>
                I agree with{' '}
                <a
                  href=""
                  title="Privacy Policy"
                  className="text-decoration-underline"
                >
                  Privacy Policy
                </a>{' '}
                and i want to receive emails from Monochrome
              </p>
            </div>

            <div className="footer-social-inner">
              <a href="" title="Youtube">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="" title="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="" title="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
