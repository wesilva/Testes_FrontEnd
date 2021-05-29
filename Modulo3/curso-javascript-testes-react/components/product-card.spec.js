import { screen, render, fireEvent } from '@testing-library/react';
import ProductCart from './product-cart';

const product = {
  title: 'Relógio bonito',
  price: '22.00',
  image: 'photo',
};

const addToCart = jest.fn();

const renderProductCard = () => {
  render(<ProductCart product={product} addToCart={addToCart} />);
};

describe('ProductCart', () => {
  it('should render ProductCart', () => {
    renderProductCard();

    expect(screen.getByTestId('product-cart')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderProductCard();

    expect(
      screen.getByText(new RegExp(product.title, 'i')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(product.price, 'i')),
    ).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveStyle({
      backgroundImage: product.image,
    });
  });

  it('should call props.addToCart() when button gets clicked', async () => {
    renderProductCard();

    const button = screen.getByRole('button');
    //screen.debug(button);

    await fireEvent.click(button);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});
