import React, { Component } from 'react';
import Lien from '../Lien/Lien';
import Footer from '../Footer/Footer';

class Layout extends Component {
  render() {
    const { children, footer } = this.props;

    return (
      <>
        <Lien />
        {children}
        {footer === true && <Footer />}
      </>
    );
  }
}

export default Layout;