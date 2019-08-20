// - - - - - - - - - - - - - - - - - - -
// - - GLOBAL css

const globalStyles = {
  main: {
    // '@charset': { 'utf-8' },
    // '@font-face': {
    //   fontFamily: 'Avenir',
    //   src: 'url("../fonts/avenir/AvenirLTStd-Book.otf") format("otf"),
    //     url("../fonts/avenir/AvenirLTStd-Light.otf") format("otf"),
    //     url("../fonts/avenir/AvenirLTStd-Roman.otf") format("otf"),
    //     url("../fonts/avenir/Avenir-Book.ttf") format("truetype"),
    //     url("../fonts/avenir/Avenir-Light.ttf") format("truetype"),
    //     url("../fonts/avenir/Avenir-Roman.ttf") format("truetype")'
    // },

    // // The right way
    // '@font-face': [
    //   {
    //     fontFamily: 'Avenir',
    //     src: 'url(webfont.eot)'
    //   },
    //   {
    //     fontFamily: 'MySecondFont',
    //     src: 'url(webfont2.eot)'
    //   }
    // ]

    'html, body': {
      fontFamily: 'Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif',
      fontWeight: 400,
      fontSize: '62.5%',
      lineHeight: '2.5rem',
      color: '#000',
    },

    'p': {
      margin: '1.8ch',
    },

    '.hidden': { display: 'none' },

    '.ReactModal__Body--open': {
      position: 'fixed',
      overflow: 'hidden',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    '& #wrapper': {

      fontFamily: 'Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, sans-serif,',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: '#000',

      '& .light-wrap': {
        color: '#000',
        '& .title': { color: '#000', },
        '& .subtitle-big': { color: '#000', },
        '& .subtitle-small': { color: '#000', },
        '& .list': { color: '#000', },
      },

      '& .dark-wrap': {
        color: '#fff',
        '& .title': { color: '#fff', },
        '& .subtitle-big': { color: '#AEBED4', },
        '& .subtitle-small': { color: '#AEBED4 !important', },
        '& .list': { color: '#fff', },
      },

      '& .heero': {
        color: '#fff',
        '& .title': { color: '#fff', },
      },

      '& .title': {
        fontFamily: "Avenir-Light, sans-serif",
        fontWeight: 300,
        fontSize: '2.3rem',
        lineHeight: '4.9rem',
        letterSpacing: '-0.02ch',
        '@media (minWidth: 992px)': {
          fontSize: '5.6rem',
          lineHeight: '6.5rem',
        }
      },

      '& .title-small': {
        fontFamily: "Avenir-Light, sans-serif",
        fontWeight: 200,
        fontSize: '3.6rem',
        lineHeight: '4.9rem',
        letterSpacing: '-0.02ch',
        '@media (min-width: 992px)': {
          fontSize: '4rem',
          lineHeight: '5.6rem',
        }
      },

      '& .subtitle-big': {
        fontFamily: "Avenir-Book, sans-serif",
        fontWeight: 300,
        lineHeight: '3rem',
        letterSpacing: '0.05ch',
        fontSize: '1.7rem',
        color: '#D0E5FF',
      },

      '& .subtitle-small': {
        fontFamily: "Avenir-Book, sans-serif",
        fontWeight: 300,
        lineHeight: '2rem',
        letterSpacing: '0.1ch',
        fontSize: '1.4rem',
        color: '#D0E5FF',
      },

      '& .list': {
        fontFamily: "Avenir-Book, sans-serif",
        fontWeight: 700,
        lineHeight: '3rem',
        letterSpacing: '0.05ch',
        fontSize: '1.7rem',
      },

      '& .caption': {
        fontFamily: "Avenir-Medium, sans-serif",
        fontSize: '1.2rem',
        fontWeight: 500,
        lineHeight: '1.2rem',
        letterSpacing: '.2ch',
        textTransform: 'uppercase',
      },

      '& h1': {
        fontFamily: "Avenir-Light, sans-serif",
        fontWeight: 400,
        lineHeight: '4.9rem',
        letterSpacing: '0ch',
        fontSize: '3rem',

        '@media (min-width: 992px)': {
          fontSize: '4.6rem',
        }
      },

      '& h2': {
        fontFamily: "Avenir-Light, sans-serif",
        fontWeight: 400,
        fontSize: '2.4rem',
        lineHeight: '3.4rem',
        letterSpacing: '0.15ch',
        '@media (min-width: 992px)': {
          fontSize: '5.1rem',
        }
      },

      '& h3': {
        fontFamily: "Avenir-Book, sans-serif",
        fontWeight: 400,
        fontSize: '2rem',
        lineHeight: '2.6rem',
        letterSpacing: '0.15ch',
      },

      '& h4': {
        fontFamily: "Avenir-Roman, sans-serif",
        fontWeight: 400,
        fontSize: '1.8rem',
        lineHeight: '2.6rem',
        letterSpacing: '0.15ch',
      },

      '& h5': {
        fontFamily: "Avenir-Roman, sans-serif",
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: '2.6rem',
        letterSpacing: '0.15ch',
      },

      '& h6': {
        fontFamily: "Avenir-Roman, sans-serif",
        fontWeight: 400,
        fontSize: '1.2rem',
        lineHeight: '2.6rem',
        letterSpacing: '0.15ch',
      },
    },

    '*, *::after, *::before': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    'body': {
      height: '100vh',
      margin: 0,
      boxSizing: 'border-box',

      // '@media (min-width: 576px)': {
      //   overflow-y: 'hidden', // hide vertical scrollbar
      //   overflow-x: 'hidden', // hide horizontal
      //   ::-webkit-scrollbar {
      //     display: none,
      //   }
      // }
    },

    '.center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    'a': {
      color: '#73b581',
      '&:hover': {
        color: '#EEf4fb',
      }
    },

    '#wrapper': {

      '& h1': { paddingTop: '2.5rem', },

      '& .light-wrap': {
        padding: '6rem 7rem 13rem',
        background: '#fff',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
      },

      '& .dark-wrap': {
        padding: '6rem 7rem 12rem',
        background: '#191F2D',
        color: '#fff',
        '& a': { background: 'none !important', }
      },

      '& .privacy-policy': {
        padding: '60px',
        color: '#000',
      },

      /*Vertical Sliding*/
      '& .slidingVertical': {
        display: 'inline',
        textIndent: 8,
      },

      '& .slidingVertical span': {
        animation: 'topToBottom 6s linear infinite 0s',
        '-ms-animation': 'topToBottom 6s linear infinite 0s',
        '-webkit-animation': 'topToBottom 6s linear infinite 0s',
        color: '#1990ff',
        opacity: 0,
        position: 'absolute',
      },
      '& .slidingVertical span:nth-child(2)': {
        'animation-delay': '1s',
        '-ms-animation-delay': '1s',
        '-webkit-animation-delay': '1s',
      },
      '& .slidingVertical span:nth-child(3)': {
        'animation-delay': '2s',
        '-ms-animation-delay': '2s',
        '-webkit-animation-delay': '2s',
      },
      '& .slidingVertical span:nth-child(4)': {
        'animation-delay': '3s',
        '-ms-animation-delay': '3s',
        '-webkit-animation-delay': '3s',
      },
      '& .slidingVertical span:nth-child(5)': {
        'animation-delay': '4s',
        '-ms-animation-delay': '4s',
        '-webkit-animation-delay': '4s',
      },

      /*topToBottom Animation*/
      '@-moz-keyframes topToBottom': {
        '0%': { opacity: 0, },
        '5%': { opacity: 0, '-moz-transform': 'translateY(-50px)', },
        '10%': { opacity: 1, '-moz-transform': 'translateY(0px)', },
        '25%': { opacity: 1, '-moz-transform': 'translateY(0px)', },
        '30%': { opacity: 0, '-moz-transform': 'translateY(50px)', },
        '80%': { opacity: 0, },
        '100%': { opacity: 0, },
      },
      '@-webkit-keyframes topToBottom': {
        '0%': { opacity: 0, },
        '5%': { opacity: 0, '-webkit-transform': 'translateY(-50px)', },
        '10%': { opacity: 1, '-webkit-transform': 'translateY(0px)', },
        '25%': { opacity: 1, '-webkit-transform': 'translateY(0px)', },
        '30%': { opacity: 0, '-webkit-transform': 'translateY(50px)', },
        '80%': { opacity: 0, },
        '100%': { opacity: 0, },
      },
      '@-ms-keyframes topToBottom': {
        '0%': { opacity: 0, },
        '5%': { opacity: 0, '-ms-transform': 'translateY(-50px)', },
        '10%': { opacity: 1, '-ms-transform': 'translateY(0px)', },
        '25%': { opacity: 1, '-ms-transform': 'translateY(0px)', },
        '30%': { opacity: 0, '-ms-transform': 'translateY(50px)', },
        '80%': { opacity: 0, },
        '100%': { opacity: 0, },
      },
    },

    '& blockquote': {
      fontSize: 21,
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      margin: '1em 10px',
      padding: '0 10px',
      // quotes: '"\201C""\201D""\2018""\2019"',
      padding: '10px 10px',
      lineHeight: 1.4,
    },

    '& blockquote:before': {
      content: 'open-quote',
      display: 'inline',
      height: 0,
      lineHeight: 0,
      left: '-10px',
      position: "relative",
      top: '25px',
      color: '#ccc',
      fontSize: '3em',
    },

    '& .fancy-underline': {
      paddingBottom: '.5rem',
      background: 'linear-gradient(to right, rgba(167, 249, 205,0) 0%, rgba(167, 249, 205,.35) 55%, rgba(167, 249, 205,.50) 80%, rgba(167, 249, 205,1) 100% ) left bottom transparent no-repeat',
      backgroundSize: '100% .3rem'
    },

    // spinner.scss
    '& div': {
      '&.is-loading': {
          position: "relative",
          pointerEvents: 'none',
          opacity: '0.5',
          '&:after': {
              // @include loader,
              position: 'absolute',
              top: 'calc(50% - 2.5em)',
              left: 'calc(50% - 2.5em)',
              width: '5em',
              height: '5em',
              borderWidth: '0.25em',
          },
      },
    },
  }
}

export default globalStyles;
