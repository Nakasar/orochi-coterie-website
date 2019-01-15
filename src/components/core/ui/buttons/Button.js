import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  base: {
    padding: '10px',
    margin: '3px',
    borderRadius: '5px',
    fontFamily: 'New-Krytan',
    fontSize: '1rem',
    ':focus': {

    },
  },
  default: {
    backgroundColor: '#FFFFFF',
    border: '2px solid #000000',
    color: '#000000',
  },
  outlined: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: '#FFFFFF',
    ':hover': {
      color: '#000000',
    },
  },
  primary: {
    color: '#69299a',
    borderColor: '#69299a',
    ':hover': {
      color: '#b339ff',
      borderColor: '#b339ff',
    },
  },
  error: {
    color: '#9a0011',
    borderColor: '#9a0011',
    ':hover': {
      color: '#ff001c',
      borderColor: '#ff001d',
    },
  }
});

class Button extends React.Component {
  render() {
    const { text = '', variant = 'default', color = 'none' } = this.props;

    return (
      <button className={css(styles.base, styles[variant], styles[color])}>{text}</button>
    );
  }
}

export default Button;
