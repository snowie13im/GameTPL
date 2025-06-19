// script.js
function mixin(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
    // Array de perguntas com opções e resposta correta
    const perguntas = mixin([
      {
        pergunta: "Qual é o princípio básico da soldadura por eletrodo revestido (SER)?",
        opcoes: [
          "A fusão ocorre exclusivamente por indução eletromagnética.",
          "Utiliza um arco elétrico entre um eletrodo de tungstênio e o metal base.",
          "A fusão é promovida por feixes de laser de alta energia.",
          "Um arco elétrico gera calor para fundir o eletrodo e o metal base."
        ],
        correta: "Um arco elétrico gera calor para fundir o eletrodo e o metal base."
      },
      {
        pergunta: "Qual a principal função do revestimento do eletrodo na soldadura SER?",
        opcoes: [
          "Arrefecer o banho de fusão rapidamente.",
          "Gerar escória para proteger o metal fundido da atmosfera.",
          "Impedir a fusão do metal base.",
          "Reduzir a corrente elétrica necessária para a soldadura.",
          "Aumentar a porosidade do cordão."
        ],
        correta: "Gerar escória para proteger o metal fundido da atmosfera."
      },

    {      
        pergunta: "Como se inicia o arco elétrico na soldadura por eletrodo revestido?",
        opcoes: [
          "Tocando e levantando ligeiramente o eletrodo na peça a soldar.",
          "Através de um gerador de plasma.",
          "Com um sistema automático de ignição.",
          "Aquecendo previamente o eletrodo com uma chama de oxiacetileno.",
          "Aplicando alta pressão no eletrodo contra o metal base."
        ],
        correta: "Tocando e levantando ligeiramente o eletrodo na peça a soldar."
      },
      {
        pergunta: "O que acontece quando a corrente de soldadura está muito baixa?",
        opcoes: [
          "O arco torna-se instável e o eletrodo pode colar à peça.",
          "A fusão ocorre mais rapidamente.",
          "O banho de fusão torna-se extremamente fluido.",
          "O metal depositado torna-se muito poroso.",
          "O cordão de soldadura apresenta grande penetração."
        ],
        correta: "O arco torna-se instável e o eletrodo pode colar à peça."
      },
      {
        pergunta: "Qual dos seguintes fatores pode comprometer a qualidade de uma junta brasada?",
        opcoes: [
          "Falta de molhabilidade do metal de adição.",
          "Uso de metais de adição com ponto de fusão muito superior ao dos metais base.",
          "Ausência de fluxo adequado.",
          "Todas as alternativas acima."
        ],
        correta: "Todas as alternativas acima."
      },
      {
        pergunta: "Relativamente à diferença entre brasagem e soldagem, assinale a alternativa correta:",
        opcoes: [
          "A principal diferença está na temperatura de fusão do metal de adição, sendo superior a 450°C na brasagem e inferior na soldagem.",
          "A brasagem é usada apenas para materiais idênticos, enquanto a soldagem permite unir materiais distintos.",
          "Na soldagem, o metal de adição deve sempre conter chumbo.",
          "A brasagem não requer fluxos, pois o metal de adição adere espontaneamente à junta."
        ],
        correta: "A principal diferença está na temperatura de fusão do metal de adição, sendo superior a 450°C na brasagem e inferior na soldagem."
      },
      {
        pergunta: "Qual das seguintes é uma vantagem da brasagem em relação a outros processos?",
        opcoes: [
          "União de materiais heterogêneos.",
          "Eliminação completa da necessidade de fluxos.",
          "Resistência mecânica sempre superior à soldagem convencional.",
          "Ausência de tensões residuais em qualquer condição de trabalho."
        ],
        correta: "União de materiais heterogêneos."
      },
      {
        pergunta: "Qual das seguintes afirmações sobre a brasagem está correta?",
        opcoes: [
          "A brasagem ocorre com fusão dos metais base.",
          "O metal de adição na brasagem tem um ponto de fusão superior ao dos metais base.",
          "O enchimento da junta ocorre por capilaridade.",
          "A brasagem não requer aquecimento das peças a unir."
        ],
        correta: "O enchimento da junta ocorre por capilaridade."
      },
      {
        pergunta: "Sobre os métodos de aquecimento para a brasagem, qual das seguintes afirmações é incorreta?",
        opcoes: [
          "O aquecimento por alta frequência pode ser usado para brasagem.",
          "O aquecimento por resistência elétrica é um dos métodos possíveis.",
          "O processo de brasagem não pode ser realizado em fornos industriais.",
          "A chama oxiacetilênica é um método comum de aquecimento na brasagem."
        ],
        correta: "O processo de brasagem não pode ser realizado em fornos industriais."
      },
      {
        pergunta: "Durante a brasagem, para que o metal de adição preencha corretamente a junta, é necessário:",
        opcoes: [
          "Aumentar a pressão sobre as peças durante a fusão do metal de adição.",
          "Garantir que o afastamento entre as peças esteja entre 0,05 mm e 0,5 mm.",
          "Aquecer apenas o metal de adição sem alterar a temperatura dos metais base.",
          "Evitar o uso de fluxos para não interferir na capilaridade."
        ],
        correta: "Garantir que o afastamento entre as peças esteja entre 0,05 mm e 0,5 mm."
      },
      {
        pergunta: "Qual das seguintes ligas corresponde ao metal de adição mais comum na soldagem?",
        opcoes: [
          "Alumínio-magnésio.",
          "Cobre-Zinco.",
          "Chumbo-Estanho.",
          "Niquel-cromio."
        ],
        correta: "Chumbo-Estanho."
      },
      {
        pergunta: "Qual a principal consequência do uso de elétrodos úmidos na soldadura SER?",
        opcoes: [
          "Maior estabilidade do arco.",
          "Aumento da absorção de hidrogênio, podendo causar fissuração.",
          "Redução do calor gerado.",
          "Aumento da resistência mecânica do cordão de soldadura.",
          "Maior facilidade de ignição do arco elétrico."
        ],
        correta: "Aumento da absorção de hidrogênio, podendo causar fissuração."
      },
      {
        pergunta: "O fator de marcha de um aparelho de soldadura indica:",
        opcoes: [
          "A taxa de fusão do elétrodo por unidade de tempo.",
          "A quantidade de corrente máxima suportada.",
          "A relação entre o tempo efetivo de soldadura e o tempo total de operação.",
          "A espessura máxima do metal base que pode ser soldado.",
          "O número de ciclos por segundo do arco elétrico."
        ],
        correta: "A relação entre o tempo efetivo de soldadura e o tempo total de operação."
      },
      {
        pergunta: "Quais são os principais tipos de corrente utilizados na soldadura SER?",
        opcoes: [
          "Apenas corrente alternada.",
          "Apenas corrente contínua.",
          "Corrente contínua e corrente alternada.",
          "Apenas corrente de alta frequência.",
          "Apenas corrente pulsada."
        ],
        correta: "Corrente contínua e corrente alternada."
      },
      {
        pergunta: "Porque é que os elétrodos básicos são amplamente utilizados em aplicações estruturais?",
        opcoes: [
          "Porque apresentam baixo custo e alta deposição.",
          "Porque possuem alta resistência mecânica e baixo hidrogênio difusível.",
          "Porque proporcionam maior formação de escória.",
          "Porque são os mais indicados para chapas finas.",
          "Porque não exigem pré-aquecimento da peça."
        ],
        correta: "Porque possuem alta resistência mecânica e baixo hidrogênio difusível."
      },
      {
        pergunta: "O que acontece se um elétrodo revestido for armazenado incorretamente e absorver umidade?",
        opcoes: [
          "Ele gera mais escória, melhorando a fusão.",
          "Pode causar fissuração a frio devido ao hidrogênio difusível.",
          "Melhora a fluidez do banho de fusão.",
          "Aumenta a resistência ao impacto da junta soldada.",
          "Diminui a formação de projeções metálicas."
        ],
        correta: "Pode causar fissuração a frio devido ao hidrogênio difusível."
      },
      {
        pergunta: "Qual o efeito do ângulo de inclinação do elétrodo em relação ao metal de base na forma do cordão de solda?",
        opcoes: [
          "Não afeta a forma do cordão.",
          "Quanto maior a inclinação, maior a penetração e menor a largura do cordão.",
          "Quanto menor a inclinação, menor a penetração e maior a largura do cordão.",
          "Apenas influencia a quantidade de escória depositada.",
          "Reduz a taxa de fusão do elétrodo."
        ],
        correta: "Quanto maior a inclinação, maior a penetração e menor a largura do cordão."
      },
      {
        pergunta: "Qual a principal vantagem dos eletrodos de alto rendimento?",
        opcoes: [
          "Não precisam de alta intensidade de corrente.",
          "Possuem menor diâmetro e maior eficiência.",
          "Possuem um rendimento superior a 100%.",
          "São mais baratos do que os eletrodos comuns.",
          "Permitem soldar apenas em correntes contínuas."
        ],
        correta: "Possuem um rendimento superior a 100%."
      },
      {
        pergunta: "O que ocorre quando o eletrodo é empurrado ao invés de puxado em SER?",
        opcoes: [
          "Aumenta a taxa de fusão.",
          "Dificulta a fusão do arco.",
          "Dificulta a penetração da solda e inclusões de escória no cordão.",
          "Melhora a deposição do material de adição."
        ],
        correta: "Dificulta a penetração da solda e inclusões de escória no cordão."
      },
      {
        pergunta: "As 4 posições fundamentais da soldadura são:",
        opcoes: [
          "Vertical, horizontal, ao baixo e ao teto.",
          "Para a frente, para trás, em círculo e por trás.",
          "Inclinado à frente, inclinado atrás, na raiz e no topo."
        ],
        correta: "Vertical, horizontal, ao baixo e ao teto."
      },
      {
        pergunta: "O que é o cordão de soldadura?",
        opcoes: [
          "É a superfície exposta da soldadura, por onde foi executada a soldadura.",
          "É o depósito de soldadura que resulta de um passe.",
          "É o dispositivo para verificar a forma e a dimensão da soldadura.",
          "É a superfície do metal base que será fundida durante a soldadura."
        ],
        correta: "É o depósito de soldadura que resulta de um passe."
      },
      {
        pergunta: "Indique a melhor definição:",
        opcoes: [
          "O consumível é todo o material que se emprega na deposição ou proteção da soldadura.",
          "O consumível é todo o material que se emprega na deposição e que se funde.",
          "O consumível é todo o material que se emprega apenas na proteção da soldadura.",
          "O consumível é todo o material que se funde e dá origem a uma soldadura."
        ],
        correta: "O consumível é todo o material que se emprega na deposição ou proteção da soldadura."
      },
      {
        pergunta: "Assinale a alternativa INCORRETA quanto à função do revestimento do eletrodo:",
        opcoes: [
          "Estabilizar o arco elétrico.",
          "Conduzir corrente elétrica para facilitar a deposição do metal de solda.",
          "Ajustar a composição química do cordão de solda.",
          "Proteger o banho de fusão contra contaminantes da atmosfera.",
          "Conferir características mecânicas e metalúrgicas ao eletrodo e à soldadura."
        ],
        correta: "Conduzir corrente elétrica para facilitar a deposição do metal de solda."
      },
      {
        pergunta: "O que caracteriza a transferência globular na soldadura Mig/Mag?",
        opcoes: [
          "Gotas grandes e irregulares se destacam do eletrodo.",
          "Pequenas gotas se transferem rapidamente para o metal base.",
          "O eletrodo não toca no metal base.",
          "O material de adição é vaporizado.",
          "Não há transferência de metal durante o processo."
        ],
        correta: "Gotas grandes e irregulares se destacam do eletrodo."
      },
      {
        pergunta: "O que caracteriza a transferência spray na soldadura Mig/Mag?",
        opcoes: [
          "Pequenas gotículas metálicas são projetadas continuamente para o metal base.",
          "O eletrodo toca constantemente no metal base.",
          "O arco elétrico não se mantém estável.",
          "O metal de adição é depositado em estado sólido.",
          "O processo ocorre sem a fusão do eletrodo."
        ],
        correta: "Pequenas gotículas metálicas são projetadas continuamente para o metal base."
      },
      {
        pergunta: "O que acontece se a velocidade de soldadura for muito alta?",
        opcoes: [
          "Maior deposição de material.",
          "Maior penetração no metal base.",
          "Formação de cordão estreito e menos fusão.",
          "Maior estabilidade do arco.",
          "Maior fusão do eletrodo."
        ],
        correta: "Formação de cordão estreito e menos fusão."
      },
      {
        pergunta: "Qual o efeito de um ângulo de eletrodo muito baixo na soldadura Mig/Mag?",
        opcoes: [
          "Redução de penetração e aumento da instabilidade do arco.",
          "Maior estabilidade do arco e penetração profunda.",
          "Diminuição da geração de gases protetores.",
          "Aumento da velocidade de deposição do eletrodo.",
          "Melhora a aderência do metal fundido."
        ],
        correta: "Redução de penetração e aumento da instabilidade do arco."
      },
      {
        pergunta: "O que ocorre se o stickout (extensão do eletrodo) for muito longo?",
        opcoes: [
          "Redução da fusão do metal base.",
          "Maior estabilidade do arco.",
          "Aumento da taxa de deposição",
          "Maior aquecimento do eletrodo e possível instabilidade do arco.",
          "Diminuição da porosidade da soldadura."
        ],
        correta: "Maior aquecimento do eletrodo e possível instabilidade do arco."
      },
      {
        pergunta: "O que caracteriza a soldadura MIG/MAG pulsada?",
        opcoes: [
          "Uso de gás inerte puro.",
          "Transferência globular constante.",
          "Alternância entre corrente alta e baixa para controlar a transferência metálica.",
          "Uso de corrente alternada para manter o arco estável.",
          "Eliminação de necessidade de gás de proteção."
        ],
        correta: "Alternância entre corrente alta e baixa para controlar a transferência metálica."
      },
      {
        pergunta: "O que caracteriza a soldadura com fio fluxado?",
        opcoes: [
          "O fio possui um núcleo contendo  fluxo que auxilia a proteção do arco.",
          "O processo utiliza exclusivamente gás de proteção inerte.",
          "A soldadura ocorre sem a fusão do metal base.",
          "O fio sólido é revestido externamente com fluxo.",
          "O processo não gera escória."
        ],
        correta: "O fio possui um núcleo contendo  fluxo que auxilia a proteção do arco."
      },
      {
        pergunta: "O que acontece se houver excesso de CO2 no gás de proteção?",
        opcoes: [
          "Maior estabilidade do arco.",
          "Maior penetração e aumento de projeções.",
          "Redução da temperatura do arco.",
          "Maior resistência à corrosão da soldadura.",
          "Menor fusão do eletrodo."
        ],
        correta: "Maior penetração e aumento de projeções."
      },
      {
        pergunta: "Qual a principal vantagem do Mig/Mag em relação à soldadura com eletrodo revestido?",
        opcoes: [
          "Maior controlo de penetração e menor taxa de deposição.",
          "Melhor acabamento e maior produtividade.",
          "Menor necessidade de gás de proteção.",
          "Melhor adaptação para soldadura em posições de difícil acesso.",
          "Menor necessidade de ajuste da corrente."
        ],
        correta: "Melhor acabamento e maior produtividade."
      },
      {
        pergunta: "Qual fator influencia diretamente a estabilidade do arco na soldadura Mig/Mag?",
        opcoes: [
          "Apenas a temperatura do metal base.",
          "Apenas o tipo de metal de adição.",
          "Tensão do arco, corrente de soldadura e gás de proteção.",
          "Tipo de eletrodo utilizado na soldadura.",
          "Número de passes de soldadura."
        ],
        correta: "Tensão do arco, corrente de soldadura e gás de proteção."
      },
      {
        pergunta: "No processo de soldadura com eléctrodo de tungsténio a corrente alternada é a melhor para soldadura, porque proporciona:",
        opcoes: [
          "Uma ótima limpeza de óxidos.",
          "Um grande banho de fusão.",
          "Uma melhor penetração.",
          "A maior quantidade de calor concentrado no eletrodo."
        ],
        correta: "Uma ótima limpeza de óxidos."
      },
      {
        pergunta: "Classifique como verdadeiro ou falso: A soldadura Tig com gás de proteção CO2 é utilizada somente na soldadura de aços.",
        opcoes: [
          "Verdadeiro",
          "Falso"
        ],
        correta: "Falso"
      },
      {
        pergunta: "Classifique como verdadeiro ou falso: A soldadura Tig com gás CO2 é utilizada somente na soldadura de ligas de alumínio.",
        opcoes: [
          "Verdadeiro",
          "Falso"
        ],
        correta: "Falso"
      },
      {
        pergunta: "Escolha a afirmação verdadeira.",
        opcoes: [
          "A decapagem catódica na soldadura de aços de alta resistência pelo processo TIG, é efetuada quando o eletrodo está ligado com o positivo.",
          "A decapagem catódica na soldadura de aços de alta resistência pelo processo TIG, é efetuado, quando em corrente alternada, o eletrodo está no meio negativo.",
          "As 2 primeiras são falsas.",
          "Pelo menos, uma é verdadeira."
        ],
        correta: "As 2 primeiras são falsas."
      },
      {
      pergunta: "Na soldadura TIG, o efeito de estrição térmica, …",
        opcoes: [
          "… é conseguido através da dimensão do caudal e do gás de proteção.",
          "… é conseguido através da dimensão do diâmetro do bocal de passagem do caudal e do gás de proteção.",
          "… permite aumentar a largura do banho de fusão.",
          "… permite diminuir a penetração e facilitar a soldadura de chapas finas."
        ],
        correta: "… é conseguido através da dimensão do diâmetro do bocal de passagem do caudal e do gás de proteção."
      },
      {
        pergunta: "Atualmente existem vários processos de soldadura. De entre eles, há os que fazem proteção de arco e do banho de fusão de um gás ou mistura de gases inertes. Quais são os melhores que correspondem?",
        opcoes: [
          "Mig e Mag.",
          "Tig e Mig.",
          "Tig e Mag.",
          "Arco submerso e Tig.",
          "Eletrodo revestido e Mig.",
          "Nenhuma das opções anteriores."
        ],
        correta: "Tig e Mig."
      },
      {
        pergunta: "Assinale a alternativa que apresenta um processo de soldadura que NÃO corresponde a um processo do tipo arco elétrico.",
        opcoes: [
          "MIG/MAG",
          "TIG",
          "Eletrodo revestido",
          "Eletroescoria",
          "Arco submerso",
          "Todos acima são por arco elétrico"
        ],
        correta: "Eletroescoria"
      },
      {
        pergunta: "A soldadura por arco submerso é um processo…",
        opcoes: [
          "…com muita alta taxa de deposição.",
          "… por fio fluxado.",
          "… de baixa eficiência.",
          "… altamente portátil."
        ],
        correta: "…com muita alta taxa de deposição."
      },
      {
        pergunta: "Uma forma de minimizar o ‘sopro do arco’ no processo de soldadura por arco submerso é…",
        opcoes: [
          "… utilizar corrente contínua.",
          "… utilizar corrente alternada.",
          "… soldar com arco mais longo.",
          "… utilizar polaridade inversa.",
          "… utilizar polaridade direta."
        ],
        correta: "… utilizar corrente alternada."
      },
      {
        pergunta: "Suponha a soldadura ao teto, topo a topo, de 2 chapas de aço ao carbono, S235, En 10025, de espessura 15 mm e comprimento 6 metros. Qual o processo de soldadura que melhor se adequa?",
        opcoes: [
          "Arco submerso.",
          "MIG.",
          "MAG.",
          "Eletrodo revestido.",
          "TIG."
        ],
        correta: "MAG."
      },
      {
        pergunta: "Os aparelhos de soldar por arco submerso apresentam uma ... mais alta que os de eletrodo revestido.",
        opcoes: [
          "corrente",
          "Tensão",
          "resistência",
          "reactância"
        ],
        correta: "corrente"
      },
      {
        pergunta: "Suponha a soldadura topo a topo de aço inoxidável de espessura 1 mm e comprimento 6 m. Qual o processo de soldadura que melhor se adequa?",
        opcoes: [
          "arco submerso",
          "mig",
          "mag",
          "eletrodo revestido",
          "Tig"
        ],
        correta: "Tig"
      },
      {
        pergunta: "Suponha que o arco submerso é um processo de soldadura automático que usa um fluxo (...) que cobre completamente o banho de fusão.",
        opcoes: [
          "quente",
          "liquido",
          "seco",
          "granular"
        ],
        correta: "granular"
      },
      {
        pergunta: "Suponha soldadura de alumínio, de espessura 15 mm e comprimento 2 metros. Qual o processo de soldadura que melhor se adequa?",
        opcoes: [
          "Arco submerso",
          "Mig",
          "Mag",
          "eletrodo revestido",
          "Tig"
        ],
        correta: "Mig"
      },
      {
        pergunta: "Qual dos pontos seguintes não é uma característica de soldadura por arco submerso?",
        opcoes: [
          "baixa contração das soldaduras",
          "mínima distorção da estrutura soldada.",
          "velocidade da soldadura muito alta.",
          "soldadura de alta qualidade mas muito sujeita a porosidade."
        ],
        correta: "soldadura de alta qualidade mas muito sujeita a porosidade."
      },
      {
        pergunta: "O que é o cobre-junta?",
        opcoes: [
          "É o dispositivo usado para verificar a forma e/ou dimensão de soldaduras",
          "É a junta entre 2 membros alinhados aproximadamente no mesmo plano",
          "é a região onde duas ou mais peças serão unidas pela soldadura",
          "É o material (metal de base, soldadura, material granulado, cobre, cerâmico ou carvão) colocado na raiz da junta a ser soldada, com a finalidade de suportar o metal fundido durante a execução da soldadura"
        ],
        correta: "É o material (metal de base, soldadura, material granulado, cobre, cerâmico ou carvão) colocado na raiz da junta a ser soldada, com a finalidade de suportar o metal fundido durante a execução da soldadura"
      },
      {
        pergunta: "Qual das seguinte técnicas de soldadura é mais adequada para unir as chapas finas de alumínio topo a topo?",
        opcoes: [
          "Arco submerso",
          "Tig",
          "resistência",
          "oxiacetilênica",
          "eletroescória"
        ],
        correta: "Tig"
      },
      {
        pergunta: "Quais são os principais fatores que determinam a soldabilidade?",
        opcoes: [
          "Velocidade de aquecimento, térmica e dureza",
          "Material, projeto e produção",
          "Tipo de gás utilizado, pressão e temperatura",
          "Microestrutura, composição química e cor do metal base",
          "Espessura, resistência e peso"
        ],
        correta: "Material, projeto e produção"
      },
      {
        pergunta: "O que é a zona termicamente afetada?",
        opcoes: [
          "A área onde o metal base e o metal adição se misturam",
          "A região do metal base que não foi aquecida",
          "A área do redor do cordão de soldadura afetada pelo calor, mas que não fundiu.",
          "A camada mais externa do metal base.",
          "A área de fusão no estado sólido."
        ],
        correta: "A área do redor do cordão de soldadura afetada pelo calor, mas que não fundiu."
      },
      {
        pergunta: "Qual o impacto do Carbono Equivalente (CE) na fissuração induzida pelo hidrogénio?",
        opcoes: [
          "Quanto maior CE, menor a susceptibilidade à fissuração.",
          "Quanto maior CE, maior a suscetibilidade à fissuração.",
          "O CE não influencia a fissuração por hidrogénio.",
          "O CE afeta apenas a ductilidade do metal base.",
          "O CE reduz a concentração de hidrogénio na ZAC."
        ],
        correta: "Quanto maior CE, maior a suscetibilidade à fissuração."
      },
      {
        pergunta: "O que é o Carbono Equivalente (CE)?",
        opcoes: [
          "Uma medida do teor de carbono no gás de proteção.",
          "Um índice que descreve a composição química de um aço para fins de soldabilidade.",
          "Uma propriedade térmica do metal de adição.",
          "O teor total de carbono no metal base.",
          "A espessura máxima permitida no processo de soldadura."
        ],
        correta: "Um índice que descreve a composição química de um aço para fins de soldabilidade."
      },
      {
        pergunta: "Qual é a principal função do pré aquecimento na soldadura de aços de carbono?",
        opcoes: [
          "Reduzir a dureza do metal base",
          "Evitar a fissuração a frio",
          "Promover a formação de martensita",
          "Aumentar a condutividade térmica",
          "Eliminar a necessidade de metal de adição"
        ],
        correta: "Evitar a fissuração a frio"
      },
      {
        pergunta: "Porque é que o hidrogénio é crítico na soldadura?",
        opcoes: [
          "Promove fissuração na soldadura",
          "Facilita o processo de solidificação",
          "Aumenta a resistência à tração do metal base",
          "Reduz a necessidade do pré aquecimento",
          "É essencial para a formação de grãos celulares"
        ],
        correta: "Promove fissuração na soldadura"
      },
      {
        pergunta: "Qual é o principal objetivo de tratamento térmico pós soldadura (Pwht)?",
        opcoes: [
          "Promove a fusão total do metal base",
          "Garantir a cristalização completa da ZAC",
          "Reduzir as tensões residuais na junta soldada",
          "Melhorar a condutividade elétrica do cordão de soldadura",
          "Aumentar a taxa de solidificação"
        ],
        correta: "Reduzir as tensões residuais na junta soldada"
      },
      {
        pergunta: "Como se calcula a entrega térmica na soldadura?",
        opcoes: [
          "Multiplicando a tensão pela corrente e pela velocidade de soldadura",
          "Dividindo a tensão pela corrente e pelo tempo",
          "Multiplicando tensão, corrente e eficiência e dividindo pela velocidade de soldadura",
          "Somando a energia do arco com o calor latente do metal base",
          "Calculando a média entre temperatura inicial e final"
        ],
        correta: "Multiplicando tensão, corrente e eficiência e dividindo pela velocidade de soldadura"
      },
      {
        pergunta: "Qual é o principal mecanismo pelo qual o tratamento térmico pós soldadura reduz as tensões residuais?",
        opcoes: [
          "Reforço das ligações metálicas por recristalização",
          "Redistribuição e relaxamento das tensões internas pelo alívio térmico",
          "Remoção de impurezas da junta soldada por oxidação controlada",
          "Redução da dureza do metal base pela fusão parcial",
          "Aumento de condutividade térmica pela uniformização da microestrutura"
        ],
        correta: "Redistribuição e relaxamento das tensões internas pelo alívio térmico"
      },
      {
        pergunta: "Qual método não é utilizado para diminuir tensões residuais em soldadura?",
        opcoes: [
          "Pré aquecimento antes da soldadura",
          "Tratamento térmico de alívio de tensões",
          "Vibrações mecânicas após a soldadura",
          "Arrefecimento brusco em água após o processo",
          "Uso de sequência de soldadura balanceada"
        ],
        correta: "Arrefecimento brusco em água após o processo"
      },
      {
        pergunta: "Como é que o pré aquecimento ajuda a reduzir tensões residuais em soldadura?",
        opcoes: [
          "Eliminando a porosidade no cordão de soldadura",
          "Diminuindo o gradiente térmico durante o ciclo de soldadura",
          "Reduzindo a taxa de transferência metálica no processo",
          "Alterando a composição química da zona termicamente afetada",
          "Promovendo a recristalização total da microestrutura"
        ],
        correta: "Diminuindo o gradiente térmico durante o ciclo de soldadura"
      },
      {
        pergunta: "Qual é o efeito da adição de enxofre no aço durante a soldadura?",
        opcoes: [
          "Aumenta a resistência da corrosão",
          "Promove a formação de martensita",
          "Facilita a fusão do material",
          "Promove fissuração severa na zona de fusão",
          "Reduz a ductilidade de ZAC"
        ],
        correta: "Promove fissuração severa na zona de fusão"
      },
      {
        pergunta: "A soldadura por resistência por pontos obriga sempre ao acesso a ambos os lados do conjunto a soldar",
        opcoes: [
          "Verdadeiro",
          "Falso"
        ],
        correta: "Falso"
      },
      {
        pergunta: "O que acontece com as ligas de alumínio na zona termicamente afetada durante a soldadura?",
        opcoes: [
          "Sua resistência é fortemente diminuída",
          "São formadas estruturas martensíticas",
          "Aumentam a sua ductilidade",
          "Sofrem recristalização completa",
          "Tornam-se mais resistentes ao calor"
        ],
        correta: "Sua resistência é fortemente diminuída"
      },
      {
        pergunta: "O que caracteriza a fissuração a quente?",
        opcoes: [
          "Fissuração causada por baixas temperaturas durante a soldadura",
          "Fissuração devido ao excesso de calor em aços martensíticos",
          "Formação de fissuras a altas temperaturas próximas da conclusão da solidificação",
          "Fissuração intergranular em baixas temperaturas",
          "Fissuração causada por tensões de compressão"
        ],
        correta: "Formação de fissuras a altas temperaturas próximas da conclusão da solidificação"
      },
      {
        pergunta: "Quais são os principais tipos de fissuração a quente?",
        opcoes: [
          "Fissuração de liquação, lamelar e por envelhecimento",
          "Fissuração na solidificação, por contaminação de cobre",
          "Fissuração na solidificação, de liquação na ZAC e no metal depositado",
          "Fissuração por baixa ductilidade, no reaquecimento e lamelar",
          "Fissuração por tensões residuais, difusão e envelhecimento"
        ],
        correta: "Fissuração na solidificação, de liquação na ZAC e no metal depositado"
      },
      {
        pergunta: "O que ocorre se a corrente de soldadura estiver muito alta?",
        opcoes: [
          "O elétrodo consome-se mais lentamente.",
          "O arco estingue-se rapidamente.",
          "Há um aumento de projeção de partículas e instabilidade do arco.",
          "O banho de fusão solidifica mais rapidamente.",
          "O revestimento de elétrodo fica mais espesso."
        ],
        correta: "Há um aumento de projeção de partículas e instabilidade do arco."
      },
      {
        pergunta: "Qual o ângulo recomendado do elétrodo na posição de soldadura ao baixo?",
        opcoes: [
          "Entre 10º e 20º.",
          "Entre 45º e 55º.",
          "Entre 60º e 80º.",
          "Exatamente 90º.",
          "Superior a 120º."
        ],
        correta: "Entre 60º e 80º."
      },
      {
        pergunta: "Qual a principal diferença entre a soldadura MIG e MAG?",
        opcoes: [
          "A soldadura MAG utiliza apenas gás inerte.",
          "O processo MIG usa CO2 puro como gás de proteção.",
          "A soldadura MIG utiliza gás inerte, enquanto MAG usa gás ativo.",
          "A soldadura MAG não usa corrente elétrica.",
          "O processo MIG só pode ser usado em metais não ferrosos."
        ],
        correta: "A soldadura MIG utiliza gás inerte, enquanto MAG usa gás ativo."
      },
      {
        pergunta: "Qual é a principal função do gás de proteção na soldadura MIG/MAG?",
        opcoes: [
          "Acelerar a fusão do elétrodo.",
          "Criar uma atmosfera que estabiliza o arco elétrico e protege o banho de fusão.",
          "Aumentar a resistência mecânica do metal de adição.",
          "Impedir a formação da poça de fusão.",
          "Aumentar a penetração da soldadura."
        ],
        correta: "Criar uma atmosfera que estabiliza o arco elétrico e protege o banho de fusão."
      },
      {
        pergunta: "Qual é o efeito de uma alta intensidade de corrente na soldadura MIG/MAG?",
        opcoes: [
          "Menor taxa de deposição.",
          "Aumento da resistência elétrica do fio.",
          "Maior taxa de fusão e penetração.",
          "Formação de um arco instável.",
          "Menor deposição do material de adição."
        ],
        correta: "Maior taxa de fusão e penetração."
      },
      {
        pergunta: "Qual gás é mais comumente usado na soldadura MIG para alumínio?",
        opcoes: [
          "Dióxido de carbono (CO2)",
          "Mistura de árgon e CO2",
          "Árgon puro",
          "Azoto",
          "Hélio com CO2"
        ],
        correta: "Árgon puro"
      },
      {
        pergunta: "O que acontece se o gás de proteção for insuficiente na soldadura MIG/MAG?",
        opcoes: [
          "O metal fundido terá maior dureza.",
          "O arco será mais estável.",
          "Ocorrerá porosidade no cordão da soldadura.",
          "A soldadura terá menor penetração.",
          "A fusão será mais rápida."
        ],
        correta: "Ocorrerá porosidade no cordão da soldadura."
      },
      {
        pergunta: "A soldadura TIG utiliza:",
        opcoes: [
          "Laser de alta intensidade",
          "Elétrodos de tungsténio em atmosfera inerte",
          "Reações químicas endotérmicas",
          "Materiais plásticos como base",
          "Combustíveis sólidos como fontes de calor"
        ],
        correta: "Elétrodos de tungsténio em atmosfera inerte"
      },
      {
        pergunta: "O que caracteriza a porosidade vermicular?",
        opcoes: [
          "Formação exclusivamente superficial",
          "Alinhamento longitudinal com o cordão",
          "Cavidades tubulares agrupadas em forma de espinha",
          "Poros uniformes e esféricos",
          "Ocorrência apenas por excesso de calor"
        ],
        correta: "Cavidades tubulares agrupadas em forma de espinha"
      },
      {
        pergunta: "Qual dos seguintes NÃO é um defeito de forma ou dimensão segundo a ISO 6520-1?",
        opcoes: [
          "Escorrimento",
          "Mordedura",
          "Inclusão de tungsténio",
          "Convexidade excessiva",
          "Desalinhamento"
        ],
        correta: "Inclusão de tungsténio"
      },
      {
        pergunta: "Em que circunstância os defeitos sistémicos são aceitáveis segundo a ISO 5817?",
        opcoes: [
          "Em qualquer nível de qualidade",
          "Apenas quando forem fissuras",
          "Somente no nível D e com defeitos individuais tolerados",
          "Quando a soldadura for com alumínio",
          "Se ocorrem por cavidades de gás"
        ],
        correta: "Somente no nível D e com defeitos individuais tolerados"
      },
      {
        pergunta: "Qual é a principal limitação do método de controlo por magnetoscopia?",
        opcoes: [
          "Deteta apenas defeitos superficiais e subsuperficiais em materiais ferromagnéticos",
          "Requer condições de vácuo para ser eficaz",
          "Não pode ser usado em materiais metálicos",
          "Necessita de preparação extensiva da superfície antes da aplicação",
          "Não é capaz de detetar falhas longitudinais na soldadura"
        ],
        correta: "Deteta apenas defeitos superficiais e subsuperficiais em materiais ferromagnéticos"
      },
      {
        pergunta: "Qual é o método mais indicado para detetar falhas profundas em materiais espessos?",
        opcoes: [
          "Controlo visual e dimensional",
          "Controlo por ultrassons",
          "Controlo por líquidos penetrantes",
          "Controlo por magnetoscopia",
          "Controlo por correntes parasitas"
        ],
        correta: "Controlo por ultrassons"
      },
      {
        pergunta: "Qual a principal vantagem do método por líquidos penetrantes?",
        opcoes: [
          "Deteta falhas internas e superficiais em todos os materiais",
          "Aplica-se a materiais ferromagnéticos sem necessidade de corrente elétrica",
          "Permite identificar defeitos que chegam até à superfície com baixo custo",
          "Substitui o método radiográfico em peças de alta espessura",
          "Funciona independentemente da preparação de superfície"
        ],
        correta: "Permite identificar defeitos que chegam até à superfície com baixo custo"
      },
      {
        pergunta: "Qual é a principal desvantagem do método radiográfico?",
        opcoes: [
          "Não deteta falhas internas em materiais espessos",
          "Exige preparação extensa da superfície antes do teste",
          "Gera radiação que requer cuidados especiais de segurança",
          "Não permite a avaliação de descontinuidades superficiais",
          "É ineficaz para deteção de falhas subsuperficiais"
        ],
        correta: "Gera radiação que requer cuidados especiais de segurança"
      },
      {
        pergunta: "Qual método de controlo é mais adequado para superfícies pintadas em peças de baixa espessura?",
        opcoes: [
          "Corrente parasita",
          "Magnetoscopia",
          "Ultrassons",
          "Líquidos penetrantes",
          "Controlo radiográfico"
        ],
        correta: "Corrente parasita"
      },
      {
        pergunta: "O que caracteriza o uso de partículas magnéticas no controlo por magnetoscopia?",
        opcoes: [
          "Necessidade de imersão da peça em líquido condutor",
          "Formação de padrões visíveis em regiões com defeitos",
          "Injeção de pressão para verificar estanqueidade",
          "Dependência exclusiva em corrente contínua",
          "Sensibilidade reduzida em materiais ferrosos"
        ],
        correta: "Formação de padrões visíveis em regiões com defeitos"
      }

      // Podes adicionar mais perguntas aqui...
    ]);

let current = 0;
let score = 0;
const respostasErradas = [];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const reviewEl = document.getElementById('review');
const nextBtn = document.getElementById('next');
// Mostra a pergunta com numeração
function showQuestion() {
    document.getElementById('review-wrapper').style.display = 'none';
  resultEl.textContent = '';
  reviewEl.innerHTML = '';

  const q = perguntas[current];
  const numeroAtual = current + 1;
  const total = perguntas.length;
  questionEl.textContent = `Pergunta ${numeroAtual} de ${total}: ${q.pergunta}`;

  const shuffledOptions = [...q.opcoes].sort(() => Math.random() - 0.5);
  optionsEl.innerHTML = '';

  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(opt, q);
    optionsEl.appendChild(btn);
  });
}

