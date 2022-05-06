export default function Home() {
  return (
    <div>
      <header className="header">
        <section className="header-secondary container d-flex justify-content-between align-items-center px-3 px-md-5">
          <h1 className="header-title d-block d-md-none">Monochrome</h1>

          <div className="header-connect d-none d-md-block mt-4 px-0 px-lg-5">
            <ul className="d-flex align-items-center gap-4">
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

              <li>
                <a href="tel:+" title="Call us">
                  call uss +44(0)10 23456789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls px-0 px-lg-5 d-flex justify-content gap-3 mt-0 mt-md-4">
            <form action="" className="d-none d-md-block">
              <i class="header-search-mobile fa-solid fa-magnifying-glass"></i>
              <input
                className="header-search"
                type="text"
                placeholder="search"
              />
            </form>
            <ul className="d-flex gap-4">
              <li>
                <a href="" title="user-account">
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>

              <li>
                <a href="" title="user-wishlist">
                  <i class="fa-solid fa-heart"></i>
                </a>
              </li>

              <li className="pe-0 pe-xl-5">
                <a href="" title="user-cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="header-primary">
          <div className="header-primary-mobile container d-flex justify-content-between d-md-none align-items-center px-3 py-3">
            <a href="" title="Mobile menu">
              <i class="header-mobile-menu fa-solid fa-bars"></i>
            </a>
            <form action="">
              <i class="header-search-mobile fa-solid fa-magnifying-glass"></i>
              <input
                className="header-search"
                type="text"
                placeholder="search"
              />
            </form>
          </div>

          <div className="header-nav d-none d-md-block">
            <nav className=" container">
              <ul className="d-flex justify-content-between align-items-center">
                <li>
                  <a href="" title="New arrivals">
                    New arrivals
                  </a>
                </li>

                <li>
                  <a href="" title="Brands">
                    Brands
                  </a>
                </li>

                <li>
                  <a href="" title="Men's">
                    Men's
                  </a>
                </li>

                <li>
                  <a href="" title="Womens">
                    Womens
                  </a>
                </li>

                <li>
                  <a href="" title="Accessories">
                    Accessories
                  </a>
                </li>

                <li>
                  <a href="" title="Lookbook">
                    Lookbook
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="header-banner-main d-block d-md-none">
          <img
            className="w-100"
            src="/images/banner/mobile-banner-main.png"
            alt="Banner Monochrome"
          />
        </section>
      </header>
    </div>
  );
}
