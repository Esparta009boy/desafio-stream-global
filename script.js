function simularRota(regiao) {
    const output = document.getElementById('sim-output');
    
    if (regiao === 'Europa') {
        output.innerHTML = `<i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Rota Ativa: Usuário Europeu -> Edge/CDN Frankfurt (~50ms) -> Réplica de Leitura Local.`;
    } else if (regiao === 'Asia') {
        output.innerHTML = `<i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Rota Ativa: Usuário Asiático -> Edge/CDN Singapura (~50ms) -> Réplica de Leitura Local.`;
    } else if (regiaux === 'Brasil' || regiao === 'Brasil') {
        output.innerHTML = `<i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Rota Ativa: Usuário Brasileiro -> Edge São Paulo -> API São Paulo -> Escrita Primária + SAN NVMe-oF All-Flash.`;
    }
}