// ✅ NOVA FUNÇÃO COM FEEDBACK IMEDIATO
function selectAnswer(selected, questionrn) {
  const botoes = document.querySelectorAll('button.option');
  botoes.forEach(btn => btn.disabled = true);

  const correta = questionrn.correta;

  if (selected === correta) {
    resultEl.textContent = "✅ Boa puto!";
    resultEl.style.color = "green";
    score++;
  } else {
    resultEl.textContent = `❌ Oof, era esta: ${correta}`;
    resultEl.style.color = "red";
    respostasErradas.push({
      pergunta: questionrn.pergunta,
      correta: correta,
      selecionada: selected
    });
  }

  botoes.forEach(btn => {
    if (btn.textContent === correta) {
      btn.style.backgroundColor = "#bbf7d0";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "#fecaca";
    }
  });

  nextBtn.style.display = 'block';

}

// Função de revisão final
function showReview() {
  document.getElementById('review-wrapper').style.display = 'block';
  questionEl.textContent = '';
  optionsEl.innerHTML = '';
  resultEl.textContent = `You did them all! Score: ${score}/${perguntas.length}`;
  resultEl.style.color = "black";

  if (respostasErradas.length > 0) {
    reviewEl.innerHTML = "<h3>O que falhaste:</h3>";
    respostasErradas.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = "review-item";
      div.innerHTML = `<strong>${idx + 1}. ${item.pergunta}</strong><br>
        Sua resposta: ${item.selecionada}<br>
        Correta: ${item.correta}`;
      reviewEl.appendChild(div);
    });
  } else {
    reviewEl.innerHTML = "<p>Parabéns! You're awesome :3.</p>";
  }
}

