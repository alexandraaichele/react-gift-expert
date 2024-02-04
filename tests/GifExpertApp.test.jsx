/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import { render, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import '@testing-library/jest-dom'

describe('Pruebas en el componente <GifExpertApp />', () => {
    test('', () => {
        const { getByText, getByPlaceholderText  } = render(<GifExpertApp />);

        expect(getByText('One puch')).toBeInTheDocument();

        fireEvent.change(getByPlaceholderText('Buscar gifs'), { target: { value: 'Nueva Categoría' } });
        fireEvent.click(getByText(''));

        // Verifica que la nueva categoría se agregue correctamente
        expect(getByText('Nueva Categoría')).toBeInTheDocument();
    })
})