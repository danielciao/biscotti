import styled from 'react-emotion';

import background1477 from '../../public/static/images/background@1477.jpg';
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
  background-image: url(${background1477});

  @media only screen and (min-width: 1920px) {
    background-image: url(${background1920});
  }
`;
