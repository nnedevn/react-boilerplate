import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import App from './App';

describe('App', () => {
  it('Renders withour error.', () => {
    render(<App/>);
  })
});