import { injectGlobal } from 'emotion';

const fonts = `
  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 300;
    src: url('/static/fonts/OpenSans-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSans';
    font-style: italic;
    font-weight: 300;
    src: url('/static/fonts/OpenSans-LightItalic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/OpenSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSans';
    font-style: italic;
    font-weight: 400;
    src: url('/static/fonts/OpenSans-Italic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSans';
    font-style: normal;
    font-weight: 600;
    src: url('/static/fonts/OpenSans-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSans';
    font-style: italic;
    font-weight: 600;
    src: url('/static/fonts/OpenSans-SemiBoldItalic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('/static/fonts/Roboto-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src: url('/static/fonts/Roboto-LightItalic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/Roboto-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url('/static/fonts/Roboto-Italic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/Roboto-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src: url('/static/fonts/Roboto-MediumItalic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/Roboto-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    src: url('/static/fonts/Roboto-BoldItalic.ttf') format('truetype');
  }
`;

injectGlobal(`
  ${fonts}

  html,
  body,
  #biscotti-app {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto';
    font-weight: 400;
    background-color: black;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'OpenSans';
  }

  h1, h2, h3 {
    font-weight: 300;
  }

  h4, h5, h6 {
    font-weight: 400;
  }
`);
