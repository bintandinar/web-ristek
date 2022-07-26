import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./index.css";

export default function Main() {
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getBlogs = async () => {
    axios
      .get("https://sistech-api.vercel.app/blog", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Navbar token={token} />

      <main>
        <section
          className="hero d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-text">
                  <h1 className="mb-2">Bintan Dinar Artamevia</h1>
                  <p className="mb-2">
                    A college freshman who is interest ineducation, self
                    development, andtechnology. Currently eager to gainnew
                    experiences and expandrelations by joining some
                    internshipand volunteer to build firmfoundation for future
                    career.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-12 position-relative">
                <div className="hero-image-wrap"></div>
                <img
                  src="images/dinar2.png"
                  className="hero-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="featured section-padding"  id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="profile-thumb">
                  <div className="profile-title">
                    <h4 className="mb-0">Information</h4>
                  </div>
                  <div className="profile-body">
                    <p>
                      <span className="profile-small-title">Name</span>
                      <span>Bintan Dinar Artamevia</span>
                    </p>
                    <p>
                      <span className="profile-small-title">Live</span>
                      <span>Bekasi, Indonesia</span>
                    </p>
                    <p>
                      <span className="profile-small-title">Phone</span>
                      <span>
                        <a href="tel: 305-240-9671">+6281213420493</a>
                      </span>
                    </p>
                    <p>
                      <span className="profile-small-title">Email</span>
                      <span>
                        <a href="mailto:hello@josh.design">
                          bintandinartamevia@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                  <div className="row">
                    <div className="col-lg-6 col-6">
                      <strong className="featured-text">Skills</strong>
                      <ul>
                        <li>Google suite</li>
                        <li>Ms Office Suite</li>
                        <li>Adaptive</li>
                        <li>Public Speaking</li>
                        <li>Time Management</li>
                      </ul>
                    </div>

                    <div className="col-lg-6 col-6  ps-5 py-2">
                      <strong className="featured-text">Achievements</strong>
                      <ul>
                        <li>Finalist of OPTIKA UIN Jakarta</li>
                        <li>Second runner up of IPB Statistics Competition</li>
                      </ul>
                    </div>

                    <div className="col-lg-6 col-6 pt4">
                      <strong className="featured-text">Interest</strong>
                      <ul>
                        <li>Content Creator in Space For Youth</li>
                        <li>
                          Coordinator of Merchandise Division in Sonic
                          Linguistic 2020
                        </li>
                        <li>
                          Member of The Student Council in Environment Division
                        </li>
                        <li>
                          Member of Fundraiser Division in Batavia On Telkom
                          2020
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 col-6  ps-5 pt-4">
                      <strong className="featured-text">Experience</strong>
                      <ul>
                        <li>Education</li>
                        <li>Youth development</li>
                        <li>Leadership</li>
                        <li>Content Writing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ini blogger */}

        <section className="projects section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-12 ms-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                  <img
                    src="images/blogger.png"
                    className="avatar-image img-fluid"
                    alt=""
                  />
                  <h2 className="text-dark ms-4 mb-0">My Blogger</h2>
                </div>
              </div>

              <div className="clearfix"></div>
              {blogs?.map((blog, key) => (
                <div className="col-lg-4 col-md-6 col-12" key={key}>
                  <div className="projects-thumb">
                    <a
                      href="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg"
                      className="popup-image"
                    >

                    </a>

                    <div className="projects-info">
                      <h3 className="projects-title">{blog.title}</h3>
                      <p>{blog.content}</p>
                      <h4
                        className="projects-tag"
                        onClick={() =>
                          navigate(`/blog/${blog.id}`, { state: { blog } })
                        }
                      >
                        Read More
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="contact section-padding" id="section_5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-12">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />
                  <h2 className="text-white ms-4 mb-0">Connect Me !</h2>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
                <div className="contact-info contact-info-border-start d-flex flex-column">
                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Stay connected
                  </strong>
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a
                        href="https://twitter.com/"
                        className="social-icon-link bi-twitter"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a href="https://instagram.com/" className="social-icon-link bi-instagram"></a>
                    </li>


                    <li className="social-icon-item">
                      <a
                        href="https://www.youtube.com/"
                        className="social-icon-link bi-youtube"
                      ></a>
                    </li>
                  </ul>
                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Contact
                  </strong>
                  <p className="mb-0">I’m available for contact</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
                <div className="contact-info d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">
                    About
                  </strong>
                  <p className="mb-2">
                    Dinar a student at the telkom universcity
                  </p>
                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Call
                  </strong>
                  <p className="mb-0">
                    <a href="tel: +6281213420493">+6281213420493</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <form
                  action="#"
                  method="get"
                  className="custom-form contact-form"
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                        />
                        <label htmlFor="floatingInput">Name</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required=""
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Tell me about the project"
                        ></textarea>
                        <label htmlFor="floatingTextarea">
                          Tell me about new idea for new blog
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12 ms-auto">
                      <button type="submit" className="form-control">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="copyright-text-wrap">
                <p className="mb-0">
                  <span className="copyright-text">
                    Copyright © 2022 <a href="#">Dinar's Blog</a> Company. All
                    rights reserved.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
