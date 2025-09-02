<template>
  <!-- <AppHeader /> -->
  <AppHeader2 />

  <NuxtPage />

  <AppFooter />
</template>

<script lang="ts" setup>
import './public/css/tailwind.css'
import { provide } from 'vue';
// import { useSeoMeta  } from 'nuxt'


const team = [
  {
    "id": "silvia-pinto",
    "firstname": "Sílvia",
    "lastname": "Pinto",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/silvia-pinto-rounded.webp",
    "imageUrl": "/assets/images/silvia-pinto.webp",
    "description": "A terapeuta da Fala Sílvia licenciou-se em Terapia da Fala em 2009 pela Escola de Saúde do Instituto Politécnico de Setúbal e durante o seu percurso ainda realizou duas pós-graduações, uma em Neuropsicologia de Intervenção e outra em Sistemas Aumentativos e Alternativos da Comunicação – da Infância à Idade Adulta. A par destas graduações ainda complementou o seu percurso com formações complementares em PECS, PODD, Conselheira de Aleitamento Materno, Língua Gestual Portuguesa, Cued Seech e Disfagia. Para além da sua formação e percurso profissional, a Sílvia é a fundadora e coordenadora do projeto Tanto na Língua.",
    "hobbies": {
      "like": "Gosta de jogar ténis e de dançar",
      "notLike": "Não gosta de queijo.",
      "curiosities": "Fundadora e coordenadora do projeto Tanto na Língua"
    },
    "services": [1],
    "skills": []
  },
  {
    "id": "maria-bernardes",
    "firstname": "Maria",
    "lastname": "Bernardes",
    "birth_date": "20/04/1993",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/assets/images/maria-bernardes-rounded.webp",
    "imageUrl": "/assets/images/maria-bernardes.webp",
    "description": "A Psicomotricista Maria é licenciada em Reabilitação Psicomotora pela Universidade de Évora em 2014. Tem duas pós-graduações em Cuidados Paliativos e em Neurodesenvolvimento da Criança e do Adolescente.  Durante o seu percurso profissional fez ainda formação em Cuidados de Socorro Pediátricos e Suporte Básico de Vida, metodologia PECS e no Programa “Os Anos Incríveis”. Atualmente, está integrada no 2ª ano de licenciatura em Terapia da Fala pelo Instituto Politécnico de Setúbal.",
    "hobbies": {
      "like": "Gosta de cinema, ler, viajar, ir à praia e caminhar com boa companhia.",
      "notLike": "Não gosta de sopa, mas come uma pequena quantidade todas as semanas.",
      "curiosities": "Curiosidade - Encontra-se a tirar a segunda licenciatura em Terapia da Fala"
    },
    "services": [2, 4],
    "skills": [
      {
        "title": "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        "title": "Técnica-sombra"
      },
      {
        "title": "Intervenção em grupo"
      },
      {
        "title": "Formação na metodologia PECS"
      },
      {
        "title": "Intervenção com população idosa"
      }
    ]
  },
  {
    "id": "filipa-vieira",
    "firstname": "Filipa",
    "lastname": "Vieira",
    "birth_date": "20/04/1993",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Psicomotricista Filipa é licenciada em Reabilitação Psicomotora pela Faculdade de Motricidade Humana da Universidade de Lisboa desde 2016, tendo realizado mestrado em Reabilitação Psicomotora na mesma instituição em 2019. Tem formação no Currículo Europeu para a Resiliência (RESCUR) na Promoção da Resiliência em Contexto Escolar.",
    "hobbies": {
      "like": "Gosta de ouvir música, passear na natureza e conversar.",
      "notLike": "Não gosta de multidões nem de ovos mexidos.",
      "curiosities": null
    },
    "services": [2, 3, 4],
    "skills": [
      {
        "title": "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        "title": "Intervenção em grupo"
      }
    ]
  },
  {
    "id": "joana-assuncao",
    "firstname": "Joana",
    "lastname": "Assunção",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/joana-assuncao-rounded.webp",
    "imageUrl": "/assets/images/joana-assuncao.webp",
    "description": "A Terapeuta da Fala Joana licenciou-se em Terapia da Fala em 2009 pela Escola Superior de Saúde do Instituto Politécnico de Setúbal. Concluiu o 1º ano de mestrado em (Re)Habilitação Vocal na mesma instituição e pós-graduou-se em Neurodesenvolvimento em Pediatria no Instituto de Ciências da Saúde da Universidade Católica em 2012. Tem um especial gosto por trabalhar com a população infantil, tanto ao nível das perturbações da comunicação, como da linguagem oral e escrita.",
    "hobbies": {
      "like": "Gosta de dançar tango argentino.",
      "notLike": null,
      "curiosities": null
    },
    "services": [],
    "skills": [
      {
        "title": "Intervenção em perturbações da comunicação, linguagem (oral e escrita) e fala"
      },
      {
        "title": "Intervenção com a população infantil"
      }
    ]
  },
  {
    "id": "catarina-rodrigues",
    "firstname": "Catarina",
    "lastname": "Rodrigues",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/catarina-rodrigues-rounded.webp",
    "imageUrl": "/assets/images/catarina-rodrigues.webp",
    "description": "A Terapeuta da Fala Catarina licenciou-se em Terapia da Fala em 2012 pela Escola de Saúde Atlântica. Especializou-se em Motricidade Oro facial e apresenta várias formações nas áreas da Fala, Comunicação e Linguagem Oral e Escrita.",
    "hobbies": {
      "like": "Gosta de ler, idealmente perto do mar ou lago, acompanhada de chá e/ou café.",
      "notLike": "Não gosta de tomar o pequeno-almoço sozinha e com tempo contado.",
      "curiosities": null
    },
    "services": [1],
    "skills": [
      {
        "title": "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        "title": "Intervenção com crianças dos 3 anos aos 13 anos"
      },
      {
        "title": "Intervenção com adultos com alterações da Motricidade Oro facial"
      },
      {
        "title": "Participação em grupos de estimulação de competências de Linguagem com crianças em idade pré-escolar"
      }
    ]
  },
  {
    "id": "catarina-sousa",
    "firstname": "Catarina",
    "lastname": "Sousa",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/catarina-sousa-rounded.webp",
    "imageUrl": "/assets/images/catarina-sousa.webp",
    "description": "A Terapeuta da Fala Catarina é licenciada em Terapia da Fala desde 2011 pela Escola de Saúde Atlântica, tendo também formação em Sigmatismos (laterais e anteriores) e Método Habiles.",
    "hobbies": {
      "like": "Gosta de praia, de estar com a família e não resiste a gomas.",
      "notLike": "Não gosta de favas, milho, cogumelos e mentiras.",
      "curiosities": null
    },
    "services": [1],
    "skills": [
      {
        "title": "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        "title": "Intervenção com crianças dos 3 anos aos 13 anos."
      }
    ]
  },
  {
    "id": "margarida-ribeiro",
    "firstname": "Margarida",
    "lastname": "Ribeiro",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Terapeuta da Fala Margarida é licenciada em Terapia da Fala desde 2020 pela Escola Superior de Saúde do Instituto Politécnico de Setúbal, tendo também formação em perturbações fonológicas, alterações de fala de origem miofuncional e dificuldades na leitura e escrita.",
    "hobbies": {
      "like": "Gosta de gatos.",
      "notLike": "Não gosta de pudim.",
      "curiosities": null
    },
    "services": [1],
    "skills": [
      {
        "title": "Prevenção, avaliação e intervenção em perturbações da comunicação"
      },
      {
        "title": "Experiência profissional nas áreas da linguagem (oral e escrita), fala e motricidade orofacial"
      },
      {
        "title": "Intervenção em idade pré-escolar e escolar"
      }
    ]
  },
  {
    "id": "joana-silva",
    "firstname": "Joana Tavares Da",
    "lastname": "Silva",
    "birth_date": "20/04/1993",
    "mainService": "Psicóloga",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Psicóloga Joana é Mestre em Psicologia Clínica desde 2014 pela Universidade Lusíada de Lisboa e conta com uma especialização em Interpretação e Aplicação Clínica da Avaliação Psicológica. A Joana apresenta outras formações complementares, tais como, Orientação Vocacional, Intervenção Psicológica em Situações de Divórcio, Hiperatividade com Défice de Atenção: Avaliação e Intervenção, entre outras. É membro efetivo da Ordem dos Psicólogos Portugueses.",
    "hobbies": {
      "like": "Gosta de ler, de coca-cola e adora gomas ácidas.",
      "notLike": " Não gosta de cozinhar.",
      "curiosities": null
    },
    "services": [9, 10],
    "skills": [
      {
        "title": "Avaliação psicológica"
      },
      {
        "title": "Intervenção nas Perturbações do Desenvolvimento, Perturbações de Aprendizagem, Perturbações do Comportamento e Alterações Psicoafetivas"
      },
      {
        "title": "Acompanhamento psicológico e psicoeducacional"
      },
      {
        "title": "Intervenção Precoce"
      },
      {
        "title": "Orientação Parental"
      },
      {
        "title": "Orientação Escolar e Vocacional"
      }
    ]
  },
  {
    "id": "ana-lapa",
    "firstname": "Ana",
    "lastname": "Lapa",
    "birth_date": "20/04/1993",
    "mainService": "Musicoterapeuta",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A musicoterapeuta Ana é licenciada em Estudos Artísticos, variante de Música, pela Faculdade de Letras da Universidade de Coimbra e mestre em Musicoterapia pela Universidade Lusíada de Lisboa. Completou o 5ª grau de piano e o curso de complementar de canto no Conservatório Regional de Coimbra. É musicoterapeuta certificada pela Associação Portuguesa de musicoterapia desde março de 2023. Em 2018/2019 participou num projeto de investigação em Musicoterapia, desenvolvido pela Universidade Lusíada de Lisboa, intervindo em crianças e jovens institucionalizados. É membro da direção da Associação Portuguesa de Musicoterapia (APMT) desde 2017, e vice-presidente desde dezembro de 2022.",
    "hobbies": {
      "like": "Gosta do cheiro da chuva que cai sobre terra seca.",
      "notLike": "Não gosta de falta de verdade.",
      "curiosities": "A sua avó a chama de “Niducas cantadeira” porque andava sempre a cantarolar por todo o lado."
    },
    "services": [6],
    "skills": []
  },
  {
    "id": "andre-fernandes",
    "firstname": "André",
    "lastname": "Fernandes",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "O Terapeuta André é Licenciado em Terapia da Fala pela Escola Superior de Saúde do Instituto Politécnico de Setúbal, tendo iniciado a sua atividade profissional em outubro de 2008 com população pediátrica. Tem como especial área de interesse a intervenção nas áreas das necessidades complexas de comunicação, disfagia pediátrica e perturbações da linguagem. Ao longo do seu percurso profissional realizou diversas formações, destacando-se treino profissional em disfagia, pós-graduação em neuropsicologia de intervenção, pós-graduação em comunicação aumentativa e alternativa da infância ao adulto, pós-graduação em motricidade orofacial, electroestimulação aplicada à terapia da fala, sistema PECS, sistema PODD, entre outras que se revelaram importantes no seu percurso profissional. Palestrou em Congressos no âmbito das doenças raras e terapia da fala e foi coautor de um artigo científico publicado na revista internacional CEFAC.",
    "hobbies": {
      "like": "Gosta de Tênis e do Vitória Sporting Clube",
      "notLike": "Não gosta de iscas.",
      "curiosities": null
    },
    "services": [1],
    "skills": []
  },
  {
    "id": "lisandra-rodrigues",
    "firstname": "Lisandra",
    "lastname": "Rodrigues",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A terapeuta Lisandra Rodrigues é licenciada em Terapia da Fala pela Escola Superior de Tecnologia de Saúde do Porto desde 2009 e durante o seu percurso foi complementando o seu estudo, nomeadamente, com uma Pós-Graduação em Neuropsicologia no Instituto CRIAP, com formação em Comunicação Aumentativa e Alternativa na Criança na UTTAC – Unidade de Técnicas Aumentativas e Alternativas de Comunicação do Centro de Reabilitação de Paralisia Cerebral Calouste Gulbenkian e com formação em Língua Gestual Portuguesa até ao nível inicial A2 – Elementar na Associação de Surdos do Porto.",
    "hobbies": {
      "like": "Gosta de livros infantis e conhecer ilhas.",
      "notLike": "Não gosta de melancia nem de diospiros.",
      "curiosities": null
    },
    "services": [1],
    "skills": []
  },
  {
    "id": "liliana-jorge",
    "firstname": "Liliana",
    "lastname": "Jorge",
    "birth_date": "20/04/1993",
    "mainService": "Professora do Ensino Especial",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "",
    "hobbies": {
      "like": "",
      "notLike": "",
      "curiosities": ""
    },
    "services": [7],
    "skills": []
  },
  {
    "id": "patricia-alves",
    "firstname": "Patrícia",
    "lastname": "Alves",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta Ocupacional",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Terapeuta Ocupacional Patrícia é licenciada em Terapia Ocupacional desde 2014 pela Escola Superior de Saúde do Alcoitão e pós-graduada em Integração Sensorial, desde 2019, pela Escola Superior de Tecnologia da Saúde de Coimbra em parceria com a 7Senses. Desde a licenciatura trabalhou exclusivamente na área da pediatria, quer em contexto escolar, domiciliar e clínico, com crianças com diversas problemáticas, tais como atraso global de desenvolvimento, multideficiência, perturbações do espectro do autismo, perturbações da hiperatividade e défice de atenção, problemas de integração sensorial, problemas cognitivos, cegueira, entre outros. Ao longo dos anos, tem vindo a participar em várias formações relativas à atuação do terapeuta ocupacional no contexto escolar, bem como em formações mais específicas como escrita manual, ideação e práxis, integração sensorial na alimentação e Toileting.",
    "hobbies": {
      "like": "Gosta de estar com a família e passear ao ar livre. Detesta ambientes com muita gente e confusão.",
      "notLike": "",
      "curiosities": ""
    },
    "services": [5],
    "skills": []
  },
  {
    "id": "raquel-santos",
    "firstname": "Raquel",
    "lastname": "Santos",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Psicomotricista Raquel é licenciada em Reabilitação Psicomotora pela Universidade de Trás-Os-Montes e Alto Douro em 2016. E é mestre em Atividade Física Adaptada pela Faculdade de Desporto da Universidade do Porto desde 2018.",
    "hobbies": {
      "like": "Gosta de fazer grandes caminhadas pela natureza, ler e tocar guitarra.",
      "notLike": "Não tem um prato favorito.",
      "curiosities": "Já fez 2 caminhos de Santiago e foi treinadora e árbitra num desporto para atletas com deficiência visual: Goalball."
    },
    "services": [2, 4],
    "skills": []
  },
  {
    "id": "catarina-lopes",
    "firstname": "Catarina",
    "lastname": "Lopes",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/assets/images/catarina-lopes-rounded.webp",
    "imageUrl": "/assets/images/catarina-lopes.webp",
    "description": "A Psicomotricista Catarina licenciou-se em 2019, pela Faculdade de Motricidade Humana – Universidade de Lisboa. Posteriormente, concluiu o Mestrado em Reabilitação Psicomotora também na Faculdade de Motricidade Humana. Mais recentemente tem tido maior interesse em trabalhar com crianças, jovens e tenho vindo a desenvolver carreira em contexto escolar, clínico e domiciliar com crianças e jovens com Perturbação do Espetro Autista, dificuldades de aprendizagem, técnicas e métodos de estudo bem como problemas de comportamento e desenvolvimento.",
    "hobbies": {
      "like": "Gosta de ir à praia, viajar, fazer convívios com as amigas e de sushi.",
      "notLike": "Não gosta de salada e tem medo de trovoada.",
      "curiosities": "Foi federada em patinagem artística."
    },
    "services": [2, 4],
    "skills": []
  },
  {
    "id": "Mariana-Leal",
    "firstname": "Mariana",
    "lastname": "Leal",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/marina-leal-rounded.webp",
    "imageUrl": "/assets/images/marina-leal.webp",
    "description": "A Terapeuta da Fala Mariana Leal é licenciada em Terapia da Fala pelo instituto politécnico de Setúbal desde 2024.  Como complemento ao seu percurso profissional fez a formação no instrumento de avaliação ACLLE, no Método Habilles e no Programa Baby Signs (nível 1 e 2).",
    "hobbies": {
      "like": "Gosta de nadar, ir à praia e de café.",
      "notLike": "Não gosta de puré.",
      "curiosities": null
    },
    "services": [2, 4],
    "skills": []
  },
  {
    "id": "catarina-duarte",
    "firstname": "Catarina",
    "lastname": "Duarte",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/catarina-duarte-rounded.webp",
    "imageUrl": "/assets/images/catarina-duarte.webp",
    "description": "A Terapeuta da Fala Catarina Duarte é licenciada em Terapia da Fala pelo Instituto Politécnico de Setúbal em 2025. Realizou uma formação em Intervenção dos Terapeutas da Fala nas Perturbações Motoras dos Sons da Fala e possui ainda formação em Suporte Básico de Vida. Adora trabalhar com a população infantojuvenil e pelo desenvolvimento infantil.",
    "hobbies": {
      "like": "Adora ir à praia, viajar, ler e desfrutar da calma do campo.",
      "notLike": "Não gosta de cogumelos, mas às vezes lá aparecem na cozinha.",
      "curiosities": "Fala fluentemente francês e tem uma quinta onde vivem ovelhas e cabras muito fofas, que ajudam a tornar os dias ainda mais especiais e adora aprender coisas novas."
    },
    "services": [1],
    "skills": [
      {
        "title": "Intervenção em Perturbações Motoras dos Sons da Fala"
      },
      {
        "title": "Suporte Básico de Vida"
      },
      {
        "title": "Trabalho com população infantojuvenil"
      }
    ]
  },
  {
    "id": "carolina-toscano",
    "firstname": "Carolina",
    "lastname": "Toscano",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Terapeuta da Fala Carolina Toscano é licenciada em Terapia da Fala pelo Instituto Politécnico de Setúbal em 2025. Realizou curso prático em Intervenção dos Terapeutas da Fala nas Perturbações Alimentares e participou no Workshop para profissionais do Programa Baby Signs – Nível I e II, aprofundando competências na avaliação e intervenção junto das crianças e das suas famílias.",
    "hobbies": {
      "like": "Gosta de viajar, conhecer novas culturas, ir à praia e passar tempo com quem lhe é especial.",
      "notLike": "Não gosta de frio.",
      "curiosities": "Tem uma intolerância alimentar, o que a torna ainda mais consciente da importância de uma alimentação adaptada e equilibrada."
    },
    "services": [1],
    "skills": [
      {
        "title": "Intervenção em Perturbações Alimentares"
      },
      {
        "title": "Programa Baby Signs - Nível I e II"
      },
      {
        "title": "Avaliação e intervenção com crianças e famílias"
      }
    ]
  },
  {
    "id": "ana-gomes",
    "firstname": "Ana",
    "lastname": "Gomes",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/assets/images/ana-gomes-rounded.webp",
    "imageUrl": "/assets/images/ana-gomes.webp",
    "description": "A Psicomotricista Ana Gomes licenciou-se em 2019 pela Faculdade de Motricidade Humana – Universidade de Lisboa, onde também concluiu o Mestrado em Reabilitação Psicomotora. Desde então, tem vindo a desenvolver a sua carreira em contexto escolar, clínico e domiciliar, intervindo com crianças e jovens com Perturbações do Desenvolvimento (PHDA, PEA, Trissomias...), Perturbações da Aprendizagem e do Comportamento. Desde cedo, percebeu o seu interesse pelo desenvolvimento infantil, o que despertou a sua paixão pela psicomotricidade. No seu trabalho, utiliza o movimento e a interação para promover o desenvolvimento motor, cognitivo e emocional das crianças e jovens. Em cada sessão, planeia estratégias individualizadas, respeitando as necessidades e capacidades de cada um, acreditando que todas as conquistas, por mais pequenas que sejam, refletem o potencial único de cada criança e a importância de um acompanhamento adaptado e consistente.",
    "hobbies": {
      "like": "Gosta de eventos culturais, especialmente concertos, festivais e teatro, de sol e calor, de ler e de conversas longas com amigos.",
      "notLike": "Ama chocolate, mas não se dá bem com animais com penas e nunca fez amizade com um brócolo.",
      "curiosities": "Participa regularmente em ações de voluntariado."
    },
    "services": [2, 4],
    "skills": [
      {
        "title": "Intervenção com crianças e jovens com Perturbações do Desenvolvimento"
      },
      {
        "title": "Perturbações da Aprendizagem e do Comportamento"
      },
      {
        "title": "Técnica-sombra"
      },
      {
        "title": "Desenvolvimento motor, cognitivo e emocional"
      },
      {
        "title": "Estratégias individualizadas de intervenção"
      }
    ]
  },
  {
    "id": "liliana-jorge-updated",
    "firstname": "Liliana",
    "lastname": "Jorge",
    "mainService": "Professora do Ensino Especial",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Professora Liliana é licenciada em Educação, com especialização em Educação Especial, na área das dificuldades cognitivas e de aprendizagem. Tem experiência no acompanhamento de crianças e jovens com necessidades educativas especiais em diferentes níveis de ensino. Tem formação em Perturbações do Espectro do Autismo (PEA), Dislexia, Défice Cognitivo, Perturbações do comportamento e da autorregulação, bem como em estratégias diferenciadas de ensino e adaptação curricular.",
    "hobbies": {
      "like": "Adora estar em contacto com a natureza, fazer caminhadas, stand-up paddle e canoagem.",
      "notLike": "Não gosta nada de rotinas demasiado rígidas – acredita que cada criança tem o seu próprio ritmo e caminho.",
      "curiosities": null
    },
    "services": [7],
    "skills": [
      {
        "title": "Educação Especial - dificuldades cognitivas e de aprendizagem"
      },
      {
        "title": "Perturbações do Espectro do Autismo (PEA)"
      },
      {
        "title": "Dislexia"
      },
      {
        "title": "Défice Cognitivo"
      },
      {
        "title": "Perturbações do comportamento e da autorregulação"
      },
      {
        "title": "Estratégias diferenciadas de ensino"
      },
      {
        "title": "Adaptação curricular"
      }
    ]
  },
  {
    "id": "monica-gaspar",
    "firstname": "Mónica",
    "lastname": "Gaspar",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Psicomotricista Mónica Gaspar é uma profissional especializada na área da psicomotricidade, dedicando-se ao desenvolvimento motor, cognitivo e emocional dos seus utentes. Com uma abordagem centrada na pessoa, utiliza o movimento e a interação corporal como ferramentas terapêuticas para promover o bem-estar e o desenvolvimento integral de crianças, jovens e adultos.",
    "hobbies": {
      "like": "",
      "notLike": "",
      "curiosities": ""
    },
    "services": [2],
    "skills": []
  },
  {
    "id": "catia-pentieiros",
    "firstname": "Cátia",
    "lastname": "Pentieiros",
    "mainService": "Fisioterapeuta Pediátrica",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Fisioterapeuta Pediátrica Cátia Pentieiros é uma profissional especializada na área da fisioterapia pediátrica, focada no desenvolvimento, manutenção e reabilitação das capacidades físicas e funcionais de bebés, crianças e adolescentes. A sua intervenção visa promover o desenvolvimento motor adequado e maximizar o potencial funcional de cada criança.",
    "hobbies": {
      "like": "",
      "notLike": "",
      "curiosities": ""
    },
    "services": [11],
    "skills": []
  },
  {
    "id": "lara-borges",
    "firstname": "Lara",
    "lastname": "Borges",
    "mainService": "Psicóloga",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Psicóloga Lara Borges é uma profissional especializada nas áreas da psicologia e orientação escolar e vocacional. Com uma abordagem integrada, dedica-se ao apoio psicológico e ao desenvolvimento de competências pessoais, escolares e profissionais, acompanhando crianças, jovens e adultos nos seus processos de crescimento e tomada de decisão.",
    "hobbies": {
      "like": "",
      "notLike": "",
      "curiosities": ""
    },
    "services": [9, 10],
    "skills": []
  },
  {
    "id": "cristiana-teixeira",
    "firstname": "Cristiana",
    "lastname": "Teixeira",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/assets/images/avatar.png",
    "imageUrl": "/assets/images/avatar.png",
    "description": "A Psicomotricista Cristiana Teixeira é uma profissional com dupla especialização em psicomotricidade e técnica-sombra. A sua intervenção foca-se no desenvolvimento motor, cognitivo e emocional, utilizando uma abordagem multidisciplinar que combina as competências da psicomotricidade com o apoio especializado em contexto escolar e terapêutico.",
    "hobbies": {
      "like": "",
      "notLike": "",
      "curiosities": ""
    },
    "services": [2, 4],
    "skills": []
  }
]

const route = useRoute();
const runtimeConfig = useRuntimeConfig();

console.log("ENV: ", runtimeConfig.public.DOMAIN)

useHead({
  htmlAttrs: { lang: 'pt' },
  meta: [
    { name: 'robots', content: 'index'},
    { name: 'url', content: route.path },
  ],
  link: [
    { id: 'canonical', href: `https://${runtimeConfig.public.DOMAIN}${route.fullPath}` }
  ],
  script: [
    {
      innerHTML: `
      window.dataLayer = window.dataLayer || [];

      gtag('js', new Date());

      gtag('config', 'G-1K35XKEL7N');
      `
    }
  ]
})


useSeoMeta({
  ogType: 'website',
  ogUrl: `https://${runtimeConfig.public.DOMAIN}${route.fullPath}`,
  ogImage: `https://${runtimeConfig.public.DOMAIN}/assets/logo.svg`,
})

// useJsonld({
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: [
//       {
//         '@type': 'Question',
//         name: 'Lorem ipsum dolor sit amet?',
//         acceptedAnswer: {
//           '@type': 'Answer',
//           text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
//         },
//       },
//     ],
//   });



provide('team', team);
</script>
