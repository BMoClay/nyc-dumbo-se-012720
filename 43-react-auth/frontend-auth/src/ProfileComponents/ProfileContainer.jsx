import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {

    return (
      <div>
        <h2>{}&apos;s Profile</h2>
        <h3>Cheese cakes</h3>

        <ol>
          {}
        </ol>

        <NewSnackForm />

      </div>
    );
  }

}

export default ProfileContainer;
