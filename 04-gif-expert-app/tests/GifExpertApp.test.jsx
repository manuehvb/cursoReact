import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { renderHook } from "@testing-library/react";

describe('Tests de <GifExpertApp />', () => {

    test('GifExpertApp snapshot', () => {
        const { container } = render(<GifExpertApp />);

        expect(container).toMatchSnapshot();
    });

    test('Debe pintar el estado inicial', () => {
        render(<GifExpertApp />);

        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        expect(screen.getByRole('form')).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
        expect(screen.getByText('Rick and Morty')).toBeTruthy();
        expect(screen.getByText('Cargando...')).toBeTruthy();
    });

});