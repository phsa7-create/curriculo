let totalAcoes = 0;
const perfil = document.getElementById('perfil');

function registrarAcao(nomeDaAcao) {
    totalAcoes++;
    document.getElementById('contadorAcoes').innerText = totalAcoes;
    document.getElementById('ultimaAcao').innerText = nomeDaAcao;
}

const doisNomes = ['João Silva', 'Ana Costa'];

document.getElementById('btnAlterarNome').onclick = () => {
    const indiceSorteado = Math.floor(Math.random() * doisNomes.length);
    const nomeSorteado = doisNomes[indiceSorteado];
    
    document.getElementById('nomePerfil').innerText = nomeSorteado;
    
    registrarAcao('Alterou o Nome para ' + nomeSorteado);
};

document.getElementById('btnAlterarCurso').onclick = () => {
    document.getElementById('cursoPerfil').innerText = 'Curso: Novo Curso de TI';
    registrarAcao('Alterou o Curso');
};

document.getElementById('btnAlterarFoto').onclick = () => {
    const foto = document.getElementById('fotoPerfil');
    const caminhoAtual = foto.getAttribute('src');
    
    if (caminhoAtual === 'imagens/perfil1.jpg') {
        foto.setAttribute('src', 'imagens/perfil2.jpg');
    } else {
        foto.setAttribute('src', 'imagens/perfil1.jpg');
    }
    
    registrarAcao('Alternou a Foto');
};

document.getElementById('btnDestacarPerfil').onclick = () => {
    perfil.classList.add('destaque');
    registrarAcao('Destacou o Perfil');
};

document.getElementById('btnRestaurar').onclick = () => {
    perfil.classList.remove('destaque');
    
    document.getElementById('nomePerfil').innerText = 'João Silva';
    document.getElementById('cursoPerfil').innerText = 'Curso: Técnico em Informática';
    document.getElementById('fotoPerfil').src = 'imagens/perfil1.jpg';
    
    registrarAcao('Restaurou o Perfil');
};

document.getElementById('temaSelect').onchange = (evento) => {
    const tema = evento.target.value;
    document.body.className = (tema === 'escuro') ? '' : tema;
    registrarAcao('Alterou o Tema para ' + tema);
};

document.getElementById('fonteRange').oninput = (evento) => {
    const tamanho = evento.target.value;
    document.getElementById('biografiaPerfil').style.fontSize = tamanho + 'px';
    document.getElementById('valorFonte').innerText = tamanho + 'px';
};
document.getElementById('fonteRange').onchange = () => registrarAcao('Alterou tamanho da fonte');

document.getElementById('mostrarBio').onchange = (evento) => {
    const mostrar = evento.target.checked;
    document.getElementById('biografiaPerfil').style.display = mostrar ? 'block' : 'none';
    registrarAcao(mostrar ? 'Exibiu a Biografia' : 'Ocultou a Biografia');
};

document.getElementById('btnAtualizarContato').onclick = () => {
    const email = document.getElementById('emailInput').value;
    const telefone = document.getElementById('telefoneInput').value;

    document.getElementById('emailExibido').innerText = 'E-mail: ' + (email || 'não informado');
    document.getElementById('telefoneExibido').innerText = 'Telefone: ' + (telefone || 'não informado');
    
    registrarAcao('Atualizou o Contato');
};