import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    const title = 'Titulo';
    const subTitle = 'Subtítulo';

    test('debe hacer match co el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el mensaje "Título"', () => {
        render(<FirstApp title={title} />);
        /* screen.debug(); */
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar el título en un h1', () => {
        render(<FirstApp title={title} />);
        /* screen.debug(); */
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('debe mostrar el subtítulo enviado por props', () => {

        render(<FirstApp title={title} subTitle={subTitle} />);
        /* screen.debug(); */
        expect(screen.getAllByText(subTitle).length).toBe(2);
    });
});