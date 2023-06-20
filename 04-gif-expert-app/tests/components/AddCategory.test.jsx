import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests de <AddCategory />', () => {

    const nuevoValorInput = 'Valor nuevo';

    test('Debe de cambiar el valor del input de text', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: nuevoValorInput } });

        expect(input.value).toBe(nuevoValorInput);
    });

    test('Debe de llamar a onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: nuevoValorInput } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(nuevoValorInput);
    });

    test('No debde de llamar a onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});