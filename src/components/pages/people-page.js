import React from 'react';
import Row from '../row';
import { withRouter } from 'react-router-dom';

import { 
  PersonList,
  PersonDetails
} from '../sw-components';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return (
      <Row 
        left={<PersonList onItemSelected={(id) => history.push(id)}/>}
        right={<PersonDetails itemId={id} />}
      />
    );
  
}

export default withRouter(PeoplePage);
