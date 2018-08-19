import styled from 'react-emotion';

import background1477 from '../../public/static/images/background@1477.jpg';
import background1920 from '../../public/static/images/background@1920.jpg';

export default styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  text-align: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${background1477});

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
  }

  > * {
    z-index: 1;
  }

  @media only screen and (min-width: 1920px) {
    background-image: url(${background1920});
  }
`;
