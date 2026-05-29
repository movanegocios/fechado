"use strict";

const APP = window.SITE_CONFIG || {};

const DEFAULT_CONFIG = {
    marca: {
        nome: "DANO'S BURGER",
        nomeCurto: "danos.burger",
        slogan: "Smash Burgers artesanais. O verdadeiro sabor de Canasvieiras.",
        segmento: "Hamburgueria Artesanal",
        logoPrincipal: "logo.png",
        logoFavicon: "logo01.png",
        tituloPagina: "DANO'S.Burger | Smash Burgers Artesanais",
        descricaoSEO: "A melhor hamburgueria artesanal de Canasvieiras, Florianópolis.",
        palavrasChaveSEO: "hamburgueria, smash burger, delivery"
    },
    cores: {},
    tipografia: {},
    contato: {
        whatsappNumero: "5548996053746",
        mensagemSaudacao: "Olá! Tudo bem? Vim pelo site e gostaria de mais informações.",
        mensagemPedido: "Olá! Gostaria de fazer um pedido do cardápio!",
        mensagemAgendamentoHoje: "Olá! Quero agendar meu pedido para hoje assim que abrir.",
        mensagemAgendamentoAmanha: "Olá! Gostaria de agendar um pedido para amanhã."
    },
    links: {
        cardapio: "#",
        siteProprio: "#",
        ifood: "#",
        aiqfome: "#",
        instagram: "#",
        facebook: "#",
        googleMapsRota: "#"
    },
    modais: {
        comercial: {
            ativo: true,
            modoSemModal: "botoes",
            quandoDesativado: "whatsapp",
            canaisPadrao: ["whatsapp", "ifood", "aiqfome"]
        },
        qualificador: {
            ativo: true,
            quandoDesativado: "whatsapp"
        },
        eventos: {
            ativo: true,
            quandoDesativado: "whatsapp"
        },
        roleta: {
            ativo: true
        }
    },
    iconesCanais: {},
    endereco: {},
    horarios: {
        preAtendimentoInicio: "00:01",
        preAtendimentoFim: "00:59",
        abertoInicio: "08:00",
        abertoFim: "00:00",
        fechadoInicio: "01:00",
        fechadoFim: "07:59",
        horaTeste: ""
    },
    topBar: {
        ativo: true,
        texto: "🔥 Hoje: Entrega Grátis 🔥"
    },
    hero: {
        videoSrc: "",
        videoType: "auto",
        titulo: "danos.burger",
        subtitulo: "Smash Burgers artesanais."
    },
    sugestaoChef: {
        ativo: true,
        tituloSecao: "Quer uma sugestão?",
        badge: "A Escolha do Chef 🔥",
        produto: "Smash Duplo Bacon",
        preco: "Oferta",
        texto: "Clique e descubra a oferta especial de hoje",
        imagemCard: "",
        imagemModal: "",
        adicionalNome: "Adicional Especial",
        adicionalPreco: "+ R$ 0,00",
        adicionalImagem: ""
    },
    produtos: [],
    reels: [],
    depoimentos: [],
    eventos: {
        telefoneDestino: "",
        configuracaoFormulario: {
            mostrarHorarioEmTodos: true,
            horarioObrigatorioEmTodos: false,
            horarioObrigatorioReserva: true
        },
        reserva: {},
        aniversario: { minPessoas: 10, descontoPct: 15 },
        confraternizacao: { minPessoas: 20, descontoPct: 20 },
        tiposConfraternizacao: []
    },
    roleta: {
        ativo: true,
        abrirAutomaticamente: true,
        tempoParaAbrirMs: 3000,
        titulo: "Roleta Dano's",
        subtitulo: "Gire para destravar um prêmio no seu próximo pedido!",
        botaoGirar: "Tentar a Sorte 🎰",
        chaveLocalStorage: "danoRoletaGirada",
        prefixoVoucher: "DANO",
        premios: [
            { nome: "10% OFF", peso: 35, centro: 30 },
            { nome: "Frete Grátis", peso: 30, centro: 90 },
            { nome: "15% OFF", peso: 5, centro: 150 },
            { nome: "Refri Lata", peso: 20, centro: 210 },
            { nome: "Batata Frita", peso: 5, centro: 270 },
            { nome: "10% OFF", peso: 5, centro: 330 }
        ]
    },
    automacoes: {
        n8nAtivo: false,
        appScriptAtivo: false,
        urlN8N: "",
        urlAppScript: "",
        enviarReservas: true,
        enviarRoleta: true,
        enviarPedidos: false
    },
    textosEstado: {
        aberto: {
            status: "● Aberto Agora",
            botaoHeader: "Pedir Agora",
            botaoProduto: "Montar Pedido →",
            tituloBarra: "Faça o seu pedido agora",
            subtituloBarra: "Escolha o seu canal preferido para uma entrega rápida.",
            sugestaoTexto: "Clique e descubra a oferta especial de hoje"
        },
        fechado: {
            status: "● Fechado",
            botaoHeader: "Agendar p/ Amanhã",
            botaoProduto: "Agendar p/ Amanhã →",
            tituloBarra: "Já encerramos por hoje.",
            subtituloBarra: "Mas pode garantir o seu pedido para amanhã e ser o primeiro da fila.",
            sugestaoTexto: "Clique para agendar esta oferta para amanhã"
        },
        preAtendimento: {
            status: "● Pré-Atendimento",
            botaoHeader: "Agendar p/ Hoje",
            botaoProduto: "Agendar p/ Hoje →",
            tituloBarra: "Agende o seu pedido agora",
            subtituloBarra: "Seja o primeiro a receber assim que abrirmos.",
            sugestaoTexto: "Clique para agendar e garantir o seu na abertura"
        }
    },
    footer: {}
};

const CONFIG = deepMerge(DEFAULT_CONFIG, APP);

let estadoGlobalLoja = -1;
let tipoEventoAtual = "";
let roletaGirando = false;

function deepMerge(base, extra) {
    const output = Array.isArray(base) ? [...base] : { ...base };

    if (!extra || typeof extra !== "object") return output;

    Object.keys(extra).forEach(key => {
        const baseValue = output[key];
        const extraValue = extra[key];

        if (
            baseValue &&
            extraValue &&
            typeof baseValue === "object" &&
            typeof extraValue === "object" &&
            !Array.isArray(baseValue) &&
            !Array.isArray(extraValue)
        ) {
            output[key] = deepMerge(baseValue, extraValue);
        } else {
            output[key] = extraValue;
        }
    });

    return output;
}

function $(selector) {
    return document.querySelector(selector);
}

function $all(selector) {
    return document.querySelectorAll(selector);
}

function byId(id) {
    return document.getElementById(id);
}

function setText(id, value) {
    const el = byId(id);
    if (el) el.innerText = value || "";
}

function setHTML(id, value) {
    const el = byId(id);
    if (el) el.innerHTML = value || "";
}

function setHref(id, value) {
    const el = byId(id);
    if (el) el.href = value || "#";
}

function setSrc(id, value) {
    const el = byId(id);
    if (el) el.src = value || "";
}

function sanitizeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function sanitizeAttr(value) {
    return sanitizeText(value).replaceAll("`", "");
}

function gerarLinkWpp(mensagem, numeroPersonalizado) {
    const numero = String(numeroPersonalizado || CONFIG.contato.whatsappNumero || "").replace(/\D/g, "");
    const texto = encodeURIComponent(mensagem || CONFIG.contato.mensagemSaudacao || "Olá! Tudo bem?");
    return `https://wa.me/${numero}?text=${texto}`;
}

function abrirLink(url) {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
}

function modalEstaAtivo(nome) {
    return CONFIG.modais?.[nome]?.ativo !== false;
}

function obterAcaoModalDesativado(nome, padrao = "whatsapp") {
    return CONFIG.modais?.[nome]?.quandoDesativado || padrao;
}

function abrirDestinoExterno(acao, mensagem, linkExterno = "", numeroPersonalizado = "") {
    if (acao === "ifood" && CONFIG.links.ifood && CONFIG.links.ifood !== "#") {
        abrirLink(CONFIG.links.ifood);
        return;
    }

    if (acao === "cardapio" && CONFIG.links.cardapio && CONFIG.links.cardapio !== "#") {
        abrirLink(CONFIG.links.cardapio);
        return;
    }

    if (acao === "siteProprio" && CONFIG.links.siteProprio && CONFIG.links.siteProprio !== "#") {
        abrirLink(CONFIG.links.siteProprio);
        return;
    }

    if (acao === "linkExterno" && linkExterno && linkExterno !== "#") {
        abrirLink(linkExterno);
        return;
    }

    abrirLink(gerarLinkWpp(mensagem, numeroPersonalizado));
}

