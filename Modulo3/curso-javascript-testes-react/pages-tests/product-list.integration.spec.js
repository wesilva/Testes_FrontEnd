import { screen, render } from '@testing-library/react';
import ProductList from '../pages';

describe('ProductList', () => {
  it('should ', () => {
    render(<ProductList />);

    expect(screen.getByTestId('product-list')).toBeInTheDocument();
  });

  it.todo('should render the ProductCart component 10 times');
  it.todo('should render the no products message');
  it.todo('should render the Search component');
  it.todo('should filter the product list when a search is performed');
  it.todo('should display error message when promise rejects');
  it.todo('should display the total quantity of produts');
  it.todo('should display product (singular) when there is only 1 product');
});
