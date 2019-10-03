import React from 'react';
import PropTypes from 'prop-types';

import { ExamplePageTemplate } from '../../templates/example-page'

export default function ExamplePagePreview({ entry, widgetFor }) {
  return (
    <div>
      <ExamplePageTemplate
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
        content={widgetFor('body')}
      />
    </div>
  )
}

ExamplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

