import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

import withIdentity from '../../../stores/contexts/Identity/withIdentity.context';

import { Button } from '../../core/ui/buttons';
import { EclipseLoader } from '../../core/ui/loaders';

import OrochiColor from "../../../resources/images/orochi_color.png";

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(105, 41, 154, 0.5)',
    border: '1px solid #69299a',
    color: '#FFFFFF',
    borderRadius: '5px',
    margin: '3px',
    padding: '2px',
    fontSize: '1.5em',
    flex: 2,
    ':focus': {
      border: '1px solid #69299a',
    },
  },
});

class Loki extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: null,
    success: null,
  };

  signUp = async () => {
    const { identity } = this.props;
    const { email, password } = this.state

    this.setState({ loading: true, error: null, success: null });

    try {
      const result = await identity.signupUser(email, password);

      this.setState({ success: 'Votre compte nécessite une confirmation, vérifiez vos emails.', loading: false });
    } catch (err) {
      let error;

      if (!err.json) {
        error = 'Une erreur est survenue, veuillez réessayer.';
      } else {
        switch (err.json.code) {
          case 400:
            error = 'Cet email est déjà enregistré.';
            break;
          case 422:
            error = 'Addresse email invalide.';
            break;
          default:
            error = 'Une erreur est survenue, veuillez réessayer.';
        }
      }

      this.setState({ error, loading: false });
    }
  };

  signIn = async () => {
    const { identity } = this.props;
    const { email, password } = this.state;

    this.setState({ loading: true, error: null, success: null });

    try {
      const result = await identity.loginUser(email, password, true);

      this.setState({ success: 'Vous êtes connecté au réseau.', loading: false });
    } catch (err) {
      let error;

      if (!err.json) {
        error = 'Une erreur est survenue, veuillez réessayer.';
      } else {
        switch (err.json.error_description) {
          case 'No user found with this email':
            error = 'Aucune ressource dans le réseau avec cet email.';
            break;
          case 'Invalid Password':
            error = 'Identifiants invalides.';
            break;
          case 'Email not confirmed':
            error = 'Compte en attente de validation, vérifiez vos mails.';
            break;
          default:
            error = 'Une erreur est survenue, veuillez réessayer.';
        }
      }

      this.setState({ error, loading: false });
    }
  };

  signOut = async () => {
    const { identity } = this.props;

    this.setState({ loading: true, error: null, success: null, password: '' });

    try {
      await identity.logoutUser();

      this.setState({ loading: false });
    } catch (err) {
      let error;

      if (!err.json) {
        error = 'Une erreur est survenue, veuillez réessayer.';
      } else {
        switch (err.json.error_description) {
          default:
            error = 'Une erreur est survenue, veuillez réessayer.';
        }
      }

      this.setState({ error, loading: false });
    }
  };

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { identity } = this.props;
    const { email, password, loading, error, success } = this.state;

    return (
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ borderRadius: '10px', border: '3px solid white', padding: '8px' }}>
          <Link to='/'><Button text="Retour" variant="outlined" /></Link>

          <img src={OrochiColor} alt="Côterie Orochi" style={{ height: '40vmin' }}/>
          <h1 style={{ fontFamily: 'New-Krytan' }}>Côterie Orochi</h1>

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {loading
              ? (
                <EclipseLoader size="100px" />
              )
              : (
                <>
                  {identity.isLoggedIn
                    ? (
                      <>
                        <h2>{identity.user.email}</h2>

                        <Button text="Déconnexion" color="error" variant="outlined" onClick={this.signOut}/>
                      </>
                    )
                    : (
                      <>
                        <div style={{ display: 'flex', width: '100%' }}>
                          <h2 style={{ flex: 1, textAlign: 'left', fontSize: '1rem' }}>Email</h2>
                          <input className={css(styles.input)} type="text" value={email} onChange={this.handleInputChange('email')} />
                        </div>
                        <div style={{ display: 'flex', width: '100%' }}>
                          <h2 style={{ flex: 1, textAlign: 'left', fontSize: '1rem' }}>Mot de Passe</h2>
                          <input className={css(styles.input)} type="password" value={password} onChange={this.handleInputChange('password')} />
                        </div>

                        {error && (
                          <div>
                            <h2 style={{ fontFamily: 'New-Krytan', color: 'red' }}>ERREUR</h2>
                            <p style={{ color: 'red' }}>{error}</p>
                          </div>
                        )}

                        {success && (
                          <div>
                            <h2 style={{ fontFamily: 'New-Krytan', color: 'green' }}>SUCCES</h2>
                            <p style={{ color: 'green' }}>{success}</p>
                          </div>
                        )}

                        <Button text="Nouvel Utilisateur" color="success" variant="outlined" onClick={this.signUp} />
                        <Button text="Connexion" color="cyan" variant="outlined" onClick={this.signIn}/>
                      </>
                    )
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withIdentity(Loki);