function modoBotoesSemModalAtivo() {
    return !modalEstaAtivo("comercial") && (CONFIG.modais?.comercial?.modoSemModal || "botoes") === "botoes";
}

function obterEstadoLojaCalculado() {
    const minutosAtuais = obterHoraSegura();

    const preAtendimentoInicio = converterParaMinutos(CONFIG.horarios.preAtendimentoInicio);
    const preAtendimentoFim = converterParaMinutos(CONFIG.horarios.preAtendimentoFim);
    const abertoInicio = converterParaMinutos(CONFIG.horarios.abertoInicio);
    const abertoFim = converterParaMinutos(CONFIG.horarios.abertoFim);
    const fechadoInicio = converterParaMinutos(CONFIG.horarios.fechadoInicio);
    const fechadoFim = converterParaMinutos(CONFIG.horarios.fechadoFim);

    if (horaEstaNoIntervalo(minutosAtuais, preAtendimentoInicio, preAtendimentoFim)) return 3;
    if (horaEstaNoIntervalo(minutosAtuais, abertoInicio, abertoFim)) return 1;
    if (horaEstaNoIntervalo(minutosAtuais, fechadoInicio, fechadoFim)) return 2;

    return 2;
}

function obterEstadoOperacionalAtual() {
    return estadoGlobalLoja === -1 ? obterEstadoLojaCalculado() : estadoGlobalLoja;
}

function montarMensagemPedidoDireto(nome, origem, mensagemPersonalizada = "") {
    if (mensagemPersonalizada) return mensagemPersonalizada;

    const estado = obterEstadoOperacionalAtual();

    if (estado === 1) {
        return `Olá! Vim pelo site (${origem}) e quero pedir agora: ${nome}.`;
    }

    if (estado === 2) {
        return `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA AMANHÃ: ${nome}.`;
    }

    return `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA HOJE assim que abrir: ${nome}.`;
}

function obterTextoCanal(tipo, texto, compacto = false) {
    if (texto) return texto;

    const mapaCompleto = {
        whatsapp: "WhatsApp",
        wpp: "WhatsApp",
        ifood: "iFood",
        aiqfome: "Aiqfome",
        cardapio: "Cardápio",
        site: "Site",
        siteProprio: "Site",
        link: "Pedir Agora",
        externo: "Pedir Agora"
    };

    const mapaCompacto = {
        whatsapp: "Wpp",
        wpp: "Wpp",
        ifood: "iFood",
        aiqfome: "Aiq",
        cardapio: "Menu",
        site: "Site",
        siteProprio: "Site",
        link: "Pedir",
        externo: "Pedir"
    };

    const mapa = compacto ? mapaCompacto : mapaCompleto;
    return mapa[tipo] || "Pedir";
}

function normalizarCanalPedido(canal) {
    if (typeof canal === "string") {
        return { tipo: canal, texto: obterTextoCanal(canal) };
    }

    if (!canal || typeof canal !== "object") return null;

    const tipo = canal.tipo || canal.nome || "link";

    return {
        ...canal,
        tipo,
        texto: canal.texto || obterTextoCanal(tipo),
        textoCurto: canal.textoCurto || obterTextoCanal(tipo, "", true)
    };
}

function obterUrlPadraoDoCanal(tipo) {
    if (tipo === "ifood") return CONFIG.links.ifood || "#";
    if (tipo === "aiqfome") return CONFIG.links.aiqfome || "#";
    if (tipo === "cardapio") return CONFIG.links.cardapio || "#";
    if (tipo === "site" || tipo === "siteProprio") return CONFIG.links.siteProprio || "#";
    return "#";
}

function canalTemDestinoValido(canal) {
    if (!canal) return false;

    const tipo = canal.tipo || "link";

    if (tipo === "whatsapp" || tipo === "wpp" || tipo === "wa") return true;

    const url = canal.url || canal.link || obterUrlPadraoDoCanal(tipo);
    return Boolean(url && url !== "#");
}

function obterCanaisPedido(item = {}) {
    const canaisDoItem = Array.isArray(item.canais) ? item.canais : [];
    const canaisBase = canaisDoItem.length
        ? canaisDoItem
        : (Array.isArray(CONFIG.modais?.comercial?.canaisPadrao) ? CONFIG.modais.comercial.canaisPadrao : ["whatsapp"]);

    return canaisBase
        .map(normalizarCanalPedido)
        .filter(canalTemDestinoValido);
}

function montarBotoesCanaisPedido(item = {}, origem = "Site", contexto = "produto") {
    const canais = obterCanaisPedido(item);

    if (!canais.length) {
        return `<span class="action-link dynamic-action-btn">${sanitizeText(CONFIG.textosEstado.aberto.botaoProduto)}</span>`;
    }

    const classeGrupo = contexto === "reel" ? "reel-channel-buttons" : contexto === "sugestao" ? "suggestion-channel-buttons" : "product-channel-buttons";
    const compacto = contexto === "reel";

    const botoes = canais.map(canal => {
        const tipo = canal.tipo || "link";
        const texto = compacto ? (canal.textoCurto || canal.texto || obterTextoCanal(tipo, "", true)) : (canal.texto || obterTextoCanal(tipo));
        const url = canal.url || canal.link || obterUrlPadraoDoCanal(tipo);
        const mensagem = canal.mensagem || item.mensagem || "";
        const numero = canal.numero || canal.whatsappNumero || "";
        const classeCanal = sanitizeAttr(String(tipo).toLowerCase());

        return `
            <a
                href="#"
                class="channel-order-btn channel-${classeCanal}"
                target="_blank"
                rel="noopener noreferrer"
                onclick="abrirCanalPedido(event, this)"
                data-canal-tipo="${sanitizeAttr(tipo)}"
                data-canal-url="${sanitizeAttr(url)}"
                data-canal-mensagem="${sanitizeAttr(mensagem)}"
                data-canal-numero="${sanitizeAttr(numero)}"
                data-item-nome="${sanitizeAttr(item.nome || item.produto || item.titulo || "Produto")}" 
                data-item-origem="${sanitizeAttr(origem)}"
            >${sanitizeText(texto)}</a>
        `;
    }).join("");

    return `<div class="${classeGrupo}">${botoes}</div>`;
}

function resolverUrlCanalPedido(tipo, url, mensagem, numeroPersonalizado) {
    const canal = String(tipo || "").trim();
    const destinoInformado = String(url || "").trim();

    if (canal === "whatsapp" || canal === "wpp" || canal === "wa") {
        return gerarLinkWpp(mensagem, numeroPersonalizado);
    }

    if (canal === "ifood") return destinoInformado && destinoInformado !== "#" ? destinoInformado : CONFIG.links.ifood;
    if (canal === "aiqfome") return destinoInformado && destinoInformado !== "#" ? destinoInformado : CONFIG.links.aiqfome;
    if (canal === "cardapio") return destinoInformado && destinoInformado !== "#" ? destinoInformado : CONFIG.links.cardapio;
    if (canal === "site" || canal === "siteProprio") return destinoInformado && destinoInformado !== "#" ? destinoInformado : CONFIG.links.siteProprio;
    if (canal === "link" || canal === "externo" || canal === "linkExterno") return destinoInformado;

    return destinoInformado || gerarLinkWpp(mensagem, numeroPersonalizado);
}

function abrirCanalPedido(event, botao) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (!botao) return;

    const tipo = botao.dataset.canalTipo || "whatsapp";
    const url = botao.dataset.canalUrl || "";
    const nome = botao.dataset.itemNome || "Produto";
    const origem = botao.dataset.itemOrigem || "Site";
    const mensagemBase = botao.dataset.canalMensagem || "";
    const numero = botao.dataset.canalNumero || "";
    const mensagem = montarMensagemPedidoDireto(nome, origem, mensagemBase);
    const destino = resolverUrlCanalPedido(tipo, url, mensagem, numero);

    if (!destino || destino === "#") {
        abrirLink(gerarLinkWpp(mensagem, numero));
        return;
    }

    abrirLink(destino);

    if (CONFIG.automacoes.enviarPedidos) {
        dispararWebhookCondicional("pedido_canal", {
            origem,
            produto: nome,
            canal: tipo,
            destino,
            estado_loja: obterEstadoOperacionalAtual(),
            data_envio: new Date().toISOString()
        });
    }
}

