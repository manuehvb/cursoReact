import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('Debe hacer un match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        const valorInicial = '100';
        render(<CounterApp value={valorInicial} />);
        expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain(valorInicial);
    });

    test('Debe de incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(11)).toBeTruthy();
    });

    test('Debe de incrementar con el botón -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(9)).toBeTruthy();
    });

    test('Debe de funcionar el botón de reset', () => {
        render(<CounterApp value={355} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        /* fireEvent.click(screen.getByText('Reset')); */
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));
        expect(screen.getByText(355)).toBeTruthy();
    });

});