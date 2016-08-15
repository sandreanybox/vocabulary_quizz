import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import Navigation from './navigation';

const Layout = ({ content = () => null }) => (
  <Grid>
    <Row>
    <h1>Library</h1>
    <Navigation />
    </Row>
    <Row>
      {content()}
    </Row>
  </Grid>
);

export default Layout;
