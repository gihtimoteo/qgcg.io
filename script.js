function abrirPainel(painelId) {
  const paineis = document.querySelectorAll('.painel');
  paineis.forEach(p => p.classList.remove('ativo'));
  document.getElementById(`painel-${painelId}`).classList.add('ativo');
}

function mostrarCronograma(intensidade) {
  const tabela = document.getElementById('tabela-cronograma');
  let cronograma = '';

  if (intensidade === 'leve') {
    cronograma = `
      <h3>Intensidade Leve 💗 - 3h/dia (2h manhã + 1h tarde)</h3>
      <ul>
        <li><strong>Seg:</strong> Português (1h), Informática (1h), Atualidades (1h)</li>
        <li><strong>Ter:</strong> Matemática (1h), Constitucional (1h), Corregedoria (1h)</li>
        <li><strong>Qua:</strong> Processo Civil (1h), Administrativo (1h), Lógico (1h)</li>
        <li><strong>Qui:</strong> Português (1h), Penal (1h), Atualidades (1h)</li>
        <li><strong>Sex:</strong> Matemática (1h), Constitucional (1h), Corregedoria (1h)</li>
        <li><strong>Sáb:</strong> Processo Penal (1h), Processo Civil (1h), Administrativo (1h)</li>
        <li><strong>Dom:</strong> Simulado (3h)</li>
      </ul>`;
  } else if (intensidade === 'moderada') {
    cronograma = `
      <h3>Intensidade Moderada 💪 - 5h/dia (3h manhã + 2h tarde)</h3>
      <ul>
        <li><strong>Seg:</strong> Português (1h), Matemática (1h), Lógico (1h), Constitucional (1h), Informática (1h)</li>
        <li><strong>Ter:</strong> Processo Penal (1h), Processo Civil (1h), Corregedoria (1h), Administrativo (1h), Atualidades (1h)</li>
        <li><strong>Qua:</strong> Simulado (4h) + Correção (1h)</li>
        <li><strong>Qui:</strong> Português (1h), Matemática (1h), Constitucional (1h), Corregedoria (1h), Atualidades (1h)</li>
        <li><strong>Sex:</strong> Processo Penal (1h), Processo Civil (1h), Lógico (1h), Administrativo (1h), Informática (1h)</li>
        <li><strong>Sáb:</strong> Simulado (4h) + Correção (1h)</li>
        <li><strong>Dom:</strong> Simulado (4h) + Correção (1h)</li>
      </ul>`;
  } else if (intensidade === 'avancada') {
    cronograma = `
      <h3>Intensidade Avançada 🔥 - 7h/dia (4h manhã + 3h tarde)</h3>
      <ul>
        <li><strong>Seg:</strong> Português, Matemática, Lógico, Constitucional, Corregedoria, Atualidades, Informática</li>
        <li><strong>Ter:</strong> Processo Penal, Processo Civil, Administrativo, Matemática, Atualidades, Informática, Corregedoria</li>
        <li><strong>Qua:</strong> Simulado (4h) + Correção (3h)</li>
        <li><strong>Qui:</strong> Português, Constitucional, Lógico, Administrativo, Processo Penal, Processo Civil, Corregedoria</li>
        <li><strong>Sex:</strong> Matemática, Informática, Processo Penal, Atualidades, Constitucional, Processo Civil, Corregedoria</li>
        <li><strong>Sáb:</strong> Simulado (4h) + Correção (3h)</li>
        <li><strong>Dom:</strong> Simulado (4h) + Correção (3h)</li>
      </ul>`;
  }

  tabela.innerHTML = cronograma;
}
