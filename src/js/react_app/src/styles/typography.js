// - - - - - - - - - - - - - - - - - - -
// - - typography
// global typography styles
import colors from './colors'

// font types
const avenir = 'Avenir, sans-serif'
const avenirLight = 'Avenir-Light, sans-serif'
const avenirMedium = 'Avenir-Medium, sans-serif'
const avenirBook = 'Avenir-Book, sans-serif'
const avenirRoman = 'Avenir-Roman, sans-serif'
// font weights
const light = '300'
const normal = '400'
const semibold = '500'
const bold = '700'

const typography = {

  main: {

    fontFamily: 'Avenir, Avenir-Light, Avenir-Book, Avenir-Roman, Helvetica sans-serif',
    fontWeight: `${normal}`,
    fontSize: '1.5rem',
    color: '#000',

    '& .light-wrap': {
      color: `${colors.black}`,
      '& .title': { color: `${colors.black}` },
      '& .subtitle-big': { color: `${colors.black}` },
      '& .subtitle-small': { color: `${colors.black}` },
      '& .list': { color: `${colors.black}` }
    },

    '& .dark-wrap': {
      color: `${colors.white}`,
      '& .title': { color: `${colors.white}` },
      '& .subtitle-big': { color: `${colors.silver}` },
      '& .subtitle-small': { color: `${colors.silver}` },
      '& .list': { color: `${colors.white}` }
    },

    '& h1': {
      fontFamily: `${avenirLight}`,
      fontWeight: `${normal}`,
      lineHeight: '3.8rem',
      letterSpacing: '0ch',
      fontSize: '3rem',

      '@media (min-width: 992px)': {
        fontSize: '4.6rem',
      }
    },

    '& h2': {
      fontFamily: `${avenirLight}`,
      fontWeight: `${normal}`,
      fontSize: '2.4rem',
      lineHeight: '3.4rem',
      letterSpacing: '0.15ch',
    },

    '& h3': {
      fontFamily: `${avenirBook}`,
      fontWeight: `${normal}`,
      fontSize: '2rem',
      lineHeight: '2.6rem',
      letterSpacing: '0.15ch',
    },

    '& h4': {
      fontFamily: `${avenirRoman}`,
      fontWeight: `${normal}`,
      fontSize: '2rem',
      lineHeight: '2.6rem',
      letterSpacing: '0.15ch',
    },

    // -- font skintones
    '& .title': {
      fontFamily: `${avenirLight}`,
      fontWeight: `${light}`,
      fontSize: '3.4rem',
      lineHeight: '4.9rem',
      letterSpacing: '-0.02ch',
      '@media (min-width: 992px)': {
        fontSize: '4.6rem',
        lineHeight: '6.5rem',
      }
    },

    '& .subtitle-big': {
      fontFamily: `${avenirBook}`,
      fontWeight: `${light}`,
      lineHeight: '3rem',
      letterSpacing: '0.05ch',
      fontSize: '1.7rem',
      color: `${colors.smoke}`,
    },

    '& .subtitle-small': {
      fontFamily: `${avenirBook}`,
      fontWeight: `${light}`,
      lineHeight: '2rem',
      letterSpacing: '0.1ch',
      fontSize: '3.4rem',
      color: `${colors.smoke}`,
    },

    '& .list': {
      fontFamily: `${avenirBook}`,
      fontWeight: `${bold}`,
      lineHeight: '3rem',
      letterSpacing: '0.05ch',
      fontSize: '1.7rem',
    },

    '& .caption': {
      fontFamily: `${avenirMedium}`,
      fontSize: '1.2rem',
      fontWeight: `${semibold}`,
      lineHeight: '1.2rem',
      letterSpacing: '.2ch',
      textTransform: 'uppercase',
    },
  }
}
export default typography;
