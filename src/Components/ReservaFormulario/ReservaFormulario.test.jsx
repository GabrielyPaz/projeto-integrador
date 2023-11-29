import '@testing-library/jest-dom';
import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import ReservaFormulario from './ReservaFormulario';

describe('ReservaFormulario Component', () => {
  it('deve renderizar corretamente', () => {
    render(<ReservaFormulario />);
    
    // Verifica se o texto está presente no componente renderizado
    expect(screen.getByText('Complete seus dados')).toBeInTheDocument();
  });

  it('deve conter campos de entrada corretos', () => {
    render(<ReservaFormulario />);
    
    // Verifica se os campos de entrada estão presentes
    expect(screen.getByPlaceholderText('Digite sua cidade.')).toBeInTheDocument();

    });
});

