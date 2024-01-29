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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/maria-bernardes-rounded.webp",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/maria-bernardes.webp",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
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
    "id": "marilia-nicolau",
    "firstname": "Marília",
    "lastname": "Nicolau",
    "birth_date": "20/04/1993",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/marilia-nicolau-rounded.webp",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/marilia-nicolau.webp",
    "description": "A Psicomotricista Marília tem uma licenciatura e mestrado em Reabilitação Psicomotora pela Faculdade de Motricidade Humana, Faculdade de Lisboa desde 2022. Tem ainda formação nível 1 em Babys Signs.",
    "hobbies": {
      "like": "Gosta de ler e de praia.",
      "notLike": "Não gosta de frio.",
      "curiosities": "Teve um dente de leite até aos 21 anos de idade."
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
      }
    ]
  },
  {
    "id": "ana-caetano",
    "firstname": "Ana Cristina Caetano",
    "lastname": "Leocádio",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "description": "Em 2004, a Terapeuta da Fala Ana concluiu o curso na Escola Superior de Saúde Egas Moniz. Em 2005 iniciou funções numa Equipa Local de Intervenção Precoce no Alentejo, onde esteve durante 18 anos. Ao longo destes anos fez várias formações, nomeadamente no desenvolvimento infantil e perturbações do neurodesenvolvimento.",
    "hobbies": {
      "like": "Gosta muito de trabalhos manuais, principalmente do processo criativo e de uma boa conversa, bem como de partilhar o que mais sabe.",
      "notLike": "Não gosta de estar “sem fazer nada” e não gosta de areia.",
      "curiosities": null
    },
    "services": [1],
    "skills": [
      {
        "title": "Intervenção com crianças com perturbações do desenvolvimento e neurodesenvolvimento"
      },
      {
        "title": "Intervenção com crianças dos 0 aos 6 anos"
      },
      {
        "title": "Capacitação parental/familiar"
      }
    ]
  },
  {
    "id": "joana-assuncao",
    "firstname": "Joana",
    "lastname": "Assunção",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/joana-assuncao-rounded.webp",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/joana-assuncao.webp",
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
    "id": "joana-nogueira",
    "firstname": "Joana",
    "lastname": "Nogueira",
    "birth_date": "20/04/1993",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "description": "A Psicomotricista Joana é licenciada em Reabilitação Psicomotora pela Faculdade de Motricidade Humana e Mestre em Educação Especial – Especialização em Problemas de Aprendizagem e Comportamento pela Escola Superior de Educação de Lisboa. Tem pós-graduação em Neuropsicologia de Intervenção pelo Instituto CRIAP. É formadora profissional pelo INEPI e investiu em outras formações complementares, tais como, método SON-RISE, Pivotal Response Treatment, ABA funcional, PECS, Baby Signs, Práticas parentais positivas, Método Fonomímico de Paula Teles, bem como Suporte Básico de Vida e Primeiros Socorros Pediátricos.",
    "hobbies": {
      "like": "Gosta de andar descalça e que valoriza muito as pequenas grandes conquistas de cada um.",
      "notLike": "Não gosta de pessoas que só pensam em si e não se sabem colocar no lugar do outro.",
      "curiosities": null
    },
    "services": [2],
    "skills": [
      {
        "title": "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        "title": "Técnica-sombra"
      },
      {
        "title": "Formação na metodologia PECS"
      },
      {
        "title": "Intervenção em grupo"
      },
      {
        "title": "Intervenção com população idosa"
      }
    ]
  },
  {
    "id": "rita-silva",
    "firstname": "Rita",
    "lastname": "Silva",
    "birth_date": "20/04/1993",
    "mainService": "Psicomotricista",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "description": "A Psicomotricista Rita é licenciada em Reabilitação Psicomotora pela Faculdade de Motricidade Humana - Universidade de Lisboa desde 2016 e tem formação em Equitação Terapêutica, metodologia PECS (Sistema de Comunicação por Troca de Imagens) e Babysigns.",
    "hobbies": {
      "like": "Gosta de sorrisos fáceis e gargalhadas de coração, de trabalhos manuais e de viajar.",
      "notLike": "Não gosta de falta de humildade.",
      "curiosities": "Já frequentaou três desportos diferentes durante o mesmo ano."
    },
    "services": [2],
    "skills": [
      {
        "title": "Intervenção com crianças com perturbações do desenvolvimento e do comportamento"
      },
      {
        "title": "Técnica-sombra"
      },
      {
        "title": "Formação na metodologia PECS"
      },
      {
        "title": "Intervenção com a população adulta"
      },
      {
        "title": "Intervenção com a população idosa"
      }
    ]
  },
  {
    "id": "catarina-rodrigues",
    "firstname": "Catarina",
    "lastname": "Rodrigues",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/catarina-rodrigues-rounded.webp",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/catarina-rodrigues.webp",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/catarina-sousa-rounded.webp",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/catarina-sousa.webp",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "description": "A Psicóloga Joana é Mestre em Psicologia Clínica desde 2014 pela Universidade Lusíada de Lisboa e conta com uma especialização em Interpretação e Aplicação Clínica da Avaliação Psicológica. A Joana apresenta outras formações complementares, tais como, Orientação Vocacional, Intervenção Psicológica em Situações de Divórcio, Hiperatividade com Défice de Atenção: Avaliação e Intervenção, entre outras. É membro efetivo da Ordem dos Psicólogos Portugueses.",
    "hobbies": {
      "like": "Gosta de ler.",
      "notLike": "Não gosta de coca-cola, gomas ácidas e de cozinhar.",
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
    "id": "raquel-goncalves",
    "firstname": "Raquel Gonçalves",
    "lastname": "Silva",
    "birth_date": "20/04/1993",
    "mainService": "Psicóloga",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/raquel-goncalves-rounded.webp",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/raquel-goncalves.webp",
    "description": "A Psicóloga Raquel é licenciada pelo Instituto Universitário de Lisboa (ISCTE) em Psicologia e Mestre em Psicologia Comunitária e Proteção de Menores, formação académica que completou com o curso de especialização avançada em Psicologia Escolar e Educacional. Durante o seu percurso profissional ainda fez cursos de curta duração relacionados com Perturbações de Aprendizagem Específica (dislexia) e avaliação psicológica de caráter projetivo.",
    "hobbies": {
      "like": "Gosta de ler, fazer desporto e cozinhar.",
      "notLike": "Não gosta de frio e trânsito.",
      "curiosities": null
    },
    "services": [3, 10],
    "skills": []
  },
  {
    "id": "ana-lapa",
    "firstname": "Ana",
    "lastname": "Lapa",
    "birth_date": "20/04/1993",
    "mainService": "Musicoterapeuta",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
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
    "id": "cristiana-gameiro",
    "firstname": "Cristiana",
    "lastname": "Gameiro",
    "birth_date": "20/04/1993",
    "mainService": "Fisioterapeuta",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "description": "TO FIX",
    "hobbies": {
      "like": "Amante da natureza e de atividades ao ar livre, praia e ondas do mar.",
      "notLike": "Não gosta do inverno , assim como de montanhas russas., um medo de miúda, mas que a paixão pelo movimento e aventura permanece constante.",
      "curiosities": null
    },
    "services": [],
    "skills": []
  },
  {
    "id": "andre-fernandes",
    "firstname": "André",
    "lastname": "Fernandes",
    "birth_date": "20/04/1993",
    "mainService": "Terapeuta da Fala",
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
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
    "roundedImageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "imageUrl": "/nuxt-tanto-na-lingua/assets/images/avatar.png",
    "description": "A Terapeuta Ocupacional Patrícia é licenciada em Terapia Ocupacional desde 2014 pela Escola Superior de Saúde do Alcoitão e pós-graduada em Integração Sensorial, desde 2019, pela Escola Superior de Tecnologia da Saúde de Coimbra em parceria com a 7Senses. Desde a licenciatura trabalhou exclusivamente na área da pediatria, quer em contexto escolar, domiciliar e clínico, com crianças com diversas problemáticas, tais como atraso global de desenvolvimento, multideficiência, perturbações do espectro do autismo, perturbações da hiperatividade e défice de atenção, problemas de integração sensorial, problemas cognitivos, cegueira, entre outros. Ao longo dos anos, tem vindo a participar em várias formações relativas à atuação do terapeuta ocupacional no contexto escolar, bem como em formações mais específicas como escrita manual, ideação e práxis, integração sensorial na alimentação e Toileting.",
    "hobbies": {
      "like": "Gosta de estar com a família e passear ao ar livre. Detesta ambientes com muita gente e confusão.",
      "notLike": "",
      "curiosities": ""
    },
    "services": [5],
    "skills": []
  }
]

provide('team', team);
</script>
