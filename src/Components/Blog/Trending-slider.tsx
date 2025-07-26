import React from "react";
// To enable slider functionality, install Swiper.js:
// npm install swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";

const TrendingSlider: React.FC = () => {
  return (
    <section section-full="" className="section_blog-trending-slider">
        <div className="padding-global">
          <div className="container-large">
            <div className="blog-trending">
              <h2 className="h44">Trending articles</h2>
              <div className="blog-trending_slider">
                <div className="blog-trending_list-wrap w-dyn-list">
                  <div role="list" className="swiper-wrapper trending-blog w-dyn-items">
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/how-to-create-a-restaurant-marketing-plan"
                        className="blog-trending_list-card w-inline-block"><img
                          alt="A woman working on a laptop behind a restaurant counter." loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d30df3402b68f9d756_653031e3c2e5918f867b3ee4_Restaurant-marketing-plan-900x675-1-698x468.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Marketing Strategy</div>
                          <div className="text-color-white">
                            <p className="h24">Restaurant Marketing Plan: A Step-by-Step Guide (With Strategies for Any
                              Budget)</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">17 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">June 18, 2025</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/local-seo-for-restaurants" className="blog-trending_list-card w-inline-block"><img
                          alt="Customers sitting inside of a cafe." loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d5c0bff26f387d10a7_65fa226bbd12be91483ed554_local-seo-for-restaurants-thumbnail.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Increase Online Sales</div>
                          <div className="text-color-white">
                            <p className="h24">7 Local SEO Tips To Effectively Grow Your Restaurant&#x27;s Exposure</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">10 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">April 8, 2025</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/email-marketing-for-restaurants" className="blog-trending_list-card w-inline-block"><img
                          alt="Two plates of food and two beers on a table outside. " loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/669087f92b8bcbe87b8a33f1_653031de3785620867bd28fb_email-marketing-restaurant.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Marketing Strategy</div>
                          <div className="text-color-white">
                            <p className="h24">Restaurant Email Marketing: 8 Proven Campaigns To Drive More Sales</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">17 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">March 25, 2025</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/website-builders-for-restaurants"
                        className="blog-trending_list-card w-inline-block"><img alt="" loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966f0542d420b9568639d_65b96a0a391aa6e750d472f4_choosing-the-best-restaurant-website-builder.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Restaurant Software</div>
                          <div className="text-color-white">
                            <p className="h24">Best Restaurant Website Builders To Drive Sales [2025]</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">15 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">March 24, 2025</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/restaurant-marketing" className="blog-trending_list-card w-inline-block"><img
                          alt="A person taking a tacos on their phone." loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966ec763b960460802f61_6627d626a3d71c67792ad9e2_restaurant-marketing-thumbnail.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Marketing Strategy</div>
                          <div className="text-color-white">
                            <p className="h24">How to Do Restaurant Marketing: Strategies for Growth and Success</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">14 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">March 18, 2025</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/online-ordering-system-for-restaurants"
                        className="blog-trending_list-card w-inline-block"><img
                          alt="A computer screen showing an online ordering checkout page " loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966dbdff089fb419e974d_65f30e22dfe5f0da1c1f3ea7_best-online-ordering-system-thumb.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Restaurant Software</div>
                          <div className="text-color-white">
                            <p className="h24">7 Best Restaurant Online Ordering Systems to Drive Sales in 2025</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">11 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">November 20, 2024</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/chownow-alternative" className="blog-trending_list-card w-inline-block"><img alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966c97c72f170528a71d2_653031f2e7201d48b8b295f9_chownow-alternative.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Restaurant Software</div>
                          <div className="text-color-white">
                            <p className="h24">The Top 5 ChowNow Alternatives for Growing Online Orders</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">8 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">June 21, 2024</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/how-to-create-online-ordering-restaurant"
                        className="blog-trending_list-card w-inline-block"><img alt="" loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d4fc02dab6c2837ad3_6669ed170366e080ad4487b7_How-To-Create-Online-Ordering-for-Restuarants.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Restaurant Software</div>
                          <div className="text-color-white">
                            <p className="h24">How To Create Online Ordering for a Restaurant (That Gets Results)</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">10 min. read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">June 12, 2024</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/seo-for-restaurants" className="blog-trending_list-card w-inline-block"><img
                          alt="Person sitting at a laptop searching Google in a restaurant" loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966ecbd62250ed5efb13a_65cdd9ebce2cb290e2a61191_seo-for-restaurants-thumbnail.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Marketing Strategy</div>
                          <div className="text-color-white">
                            <p className="h24">Restaurant SEO is Easier Than You Think (3 Big Wins)</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">22 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">May 6, 2024</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/how-people-choose-restaurants-top-10-factors"
                        className="blog-trending_list-card w-inline-block"><img
                          alt="|Screen Shot 2019 06 27 at 2.08.24 AM|Screen Shot 2019 06 27 at 2.32.51 AM||"
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/669087fa18080077552741a4_653031dcf2da00d1b6e9f39a_portrait-of-a-couple-in-a-restaurant-choosing-from-a-menu_Sp-YdaH4Ke-1200x675-698x468.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Industry Trends &amp; Data</div>
                          <div className="text-color-white">
                            <p className="h24">How People Choose Restaurants: Top 10 Factors</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">14 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">October 18, 2023</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                    <div role="listitem" className="swiper-slide trending-blog w-dyn-item"><Link
                        to="/blog/restaurant-industry" className="blog-trending_list-card w-inline-block"><img alt=""
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966e304331a05002390c7_653031db454a16c685853be9_restaurant-industry.jpeg"
                          className="image absolute" />
                        <div className="blog-trending_list-card_content">
                          <div className="blog-tag white">Industry Trends &amp; Data</div>
                          <div className="text-color-white">
                            <p className="h24">The State Of The Restaurant Industry In 2023 (Free Report)</p>
                          </div>
                          <div className="blog-trending_list-card_info">
                            <div className="text-color-opacity-white">
                              <div className="p13">21 min read</div>
                            </div>
                            <div className="blog-intro_top-divider light"></div>
                            <div className="text-color-opacity-white">
                              <div className="p13">October 18, 2023</div>
                            </div>
                          </div>
                        </div>
                      </Link></div>
                  </div>
                </div>
                <div className="blog-trending_navigation"><Link to="#" className="swiper-arrow prev w-inline-block">
                    <div className="blog-trending_arrow">
                      <div className="icon-embed-xxlarge w-embed"><svg width="100%" height="100%" viewBox="0 0 46 46"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M29.8308 13.9483L21.2096 22.5883L29.8308 31.2283L27.1767 33.8824L15.8826 22.5883L27.1767 11.2942L29.8308 13.9483Z"
                            fill="currentColor" />
                        </svg></div>
                    </div>
                  </Link>
                  <div className="swiper-navigation trending-blog"></div><Link to="#"
                    className="swiper-arrow next w-inline-block">
                    <div className="blog-trending_arrow">
                      <div className="icon-embed-xxlarge w-embed"><svg width="100%" height="100%" viewBox="0 0 46 46"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16.1692 13.9483L24.7904 22.5883L16.1692 31.2283L18.8233 33.8824L30.1174 22.5883L18.8233 11.2942L16.1692 13.9483Z"
                            fill="currentColor" />
                        </svg></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default TrendingSlider;
