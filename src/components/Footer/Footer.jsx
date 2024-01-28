import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <p style={styles.text}>Footer</p>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #e1e1e1',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: '0',
    color: '#333',
    fontSize: '14px',
  },
};

export default Footer;