function aplicarConfiguracoesGlobais() {
    aplicarCores();
    aplicarTipografia();
    aplicarMetaTags();
    aplicarMarca();
    aplicarTopBar();
    aplicarHero();
    aplicarLinksFixos();
    aplicarLocalizacao();
    aplicarFooter();
    aplicarSchemaRestaurant();
}

function aplicarCores() {
    const root = document.documentElement;
    const cores = CONFIG.cores || {};

    const mapa = {
        "--gold": cores.gold,
        "--gold-hover": cores.goldHover,
        "--price-green": cores.priceGreen,
        "--dark-bg": cores.darkBg,
        "--card-bg": cores.cardBg,
        "--text-light": cores.textLight,
        "--text-muted": cores.textMuted,
        "--whatsapp-green": cores.whatsappGreen,
        "--ifood-red": cores.ifoodRed,
        "--aiqfome-purple": cores.aiqfomePurple
    };

    Object.entries(mapa).forEach(([variavel, valor]) => {
        if (valor) root.style.setProperty(variavel, valor);
    });
}

function aplicarTipografia() {
    const root = document.documentElement;

    if (CONFIG.tipografia?.fontePrincipal) {
        root.style.setProperty("--font-main", CONFIG.tipografia.fontePrincipal);
    }

    if (CONFIG.tipografia?.fonteTitulos) {
        root.style.setProperty("--font-title", CONFIG.tipografia.fonteTitulos);
    }

    const googleFonts = byId("google-fonts-link");
    if (googleFonts && CONFIG.tipografia?.googleFontsUrl) {
        googleFonts.href = CONFIG.tipografia.googleFontsUrl;
    }
}

function aplicarMetaTags() {
    document.title = CONFIG.marca.tituloPagina || CONFIG.marca.nome || "Site Inteligente";

    const favicon = byId("page-favicon");
    if (favicon && CONFIG.marca.logoFavicon) {
        favicon.href = CONFIG.marca.logoFavicon;
    }

    const metaDesc = byId("meta-description");
    if (metaDesc) metaDesc.setAttribute("content", CONFIG.marca.descricaoSEO || "");

    const metaKeywords = byId("meta-keywords");
    if (metaKeywords) metaKeywords.setAttribute("content", CONFIG.marca.palavrasChaveSEO || "");
}

function aplicarMarca() {
    setText("brand-name-header", CONFIG.marca.nome);
    setText("hero-title", CONFIG.hero.titulo || CONFIG.marca.nomeCurto);
    setText("hero-subtitle", CONFIG.hero.subtitulo || CONFIG.marca.slogan);
    setText("footer-brand-name", CONFIG.marca.nomeCurto || CONFIG.marca.nome);
    setText("footer-brand-slogan", CONFIG.marca.slogan);

    const logo = byId("brand-logo");
    if (logo) {
        logo.src = CONFIG.marca.logoPrincipal || "";
        logo.alt = `Logo ${CONFIG.marca.nome || "da empresa"}`;
    }
}

function aplicarTopBar() {
    const topBar = byId("top-bar");
    if (!topBar) return;

    if (CONFIG.topBar?.ativo === false) {
        topBar.style.display = "none";
        return;
    }

    topBar.style.display = "block";
    topBar.innerText = CONFIG.topBar?.texto || "";
}

function aplicarHero() {
    const holder = byId("hero-video-holder");
    if (!holder) return;

    holder.dataset.heroVideoSrc = CONFIG.hero.videoSrc || "";
    holder.dataset.heroVideoType = CONFIG.hero.videoType || "auto";
}

function aplicarLinksFixos() {
    setHref("btn-header-cardapio", CONFIG.links.cardapio);
    setHref("btn-qualifier-cardapio", CONFIG.links.cardapio);
    setHref("modal-btn-ifood", CONFIG.links.ifood);

    setHref("footer-instagram", CONFIG.links.instagram);
    setHref("footer-facebook", CONFIG.links.facebook);
    setHref("footer-whatsapp", gerarLinkWpp(CONFIG.contato.mensagemSaudacao));
    setHref("footer-btn-pedido", gerarLinkWpp(CONFIG.contato.mensagemPedido));

    const facebook = byId("footer-facebook");
    if (facebook && (!CONFIG.links.facebook || CONFIG.links.facebook === "#")) {
        facebook.style.display = "none";
    }
}

function aplicarLocalizacao() {
    setText(
        "location-subtitle",
        `No coração de ${CONFIG.endereco.bairro || CONFIG.endereco.cidade || "sua região"}.`
    );

    const enderecoTexto = CONFIG.endereco.textoCompleto || [
        CONFIG.endereco.rua,
        CONFIG.endereco.bairro,
        CONFIG.endereco.cidade,
        CONFIG.endereco.estado
    ].filter(Boolean).join(", ");

    setHTML("location-address", `📍 ${sanitizeText(enderecoTexto)}`);

    const mapa = byId("google-map-iframe");
    if (mapa && CONFIG.endereco.googleMapsEmbed) {
        mapa.src = CONFIG.endereco.googleMapsEmbed;
    }

    setHref("btn-google-route", CONFIG.links.googleMapsRota);
}

function aplicarFooter() {
    setText("footer-rights", CONFIG.footer.textoDireitos || "");
    setText("footer-system-text", CONFIG.footer.textoSistema || "");
    setText("footer-line-1", CONFIG.footer.atendimentoLinha1 || "");
    setText("footer-line-2", CONFIG.footer.atendimentoLinha2 || "");
    setText("footer-line-3", CONFIG.footer.atendimentoLinha3 || "");
    setText("footer-btn-pedido", CONFIG.footer.botaoPedido || "Fazer pedido agora");
}

function aplicarSchemaRestaurant() {
    const schema = byId("schema-restaurant");
    if (!schema) return;

    const data = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: CONFIG.marca.nome,
        image: CONFIG.marca.logoPrincipal || "",
        address: {
            "@type": "PostalAddress",
            streetAddress: CONFIG.endereco.rua || "",
            addressLocality: CONFIG.endereco.cidade || "",
            addressRegion: CONFIG.endereco.estado || "",
            postalCode: CONFIG.endereco.cep || "",
            addressCountry: CONFIG.endereco.pais || "BR"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: CONFIG.endereco.latitude || "",
            longitude: CONFIG.endereco.longitude || ""
        },
        servesCuisine: CONFIG.marca.segmento || "",
        priceRange: "$$"
    };

    schema.textContent = JSON.stringify(data, null, 2);
}

function renderizarTudo() {
    renderizarSugestaoChef();
    renderizarDepoimentos();
    renderizarProdutos();
    renderizarReels();
    renderizarEventos();
    renderizarTiposEvento();
    renderizarRoletaVisual();
}

function renderizarSugestaoChef() {
    const secao = byId("suggestion-section");
    if (!secao) return;

    if (CONFIG.sugestaoChef?.ativo === false) {
        secao.style.display = "none";
        return;
    }

    secao.style.display = "block";

    setText("suggestion-section-title", CONFIG.sugestaoChef.tituloSecao);
    setText("suggestion-badge", CONFIG.sugestaoChef.badge);
    setText("suggestion-product-name", CONFIG.sugestaoChef.produto);
    setText("sugestao-texto", CONFIG.sugestaoChef.texto);

    const img = byId("suggestion-img");
    if (img) {
        img.src = CONFIG.sugestaoChef.imagemCard || "";
        img.alt = CONFIG.sugestaoChef.produto || "Sugestão do chef";
    }

    const card = byId("suggestion-card");
    const content = card ? card.querySelector(".suggestion-content") : null;

    if (content) {
        const botoesAntigos = content.querySelector(".suggestion-channel-buttons");
        if (botoesAntigos) botoesAntigos.remove();
    }

    const itemSugestao = {
        ...CONFIG.sugestaoChef,
        nome: CONFIG.sugestaoChef.produto,
        produto: CONFIG.sugestaoChef.produto
    };

    if (card) {
        if (modoBotoesSemModalAtivo()) {
            card.onclick = null;
            card.classList.add("no-modal-mode");

            if (content) {
                content.insertAdjacentHTML("beforeend", montarBotoesCanaisPedido(itemSugestao, "Sugestão do Chef", "sugestao"));
            }
        } else {
            card.classList.remove("no-modal-mode");
            card.onclick = function () {
                abrirModalComercial({
                    origem: "Sugestão do Chef",
                    nome: CONFIG.sugestaoChef.produto,
                    preco: CONFIG.sugestaoChef.preco || "Oferta",
                    imagem: CONFIG.sugestaoChef.imagemModal || CONFIG.sugestaoChef.imagemCard,
                    adicionalNome: CONFIG.sugestaoChef.adicionalNome || "Adicional Especial",
                    adicionalPreco: CONFIG.sugestaoChef.adicionalPreco || "+ R$ 0,00",
                    adicionalImagem: CONFIG.sugestaoChef.adicionalImagem || CONFIG.sugestaoChef.imagemCard,
                    linkExterno: CONFIG.sugestaoChef.linkExterno,
                    canais: CONFIG.sugestaoChef.canais
                });
            };
        }
    }
}

