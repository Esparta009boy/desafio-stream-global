
function simularRota(regiao) {
    const output = document.getElementById("sim-output");

    const rotas = {
        Europa: {
            titulo: "Rota proposta: Berlim, Europa",
            etapas: [
                "Usuário em Berlim",
                "DNS e CDN/Edge",
                "API regional proposta em Frankfurt",
                "Réplica de leitura, quando aplicável",
                "Região primária para operações de escrita"
            ],
            observacao:
                "Conteúdo em cache pode ser entregue pelo Edge. Consultas e gravações dependem do serviço solicitado e da configuração de dados."
        },
        Asia: {
            titulo: "Rota proposta: Tóquio, Ásia",
            etapas: [
                "Usuário em Tóquio",
                "DNS e CDN/Edge",
                "API regional proposta em Singapura",
                "Réplica de leitura, quando aplicável",
                "Região primária para operações de escrita"
            ],
            observacao:
                "O roteamento regional pode aproximar o processamento, mas a comunicação com a região primária ainda pode adicionar latência."
        },
        Brasil: {
            titulo: "Rota proposta: São Paulo, Brasil",
            etapas: [
                "Usuário em São Paulo",
                "DNS e CDN/Edge",
                "API regional proposta",
                "Região primária de dados",
                "SAN para armazenamento compartilhado, se implantada"
            ],
            observacao:
                "A SAN/NVMe-oF é uma proposta para a infraestrutura de armazenamento. Esta página não acessa nem testa uma SAN real."
        }
    };

    const rota = rotas[regiao];

    if (!output || !rota) {
        return;
    }

    const titulo = document.createElement("h3");
    titulo.textContent = rota.titulo;

    const lista = document.createElement("ol");

    rota.etapas.forEach((etapa) => {
        const item = document.createElement("li");
        item.textContent = etapa;
        lista.appendChild(item);
    });

    const observacao = document.createElement("p");
    observacao.textContent = rota.observacao;

    const aviso = document.createElement("p");
    aviso.textContent =
        "Simulação conceitual: não representa infraestrutura implantada nem latência medida.";

    output.replaceChildren(titulo, lista, observacao, aviso);
}