// Função para parar o quiz antes do fim
function stopQuiz() {
  document.getElementById('review-wrapper').style.display = 'block';
  questionEl.textContent = '';
  optionsEl.innerHTML = '';
  resultEl.textContent = `Quiz parado! Pontuação: ${score}/${current}`;
  resultEl.style.color = "black";

  if (respostasErradas.length > 0) {
    reviewEl.innerHTML = "<h3>Respostas incorretas até agora:</h3>";
    respostasErradas.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = "review-item";
      div.innerHTML = `<strong>${idx + 1}. ${item.pergunta}</strong><br>
        Sua resposta: ${item.selecionada}<br>
        Correta: ${item.correta}`;
      reviewEl.appendChild(div);
    });
  } else {
    reviewEl.innerHTML = "<p>Yipeeeee, estás a acertar tudo!</p>";
  }

  // Botão de reiniciar
  const restartBtn = document.createElement('button');
  restartBtn.id = "restart";
  restartBtn.textContent = "Recomeçar";
  restartBtn.onclick = () => location.reload();
  reviewEl.appendChild(restartBtn);
}

nextBtn.onclick = () => {
  nextBtn.style.display = 'none';
  current++;
  if (current < perguntas.length) {
    showQuestion();
  } else {
    showReview();
  }
};


// Inicia o quiz
showQuestion();
document.getElementById('stop').onclick = stopQuiz;