import HeroImage from 'Images/new_hero_lossy.webp';
import colors from 'Styles/colors'

const onboardStyles = {
  hero: {
    position: 'absolute',
    top: '-18vh',
    minHeight: '100vh',
    '-webkit-background-clip': 'padding-box', /* for Safari */
    backgroundClip: 'padding-box', /* for IE9+, Firefox 4+, Opera, Chrome */
    background: `linear-gradient(to bottom, rgba(25, 31, 46, .95), rgba(25, 31, 46, .40)), url(${HeroImage}) no-repeat center`,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundPosition: '0px 0px',
    backgroundSize: '100% 100%',
    color: '#fff',
    borderTop: 'none',
    boxShadow: `0 0 300px 0px ${colors.smoke7}`,
    '& .title': { color: 'white' },

    '@media (max-width: 480px)': {
      minHeight: '100vh',
      top: '-7vh',

    },

    '& .hero-body': {
      // marginTop: -20,
      // padding: '6rem 6rem 6rem',
      textAlign: 'center',
      '& .wrap': {
        display: 'flex',
        paddingBottom: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& .title': {
          fontFamily: 'Avenir-Light, sans-serif',
          maxWidth: '90rem',

          marginLeft: '-15%',
          fontSize: '4.8rem',
          lineHeight: '4.9rem',
          letterSpacing: '-.02ch',
          '@media  (min-width: 800px) and (max-width: 1000px)': {
            fontSize: '4.9rem !important',
          },
          '@media (min-width: 480px) and (max-width: 800px)': {
            marginLeft: '-25%',
            fontSize: '3.5rem !important'
          },
          '@media (max-width: 480px)': {
            padding: 10,
            fontSize: '2.9rem !important',
            maxWidth: '125px !important',
            textAlign: 'left'
          }
        },
      },
      },
      '& .subtitle-big': {
        maxWidth: '300rem',
        marginTop: '15px',
      },


    '& .email-leadgen': {
      fontSize: '3rem',

      '& .button-control,& button': {
        // background: 'transparent',
        fontawesomeize: '1.8rem !important',
      },

      '& .button-control:hover': {
        transform: 'translateY(-.2rem)',
      },

      '& .button-control:active': {
        transform: 'translateY(-.1rem)',
      },

      '& .control': {
        marginBottom: '1rem',
        marginLeft: '.3rem',

        '& input': {
          fontSize: '1.6rem',
        },


        '& .select,& select': {
          width: '100%',
        }
      },

      '& .success-message': {
        textAlign: 'center',

        '@media (min-width: 576px)': {
          padding: '1rem 0',
        },

        '& .fa': {
          color:' #783D6F',
          fontSize: '5rem',
          marginBottom: '1rem',
          paddingTop: '1rem',
        },

        '& h2': {
          fontSize: '14px',
          marginBottom: '1rem',
        }
      }
    }
  },
}

export default onboardStyles;
