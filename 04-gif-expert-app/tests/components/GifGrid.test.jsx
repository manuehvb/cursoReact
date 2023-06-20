import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Tests de <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading al inicio', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Debe de mostrar items cuando se cargan las imágenes mediante useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Titulo',
                url: 'https://localhost/abc.gif'
            }, {
                id: '123',
                title: 'Titulo2',
                url: 'https://localhost/def.gif'
            },
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });


        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});