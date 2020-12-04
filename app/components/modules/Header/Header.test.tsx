import { render } from '@testing-library/react';
import Header from './Header';

describe('Module Header', () => {
  it('should render component', () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });
});
