import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
import { screen } from "@testing-library/react";

describe('Tests de <GifItem />', () => {

    const tituloImagen = 'Titulo imagen';
    const urlImagen = 'http://localhost/urlImagen';

    test('GifItem Snapshot', () => {
        const { container } = render(<GifItem title={tituloImagen}
            url={urlImagen} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y ALT indicado', () => {
        render(<GifItem title={tituloImagen} url={urlImagen} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(urlImagen);
        expect(alt).toBe(tituloImagen);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={tituloImagen} url={urlImagen} />);
        expect(screen.getByText(tituloImagen)).toBeTruthy();
    });

});