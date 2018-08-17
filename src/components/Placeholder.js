import styled from 'react-emotion';

import background480 from '../../public/static/images/background@480.jpg';
import background1058 from '../../public/static/images/background@1058.jpg';
import background1477 from '../../public/static/images/background@1477.jpg';
import background1803 from '../../public/static/images/background@1803.jpg';
import background1920 from '../../public/static/images/background@1920.jpg';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 50px;
  text-align: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${background480});

  @media only screen and (min-width: 720px) {
    background-image: url(${background1058});
  }

  @media only screen and (min-width: 1024px) {
    background-image: url(${background1477});
  }

  @media only screen and (min-width: 1280px) {
    background-image: url(${background1803});
  }

  @media only screen and (min-width: 1920px) {
    background-image: url(${background1920});
  }
`;
