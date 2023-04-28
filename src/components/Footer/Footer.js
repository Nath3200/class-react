import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <footer>
        <nav className="conteneur">
          <a href="informations.html">Informations</a> - <a href="mentionslégales.html">Mentions légales</a> - <a href="Contact.html">Contact</a>
        </nav>
        <p className="conteneur">© 2023 Conception et réalisation par {this.props.name}. Tous droits réservés.</p>
      </footer>
    );
  }
}

export default Footer;