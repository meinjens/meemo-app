import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CampaignListPage from '../index';

describe('<CampaignListPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <CampaignListPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
