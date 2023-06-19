import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe devolver un objeto', () => {

        const testObj = {
            clave: 'Manu',
            edad: 24,
        };

        const usObj = usContext(testObj);

        expect(usObj).toStrictEqual({
            nombreClave: testObj.clave,
            anios: testObj.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    });
});