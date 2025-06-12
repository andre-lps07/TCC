document.addEventListener('DOMContentLoaded', function() {
    
    const radiosTipoUsuario = document.querySelectorAll('input[name="tipo-usuario"]');
    
    // Adiciona um event listener para cada radio button
    radiosTipoUsuario.forEach(radio => {
        radio.addEventListener('change', function() {
            // Obtém o elemento da área de atuação
            const areaAtuacaoGroup = document.getElementById('area-atuacao-group');
            // Obtém o select de áreas
            const selectAreaAtuacao = document.getElementById('area-atuacao');
            // Obtém o grupo do campo "Outro"
            const outraAreaGroup = document.getElementById('outra-area-group');
            
            // Verifica se o valor selecionado é "prestador"
            if (this.value === 'prestador') {
                // Mostra a área de atuação
                areaAtuacaoGroup.style.display = 'block';
            } else {
                // Oculta a área de atuação
                areaAtuacaoGroup.style.display = 'none';
                
                // Reseta o valor do select
                if (selectAreaAtuacao) {
                    selectAreaAtuacao.value = '';
                }
                
                // Oculta o campo "Outro"
                if (outraAreaGroup) {
                    outraAreaGroup.style.display = 'none';
                }
            }
        });
    });

    // =============================================
    // CONTROLE DO CAMPO "OUTRO" NA ÁREA DE ATUAÇÃO
    // =============================================
    
    // Obtém o elemento select da área de atuação
    const selectAreaAtuacao = document.getElementById('area-atuacao');
    
    // Verifica se o select existe antes de adicionar o event listener
    if (selectAreaAtuacao) {
        selectAreaAtuacao.addEventListener('change', function() {
            // Obtém o grupo do campo "Outro"
            const outraAreaGroup = document.getElementById('outra-area-group');
            
            // Verifica se o valor selecionado é "outro"
            if (this.value === 'outro') {
                // Mostra o campo para especificar outra área
                outraAreaGroup.style.display = 'block';
            } else {
                // Oculta o campo
                outraAreaGroup.style.display = 'none';
            }
        });
    }
    
    // =============================================
    // INICIALIZAÇÃO DO FORMULÁRIO
    // =============================================
    
    // Verifica se algum radio button já está selecionado ao carregar a página
    const radioSelecionado = document.querySelector('input[name="tipo-usuario"]:checked');
    if (radioSelecionado) {
        // Dispara manualmente o evento change para configurar o estado inicial
        radioSelecionado.dispatchEvent(new Event('change'));
    }
});
