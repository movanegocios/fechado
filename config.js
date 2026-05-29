window.SITE_CONFIG = {
    marca: {
        nome: "DANO'S BURGER",
        nomeCurto: "DANO'S BURGER",
        slogan: "Smash Burgers artesanais. O verdadeiro sabor de Canasvieiras.",
        segmento: "Hamburgueria Artesanal",
        logoPrincipal: "logo.png",
        logoFavicon: "favicon.png",
        tituloPagina: "DANO'S Burger | Smash Burgers Artesanais",
        descricaoSEO: "A melhor hamburgueria artesanal de Canasvieiras, Florianópolis. Peça seu Smash Burger agora por WhatsApp ou Delivery!",
        palavrasChaveSEO: "hamburgueria perto de mim, smash burger canasvieiras, delivery florianopolis, lanche artesanal"
    },

    cores: {
        gold: "#d6b779",
        goldHover: "#e6c88b",
        priceGreen: "#2ecc71",
        darkBg: "#183321",
        cardBg: "#21402a",
        textLight: "#f4ecd8",
        textMuted: "#b8c4bc",
        whatsappGreen: "#25D366",
        ifoodRed: "#ea1d2c",
        aiqfomePurple: "#7b1fa2"
    },

    tipografia: {
        fontePrincipal: "'Montserrat', sans-serif",
        fonteTitulos: "'Oswald', sans-serif",
        googleFontsUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Oswald:wght@400;600;700&display=swap"
    },

    contato: {
        whatsappNumero: "5548996053746",
        mensagemSaudacao: "Olá! Tudo bem? Vim pelo site e gostaria de mais informações.",
        mensagemPedido: "Olá! Gostaria de fazer um pedido do cardápio!",
        mensagemReserva: "Olá! Gostaria de fazer uma reserva.",
        mensagemAgendamentoHoje: "Olá! Quero agendar meu pedido para hoje assim que abrir.",
        mensagemAgendamentoAmanha: "Olá! Gostaria de agendar um pedido para amanhã."
    },

    links: {
        cardapio: "https://movanegocios.github.io/menu/",
        siteProprio: "#",
        ifood: "https://www.ifood.com.br",
        aiqfome: "#",
        instagram: "https://www.instagram.com/danos.burger/",
        facebook: "#",
        googleMapsRota: "https://www.google.com/maps/dir/?api=1&destination=Dr.+Prudente+de+Morais+537+Canasvieiras+Florianopolis"
    },

    modais: {
        comercial: {
            /*
                ativo: true  = produto, sugestão e Reels abrem o modal de combo/upsell.
                ativo: false = não abre modal; mostra botões de canais dentro dos cards.
            */
            ativo: true,

            /*
                modoSemModal: "botoes" mostra 2 ou 3 botões por produto.
                quandoDesativado continua como segurança/fallback caso algum item não tenha canais.
            */
            modoSemModal: "botoes",
            quandoDesativado: "whatsapp",

            /*
                Se um produto não tiver a lista "canais", o sistema usa estes canais padrão.
                Canais sem link válido, como aiqfome: "#", são ignorados automaticamente.
            */
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

    iconesCanais: {
        whatsapp: "https://i.pinimg.com/736x/74/15/d0/7415d00f6b719e40a4b1f9a75fc7eea5.jpg",
        site: "https://img.magnific.com/vetores-gratis/glifo-de-grade-de-globo-com-cursor-do-mouse_78370-4904.jpg?semt=ais_hybrid&w=740&q=80",
        ifood: "https://espacodasempadas.com.br/wp-content/uploads/2025/03/IFOOD-LOGO.png",
        aiqfome: "https://play-lh.googleusercontent.com/OPDqDkg7XhTey4yeSkR5L-2bIkPakKaax6-S4DB_FmMuFso5bQ6tk4UYDk9sSpL7aOzJ"
    },

    endereco: {
        rua: "Dr. Prudente de Morais, 537",
        bairro: "Canasvieiras",
        cidade: "Florianópolis",
        estado: "SC",
        cep: "88054-000",
        pais: "BR",
        textoCompleto: "Dr. Prudente de Morais, 537 – Canasvieiras, Florianópolis - SC",
        latitude: -27.4267,
        longitude: -48.4637,
        googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.8521258623694!2d-48.465881!3d-27.426743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527419357d195a9%3A0x6b86370f1469e8b9!2sR.%20Dr.%20Prudente%20de%20Morais%2C%20537%20-%20Canasvieiras%2C%20Florian%C3%B3polis%20-%20SC%2C%2088054-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
    },

    horarios: {
        preAtendimentoInicio: "10:00",
        preAtendimentoFim: "18:59",
        abertoInicio: "19:00",
        abertoFim: "22:59",
        fechadoInicio: "23:00",
        fechadoFim: "09:59",
        textoFooter: "Seg a Sáb, das 18h às 23h",
        horaTeste: "23:00"
    },

    topBar: {
        ativo: true,
        texto: "🔥 Hoje: Entrega Grátis em Canasvieiras 🔥"
    },

    hero: {
        videoSrc: "https://danosvideo.movanegocioslocais.workers.dev/",
        videoType: "auto",
        titulo: "DANO'S BURGER",
        subtitulo: "Smash Burgers artesanais. O verdadeiro sabor de Canasvieiras."
    },

    sugestaoChef: {
        ativo: true,
        tituloSecao: "Quer uma sugestão?",
        badge: "A Escolha do Chef 🔥",
        produto: "Smash Duplo Bacon",
        preco: "R$ 39,90",
        texto: "Clique e descubra a oferta especial de hoje",
        imagemCard: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
        imagemModal: "https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg",
        adicionalNome: "Batata Frita Crinkle",
        adicionalPreco: "+ R$ 12,00",
        adicionalImagem: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800",
        linkExterno: "",
        canais: [
            {
                nome: "WhatsApp",
                tipo: "whatsapp",
                texto: "Pedir no WhatsApp",
                textoCurto: "Wpp",
                mensagem: "Olá! Quero pedir a sugestão do chef: Smash Duplo Bacon."
            },
            {
                nome: "iFood",
                tipo: "ifood",
                texto: "Pedir no iFood",
                textoCurto: "iFood",
                url: "https://www.ifood.com.br"
            },
            {
                nome: "Aiqfome",
                tipo: "aiqfome",
                texto: "Pedir no Aiqfome",
                textoCurto: "Aiq",
                url: "#"
            }
        ]
    },

    produtos: [
        {
            nome: "Smash Classic",
            preco: "R$ 28,00",
            imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800",
            badge: "O + Pedido 🔥",
            adicionalNome: "Batata Frita Crinkle",
            adicionalPreco: "+ R$ 12,00",
            adicionalImagem: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800",
            linkExterno: "",
            canais: [
                {
                    nome: "WhatsApp",
                    tipo: "whatsapp",
                    texto: "WhatsApp",
                    textoCurto: "Wpp",
                    mensagem: "Olá! Quero pedir o Smash Classic."
                },
                {
                    nome: "iFood",
                    tipo: "ifood",
                    texto: "iFood",
                    textoCurto: "iFood",
                    url: "https://www.ifood.com.br"
                },
                {
                    nome: "Aiqfome",
                    tipo: "aiqfome",
                    texto: "Aiqfome",
                    textoCurto: "Aiq",
                    url: "#"
                }
            ]
        },
        {
            nome: "Smash Bacon",
            preco: "R$ 34,00",
            imagem: "https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer-1024x683.jpeg",
            badge: "",
            adicionalNome: "Onion Rings",
            adicionalPreco: "+ R$ 15,00",
            adicionalImagem: "https://smokinandgrillinwitab.com/wp-content/uploads/2025/02/iStock-2188707691-600x600.jpg",
            linkExterno: "",
            canais: [
                {
                    nome: "WhatsApp",
                    tipo: "whatsapp",
                    texto: "WhatsApp",
                    textoCurto: "Wpp",
                    mensagem: "Olá! Quero pedir o Smash Bacon."
                },
                {
                    nome: "iFood",
                    tipo: "ifood",
                    texto: "iFood",
                    textoCurto: "iFood",
                    url: "https://www.ifood.com.br"
                }
            ]
        },
        {
            nome: "Combo Dano's",
            preco: "R$ 45,00",
            imagem: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800",
            badge: "",
            adicionalNome: "Coca-Cola Lata",
            adicionalPreco: "+ R$ 6,00",
            adicionalImagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800",
            linkExterno: "",
            canais: [
                {
                    nome: "WhatsApp",
                    tipo: "whatsapp",
                    texto: "WhatsApp",
                    textoCurto: "Wpp",
                    mensagem: "Olá! Quero pedir o Duplo Bacon que vi nos Reels."
                },
                {
                    nome: "iFood",
                    tipo: "ifood",
                    texto: "iFood",
                    textoCurto: "iFood",
                    url: "https://www.ifood.com.br"
                },
                {
                    nome: "Cardápio",
                    tipo: "cardapio",
                    texto: "Cardápio",
                    textoCurto: "Menu"
                }
            ]
        }
    ],

    reels: [
        {
            titulo: "Smash Classic",
            preco: "R$ 28,00",
            descricao: "O nosso clássico irretocável.",
            videoSrc: "https://www.youtube.com/watch?v=Nf3CmRy19eA",
            videoType: "auto",
            poster: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800",
            imagemModal: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800",
            adicionalNome: "Batata Frita Crinkle",
            adicionalPreco: "+ R$ 12,00",
            adicionalImagem: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800",
            linkExterno: "",
            canais: [
                {
                    nome: "WhatsApp",
                    tipo: "whatsapp",
                    texto: "WhatsApp",
                    textoCurto: "Wpp",
                    mensagem: "Olá! Quero pedir o Smash Classic que vi nos Reels."
                },
                {
                    nome: "iFood",
                    tipo: "ifood",
                    texto: "iFood",
                    textoCurto: "iFood",
                    url: "https://www.ifood.com.br"
                }
            ]
        },
        {
            titulo: "Smash Bacon",
            preco: "R$ 34,00",
            descricao: "Smash com bacon crocante e muito sabor.",
            videoSrc: "https://www.youtube.com/watch?v=Nf3CmRy19eA",
            videoType: "auto",
            poster: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
            imagemModal: "https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer-1024x683.jpeg",
            adicionalNome: "Onion Rings",
            adicionalPreco: "+ R$ 15,00",
            adicionalImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4N4f94TfDkwXbN4CjBInLD4DsUuIJ1QaPhTWyadWY9k4lZiY_IoQDOu-wLSTrVNyhLvLDv61VIdPQH9K3ZDFhjrBzXpdc0DhkuV16Kw&s=10",
            linkExterno: "",
            canais: [
                {
                    nome: "WhatsApp",
                    tipo: "whatsapp",
                    texto: "WhatsApp",
                    textoCurto: "Wpp",
                    mensagem: "Olá! Quero pedir o Smash Bacon."
                },
                {
                    nome: "iFood",
                    tipo: "ifood",
                    texto: "iFood",
                    textoCurto: "iFood",
                    url: "https://www.ifood.com.br"
                }
            ]
        },
        {
            titulo: "Duplo Bacon",
            preco: "R$ 39,90",
            descricao: "A escolha do chef para quem quer exagerar com estilo.",
            videoSrc: "https://www.youtube.com/watch?v=Nf3CmRy19eA",
            videoType: "auto",
            poster: "https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg",
            imagemModal: "https://blog.biglar.com.br/wp-content/uploads/2024/08/iStock-1398630614.jpg",
            adicionalNome: "Coca-Cola Lata",
            adicionalPreco: "+ R$ 6,00",
            adicionalImagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800",
            linkExterno: "",
            canais: [
                {
                    nome: "WhatsApp",
                    tipo: "whatsapp",
                    texto: "WhatsApp",
                    textoCurto: "Wpp",
                    mensagem: "Olá! Quero pedir o Combo Dano's."
                },
                {
                    nome: "iFood",
                    tipo: "ifood",
                    texto: "iFood",
                    textoCurto: "iFood",
                    url: "https://www.ifood.com.br"
                },
                {
                    nome: "Cardápio",
                    tipo: "cardapio",
                    texto: "Cardápio",
                    textoCurto: "Menu"
                }
            ]
        }
    ],

    depoimentos: [
        {
            nome: "Carlos Mendes",
            tipo: "Cliente Fiel",
            estrelas: "★★★★★",
            texto: "Simplesmente o melhor smash burger de Canasvieiras. A carne tem aquela crostinha perfeita, os ingredientes são frescos e o atendimento pelo WhatsApp foi super rápido. Pedi o Bacon e chegou perfeito!"
        },
        {
            nome: "Juliana Albuquerque",
            tipo: "Primeiro Pedido",
            estrelas: "★★★★★",
            texto: "Experiência impecável. O Smash Duplo não é apenas um lanche, é um evento. A batata crinkle chegou super crocante e quente, o que me surpreendeu muito para delivery. Vale cada centavo."
        },
        {
            nome: "Roberto Farias",
            tipo: "Cliente VIP",
            estrelas: "★★★★★",
            texto: "O blend de carne de vocês faz toda a diferença. Já pedi de vários lugares aqui na ilha, mas o sabor e a qualidade daqui são realmente superiores. O sistema de agendamento funciona muito bem!"
        }
    ],

    eventos: {
        telefoneDestino: "5548996053746",

        configuracaoFormulario: {
            // true = o campo horário aparece em reserva, aniversário e eventos/festas
            mostrarHorarioEmTodos: true,

            // false = aniversário e eventos/festas podem informar horário, mas não são obrigados
            // true = aniversário e eventos/festas precisam preencher horário para enviar
            horarioObrigatorioEmTodos: false,

            // reserva normalmente precisa de horário
            horarioObrigatorioReserva: true
        },

        reserva: {
            titulo: "Reservar Mesa",
            subtitulo: "Reserve o seu lugar com conforto e agilidade.",
            cardTitulo: "Reserve sua Mesa",
            cardTexto: "Garanta o seu lugar na hamburgueria e desfrute de um ambiente urbano com o melhor atendimento da ilha.",
            botao: "Fazer Reserva",
            imagem: "https://images.adsttc.com/media/images/5d89/1a57/284d/d176/bd00/0193/newsletter/FEATURED_IMAGE.jpg?1569266255"
        },

        aniversario: {
            titulo: "Seu Aniversário",
            cardTitulo: "Seu Aniversário",
            cardTexto: "Comemore o seu dia especial com a gente. Temos descontos exclusivos e vantagens para a sua galera.",
            botao: "Comemorar",
            imagem: "https://img.freepik.com/fotos-gratis/mulher-despreocupada-dancando-na-pista-de-danca-com-os-olhos-fechados-e-sorrindo-curtindo-a-vida-sentindo-se-feliz-e-alegre_1258-81328.jpg?semt=ais_hybrid&w=740&q=80",
            mostrarHorario: true,
            horarioObrigatorio: false,
            minPessoas: 10,
            descontoPct: 15
        },

        confraternizacao: {
            titulo: "Agendar Evento",
            cardTitulo: "Eventos e Festas",
            cardTexto: "O espaço ideal para a confraternização da firma, resenha com amigos ou festas descontraídas.",
            botao: "Agendar Evento",
            imagem: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
            mostrarHorario: true,
            horarioObrigatorio: false,
            minPessoas: 20,
            descontoPct: 20
        },

        tiposConfraternizacao: [
            "Confraternização de Empresa",
            "Festa de Fim de Ano",
            "Casamento / Noivado",
            "Reunião de Negócios",
            "Outro Evento"
        ]
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
            { id: 1, nome: "10% OFF", peso: 35, centro: 30 },
            { id: 2, nome: "Frete Grátis", peso: 30, centro: 90 },
            { id: 3, nome: "15% OFF", peso: 5, centro: 150 },
            { id: 4, nome: "Refri Lata", peso: 20, centro: 210 },
            { id: 5, nome: "Batata Frita", peso: 5, centro: 270 },
            { id: 6, nome: "10% OFF", peso: 5, centro: 330 }
        ]
    },

    automacoes: {
        n8nAtivo: false,
        appScriptAtivo: false,
        urlN8N: "COLE_SUA_URL_DO_N8N_AQUI",
        urlAppScript: "COLE_SUA_URL_DO_APPS_SCRIPT_AQUI",
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
            subtituloBarra: "Seja o primeiro a receber assim que ligarmos a nossa chapa.",
            sugestaoTexto: "Clique para agendar e garantir o seu na abertura"
        }
    },

    footer: {
        textoDireitos: "© 2026 Dano's Burger. Todos os direitos reservados.",
        textoSistema: "Site inteligente de conversão, pedidos e reservas.",
        atendimentoLinha1: "📍 Dr. Prudente de Morais, 537 – Canasvieiras",
        atendimentoLinha2: "🍔 Delivery, salão e eventos",
        atendimentoLinha3: "🕒 Seg a Sáb, das 18h às 23h",
        botaoPedido: "Fazer pedido agora"
    }
};