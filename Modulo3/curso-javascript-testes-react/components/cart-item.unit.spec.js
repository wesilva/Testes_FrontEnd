import { screen, render, fireEvent } from '@testing-library/react';
import CartItem from './cart-item';

const product = {
  title: 'Relógio bonito',
  price: '22.00',
  image: 'http://localhost/photo',
  quantity: 1,
};

const addToCart = jest.fn();

const renderCartItem = () => {
  render(<CartItem product={product} addToCart={addToCart} />);
};

describe('CartItem', () => {
  it('should render CartItem', () => {
    renderCartItem();

    expect(screen.getByTestId('cart-item')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderCartItem();

    const image = screen.getByTestId('image');

    expect(
      screen.getByText(new RegExp(product.title, 'i')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(product.price, 'i')),
    ).toBeInTheDocument();
    expect(image).toHaveProperty('src', product.image);
    expect(image).toHaveProperty('alt', product.title);
  });

  it('should display 1 as initial quantity', () => {
    renderCartItem();

    expect(screen.getByTestId('quantity').textContent).toBe('1');
  });

  it('should increase quantity by 1 when second button is clicked', async () => {
    renderCartItem();

    const button = screen.getByTestId('increase');
    //screen.debug(button);

    await fireEvent.click(button);

    expect(expect(screen.getByTestId('quantity').textContent).toBe('2'));
  });

  it('should decrease quantity by 1 when first button is clicked', async () => {
    renderCartItem();

    const buttonDecrease = screen.getByTestId('decrease');
    const buttonIncrease = screen.getByTestId('increase');
    const quantity = screen.getByTestId('quantity');

    await fireEvent.click(buttonIncrease);
    expect(expect(quantity.textContent).toBe('2'));

    await fireEvent.click(buttonDecrease);
    expect(expect(quantity.textContent).toBe('1'));
  });

  it('should not go below zero on the quantity', async () => {
    renderCartItem();

    const buttonDecrease = screen.getByTestId('decrease');
    const quantity = screen.getByTestId('quantity');

    expect(expect(quantity.textContent).toBe('1'));

    await fireEvent.click(buttonDecrease);
    await fireEvent.click(buttonDecrease);
    expect(expect(quantity.textContent).toBe('0'));
  });
  it.todo('Should implement the test');
});
