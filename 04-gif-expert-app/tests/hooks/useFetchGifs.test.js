import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests en useFetchGifs()', () => {

    test('Debe de devolver el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe de devolver un array de imagenes y el isLoading a false', async() => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );

        const { images, isLoading} = result.current;


        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});