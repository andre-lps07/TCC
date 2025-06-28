document.addEventListener('DOMContentLoaded', function() {
    
    const radiosTipoUsuario = document.querySelectorAll('input[name="tipo-usuario"]');
    
    radiosTipoUsuario.forEach(radio => {
        radio.addEventListener('change', function() {
            const areaAtuacaoGroup = document.getElementById('area-atuacao-group');
            const selectAreaAtuacao = document.getElementById('area-atuacao');
            const outraAreaGroup = document.getElementById('outra-area-group');
            
            if (this.value === 'prestador') {
                areaAtuacaoGroup.style.display = 'block';
            } else {
                areaAtuacaoGroup.style.display = 'none';
                if (selectAreaAtuacao) {
                    selectAreaAtuacao.value = '';
                }
                if (outraAreaGroup) {
                    outraAreaGroup.style.display = 'none';
                }
            }
        });
    });

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
    
    const radioSelecionado = document.querySelector('input[name="tipo-usuario"]:checked');
    if (radioSelecionado) {
        radioSelecionado.dispatchEvent(new Event('change'));
    }
    
});
