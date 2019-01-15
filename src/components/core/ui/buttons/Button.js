import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  krytian: {
    fontFamily: 'New-Krytan',
  },
  base: {
    padding: '10px',
    margin: '3px',
    borderRadius: '5px',
    fontSize: '1rem',
    width: '100%',
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
      backgroundColor: '#FFFFFF',
    },
  },
  primary: {
    color: '#69299a',
    borderColor: '#69299a',
    ':hover': {
      color: '#b339ff',
      backgroundColor: '#69299a',
      borderColor: '#b339ff',
    },
  },
  error: {
    color: '#9a0011',
    borderColor: '#9a0011',
    ':hover': {
      color: '#ff001c',
      backgroundColor: '#9a0011',
      borderColor: '#ff001d',
    },
  },
  cyan: {
    color: '#239a9a',
    borderColor: '#239a9a',
    ':hover': {
      color: '#2fe3e3',
      backgroundColor: '#239a9a',
      borderColor: '#2fe3e3',
    },
  },
  success: {
    color: '#0c9b00',
    borderColor: '#0c9b00',
    ':hover': {
      color: '#08e700',
      backgroundColor: '#0c9b00',
      borderColor: '#08e700',
    },
  }
});

class Button extends React.Component {
  render() {
    const { text = '', variant = 'default', color = 'none', onClick, krytian = false } = this.props;

    return (
      <button className={css(styles.base, styles[variant], styles[color], krytian && styles.krytian)} onClick={onClick}>{text}</button>
    );
  }
}

export default Button;
