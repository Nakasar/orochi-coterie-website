import React, { Component } from 'react';
import IdentityContext from './Identity.context';

const withIdentity = WrappedComponent => {
  class withIdentity extends Component {
    render() {
      return (
        <IdentityContext.Consumer>
          {identity => <WrappedComponent identity={identity} {...this.props} />}
        </IdentityContext.Consumer>
      );
    }
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  withIdentity.displayName = `Authenticated(${wrappedComponentName})`;

  return withIdentity;
};

export default withIdentity;
