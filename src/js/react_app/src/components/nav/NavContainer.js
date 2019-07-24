import React from "react";
import ReactDOM from "react-dom";
import img from "Images/white_nav_logo.svg";
import { Link } from "react-router-dom";
import { Auth } from "../auth/Auth";
import injectSheet, { jss } from "react-jss"
import colors from '../../styles/colors'

class NavContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didScroll: false,
      lastScrollTop: 0,
      delta: 5,
      isHide: false
    };
    this.hideBar = this.hideBar.bind(this);
  }
  componentDidMount() {
    // window.addEventListener("scroll", this.hideBar);
    // // -- Navbar menu JS
    // window.addEventListener("DOMContentLoaded", () => {
    //   // Get all "navbar-burger" elements
    //   const $navbarBurgers = Array.prototype.slice.call(
    //     document.querySelectorAll(".navbar-burger"),
    //     0
    //   );
    //
    //   // Check if there are any navbar burgers
    //   if ($navbarBurgers.length > 0) {
    //     // Add a click event on each of them
    //     $navbarBurgers.forEach(burger => {
    //       burger.addEventListener("click", () => {
    //         // Get the target from the "data-target" attribute
    //         const target = burger.dataset.target;
    //         const $target = document.getElementById(target);
    //         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //         burger.classList.toggle("is-active");
    //         $target.classList.toggle("is-active");
    //       });
    //     });
    //   }
    // });
    //
    // const $navbarLinks = Array.prototype.slice.call(
    //   document.querySelectorAll(".navbar-menu div a"),
    //   0
    // );
    // const $navMenu = $navbarLinks[0].parentElement.parentElement;
    //
    // $navbarLinks.forEach(link => {
    //   link.addEventListener("click", () => {
    //     const $burger = document.querySelector(".navbar-burger");
    //
    //     // Toggle the "is-active" class on burger & "navbar-menu"
    //     $burger.classList.toggle("is-active");
    //     $navMenu.classList.toggle("is-active");
    //   });
    // });
  }
  componentWillUnmount() {
    // window.removeEventListener("scroll", this.hideBar);
  }
  hideBar() {
    // let { isHide } = this.state;
    // window.scrollY > this.prev
    //   ? !isHide && this.setState({ isHide: true })
    //   : isHide && this.setState({ isHide: false });
    //
    // this.prev = window.scrollY;
  }

  render() {
    let classHide = this.state.isHide ? "hide" : "";
    const { classes } = this.props;

    return (
      <React.Fragment>
        <nav
          id="nav"
          className={classes.nav, 'nav-down', `${classHide}`}
          role="navigation"
          aria-label="main navigation"
          style={{
            transition: "top .3s",
            top: this.state.isHide ? "-50px" : "0px"
          }}
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item nav-logo">
                <img
                  src={img}
                  alt="Logo for CryptoWise: Cryptoasset research, analysis"
                />
              </Link>
              <div className="navbar-burger burger" data-target="navMenu">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
            </div>
            <div className="navbar-menu" id="navMenu">
              <div className="navbar-start">
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/portfolio" className="navbar-item">
                  Porfolio
                </Link>
              </div>

              <div className="navbar-end">
                <Link to="/investors" className="navbar-item">
                  Investors
                </Link>
                <Link to="/contribute" className="navbar-item">
                  Analysts
                </Link>

                {Auth.isAuthenticated ? (
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Account</a>
                    <div className="navbar-dropdown is-right">
                      <Link
                        to="/profile"
                        style={{ color: "grey" }}
                        className="navbar-item"
                      >
                        Profile
                      </Link>
                      <a
                        onClick={() => {
                          logout(() => (window.location = ""));
                        }}
                        style={{ color: "grey" }}
                        className="navbar-item"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                ) : (
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const navStyles = {
  //  -- hide navbar on scroll foobar, see app.js
  nav: {
    backgroundColor: `${colors.darkBlue}`,
    zIndex: '1',
    height: '0.5rem',
    position: 'fixed',
    top: '0',
    transition: 'top .2s ease-in-out',
    width: '100%',
    color: 'white',
    '& a': { background: 'none !important' }
  },

  navUp: {
    top: '-6rem !important',
  },

  navbarItem: {
    minHeight: '5rem',
    fontSize: '1.7rem',
    img: {
      width: '13rem',
      maxHeight: '4rem',
    }
  },

  navbarBurger: {
    minHeight: '5rem',
  },

  '@media (min-width: 576px)': {
    navbar: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    navbarBrand: {
      minWidth: '100%',
    },
    navbarMenu: {
      marginLeft: 'auto',
      minWidth: '50%',

      navbarItem: {
        minHeight: '5rem',
        fontSize: '2rem',
        img: {
          width: '13rem',
          maxHeight: '6rem',
        }
      }
    }
  },

  '@keyframes moveUp': {
    '0%': {
      opacity: '1',
      transform: 'translateY(0)'
    },

    '100%': {
      opacity: '0',
      transform: 'translateY(-6rem)',
      top: '-6rem !important',
    }
  },

  '@keyframes fadeIn': {
    '0%': {
      opacity: '0'
    },

    '100%': {
      opacity: '1'
    }
  },

  '@keyframes fadeOut': {
    '0%': {
      opacity: '1'
    },

    '100%': {
      opacity: '0'
    }
  }
}

export default injectSheet(navStyles)(NavContainer)
