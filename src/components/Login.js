import React from "react";
import LoginNav from "./LoginNav";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login__View">
      <div className="login__bg">
        <LoginNav />
        <div className="login__bg__contents">
          <h1 className="bg__h1">Unlimited movies, TV</h1>
          <h1 className="bg__h1">shows and more.</h1>
          <h4 className="bg__h4">Watch anywhere. Cancel anytime.</h4>
          <br />
          <h5 className="bg__h5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <form className="login__form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <input type="submit" id="submit" value="Get Started >" />
          </form>
        </div>
      </div>
      <div className="tv__contents">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="tv"
          className="tv__logo"
        />
        <div className="tv__headings">
          <h1>Enjoy on your TV.</h1>
          <h4>
            Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV,
            Blu-ray players and <br /> more.
          </h4>
        </div>
      </div>
      <div className="phone__content">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="phone"
          className="phone__logo"
        />
        <div className="phone__headings">
          <h1>
            Download your shows <br /> to watch offline.
          </h1>
          <br />
          <h4>
            Save your favorites easily and always have <br /> something to
            watch.
          </h4>
        </div>
      </div>
      <div className="mac__content">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt="mac"
          className="mac__logo"
        />
        <div className="mac__headings">
          <h1>Watch everywhere.</h1>
          <h4>
            Stream unlimited movies and TV shows on <br /> your phone, tablet,
            laptop, and TV.
          </h4>
        </div>
      </div>
      <div className="kids__content">
        <img
          src="https://occ-0-2667-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
          alt="kids"
          className="kids__logo"
        />
        <div className="kids__headings">
          <h1>
            Create profiles for <br /> children.
          </h1>
          <h4>
            Send children on adventures with their <br /> favorite characters in
            a space made just for <br /> them—free with your membership.
          </h4>
        </div>
      </div>
      <div className="faqs__content">
        <div className="faqs__heading">
          <h1>Frequently Asked Questions</h1>
          <h4>What is Netflix?</h4>
          <h4>How much does Netflix cost?</h4>
          <h4>Where can I watch?</h4>
          <h4>How do I cancel?</h4>
          <h4>What can I watch on Netflix?</h4>
          <h4>Is Netflix good for kids?</h4>
          <h5>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <form className="login__form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <input type="submit" id="submit" value="Get Started >" />
          </form>
        </div>
      </div>
      <div className="login__footer">
        <p className="questions">Questions? Call 000-800-040-1843</p>
        <div className="footer__content">
          <div className="foot__1">
            <p>
              <Link to="https://help.netflix.com/support/412">FAQ</Link>
            </p>
            <p>
              <Link to="http://ir.netflix.com/">Investor Relations</Link>
            </p>
            <p>
              <Link to="https://help.netflix.com/legal/privacy">Privacy</Link>
            </p>
            <p>
              <Link to="https://fast.com/">Speed Test</Link>
            </p>
          </div>
          <div className="foot__2">
            <p>
              <Link to="https://help.netflix.com/">Help Centre</Link>
            </p>
            <p>
              <Link to="https://jobs.netflix.com/jobs">Jobs</Link>
            </p>
            <p>
              <Link to="https://www.netflix.com/in/#">Cookie Preferences</Link>
            </p>
            <p>
              <Link to="Legal Notices">Legal Notices</Link>
            </p>
          </div>
          <div className="foot__3">
            <p>
              <Link to="https://www.netflix.com/youraccount">Account</Link>
            </p>
            <p>
              <Link to="https://www.netflix.com/watch">Ways to Watch</Link>
            </p>
            <p>
              <Link to="https://help.netflix.com/legal/corpinfo">
                Corporate Information
              </Link>
            </p>
            <p>
              <Link to="https://www.netflix.com/in/browse/genre/839338">
                Netflix Originals
              </Link>
            </p>
          </div>
          <div className="foot__4">
            <p>
              <Link to="https://media.netflix.com/">Media Centre</Link>
            </p>
            <p>
              <Link to="https://help.netflix.com/legal/termsofuse">
                Terms of Use
              </Link>
            </p>
            <p>
              <Link to="https://help.netflix.com/contactus">Contact Us</Link>
            </p>
          </div>
        </div>
        <h3 className="lang">English</h3>
        <br />
        <p>Netflix India</p>
      </div>
    </div>
  );
}

export default Login;
