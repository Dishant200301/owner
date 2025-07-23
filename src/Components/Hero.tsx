import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="section_hp-grader">
      <div className="padding-global">
        <div className="container-large">
          <div className="hp-grader">
            <div className="hp-grader_head text-center">
              <div className="mb-5">
                <div className="n_text-size-xsmall">
                  <div className="hp-grader_meta">
                    <p>#1 Top-Rated Restaurant Software</p>
                    <div className="hp-grader_meta-inner flex justify-center items-center space-x-1">
                      <p>4.8</p>
                      {/* Star Icon SVG */}
                      <p>across 279 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="h72 text-4xl md:text-6xl font-bold">See where your restaurant is losing sales online</h1>
            </div>

            <div className="hp-grader_main flex flex-col md:flex-row justify-center items-center mt-10">
              <div className="hp-grader_phone-box relative">
                <img src="https://cdn.prod.website-files.com/66643a14df53b71d1ed72d08/6809881c139b1b218ef1ed59_phone-ui.avif" loading="lazy" alt="Phone UI" className="hp-grader_phone-mock" />
                {/* Other images and overlay elements would go here */}
              </div>

              <div className="hp-grader_form2-wrap mt-8 md:mt-0 md:ml-10">
                <div className="hp-grader_form2-box">
                    <form className="hp-grader_form2 flex items-center bg-white rounded-lg p-2 shadow-md">
                        <input 
                            className="hp-grader_form2-input w-full p-3 border-none focus:ring-0" 
                            autoComplete="off" 
                            maxLength={256}
                            name="grader-name-2" 
                            placeholder="Find your restaurant name" 
                            type="text" 
                            id="grader-name" 
                            required 
                        />
                        <a href="#" className="hp-grader_btn-submit2 bg-brand-blue text-white py-3 px-6 rounded-md ml-2 flex items-center">
                            <p className="hp-grader_btn-submt2-label hidden md:block">Get my report</p>
                            {/* Arrow Up Icon */}
                        </a>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;