function renderizarDepoimentos() {
    const grid = byId("testimonial-grid");
    if (!grid) return;

    const depoimentos = Array.isArray(CONFIG.depoimentos) ? CONFIG.depoimentos : [];
    grid.innerHTML = "";

    depoimentos.forEach(item => {
        const card = document.createElement("div");
        card.className = "testimonial-card reveal";

        card.innerHTML = `
            <div class="testimonial-content">
                <p>"${sanitizeText(item.texto)}"</p>
            </div>
            <div class="testimonial-footer">
                <div class="testimonial-author">
                    <h4>${sanitizeText(item.nome)}</h4>
                    <span>${sanitizeText(item.tipo)}</span>
                </div>
                <div class="testimonial-stars">${sanitizeText(item.estrelas || "★★★★★")}</div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function renderizarProdutos() {
    const grid = byId("product-grid");
    if (!grid) return;

    const produtos = Array.isArray(CONFIG.produtos) ? CONFIG.produtos : [];
    grid.innerHTML = "";

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "product-card reveal";

        const itemProduto = {
            ...produto,
            nome: produto.nome
        };

        if (modoBotoesSemModalAtivo()) {
            card.classList.add("no-modal-mode");
            card.onclick = null;
        } else {
            card.onclick = function () {
                abrirModalComercial({
                    origem: "Produto",
                    nome: produto.nome,
                    preco: produto.preco,
                    imagem: produto.imagem,
                    adicionalNome: produto.adicionalNome,
                    adicionalPreco: produto.adicionalPreco,
                    adicionalImagem: produto.adicionalImagem,
                    linkExterno: produto.linkExterno,
                    canais: produto.canais
                });
            };
        }

        const blocoAcao = modoBotoesSemModalAtivo()
            ? montarBotoesCanaisPedido(itemProduto, "Produto", "produto")
            : `<span class="action-link dynamic-action-btn">${sanitizeText(CONFIG.textosEstado.aberto.botaoProduto)}</span>`;

        card.innerHTML = `
            ${produto.badge ? `<div class="badge-bestseller">${sanitizeText(produto.badge)}</div>` : ""}
            <div class="product-img" style="background-image: url('${sanitizeAttr(produto.imagem)}');"></div>
            <div class="product-info">
                <h4>${sanitizeText(produto.nome)}</h4>
                <div class="price-elegant">${sanitizeText(produto.preco)}</div>
                ${blocoAcao}
            </div>
        `;

        grid.appendChild(card);
    });
}

function renderizarReels() {
    const track = byId("reels-track");
    if (!track) return;

    const reels = Array.isArray(CONFIG.reels) ? CONFIG.reels : [];
    track.innerHTML = "";

    reels.forEach(reel => {
        const card = document.createElement("div");
        card.className = "reel-card";

        card.dataset.videoSrc = reel.videoSrc || "";
        card.dataset.videoType = reel.videoType || "auto";

        const itemReel = {
            ...reel,
            nome: reel.titulo
        };

        if (modoBotoesSemModalAtivo()) {
            card.classList.add("no-modal-mode");
            card.onclick = null;
        } else {
            card.onclick = function () {
                abrirModalComercial({
                    origem: "Reels",
                    nome: reel.titulo,
                    preco: reel.preco,
                    imagem: reel.imagemModal || reel.poster || "",
                    adicionalNome: reel.adicionalNome || "Adicional Especial",
                    adicionalPreco: reel.adicionalPreco || "+ R$ 0,00",
                    adicionalImagem: reel.adicionalImagem || reel.imagemModal || reel.poster || "",
                    linkExterno: reel.linkExterno,
                    canais: reel.canais
                });
            };
        }

        const acaoReel = modoBotoesSemModalAtivo()
            ? montarBotoesCanaisPedido(itemReel, "Reels", "reel")
            : `<button class="btn-buy-mini" type="button" onclick="event.stopPropagation(); this.closest('.reel-card').click();">Pedir</button>`;

        card.innerHTML = `
            <div class="reel-video-frame"></div>
            <div class="reel-content">
                <div class="reel-info">
                    <h3>${sanitizeText(reel.titulo)}</h3>
                    <p>${sanitizeText(reel.preco)}</p>
                </div>
                <div class="reel-actions">
                    <button class="btn-like" type="button" onclick="toggleLike(event, this)">🤍</button>
                    ${acaoReel}
                </div>
            </div>
        `;

        track.appendChild(card);
    });

    inicializarVideosReels();
}

function renderizarEventos() {
    const grid = byId("events-grid");
    if (!grid) return;

    const eventos = [
        { tipo: "reserva", data: CONFIG.eventos.reserva },
        { tipo: "aniversario", data: CONFIG.eventos.aniversario },
        { tipo: "confraternizacao", data: CONFIG.eventos.confraternizacao }
    ];

    grid.innerHTML = "";

    eventos.forEach(evento => {
        const item = evento.data || {};
        const card = document.createElement("div");

        card.className = "event-card";
        card.onclick = function () {
            openEventModal(evento.tipo);
        };

        card.innerHTML = `
            <div class="event-img" style="background-image: url('${sanitizeAttr(item.imagem || "")}');"></div>
            <div class="event-info">
                <div>
                    <h3>${sanitizeText(item.cardTitulo || item.titulo || "")}</h3>
                    <p>${sanitizeText(item.cardTexto || "")}</p>
                </div>
                <span class="event-btn">${sanitizeText(item.botao || "Solicitar")}</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

function renderizarTiposEvento() {
    const select = byId("evTipo");
    if (!select) return;

    const tipos = Array.isArray(CONFIG.eventos.tiposConfraternizacao)
        ? CONFIG.eventos.tiposConfraternizacao
        : [];

    select.innerHTML = "";

    tipos.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.innerText = tipo;
        select.appendChild(option);
    });
}

function renderizarRoletaVisual() {
    setText("roleta-title", CONFIG.roleta.titulo);
    setText("roleta-subtitle", CONFIG.roleta.subtitulo);
    setText("btn-girar-roleta", CONFIG.roleta.botaoGirar);

    const roleta = byId("roleta");
    if (!roleta) return;

    const premios = Array.isArray(CONFIG.roleta.premios) ? CONFIG.roleta.premios : [];
    roleta.innerHTML = "";

    premios.forEach(premio => {
        const span = document.createElement("span");
        span.className = "slice-text";
        span.style.setProperty("--rot", `${premio.centro || 0}deg`);
        span.innerText = premio.nome || "";
        roleta.appendChild(span);
    });
}

function reveal() {
    const reveals = $all(".reveal");

    reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("active");
        }
    });
}

function converterParaMinutos(horaString) {
    if (!horaString || typeof horaString !== "string" || !horaString.includes(":")) {
        return 0;
    }

    const [horas, minutos] = horaString.trim().split(":").map(Number);
    return (horas * 60) + minutos;
}

function obterHoraSegura() {
    if (CONFIG.horarios.horaTeste !== "") {
        return converterParaMinutos(CONFIG.horarios.horaTeste);
    }

    try {
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Sao_Paulo",
            hour: "numeric",
            minute: "numeric",
            hour12: false
        });

        const parts = formatter.formatToParts(new Date());
        let hour = parseInt(parts.find(p => p.type === "hour").value, 10);
        const minute = parseInt(parts.find(p => p.type === "minute").value, 10);

        if (hour === 24) hour = 0;

        return (hour * 60) + minute;
    } catch (e) {
        const agora = new Date();
        return (agora.getHours() * 60) + agora.getMinutes();
    }
}

