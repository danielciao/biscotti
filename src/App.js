import React from 'react';
import styled from 'react-emotion';

import { FacebookBox, TwitterBox, GooglePlusBox, Medium } from 'mdi-material-ui';
import Placeholder from './components/Placeholder';

const Intro = styled.section`
  color: white;
  padding: 0 15px;
  max-width: 560px;

  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  .underline {
    border-bottom: solid 3px rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 720px) {
    max-width: 720px;

    h1 {
      font-size: 67px;
    }

    p {
      font-size: 22px;
    }
  }

  @media (min-width: 1020px) {
    max-width: 1150px;
  }
`;

const Content = styled.div`
  margin-bottom: 50px;
`;

const Social = styled.div`
  p {
    margin: 0 0 5px;
  }

  a {
    display: inline-block;
    color: white;
    width: 30px;
    height: 30px;

    :not(:last-of-type) {
      margin-right: 10px;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function App() {
  return (
    <Placeholder>
      <Intro>
        <Content>
          <h1>A New Era.</h1>
          <p>
            For years, we have allowed banks to have exclusive access to our financial information
            and to take advantage of this.{' '}
            <span className="underline">
              We believe we should have more say in how we want to use our data.
            </span>
          </p>
          <p>A change is coming. Are you ready?</p>
        </Content>
        <Social>
          <p>Connect with us on</p>
          <a href="http://www.google.com">
            <FacebookBox />
          </a>
          <a href="http://www.google.com">
            <TwitterBox />
          </a>
          <a href="http://www.google.com">
            <GooglePlusBox />
          </a>
          <a href="http://www.google.com">
            <Medium />
          </a>
        </Social>
      </Intro>
    </Placeholder>
  );
}
