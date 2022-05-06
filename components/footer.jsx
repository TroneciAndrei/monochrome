export default function Home() {
  return (
    <div>
      <footer className="footer p-0 py-md-5 px-md-0">
        <section className="footer-primary container d-none d-lg-flex justify-content-between align-items-center">
          <section className="footer-primary-inner d-flex justify-content-between align-items-center gap-5">
            <ul className="d-flex flex-column gap-3 me-xl-5">
              <li>
                <a href="" title="call us">
                  call us <br />
                  +44 (0)10 23456789
                </a>
              </li>

              <li>
                <a href="" title="email">
                  email customer care
                </a>
              </li>

              <li>
                <a
                  href=""
                  title="see mobile version"
                  className="text-decoration-underline"
                >
                  see mobile version
                </a>
              </li>
            </ul>

            <ul className="d-flex flex-column gap-2 me-xl-5">
              <li>
                <a href="" title="style">
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

            <ul className="d-flex flex-column gap-2 me-xl-5">
              <li>
                <a href="" title="about us">
                  about us
                </a>
              </li>

              <li>
                <a href="" title="carrers">
                  carrers
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

          <section className="footer-search-primary">
            <div className="footer-primary-newsletter d-flex flex-column gap-2">
              <p>sign up for our newsletter</p>
              <form
                action=""
                className="d-flex align-items-center gap-3 flex-column"
              >
                <input className="footer-search" type="text" name="" id="" />
                <button className="button button-submit align-self-start">
                  Submit
                </button>
              </form>
              <ul className="d-flex align-center gap-3">
                <li>
                  <a href="" title="Youtube">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href="" title="Twitter">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="" title="Facebook">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className="footer-secondary">
          <div className="footer-secondary-inner container text-center p-3 d-block d-lg-none">
            <div className="footer-connect">
              <div className="footer-nesletter">
                <h1>Let's connect</h1>
                <p>Be the first to recive exclusives offers</p>
                <form
                  action=""
                  className="d-flex flex-column align-items-center justify-content-center gap-2 mb-3"
                >
                  <input
                    className="footer-search"
                    type="text"
                    placeholder="Email"
                  />
                  <button className="button button-submit">Submit</button>
                </form>
                <p>
                  I agree with{' '}
                  <a
                    className="text-decoration-underline"
                    href=""
                    title="Privacy Policy"
                  >
                    Privacy Policy
                  </a>{' '}
                  and i want to receive emails from Monochrome
                </p>
              </div>

              <div className="footer-social">
                <h1>We are highly likeable</h1>

                <ul className="d-flex align-items-center justify-content-center gap-4">
                  <li className="ps-xl-5">
                    <a href="" title="Youtube">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>

                  <li>
                    <a href="" title="Twitter">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="" title="Facebook">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="" title="Instagram">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
