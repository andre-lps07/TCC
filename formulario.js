// formulario.js

// Espera o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar/ocultar área de atuação conforme seleção do tipo de usuário
    document.querySelectorAll('input[name="tipo-usuario"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const areaAtuacaoGroup = document.getElementById('area-atuacao-group');
            
            if (this.value === 'prestador') {
                areaAtuacaoGroup.style.display = 'block';
            } else {
                areaAtuacaoGroup.style.display = 'none';
                // Reseta o select e esconde o campo "Outro" quando muda para cliente
                document.getElementById('area-atuacao').value = '';
                document.getElementById('outra-area-group').style.display = 'none';
            }
        });
    });

    // Mostrar campo "Outro" quando selecionado na área de atuação
    const selectAreaAtuacao = document.getElementById('area-atuacao');
    if (selectAreaAtuacao) {
        selectAreaAtuacao.addEventListener('change', function() {
            const outraAreaGroup = document.getElementById('outra-area-group');
            
            if (this.value === 'outro') {
                outraAreaGroup.style.display = 'block';
            } else {
                outraAreaGroup.style.display = 'none';
            }
        });
    }
});