function horaEstaNoIntervalo(horaAtual, horaInicio, horaFim) {
    if (horaInicio <= horaFim) {
        return horaAtual >= horaInicio && horaAtual <= horaFim;
    }

    return horaAtual >= horaInicio || horaAtual <= horaFim;
}

function verificarHorarioLoja() {
    const novoEstado = obterEstadoLojaCalculado();

    if (estadoGlobalLoja !== novoEstado) {
        estadoGlobalLoja = novoEstado;
        sincronizarInterfaceComEstado(novoEstado);
    }
}

function obterTextosEstado(estado) {
    if (estado === 1) return CONFIG.textosEstado.aberto;
    if (estado === 3) return CONFIG.textosEstado.preAtendimento;
    return CONFIG.textosEstado.fechado;
}

function sincronizarInterfaceComEstado(estado) {
    const statusLoja = byId("status-loja");
    const btnHeaderPedir = byId("btn-header-pedir");
    const stratContainer = byId("strategic-content");
    const botoesProdutos = $all(".dynamic-action-btn");
    const sugestaoTexto = byId("sugestao-texto");

    const textos = obterTextosEstado(estado);

    const cidadeEstado = [CONFIG.endereco.cidade, CONFIG.endereco.estado].filter(Boolean).join(" - ");

    if (statusLoja) {
        const cor = estado === 1
            ? "var(--price-green)"
            : estado === 2
                ? "var(--ifood-red)"
                : "var(--gold)";

        statusLoja.innerHTML = `<span style="color: ${cor};">${sanitizeText(textos.status)}</span> 📍 ${sanitizeText(cidadeEstado)}`;
    }

    if (btnHeaderPedir) {
        btnHeaderPedir.innerText = textos.botaoHeader;

        if (estado === 1) {
            btnHeaderPedir.href = gerarLinkWpp(CONFIG.contato.mensagemPedido);
            btnHeaderPedir.onclick = null;
            btnHeaderPedir.target = "_blank";
        } else if (estado === 2) {
            btnHeaderPedir.href = "#";
            btnHeaderPedir.target = "";
            btnHeaderPedir.onclick = function (e) {
                e.preventDefault();
                openQualifierModal(true);
            };
        } else {
            btnHeaderPedir.href = "#";
            btnHeaderPedir.target = "";
            btnHeaderPedir.onclick = function (e) {
                e.preventDefault();
                openQualifierModal(false);
            };
        }
    }

    botoesProdutos.forEach(btn => {
        btn.innerText = textos.botaoProduto;
    });

    if (sugestaoTexto) {
        sugestaoTexto.innerText = textos.sugestaoTexto;
    }

    if (stratContainer) {
        stratContainer.innerHTML = montarBarraEstrategica(estado, textos);
    }
}

function montarBarraEstrategica(estado, textos) {
    if (estado === 1) {
        return `
            <div class="fade-in-content">
                <h2 class="strategic-title">${sanitizeText(textos.tituloBarra)}</h2>
                <p class="strategic-subtitle">${sanitizeText(textos.subtituloBarra)}</p>
                <div class="round-buttons-container">
                    ${montarBotaoRedondo("WhatsApp", gerarLinkWpp(CONFIG.contato.mensagemSaudacao), CONFIG.iconesCanais.whatsapp)}
                    ${montarBotaoRedondo("Site Próprio", CONFIG.links.siteProprio, CONFIG.iconesCanais.site)}
                    ${montarBotaoRedondo("iFood", CONFIG.links.ifood, CONFIG.iconesCanais.ifood)}
                    ${montarBotaoRedondo("Aiqfome", CONFIG.links.aiqfome, CONFIG.iconesCanais.aiqfome)}
                </div>
            </div>
        `;
    }

    if (estado === 3) {
        return `
            <div class="fade-in-content">
                <h2 class="strategic-title">${sanitizeText(textos.tituloBarra)}</h2>
                <p class="strategic-subtitle">${sanitizeText(textos.subtituloBarra)} ${sanitizeText(CONFIG.horarios.abertoInicio || "")}</p>
                <div class="strategic-buttons">
                    <a href="#" onclick="openQualifierModal(false); return false;" class="btn-strat btn-agendar">
                        🚀 Agendar Pedido Antecipado
                    </a>
                </div>
            </div>
        `;
    }

    return `
        <div class="fade-in-content">
            <h2 class="strategic-title" style="color: var(--ifood-red);">${sanitizeText(textos.tituloBarra)}</h2>
            <p class="strategic-subtitle">${sanitizeText(textos.subtituloBarra)}</p>
            <div class="strategic-buttons">
                <a href="#" onclick="openQualifierModal(true); return false;" class="btn-strat btn-agendar">
                    📅 Agendar Agora para amanhã
                </a>
            </div>
        </div>
    `;
}

function montarBotaoRedondo(title, href, img) {
    if (!href || href === "#") return "";

    return `
        <a href="${sanitizeAttr(href)}" class="btn-round" target="_blank" rel="noopener noreferrer" title="${sanitizeText(title)}">
            <img src="${sanitizeAttr(img || "")}" alt="${sanitizeText(title)}">
        </a>
    `;
}

function abrirModalComercial(item) {
    const nome = item.nome || "Produto";
    const preco = item.preco || "Oferta";
    const imagem = item.imagem || "";
    const adicionalNome = item.adicionalNome || "Adicional Especial";
    const adicionalPreco = item.adicionalPreco || "+ R$ 0,00";
    const adicionalImagem = item.adicionalImagem || imagem;
    const origem = item.origem || "Site";
    const linkExterno = item.linkExterno || "";

    if (!modalEstaAtivo("comercial")) {
        let mensagemDireta = "";

        if (estadoGlobalLoja === 1) {
            mensagemDireta = `Olá! Vim pelo site (${origem}) e quero pedir agora: ${nome}.`;
        } else if (estadoGlobalLoja === 2) {
            mensagemDireta = `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA AMANHÃ: ${nome}.`;
        } else {
            mensagemDireta = `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA HOJE assim que abrir: ${nome}.`;
        }

        const acao = obterAcaoModalDesativado("comercial", "whatsapp");
        abrirDestinoExterno(acao, mensagemDireta, linkExterno);

        if (CONFIG.automacoes.enviarPedidos) {
            dispararWebhookCondicional("pedido_direto", {
                origem,
                produto: nome,
                preco,
                destino: acao,
                estado_loja: estadoGlobalLoja,
                data_envio: new Date().toISOString()
            });
        }

        return;
    }

    setText("modalPizzaTitle", nome);
    setText("modalPizzaPrice", preco);
    setText("modalUpsellTitle", adicionalNome);
    setText("modalUpsellPrice", adicionalPreco);

    setSrc("modalPizzaImg", imagem);
    setSrc("modalUpsellImg", adicionalImagem);

    const btnWpp = byId("modal-btn-wpp");
    const btnIfood = byId("modal-btn-ifood");
    const btnSemAdicional = byId("modal-btn-sem-adicional");

    const mainTitle = byId("modalMainTitle");
    const subTitle = byId("modalSubTitle");

    let msgComAdicional = "";
    let msgSemAdicional = "";

    if (estadoGlobalLoja === 1) {
        mainTitle.innerText = "Seu Pedido Quase Pronto";
        subTitle.innerText = "Aproveite nossa oferta especial e leve o combo perfeito!";
        btnWpp.innerText = "Concluir Pedido no WhatsApp";

        if (btnIfood) {
            btnIfood.style.display = CONFIG.links.ifood && CONFIG.links.ifood !== "#" ? "flex" : "none";
            btnIfood.href = CONFIG.links.ifood || "#";
        }

        msgComAdicional = `Olá! Vim pelo site (${origem}) e quero pedir agora: ${nome} + adicional: ${adicionalNome}.`;
        msgSemAdicional = `Olá! Vim pelo site (${origem}) e quero pedir agora apenas: ${nome}, sem o adicional.`;
    } else if (estadoGlobalLoja === 2) {
        mainTitle.innerText = "Agendar para Amanhã";
        subTitle.innerText = "Garanta o seu pedido para amanhã e evite filas.";
        btnWpp.innerText = "Agendar no WhatsApp";

        if (btnIfood) btnIfood.style.display = "none";

        msgComAdicional = `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA AMANHÃ: ${nome} + adicional: ${adicionalNome}.`;
        msgSemAdicional = `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA AMANHÃ apenas: ${nome}, sem o adicional.`;
    } else {
        mainTitle.innerText = "Agendar para Hoje";
        subTitle.innerText = "Seja o primeiro a receber logo na abertura.";
        btnWpp.innerText = "Garantir Pedido no WhatsApp";

        if (btnIfood) btnIfood.style.display = "none";

        msgComAdicional = `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA HOJE assim que abrir: ${nome} + adicional: ${adicionalNome}.`;
        msgSemAdicional = `Olá! Vim pelo site (${origem}) e quero AGENDAR PARA HOJE assim que abrir apenas: ${nome}, sem o adicional.`;
    }

    if (btnWpp) btnWpp.href = gerarLinkWpp(msgComAdicional);

    if (btnSemAdicional) {
        btnSemAdicional.onclick = function () {
            abrirLink(gerarLinkWpp(msgSemAdicional));
            closeModal();
        };
    }

    if (CONFIG.automacoes.enviarPedidos) {
        dispararWebhookCondicional("pedido_modal", {
            origem,
            produto: nome,
            preco,
            adicional: adicionalNome,
            adicional_preco: adicionalPreco,
            estado_loja: estadoGlobalLoja,
            data_envio: new Date().toISOString()
        });
    }

    abrirModal("comboModal");
}

