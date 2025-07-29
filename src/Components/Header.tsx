import React, { useState, useEffect } from "react";
// Import your SVG icons as React components
// import { OwnerLogo } from '../assets/icons/OwnerLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="nav_wrap is-sticky">
      <div
        data-w-id="ecb0603d-4836-65bf-64bd-93abf53f17d8"
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav w-nav"
      >
        <div className="nav_container">
          <a
            href="/"
            aria-current="page"
            className="nav_brand w-nav-brand w--current"
            aria-label="home"
          >
            <div className="nav_logo w-embed">
              <svg
                width={24}
                height={24}
                viewBox="0 0 204 204"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M102 204C158.333 204 204 158.333 204 102C204 45.667 158.333 0 102 0C45.667 0 0 45.667 0 102C0 158.333 45.667 204 102 204Z"
                  fill="black"
                />
                <g className="pin">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M102 166C102 166 153 139.4 153 102C153 73.8335 130.167 51 102 51C73.8335 51 51 73.8335 51 102C51 139.4 102 166 102 166Z"
                    fill="white"
                  />
                  <circle cx={102} cy={102} r={24} fill="black" />
                </g>
              </svg>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 90 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "-20px" }}
              >
                <g clipPath="url(#clip0_1905_4826)">
                  <path
                    d="M29.6067 12.1634C29.6067 7.57497 32.3298 4.55371 36.4511 4.55371C40.5725 4.55371 43.2014 7.46332 43.2014 11.9946C43.2014 16.5258 40.5901 19.5103 36.4876 19.5103C32.3856 19.5103 29.6055 16.7124 29.6055 12.1621L29.6067 12.1634ZM39.9201 12.1075C39.9201 9.10528 38.6704 7.3707 36.4701 7.3707C35.2583 7.3707 34.3256 7.85542 33.7101 8.75125C33.1698 9.55321 32.8894 10.6724 32.8894 12.1088C32.8894 14.9625 34.2318 16.6971 36.4511 16.6971C37.6259 16.6971 38.5028 16.2492 39.0994 15.4105C39.6397 14.6453 39.9201 13.5274 39.9201 12.11V12.1075Z"
                    fill="#090A0B"
                  />
                  <path
                    d="M53.4839 19.2502L51.5997 11.9959L49.8284 19.2502H46.5835L43.5625 8.52673H46.7142L48.4297 15.781L50.3318 8.52673H52.9611L54.9939 15.8749L56.6535 8.52673H59.5442L56.5787 19.2502H53.4825H53.4839Z"
                    fill="#090A0B"
                  />
                  <path
                    d="M60.3711 8.52666H63.4114V10.4478H63.4673C64.269 8.99362 65.5938 8.30334 67.0114 8.30334C69.2307 8.30334 70.6111 9.70166 70.6111 12.7052V19.2514H67.5149V13.5629C67.5149 11.6228 66.9935 10.765 65.6687 10.765C64.3442 10.765 63.4687 11.7725 63.4687 13.6366V19.2502H60.3725V8.52666H60.3711Z"
                    fill="#090A0B"
                  />
                  <path
                    d="M71.6668 13.9907C71.6668 10.6332 73.942 8.28442 77.0937 8.28442C79.1075 8.28442 80.6189 9.14222 81.4385 10.7461C81.9789 11.8095 82.2037 13.0771 82.1654 14.5884H74.7616C74.8923 16.1364 75.8247 17.05 77.2789 17.05C78.473 17.05 79.2751 16.5095 79.6658 15.4461L82.2951 16.2113C81.512 18.3379 79.6658 19.5117 77.1851 19.5117C73.7541 19.5117 71.6641 17.385 71.6641 13.9907H71.6668ZM77.0937 10.6903C75.8441 10.6903 75.023 11.4174 74.7996 12.704H79.0885C79.0516 12.2942 78.9579 11.9769 78.8272 11.6787C78.5479 11.0443 77.8944 10.6903 77.0927 10.6903H77.0937Z"
                    fill="#090A0B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89.393 8.30219C88.0313 8.30219 87.024 9.0115 86.3906 10.2982H86.3347V8.52677H83.2578V19.2503H86.354V13.525C86.354 11.4554 86.9502 10.9821 88.0326 10.9821C89.115 10.9821 89.9044 11.2384 89.9044 11.2384V8.30346H89.394L89.393 8.30219Z"
                    fill="#090A0B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1905_4826">
                    <rect
                      width={90}
                      height="22.7586"
                      fill="white"
                      transform="translate(0 0.898987)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1905_4826">
                    <rect
                      width="21.7241"
                      height="21.7241"
                      fill="white"
                      transform="translate(0 1.65485)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
          <nav role="navigation" className="nav_menu w-nav-menu">
            <div className="nav_menu-wrap">
              <div className="nav_menu-wrap_links">
                <div
                  data-delay={0}
                  data-hover="true"
                  className="nav_menu-dropdown w-dropdown"
                >
                  <div
                    className="nav_menu-link dropdown w-dropdown-toggle"
                    id="w-dropdown-toggle-0"
                    aria-controls="w-dropdown-list-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div>Product</div>
                  </div>
                  <nav
                    className="nav_menu-dropdown-wrap w-dropdown-list"
                    id="w-dropdown-list-0"
                    aria-labelledby="w-dropdown-toggle-0"
                  >
                    <div className="nav_menu-dropdown-inner">
                      <div className="nav_menu-dropdown-col">
                        <div>
                          <div className="text-color-content-quaternary">
                            <p className="p13">Product</p>
                          </div>
                        </div>
                        <div className="nav_menu-dropdown-links">
                          <ul role="list" className="nav_menu-dropdown-list">
                            <li className="nav_menu-dropdown-list_item">
                              <a
                                href="/restaurant-website-ai"
                                className="nav_menu-dropdown-list_link w-inline-block"
                                tabIndex={0}
                              >
                                <div className="hide-tablet">
                                  <div className="icon_24 w-embed">
                                    <svg
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_714_25822)">
                                        <path
                                          d="M9 17H6C4.34315 17 3 15.6569 3 14V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V14C21 15.6569 19.6569 17 18 17H15M9 17V20H15V17M9 17H15"
                                          stroke="#787A7D"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_714_25822">
                                          <rect
                                            width={24}
                                            height={24}
                                            fill="white"
                                            transform="translate(0 24) rotate(-90)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div>
                                  <div className="margin-bottom margin-2">
                                    <p className="nav_menu-dropdown-list_text">
                                      Website Builder
                                    </p>
                                  </div>
                                  <div className="nav_menu-dropdown-mask">
                                    <div className="text-color-content-tertiary">
                                      <p className="h14">
                                        Convert more visitors into customers
                                        with an AI-powered website.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="nav_menu-dropdown-list_item">
                              <a
                                href="/delivery"
                                className="nav_menu-dropdown-list_link w-inline-block"
                                tabIndex={0}
                              >
                                <div className="hide-tablet">
                                  <div className="icon_24 w-embed">
                                    <svg
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_714_25842)">
                                        <path
                                          d="M9 16C5.68629 16 3 13.3137 3 10C3 6.68629 5.68629 4 9 4C11.4597 4 13.5737 5.48012 14.5 7.59829M21 14C21 17.3137 18.3137 20 15 20C12.3841 20 10.1591 18.3259 9.33811 15.9906C9.11911 15.3677 9 14.6978 9 14C9 10.7998 11.5055 8.1847 14.6619 8.00937C14.7738 8.00315 14.8865 8 15 8C18.3137 8 21 10.6863 21 14Z"
                                          stroke="#787A7D"
                                          strokeWidth="1.6"
                                          strokeLinecap="square"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_714_25842">
                                          <rect
                                            width={24}
                                            height={24}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div>
                                  <div className="margin-bottom margin-2">
                                    <p className="nav_menu-dropdown-list_text">
                                      Zero-Commission Delivery
                                    </p>
                                  </div>
                                  <div className="nav_menu-dropdown-mask">
                                    <div className="text-color-content-tertiary">
                                      <p className="h14">
                                        Profitable delivery by top-rated drivers
                                        at a fair price.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="nav_menu-dropdown-list_item">
                              <a
                                href="/online-ordering"
                                className="nav_menu-dropdown-list_link w-inline-block"
                                tabIndex={0}
                              >
                                <div className="hide-tablet">
                                  <div className="icon_24 w-embed">
                                    <svg
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M15.0021 8C15.0021 9.65685 13.6589 11 12.0021 11C10.3452 11 9.00208 9.65685 9.00208 8M4.82627 6.81287L4.20127 16.8129C4.09333 18.54 5.46497 20 7.19543 20H16.8087C18.5392 20 19.9108 18.54 19.8029 16.8129L19.1779 6.81287C19.0791 5.23176 17.7679 4 16.1837 4H7.82043C6.23624 4 4.92509 5.23176 4.82627 6.81287Z"
                                        stroke="#787A7D"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div>
                                  <div className="margin-bottom margin-2">
                                    <p className="nav_menu-dropdown-list_text">
                                      Online Ordering
                                    </p>
                                  </div>
                                  <div className="nav_menu-dropdown-mask">
                                    <div className="text-color-content-tertiary">
                                      <p className="h14">
                                        Get more orders with online ordering
                                        that feels familiar and easy.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                          <ul role="list" className="nav_menu-dropdown-list">
                            <li className="nav_menu-dropdown-list_item">
                              <a
                                href="/automatic-marketing"
                                className="nav_menu-dropdown-list_link w-inline-block"
                                tabIndex={0}
                              >
                                <div className="hide-tablet">
                                  <div className="icon_24 w-embed">
                                    <svg
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_714_25848)">
                                        <path
                                          d="M2.75879 10.1637L3.62703 15.0877C3.91474 16.7194 5.47072 17.8089 7.1024 17.5212L10.0972 16.9931M2.75879 10.1637L2.58514 9.17885C2.29743 7.54716 3.38694 5.99119 5.01862 5.70348L11.9123 4.48794C13.544 4.20023 15.0999 5.28974 15.3876 6.92142C15.4835 7.46532 15.1204 7.98397 14.5765 8.07988L2.75879 10.1637ZM16.0017 12V14L17.6684 15.6667M22.0017 14C22.0017 17.3137 19.3154 20 16.0017 20C12.688 20 10.0017 17.3137 10.0017 14C10.0017 10.6863 12.688 8 16.0017 8C19.3154 8 22.0017 10.6863 22.0017 14Z"
                                          stroke="#787A7D"
                                          strokeWidth="1.6"
                                          strokeLinecap="square"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_714_25848">
                                          <rect
                                            width={24}
                                            height={24}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div>
                                  <div className="margin-bottom margin-2">
                                    <p className="nav_menu-dropdown-list_text">
                                      Automated Marketing
                                    </p>
                                  </div>
                                  <div className="nav_menu-dropdown-mask">
                                    <div className="text-color-content-tertiary">
                                      <p className="h14">
                                        Drive sales from customers with proven,
                                        automated campaigns.{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="nav_menu-dropdown-list_item">
                              <a
                                href="/branded-apps"
                                className="nav_menu-dropdown-list_link w-inline-block"
                                tabIndex={0}
                              >
                                <div className="hide-tablet">
                                  <div className="icon_24 w-embed">
                                    <svg
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_714_25834)">
                                        <path
                                          d="M10 19H14M9 22H15C16.6569 22 18 20.6569 18 19L18 5C18 3.34315 16.6569 2 15 2L9 2C7.34315 2 6 3.34315 6 5L6 19C6 20.6569 7.34315 22 9 22Z"
                                          stroke="#787A7D"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_714_25834">
                                          <rect
                                            width={24}
                                            height={24}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div>
                                  <div className="margin-bottom margin-2">
                                    <p className="nav_menu-dropdown-list_text">
                                      Custom Mobile App
                                    </p>
                                  </div>
                                  <div className="nav_menu-dropdown-mask">
                                    <div className="text-color-content-tertiary">
                                      <p className="h14">
                                        Grow repeat orders with a 5-star mobile
                                        app.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="nav_menu-dropdown-list_item">
                              <a
                                href="/loyalty-rewards"
                                className="nav_menu-dropdown-list_link w-inline-block"
                                tabIndex={0}
                              >
                                <div className="hide-tablet">
                                  <div className="icon_24 w-embed">
                                    <svg
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 24 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_2017_22534)">
                                        <path
                                          d="M14.001 2.4375C14.001 2.4375 14.1787 3.47751 14.001 4.4375C13.8095 5.47144 13.001 6.4375 13.001 6.4375M15.501 8.9375L16.501 7.9375M18.301 5.1875L18.751 3.9375M20.001 8.4375L21.001 7.9375M18.001 11.4375C18.001 11.4375 18.7571 11.4695 19.501 11.7075C20.1715 11.9221 21.001 12.4375 21.001 12.4375M5.78101 21.2515L15.1635 17.5555C16.5037 17.0276 16.8632 15.299 15.8447 14.2805L10.1586 8.59438C9.14017 7.57593 7.41158 7.93542 6.88362 9.27547L3.18721 18.6575C2.54631 20.2843 4.15426 21.8923 5.78101 21.2515Z"
                                          stroke="#787A7D"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_2017_22534">
                                          <rect
                                            width={24}
                                            height={24}
                                            fill="white"
                                            transform="translate(0 0.4375)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div>
                                  <div className="margin-bottom margin-2">
                                    <p className="nav_menu-dropdown-list_text">
                                      Loyalty Program
                                    </p>
                                  </div>
                                  <div className="nav_menu-dropdown-mask">
                                    <div className="text-color-content-tertiary">
                                      <p className="h14">
                                        Build loyalty with a rewards program
                                        inspired by the big brands.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="nav_menu-dropdown-col _2 hide-tablet">
                        <div className="nav_menu-dropdown-articles">
                          <a
                            href="/case-studies/talkin-tacos"
                            className="nav_story_visual w-inline-block"
                            tabIndex={0}
                          >
                            <img
                              className="img-cover"
                              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1).jpg"
                              link-image
                              alt=""
                              sizes="100vw"
                              loading="lazy"
                              srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1abcd64ecfa5d689ed0e4_talkin-tacos_nav%20(1).jpg 934w"
                            />
                            <div className="nav_story_visual_overlay">
                              <p className="h20">
                                How Talkin Tacos increased direct online sales
                                to $120,000/m by using Owner.com
                              </p>
                            </div>
                            <div className="nav_story-arrow">
                              <div
                                link-icon="external"
                                className="icon_40 w-embed"
                              >
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g filter="url(#filter0_b_3508_30122)">
                                    <path
                                      d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z"
                                      fill="white"
                                      fillOpacity="0.92"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <a href="/pricing" className="nav_menu-link w-inline-block">
                  <div>Pricing</div>
                </a>
                <a
                  href="/how-owner-works"
                  className="nav_menu-link w-inline-block"
                >
                  <div>How it works</div>
                </a>
                <div
                  data-delay={0}
                  data-hover="true"
                  className="nav_menu-dropdown w-dropdown"
                >
                  <div
                    className="nav_menu-link dropdown w-dropdown-toggle"
                    id="w-dropdown-toggle-1"
                    aria-controls="w-dropdown-list-1"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div>Company</div>
                  </div>
                  <nav
                    className="nav_menu-dropdown-wrap w-dropdown-list"
                    id="w-dropdown-list-1"
                    aria-labelledby="w-dropdown-toggle-1"
                  >
                    <div className="nav_menu-dropdown-inner">
                      <div className="nav_menu-dropdown-col">
                        <div className="text-color-content-quaternary">
                          <p className="p13">Company</p>
                        </div>
                        <ul role="list" className="nav_menu-dropdown-link">
                          <li>
                            <a
                              href="/our-story"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Our Story
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/careers"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Careers
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/leadership"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Leadership
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/press"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Press
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/reviews"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Reviews
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/releases"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Product Releases
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/partner-request"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Partner with Owner
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="nav_menu-dropdown-col _2 hide-tablet">
                        <div className="nav_menu-dropdown-articles">
                          <a
                            href="https://www.forbes.com/sites/amyfeldman/2024/08/13/next-billion-dollar-startups-2024/"
                            target="_blank"
                            className="nav_story_visual w-inline-block"
                            tabIndex={0}
                          >
                            <img
                              className="img-cover"
                              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups.jpg"
                              link-image
                              alt=""
                              sizes="100vw"
                              loading="lazy"
                              srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1ac550095c16551bf031a_billion-dollar-startups.jpg 934w"
                            />
                            <div className="nav_story_visual_overlay">
                              <div className="max-width-350">
                                <p className="h20">
                                  Owner named to Forbes Next Billion
                                  <strong>‑</strong>Dollar Startups 2024
                                </p>
                              </div>
                            </div>
                            <div className="nav_story-arrow">
                              <div
                                link-icon="external"
                                className="icon_40 w-embed"
                              >
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g filter="url(#filter0_b_3508_30122)">
                                    <path
                                      d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z"
                                      fill="white"
                                      fillOpacity="0.92"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/careers"
                            className="nav_banner cc-dark w-inline-block"
                            tabIndex={0}
                          >
                            <div className="nav_banner-icon">
                              <div
                                link-icon="external"
                                className="icon_40 w-embed"
                              >
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g filter="url(#filter0_b_3508_30122)">
                                    <path
                                      d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z"
                                      fill="#ffffff"
                                      fillOpacity="0.76"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <div className="text-color-content-inverted-primary">
                                <div className="margin-bottom margin-2">
                                  <p className="h20">We’re Hiring</p>
                                </div>
                              </div>
                              <div className="text-color-content-quaternary">
                                <p className="h20">View our openings</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div
                  data-delay={0}
                  data-hover="true"
                  className="nav_menu-dropdown w-dropdown"
                >
                  <div
                    className="nav_menu-link dropdown w-dropdown-toggle"
                    id="w-dropdown-toggle-2"
                    aria-controls="w-dropdown-list-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div>Resources</div>
                  </div>
                  <nav
                    className="nav_menu-dropdown-wrap w-dropdown-list"
                    id="w-dropdown-list-2"
                    aria-labelledby="w-dropdown-toggle-2"
                  >
                    <div className="nav_menu-dropdown-inner">
                      <div className="nav_menu-dropdown-col">
                        <div className="text-color-content-quaternary">
                          <p className="p13">Learn</p>
                        </div>
                        <ul role="list" className="nav_menu-dropdown-link">
                          <li>
                            <a
                              href="/blog"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">Blog</div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://help.owner.com/"
                              target="_blank"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Help Center
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/case-studies"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Case Studies
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/support"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Support Center
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/comparison"
                              className="nav_menu-dropdown-list_link w-inline-block"
                              tabIndex={0}
                            >
                              <div className="nav_menu-dropdown_text">
                                Compare Owner
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="nav_menu-dropdown-col _2 hide-tablet">
                        <div className="nav_menu-dropdown-articles">
                          <a
                            href="/case-studies/sushi-me-rollin"
                            className="nav_story_visual w-inline-block"
                            tabIndex={0}
                          >
                            <img
                              className="img-cover"
                              src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1).jpg"
                              link-image
                              alt=""
                              sizes="100vw"
                              loading="lazy"
                              srcSet="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/66f1adeef9cc372ab7e8a998_sushi-me-rollin_nav%20(1).jpg 934w"
                            />
                            <div className="nav_story_visual_overlay">
                              <div className="max-width-350">
                                <p className="h20">
                                  How Sushi Me Rollin’ increased direct online
                                  sales by $91,000 using Owner.com
                                </p>
                              </div>
                            </div>
                            <div className="nav_story-arrow">
                              <div
                                link-icon="external"
                                className="icon_40 w-embed"
                              >
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g filter="url(#filter0_b_3508_30122)">
                                    <path
                                      d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z"
                                      fill="white"
                                      fillOpacity="0.92"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/case-studies"
                            className="nav_banner w-inline-block"
                            tabIndex={0}
                          >
                            <div className="nav_banner-icon">
                              <div
                                link-icon="external"
                                className="icon_40 w-embed"
                              >
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g filter="url(#filter0_b_3508_30122)">
                                    <path
                                      d="M24.8439 23.1038C24.8439 23.5674 24.4694 23.944 24.0058 23.9466V23.9466C23.5386 23.9492 23.1584 23.5711 23.1584 23.1038L23.1584 18.0661L16.3786 24.8459C16.0406 25.1839 15.4925 25.1839 15.1545 24.8459V24.8459C14.8164 24.5078 14.8164 23.9598 15.1545 23.6217L21.9342 16.8419L16.9015 16.846C16.4338 16.8464 16.0548 16.4666 16.0561 15.9988V15.9988C16.0574 15.5332 16.4352 15.1564 16.9009 15.1564L24.3453 15.1564C24.6207 15.1564 24.8439 15.3796 24.8439 15.655L24.8439 23.1038Z"
                                      fill="#6C6F75"
                                      fillOpacity="0.92"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <div className="margin-bottom margin-2">
                                <p className="h20">Case Studies</p>
                              </div>
                              <div className="text-color-content-quaternary">
                                <p className="h20">View all</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </nav>
          <div className="nav_respo-actions">
            <div className="hide-mobile-portrait">
              <a
                href="http://dashboard.owner.com/"
                target="_blank"
                className="button is-link w-button"
              >
                Login
              </a>
            </div>
            <a href="/demo" className="button is-nav w-button">
              Get a free demo
            </a>
            <div
              className="nav_menu-btn w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="nav_ham-box">
                <div className="nav_ham-line _1" />
                <div className="nav_ham-line _2" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" />
      </div>
    </div>
    </>
  );
};

export default Header;