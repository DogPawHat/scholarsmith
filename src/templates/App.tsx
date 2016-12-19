import * as React from 'react';
import Page from './presentation/Page';
import ActivePageSelect from './container/ActivePageSelect';

const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div>
      <Page>
        {props.children}
      </Page>
      <ActivePageSelect/>
    </div>
  );
};

export default App;