function openModal(produtoNome, produtoPreco, produtoImg, upsellNome, upsellPreco, upsellImg) {
    abrirModalComercial({
        origem: "Produto",
        nome: produtoNome,
        preco: produtoPreco,
        imagem: produtoImg,
        adicionalNome: upsellNome,
        adicionalPreco: upsellPreco,
        adicionalImagem: upsellImg
    });
}

function closeModal() {
    fecharModal("comboModal");
}

function openPremiumUpsell(produto, imagem) {
    abrirModalComercial({
        origem: "Sugestão do Chef",
        nome: produto,
        preco: CONFIG.sugestaoChef.preco || "Oferta",
        imagem,
        adicionalNome: CONFIG.sugestaoChef.adicionalNome || "Adicional Especial",
        adicionalPreco: CONFIG.sugestaoChef.adicionalPreco || "+ R$ 0,00",
        adicionalImagem: CONFIG.sugestaoChef.adicionalImagem || imagem,
        linkExterno: CONFIG.sugestaoChef.linkExterno
    });
}

function closePremiumUpsell() {
    closeModal();
}

function openQualifierModal(isAmanha) {
    if (!modalEstaAtivo("qualificador")) {
        const mensagem = isAmanha
            ? CONFIG.contato.mensagemAgendamentoAmanha
            : CONFIG.contato.mensagemAgendamentoHoje;

        const acao = obterAcaoModalDesativado("qualificador", "whatsapp");
        abrirDestinoExterno(acao, mensagem);
        return;
    }

    const wppBtn = byId("btn-qualifier-sugestao");
    const title = byId("qualifierTitle");
    const subtitle = byId("qualifierSubtitle");

    if (isAmanha) {
        title.innerText = "Agendar para Amanhã";
        subtitle.innerText = "Deseja ver o cardápio primeiro ou prefere uma sugestão exclusiva da casa?";
        wppBtn.href = gerarLinkWpp(CONFIG.contato.mensagemAgendamentoAmanha);
    } else {
        title.innerText = "Agendar para Hoje";
        subtitle.innerText = "Seja um dos primeiros com seu hambúrguer na chapa. Veja o cardápio ou receba uma sugestão da casa.";
        wppBtn.href = gerarLinkWpp(CONFIG.contato.mensagemAgendamentoHoje);
    }

    abrirModal("qualifierModal");
}

function closeQualifierModal() {
    fecharModal("qualifierModal");
}

function scrollReels(distancia) {
    const track = byId("reels-track");
    if (!track) return;

    track.scrollBy({
        left: distancia,
        behavior: "smooth"
    });
}

function toggleLike(event, btn) {
    event.stopPropagation();
    btn.classList.toggle("liked");
    btn.innerText = btn.classList.contains("liked") ? "❤️" : "🤍";
}

function openReelModal(title, price, desc, imgUrl) {
    abrirModalComercial({
        origem: "Reels",
        nome: title,
        preco: price,
        imagem: imgUrl,
        adicionalNome: "Adicional Especial",
        adicionalPreco: "+ R$ 0,00",
        adicionalImagem: imgUrl
    });
}

function closeReelModal() {
    closeModal();
}

function detectarTipoVideo(src, tipoInformado) {
    const origem = (src || "").trim();
    const tipo = (tipoInformado || "").trim().toLowerCase();

    if (tipo && tipo !== "auto") return tipo;

    if (/youtube\.com|youtu\.be/i.test(origem)) return "youtube";
    if (/drive\.google\.com|docs\.google\.com/i.test(origem)) return "google-drive";
    if (/\.(mp4|webm|ogg|ogv|mov)(\?.*)?$/i.test(origem)) return "external";

    return "external";
}

function extrairYoutubeId(url) {
    if (!url) return "";

    const texto = url.trim();

    const padroes = [
        /youtube\.com\/watch\?v=([^&]+)/i,
        /youtube\.com\/shorts\/([^?&/]+)/i,
        /youtube\.com\/embed\/([^?&/]+)/i,
        /youtu\.be\/([^?&/]+)/i
    ];

    for (const padrao of padroes) {
        const match = texto.match(padrao);
        if (match && match[1]) return match[1];
    }

    return texto;
}

function gerarUrlYoutubeEmbed(url) {
    const id = extrairYoutubeId(url);
    if (!id) return "";

    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;
}

function extrairGoogleDriveId(url) {
    if (!url) return "";

    const texto = url.trim();

    const padroes = [
        /drive\.google\.com\/file\/d\/([^/]+)/i,
        /drive\.google\.com\/open\?id=([^&]+)/i,
        /drive\.google\.com\/uc\?id=([^&]+)/i,
        /id=([^&]+)/i
    ];

    for (const padrao of padroes) {
        const match = texto.match(padrao);
        if (match && match[1]) return match[1];
    }

    return texto;
}

function gerarUrlGoogleDrivePreview(url) {
    const id = extrairGoogleDriveId(url);
    if (!id) return "";

    return `https://drive.google.com/file/d/${id}/preview`;
}

function criarElementoVideo(src, tipo) {
    const origem = (src || "").trim();
    const tipoVideo = detectarTipoVideo(origem, tipo);

    if (!origem) {
        const vazio = document.createElement("div");
        vazio.className = "reel-media-video";
        return vazio;
    }

    if (tipoVideo === "youtube") {
        const iframe = document.createElement("iframe");
        iframe.className = "reel-media-video";
        iframe.src = gerarUrlYoutubeEmbed(origem);
        iframe.setAttribute("title", "Vídeo do produto");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "");
        iframe.style.pointerEvents = "none";
        return iframe;
    }

    if (tipoVideo === "google-drive" || tipoVideo === "drive") {
        const iframe = document.createElement("iframe");
        iframe.className = "reel-media-video";
        iframe.src = gerarUrlGoogleDrivePreview(origem);
        iframe.setAttribute("title", "Vídeo do Google Drive");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "");
        iframe.style.pointerEvents = "none";
        return iframe;
    }

    const video = document.createElement("video");
    video.className = "reel-media-video";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    const source = document.createElement("source");
    source.src = origem;

    if (/\.(webm)(\?.*)?$/i.test(origem)) {
        source.type = "video/webm";
    } else if (/\.(ogg|ogv)(\?.*)?$/i.test(origem)) {
        source.type = "video/ogg";
    } else {
        source.type = "video/mp4";
    }

    video.appendChild(source);

    video.addEventListener("error", function () {
        if (video.parentNode) video.remove();
    });

    return video;
}

function inicializarVideosReels() {
    const cards = $all(".reel-card[data-video-src]");

    cards.forEach(card => {
        if (card.dataset.videoLoaded === "true") return;

        const src = card.dataset.videoSrc || "";
        const tipo = card.dataset.videoType || "auto";

        let frame = card.querySelector(".reel-video-frame");

        if (!frame) {
            frame = document.createElement("div");
            frame.className = "reel-video-frame";
            card.insertBefore(frame, card.firstChild);
        }

        frame.innerHTML = "";
        frame.style.backgroundImage = "none";

        const videoElemento = criarElementoVideo(src, tipo);
        frame.appendChild(videoElemento);

        card.dataset.videoLoaded = "true";
    });
}

