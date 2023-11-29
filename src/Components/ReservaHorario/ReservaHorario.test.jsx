import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from "vitest";
import ReservaHorario from './ReservaHorario';

describe('Horario Component', () => {
  it('deve renderizar corretamente', () => {
    render(<ReservaHorario />);

    // Verifica se o título está presente
    expect(screen.getByText('Seu horário de chegada')).toBeInTheDocument();

    // Verifica se o texto do check-in está presente
    expect(screen.getByText('Seu carro estará pronto para check-in entre 08h00 e 20h00')).toBeInTheDocument();

    // Verifica se o label está presente
    expect(screen.getByText('Indique a sua hora prevista de chegada')).toBeInTheDocument();
 
    // Verifica se as opções de horário estão presentes
    for (let i = 0; i < 24; i++) {
      const formattedHour = `${i.toString().padStart(2, '0')}:00`;
      expect(screen.getByText(formattedHour)).toBeInTheDocument();
    }
  });

});