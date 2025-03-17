import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Test of async await',()=>{
    test('should return the url of the image',async()=>{
        const url = await getImagen();

        expect(typeof url).toBe('string');
    })
})