function inicializarVideoCabecalho() {
    const holder = byId("hero-video-holder") || $(".hero-video-holder");
    if (!holder) return;

    if (holder.dataset.videoLoaded === "true") return;

    const src = holder.dataset.heroVideoSrc || CONFIG.hero.videoSrc || "";
    const tipo = holder.dataset.heroVideoType || CONFIG.hero.videoType || "auto";

    if (!src.trim()) return;

    holder.innerHTML = "";

    const tipoDetectado = detectarTipoVideo(src, tipo);

    if (tipoDetectado === "youtube") {
        const iframe = document.createElement("iframe");
        iframe.src = gerarUrlYoutubeEmbed(src);
        iframe.setAttribute("title", "Vídeo do cabeçalho");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "");
        iframe.style.pointerEvents = "none";
        holder.appendChild(iframe);
        holder.dataset.videoLoaded = "true";
        return;
    }

    if (tipoDetectado === "google-drive" || tipoDetectado === "drive") {
        const iframe = document.createElement("iframe");
        iframe.src = gerarUrlGoogleDrivePreview(src);
        iframe.setAttribute("title", "Vídeo do cabeçalho Google Drive");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "");
        iframe.style.pointerEvents = "none";
        holder.appendChild(iframe);
        holder.dataset.videoLoaded = "true";
        return;
    }

    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    const source = document.createElement("source");
    source.src = src;
    source.type = /\.(webm)(\?.*)?$/i.test(src) ? "video/webm" : "video/mp4";

    video.appendChild(source);
    holder.appendChild(video);
    holder.dataset.videoLoaded = "true";
}

function deveMostrarHorarioEvento(tipo) {
    const cfg = CONFIG.eventos?.configuracaoFormulario || {};

    if (tipo === "reserva") return true;
    if (cfg.mostrarHorarioEmTodos === true) return true;

    const evento = CONFIG.eventos?.[tipo] || {};
    return evento.mostrarHorario === true;
}

function horarioObrigatorioEvento(tipo) {
    const cfg = CONFIG.eventos?.configuracaoFormulario || {};
    const evento = CONFIG.eventos?.[tipo] || {};

    if (evento.horarioObrigatorio === true) return true;
    if (evento.horarioObrigatorio === false) return false;

    if (tipo === "reserva") return cfg.horarioObrigatorioReserva !== false;

    return cfg.horarioObrigatorioEmTodos === true;
}

function atualizarLabelHorarioEvento(tipo) {
    const label = document.querySelector('label[for="evHora"]');
    if (!label) return;

    label.innerText = horarioObrigatorioEvento(tipo) ? "Horário" : "Horário (opcional)";
}

function redirecionarEventoSemModal(tipo) {
    let mensagem = "";

    if (tipo === "reserva") {
        mensagem = CONFIG.contato.mensagemReserva || "Olá! Vim pelo site e gostaria de fazer uma reserva.";
    } else if (tipo === "aniversario") {
        mensagem = "Olá! Vim pelo site e gostaria de comemorar meu aniversário com vocês.";
    } else if (tipo === "confraternizacao") {
        mensagem = "Olá! Vim pelo site e gostaria de fazer uma confraternização/evento com vocês.";
    } else {
        mensagem = "Olá! Vim pelo site e gostaria de falar sobre reservas e eventos.";
    }

    const acao = obterAcaoModalDesativado("eventos", "whatsapp");
    const destino = CONFIG.eventos.telefoneDestino || CONFIG.contato.whatsappNumero;

    if (acao === "whatsapp") {
        abrirLink(gerarLinkWpp(mensagem, destino));
        return;
    }

    abrirDestinoExterno(acao, mensagem, "", destino);
}

function openEventModal(tipo) {
    if (!modalEstaAtivo("eventos")) {
        redirecionarEventoSemModal(tipo);
        return;
    }

    tipoEventoAtual = tipo;

    const title = byId("evTitle");
    const subtitle = byId("evSubtitle");
    const boxHora = byId("evBoxHora");
    const boxTipo = byId("evBoxTipo");
    const badge = byId("evBadge");

    ["evNome", "evWpp", "evData", "evHora", "evPessoas", "evObs"].forEach(id => {
        const campo = byId(id);
        if (campo) campo.value = "";
    });

    if (badge) {
        badge.style.display = "none";
        badge.innerHTML = "";
    }

    if (boxHora) boxHora.style.display = deveMostrarHorarioEvento(tipo) ? "block" : "none";
    if (boxTipo) boxTipo.style.display = tipo === "confraternizacao" ? "block" : "none";
    atualizarLabelHorarioEvento(tipo);

    const evento = CONFIG.eventos[tipo] || {};

    if (tipo === "reserva") {
        title.innerText = evento.titulo || "Reservar Mesa";
        subtitle.innerText = evento.subtitulo || "Reserve o seu lugar com conforto e agilidade.";
    } else if (tipo === "aniversario") {
        const min = evento.minPessoas || 10;
        const pct = evento.descontoPct || 15;
        title.innerText = evento.titulo || "Seu Aniversário";
        subtitle.innerText = `Benefício: ${pct}% de desconto para grupos a partir de ${min} pessoas!`;
    } else if (tipo === "confraternizacao") {
        const min = evento.minPessoas || 20;
        const pct = evento.descontoPct || 20;
        title.innerText = evento.titulo || "Agendar Evento";
        subtitle.innerText = `Benefício: ${pct}% de desconto para grupos a partir de ${min} pessoas!`;
    }

    abrirModal("eventModal");
}

function closeEventModal() {
    fecharModal("eventModal");
}

function calcularDescontoModal() {
    const pessoas = parseInt(byId("evPessoas")?.value, 10) || 0;
    const badge = byId("evBadge");

    if (!badge) return;

    let aplicarDesconto = false;
    let porcentagem = 0;

    const regraAniversario = CONFIG.eventos.aniversario || {};
    const regraConfraternizacao = CONFIG.eventos.confraternizacao || {};

    if (tipoEventoAtual === "aniversario" && pessoas >= (regraAniversario.minPessoas || 10)) {
        aplicarDesconto = true;
        porcentagem = regraAniversario.descontoPct || 15;
    } else if (tipoEventoAtual === "confraternizacao" && pessoas >= (regraConfraternizacao.minPessoas || 20)) {
        aplicarDesconto = true;
        porcentagem = regraConfraternizacao.descontoPct || 20;
    }

    if (aplicarDesconto) {
        badge.style.display = "block";
        badge.innerHTML = `🎉 <strong>Parabéns!</strong> Você ativou ${porcentagem}% de desconto no consumo!`;
    } else {
        badge.style.display = "none";
        badge.innerHTML = "";
    }
}

function enviarFormularioWhatsApp() {
    const nome = byId("evNome")?.value.trim() || "";
    const wpp = byId("evWpp")?.value.trim() || "";
    const data = byId("evData")?.value || "";
    const hora = byId("evHora")?.value || "";
    const pessoas = byId("evPessoas")?.value || "";
    const obs = byId("evObs")?.value.trim() || "Nenhuma";
    const tipoSelect = byId("evTipo")?.value || "";

    if (!nome || !wpp || !data || !pessoas) {
        alert("Por favor, preencha todos os campos obrigatórios (Nome, WhatsApp, Data e Pessoas).");
        return;
    }

    if (deveMostrarHorarioEvento(tipoEventoAtual) && horarioObrigatorioEvento(tipoEventoAtual) && !hora) {
        alert("Por favor, informe o horário.");
        return;
    }

    let msg = "";
    const badge = byId("evBadge");
    const temDesconto = badge && badge.style.display === "block";
    const detalheDesconto = temDesconto ? badge.innerText : "Condições normais.";

    if (tipoEventoAtual === "reserva") {
        msg = `*SOLICITAÇÃO DE RESERVA*\n\n👤 Nome: ${nome}\n📱 Contato: ${wpp}\n📅 Data: ${data}\n⏰ Horário: ${hora || "A combinar"}\n👥 Pessoas: ${pessoas}\n📝 Observações: ${obs}`;
    } else if (tipoEventoAtual === "aniversario") {
        msg = `*RESERVA DE ANIVERSÁRIO*\n\n👤 Aniversariante: ${nome}\n📱 Contato: ${wpp}\n📅 Data: ${data}\n⏰ Horário: ${hora || "A combinar"}\n👥 Pessoas: ${pessoas}\n🎁 Status do Desconto: ${detalheDesconto}\n📝 Observações: ${obs}`;
    } else if (tipoEventoAtual === "confraternizacao") {
        msg = `*ORÇAMENTO/RESERVA DE EVENTO*\n\n📋 Tipo: ${tipoSelect}\n👤 Responsável: ${nome}\n📱 Contato: ${wpp}\n📅 Data: ${data}\n⏰ Horário: ${hora || "A combinar"}\n👥 Pessoas: ${pessoas}\n🎁 Status do Desconto: ${detalheDesconto}\n📝 Observações: ${obs}`;
    }

    const dados = {
        origem: "Modal Eventos/Reservas",
        tipo: tipoEventoAtual,
        nome,
        telefone: wpp,
        data_reserva: data,
        horario: hora,
        pessoas,
        observacoes: obs,
        tipo_evento: tipoSelect,
        desconto: detalheDesconto,
        mensagem_whatsapp: msg,
        data_envio: new Date().toISOString()
    };

    if (CONFIG.automacoes.enviarReservas) {
        dispararWebhookCondicional("reserva_evento", dados);
    }

    const destino = CONFIG.eventos.telefoneDestino || CONFIG.contato.whatsappNumero;
    abrirLink(gerarLinkWpp(msg, destino));

    closeEventModal();
}

