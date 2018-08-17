import styled from 'react-emotion';

import background480 from '../../public/static/images/background@480.jpg';
import background1027 from '../../public/static/images/background@1027.jpg';
import background1450 from '../../public/static/images/background@1450.jpg';
import background1795 from '../../public/static/images/background@1795.jpg';
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

  @media only screen and (max-width: 480px) {
    background-image: url(${background480});
  }

  @media only screen and (min-resolution: 2dppx) and (max-width: 480px) {
    background-image: url(${background1027});
  }
  @media only screen and (min-width: 481px) and (max-width: 1027px) {
    background-image: url(${background1027});
  }

  @media only screen and (min-resolution: 2dppx) and (min-width: 481px) and (max-width: 1027px) {
    background-image: url(${background1450});
  }
  @media only screen and (min-width: 1028px) and (max-width: 1450px) {
    background-image: url(${background1450});
  }

  @media only screen and (min-resolution: 2dppx) and (min-width: 1028px) and (max-width: 1450px) {
    background-image: url(${background1795});
  }
  @media only screen and (min-width: 1451px) and (max-width: 1795px) {
    background-image: url(${background1795});
  }

  @media only screen and (min-resolution: 2dppx) and (min-width: 1796px) {
    background-image: url(${background1920});
  }
  @media only screen and (min-width: 1796px) {
    background-image: url(${background1920});
  }
`;
