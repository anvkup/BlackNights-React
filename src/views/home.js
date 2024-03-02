import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Stats from '../components/stats'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>BlackNights Music</title>
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="home-navbar-interactive navbarContainer"
        >
          <span className="home-logo">BlackNights</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#hero" className="home-nav12 bodySmall">
                Home
              </a>
              <a href="#banner" className="home-nav22">
                <span className="bodySmall">Services</span>
                <br></br>
              </a>
              <a href="#tm" className="home-nav32">
                <span className="bodySmall">About</span>
                <br></br>
              </a>
              <a href="#contact" className="home-nav42 bodySmall">
                Contact
              </a>
            </nav>
            <div className="home-buttons">
              <a
                href="mailto:blacknights1111@gmail.com?subject=Details About Service"
                className="home-login buttonFlat"
              >
                Get Quoted
              </a>
              <a
                href="tel:+917061831930"
                className="home-register buttonFilled"
              >
                Call us
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">BLACKNIGHTS</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#hero" className="home-nav121 bodySmall">
                  Home
                </a>
                <a href="#tm" className="home-nav221 bodySmall">
                  About
                </a>
                <a href="#banner" className="home-nav321 bodySmall">
                  Services
                </a>
                <a href="#contact" className="home-nav421 bodySmall">
                  Contact
                </a>
              </nav>
              <div className="home-buttons1">
                <a
                  href="mailto:blacknights1111@gmail.com?subject=Details About Services"
                  className="home-login1 buttonFlat"
                >
                  Get Quoted
                </a>
                <a
                  href="tel:+91 70618 31930"
                  className="home-register1 buttonFilled"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div id="hero" className="home-hero1 heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Welcome to BlackNights Music Studio
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Where Music Comes to Life</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <a href="#banner" className="home-hero-button1 buttonFilled">
                Explore Our Services
              </a>
              <a href="#contact" className="home-hero-button2 buttonFlat">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">Our Features</h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>Elevate your music with our top-notch services</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Expertise and Experience"
                subHeading="With years of experience in the industry, our team of skilled audio engineers and producers brings a wealth of knowledge and expertise to every project. We have a proven track record of delivering high-quality music production, mixing mastering, and dubbing services."
              ></FeatureCard>
              <FeatureCard
                heading="State-of-the-Art Facilities"
                subHeading="Our studio is equipped with cutting-edge technology and top-of-the-line equipment to ensure the best possible sound quality for your recordings. From our acoustically treated rooms to our advanced mixing and mastering tools, we provide a professional environment that enhances your music."
              ></FeatureCard>
              <FeatureCard
                heading="Customized Solutions"
                subHeading="We understand that each project is unique, and we pride ourselves on offering customized solutions tailored to your specific needs. Whether you're a solo artist, a band, or a business, we take the time to understand your vision and deliver results that exceed your expectations."
              ></FeatureCard>
              <FeatureCard
                heading="Attention to Detail"
                subHeading="At Blacknights Music Studio, we believe that the little details matter. From the smallest nuances in a mix to the precise synchronization in dubbing, we pay meticulous attention to detail to ensure a polished and professional end result."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div id="banner" className="home-banner bannerContainer">
        <h3 className="home-banner-heading heading2">
          Elevate Your Sound with BlackNights Music Studio
        </h3>
        <span className="home-banner-sub-heading">
          <span>
            When you choose Blacknights Music Studio, you can trust that you are
            working with a dedicated team that is committed to delivering
            excellence in every aspect of music production, mixing mastering,
            and dubbing services.
          </span>
          <span className="bodySmall">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bodySmall">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bodySmall">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bodySmall">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bodySmall">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bodySmall">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bodySmall">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <button className="buttonFilled">
          <span>
            <span>Services</span>
            <br></br>
          </span>
        </button>
      </div>
      <div className="home-gallery">
        <div className="home-container04">
          <div className="home-container05">
            <h1 className="home-text46">Mixing</h1>
            <span className="home-text47">Professionals at Work</span>
          </div>
        </div>
        <div className="home-container06">
          <div className="home-container07">
            <h1 className="home-text48">Music Production</h1>
            <span className="home-text49">
              Classified, Creative, Incredible
            </span>
          </div>
        </div>
        <div className="home-container08">
          <div className="home-container09">
            <h1 className="home-text50">Mastering</h1>
            <span className="home-text51">Make Your Music Louder</span>
          </div>
        </div>
        <div className="home-container10">
          <div className="home-container11">
            <h1 className="home-text52">Dubbing </h1>
            <span className="home-text53">
              For Movies, Short Films, Documentaries and Jingles
            </span>
          </div>
        </div>
        <div className="home-container12">
          <div className="home-container13">
            <h1 className="home-text54">Jingles / Advertisements</h1>
            <span className="home-text55">Make Your Brand Audible</span>
          </div>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <h1 className="home-text56">Recording </h1>
            <span className="home-text57">-</span>
          </div>
        </div>
      </div>
      <div className="home-testimonial">
        <div id="tm" className="home-container16">
          <span>Text</span>
          <div className="home-container17">
            <div className="home-container18">
              <div className="home-testimonial-card">
                <div className="home-testimonial1">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                  </svg>
                  <span className="home-text59">
                    Working with Blacknights Music Studio has been an absolute
                    pleasure. From the initial consultation to the final
                    product, their team was attentive to our needs and delivered
                    exceptional results
                  </span>
                  <span className="home-text60">Neha Firdaush</span>
                </div>
                <img
                  alt="profile"
                  src="/testimonials/nehafirdaush-200h.jpg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-testimonial-card1">
              <div className="home-testimonial2">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
                </svg>
                <span className="home-text61">
                  BlacknNights Music Studio has been a true partner in helping
                  me preserve and share the essence of folk music through my
                  recordings. Their deep appreciation for the genre and
                  dedication to authenticity has been invaluable in capturing
                  the soulful essence of my folk songs.
                </span>
                <span className="home-text62">Binod Mishra</span>
              </div>
              <img
                alt="profile"
                src="/testimonials/binod-200w.jpeg"
                className="home-image1"
              />
            </div>
          </div>
          <div className="home-container19">
            <div className="home-testimonial-card2">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
              </svg>
              <span className="home-text63">
                Blacknights Music Studio has been instrumental in helping me
                bring my original songs to life. Their expertise in music
                production, mixing, and mastering has truly elevated the quality
                of my recordings.
              </span>
              <div className="home-profile">
                <img
                  alt="John Doe"
                  src="/testimonials/akansh-200h.jpg"
                  className="home-image2"
                />
                <div className="home-container20">
                  <span className="home-text64">Akansh Deep</span>
                  <span className="home-text65">Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats></Stats>
      <div id="contact" className="home-banner1">
        <h1 className="home-text66">Let&apos;s Discuss Your Project</h1>
        <span className="home-text67">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="home-btn-group1">
          <a href="tel:+91 70618 31930" className="home-link button">
            <span>
              <span className="home-text72">Call Us</span>
              <br></br>
              <span>+9170618 31930</span>
              <br></br>
            </span>
          </a>
          <a href="tel:+91 90607 93927" className="home-link1 button">
            <span>
              <span>Call Us</span>
              <br></br>
              <span>+91 90607 93927</span>
              <br></br>
            </span>
          </a>
        </div>
      </div>
      <span>
        <DateTimePrimitive
          format="DD/MM/YYYY"
          date="Sat Mar 02 2024 10:04:44 GMT+0530 (India Standard Time)"
        ></DateTimePrimitive>
      </span>
      <div className="home-container21">
        <div className="home-container22">
          <Script
            html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.1672871829574!2d85.29381247548255!3d23.38216470281312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1809b8c2105%3A0x8800f7e5969624b2!2sBlackNights%20Music!5e0!3m2!1sen!2sin!4v1709354343129!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
          ></Script>
        </div>
      </div>
      <span className="home-text81">
        <span>3rd Floor, Rajdhani Manya Tower </span>
        <span>Piska More, Ranchi</span>
      </span>
      <div className="home-footer">
        <footer className="home-footer1 footerContainer">
          <div className="home-container23">
            <span className="logo">BLACKNIGHTS</span>
            <nav className="home-nav1">
              <a href="#hero" className="home-nav122 bodySmall">
                Home
              </a>
              <a href="#banner" className="home-nav222 bodySmall">
                Services
              </a>
              <a href="#tm" className="home-nav322 bodySmall">
                About
              </a>
              <a href="#contact" className="home-nav422 bodySmall">
                Contact
              </a>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container24">
            <span className="bodySmall home-text84">
              © 2024 BlackNights Music, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon16 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon18 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon20 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