function abrirRoleta() {
    if (!CONFIG.roleta.ativo) return;
    if (!modalEstaAtivo("roleta")) return;

    const chave = CONFIG.roleta.chaveLocalStorage || "roletaGirada";

    if (!localStorage.getItem(chave)) {
        abrirModal("roletaModal");
    }
}

function fecharRoleta() {
    fecharModal("roletaModal");

    const chave = CONFIG.roleta.chaveLocalStorage || "roletaGirada";
    localStorage.setItem(chave, "sim");
}

function iniciarRoleta() {
    if (roletaGirando) return;

    roletaGirando = true;

    const btnGirar = byId("btn-girar-roleta");
    const resultado = byId("roleta-resultado");

    if (btnGirar) {
        btnGirar.style.opacity = "0.5";
        btnGirar.style.cursor = "not-allowed";
        btnGirar.innerText = "Sorteando...";
    }

    if (resultado) resultado.style.display = "none";

    const premios = Array.isArray(CONFIG.roleta.premios) ? CONFIG.roleta.premios : [];

    if (!premios.length) {
        roletaGirando = false;

        if (btnGirar) {
            btnGirar.style.opacity = "1";
            btnGirar.style.cursor = "pointer";
            btnGirar.innerText = CONFIG.roleta.botaoGirar || "Tentar a Sorte 🎰";
        }

        return;
    }

    const pesoTotal = premios.reduce((acc, premio) => acc + (premio.peso || 0), 0);
    let random = Math.random() * pesoTotal;
    let premioSorteado = premios[0];

    for (const premio of premios) {
        if (random < premio.peso) {
            premioSorteado = premio;
            break;
        }
        random -= premio.peso;
    }

    let anguloFinal = 1800 + (360 - (premioSorteado.centro || 0));
    const variacao = Math.floor(Math.random() * 30) - 15;
    anguloFinal += variacao;

    const wheel = byId("roleta");
    if (wheel) wheel.style.transform = `rotate(${anguloFinal}deg)`;

    setTimeout(() => {
        mostrarResultadoRoleta(premioSorteado.nome);
    }, 5000);
}

function mostrarResultadoRoleta(nomePremio) {
    const btnGirar = byId("btn-girar-roleta");
    const resultadoBox = byId("roleta-resultado");

    if (btnGirar) btnGirar.style.display = "none";
    if (resultadoBox) resultadoBox.style.display = "block";

    const codigo = Math.floor(1000 + Math.random() * 9000);
    const prefixo = CONFIG.roleta.prefixoVoucher || "CUPOM";
    const voucher = `${prefixo}-${codigo}`;

    setText("premio-voucher", voucher);
    setText("premio-titulo", `Você ganhou ${nomePremio}!`);

    const btnResgatar = byId("btn-resgatar-roleta");
    let msg = "";

    if (estadoGlobalLoja === 1) {
        btnResgatar.innerText = "Fazer Pedido e Salvar Prêmio";
        msg = `Olá! Girei a roleta e ganhei *${nomePremio}* (Código: ${voucher}). Quero fazer meu pedido!`;
    } else if (estadoGlobalLoja === 2) {
        btnResgatar.innerText = "Agendar Pedido e Salvar Prêmio";
        msg = `Olá! Girei a roleta e ganhei *${nomePremio}* (Código: ${voucher}). Quero agendar para amanhã!`;
    } else {
        btnResgatar.innerText = "Garantir Pedido e Salvar Prêmio";
        msg = `Olá! Girei a roleta e ganhei *${nomePremio}* (Código: ${voucher}). Quero agendar para hoje assim que abrir!`;
    }

    btnResgatar.href = gerarLinkWpp(msg);

    if (CONFIG.automacoes.enviarRoleta) {
        dispararWebhookCondicional("roleta", {
            origem: "Roleta de Entrada",
            premio: nomePremio,
            codigo: voucher,
            estado_loja: estadoGlobalLoja,
            data_envio: new Date().toISOString()
        });
    }
}

function dispararWebhookCondicional(evento, dados) {
    const payload = {
        evento,
        site: CONFIG.marca.nome,
        segmento: CONFIG.marca.segmento,
        ...dados
    };

    dispararWebhook(payload);
}

function dispararWebhook(dados) {
    const auto = CONFIG.automacoes || {};

    if (auto.n8nAtivo && auto.urlN8N) {
        fetch(auto.urlN8N, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        }).catch(err => console.log("Erro n8n:", err));
    }

    if (auto.appScriptAtivo && auto.urlAppScript) {
        fetch(auto.urlAppScript, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        }).catch(err => console.log("Erro Sheets:", err));
    }
}

function abrirModal(id) {
    const modal = byId(id);
    if (!modal) return;

    modal.style.display = "flex";

    setTimeout(() => {
        modal.classList.add("active");
    }, 10);

    document.body.style.overflow = "hidden";
}

function fecharModal(id) {
    const modal = byId(id);
    if (!modal) return;

    modal.classList.remove("active");

    setTimeout(() => {
        modal.style.display = "none";
    }, 400);

    document.body.style.overflow = "auto";
}

function registrarFechamentoPorCliqueFora() {
    window.addEventListener("click", function (event) {
        const modais = [
            { id: "comboModal", close: closeModal },
            { id: "qualifierModal", close: closeQualifierModal },
            { id: "eventModal", close: closeEventModal },
            { id: "roletaModal", close: fecharRoleta }
        ];

        modais.forEach(item => {
            const modal = byId(item.id);
            if (modal && event.target === modal) item.close();
        });
    });
}

function iniciarSite() {
    aplicarConfiguracoesGlobais();
    renderizarTudo();
    inicializarVideoCabecalho();
    verificarHorarioLoja();
    reveal();
    registrarFechamentoPorCliqueFora();

    window.addEventListener("scroll", reveal, { passive: true });

    setInterval(verificarHorarioLoja, 60000);

    if (
        CONFIG.roleta.ativo &&
        modalEstaAtivo("roleta") &&
        CONFIG.roleta.abrirAutomaticamente
    ) {
        setTimeout(abrirRoleta, CONFIG.roleta.tempoParaAbrirMs || 3000);
    }
}

document.addEventListener("DOMContentLoaded", iniciarSite);

window.openModal = openModal;
window.closeModal = closeModal;
window.abrirModalComercial = abrirModalComercial;
window.openPremiumUpsell = openPremiumUpsell;
window.closePremiumUpsell = closePremiumUpsell;
window.openQualifierModal = openQualifierModal;
window.closeQualifierModal = closeQualifierModal;
window.openReelModal = openReelModal;
window.closeReelModal = closeReelModal;
window.openEventModal = openEventModal;
window.closeEventModal = closeEventModal;
window.calcularDescontoModal = calcularDescontoModal;
window.enviarFormularioWhatsApp = enviarFormularioWhatsApp;
window.scrollReels = scrollReels;
window.toggleLike = toggleLike;
window.abrirRoleta = abrirRoleta;
window.fecharRoleta = fecharRoleta;
window.iniciarRoleta = iniciarRoleta;
window.abrirCanalPedido = abrirCanalPedido;