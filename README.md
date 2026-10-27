# 🌐 StreamGlobal — Arquitetura Multi-Região & Cloud Intelligence

[![Deploy Status](https://img.shields.io/badge/Deploy-Render-success?style=for-the-badge&logo=render)]([COLE_AQUI_O_SEU_LINK_DO_RENDER])
[![Infrastructure](https://img.shields.io/badge/Infrastructure-DevOps%20%26%20Cloud-blue?style=for-the-badge&logo=googlecloud)](https://github.com/Esparta009boy/desafio-stream-global)
[![License](https://img.shields.io/badge/License-MIT-green.style=for-the-badge)](LICENSE)

---

## 📌 Introdução

O projeto **StreamGlobal** apresenta uma solução arquitetural moderna de Cloud Computing e DevOps projetada para resolver gargalos críticos de latência e desempenho em aplicações distribuídas globalmente[cite: 1]. 

A aplicação web estática documenta e simula a reengenharia de infraestrutura necessária para suportar usuários em múltiplos continentes (Europa, Ásia e Américas), transicionando de uma arquitetura centralizada com gargalos de I/O para uma **estratégia distribuída no Edge com aceleradores de armazenamento SAN NVMe-oF**[cite: 1, 2, 3].

---

## 🚀 Link da Aplicação em Produção

Acesse a demonstração interativa da solução hospedada no Render:

🔗 **[Clique aqui para acessar o projeto StreamGlobal no Render](https://desafio-stream-global.onrender.com)**

---

## 🎯 Propósito do Projeto & Diagnóstico de Engenharia

### 1. Desafio: Físico vs. Software
Usuários em Berlim e Tóquio enfrentavam latências elevadas (200ms+) ao acessar a infraestrutura centralizada em São Paulo[cite: 1]. 
* **Latência Geográfica:** Devido ao tempo de ida e volta da luz na fibra óptica (RTT) somado a handshakes TLS e roteamento, a distância de ~10.000 km impõe um limite físico que nenhuma otimização de software consegue superar[cite: 1].
* **Gargalo de I/O de Storage:** Discos locais legados no banco de dados central limitavam drasticamente as taxas de IOPS e throughput[cite: 1].

---

## 📐 Solução Arquitetural Proposta

### 2. Estratégia Multi-Região (Edge/CDN)
* **Frontend & Conteúdo Estático:** Distribuídos no Edge (CDN) próximos aos usuários — Europa (Frankfurt) e Ásia (Singapura) — reduzindo a latência para a faixa dos **~50 ms**[cite: 1, 2].
* **APIs Regionais & Geolocalização:** Requisições são roteadas dinamicamente para o ponto de presença mais próximo[cite: 2].
* **Replicação Assíncrona:** Dados de leitura são replicados de forma assíncrona entre regiões[cite: 2].

---

### 3. Aplicação Prática do Teorema CAP

A arquitetura adota uma abordagem deliberada dividindo o sistema com base no impacto no negócio[cite: 3]:

| Tipo de Dado | Escolha CAP | Consequência e Comportamento |
| :--- | :---: | :--- |
| **Login, Sessão, Catálogo, Conteúdo** | **AP** | Consistência eventual com foco em alta disponibilidade para garantir atendimento contínuo[cite: 3]. |
| **Pagamento, Faturamento** | **CP** | Transações mantidas em região centralizada com consistência forte, aceitando latência controlada[cite: 3]. |

---

### 4. Modernização de Storage: SAN NVMe-oF

Substituição dos discos tradicionais por uma **Storage Area Network (SAN) All-Flash baseada em NVMe-oF (over TCP)**[cite: 3]:
* **Baixa Latência:** Redução do tempo de acesso do banco de dados de milissegundos para microssegundos[cite: 3].
* **Escala Independente:** Desacoplamento entre capacidade de computação e armazenamento[cite: 3].
* **Custo-Benefício:** Utilização de redes Ethernet/TCP existentes com performance comparável ao Fibre Channel puro[cite: 3].

---

## 💻 Tecnologias Utilizadas

* **Frontend Estático:** HTML5 Semantic, CSS3 Custom Properties (Modern Dark Theme), JavaScript (ES6+)
* **DevOps & Deploy:** Git, GitHub, Render (Static Site Hosting)

---

## 🏁 Conclusão

A proposta da **StreamGlobal** demonstra que problemas de escala global não exigem a reconstrução contínua da aplicação principal, mas sim o **deslocamento inteligente da experiência do usuário para a borda (Edge)** e a modernização estratégica da camada de dados[cite: 1, 4]. 

Ao balancear a disponibilidade do Teorema CAP com uma infraestrutura SAN All-Flash NVMe-oF, a plataforma atinge escala global, alta IOPS e latência ultra-baixa com excelente viabilidade financeira e operacional[cite: 3, 4].

---

*Desenvolvido como projeto prático de Cloud Computing & DevOps.*
