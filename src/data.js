 export const linhas = [
    {
      "linha": "C002B - Circular Saúde",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": ""
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:42 .", "05:08 .", "05:32 .", "05:58 .", "06:22 .", "06:48 .", "07:12 .", 
            "07:38 .", "08:10 .", "09:05 .", "10:00 .", "10:50 .", "11:30 .", "12:00 .", 
            "12:30 .", "13:00 .", "13:30 .", "14:00 .", "14:30 .", "15:00 .", "15:30 .", 
            "16:00 .", "16:30 .", "17:00 .", "17:30 .", "18:00 .", "18:35 .", "19:30 .", 
            "20:10 .", "21:00 .", "21:45 .", "22:15 .", "22:45 .", "23:25 .", "00:15 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:42 .", "05:08 .", "05:32 .", "05:58 .", "06:22 .", "06:48 .", "07:12 .", 
            "07:38 .", "08:10 .", "09:05 .", "10:00 .", "10:50 .", "11:30 .", "12:00 .", 
            "12:30 .", "13:00 .", "13:30 .", "14:00 .", "14:30 .", "15:25 .", "16:15 .", 
            "17:05 .", "17:55 .", "18:45 .", "19:30 .", "21:25 .", "22:15 .", "23:05 .", 
            "23:55 .", "00:40 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 .", "05:30 .", "06:10 .", "06:50 .", "07:30 .", "08:10 .", "09:00 .", 
            "09:45 .", "11:30 .", "12:20 .", "13:00 .", "13:40 .", "14:20 .", "15:00 .", 
            "15:40 .", "16:20 .", "17:00 .", "17:40 .", "18:30 .", "19:15 .", "21:00 .", 
            "21:40 .", "22:20 .", "23:00 .", "23:40 .", "00:20 ."
          ]
        }
      },
      "itinerarios": {
        "sentido": "Ida",
        "roteiro": [
          "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Doutor Cândido Xavier de Almeida e Souza", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Passagem Subterrânea Osvaldo Crespo de Abreu", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Rua Carlos Barattino", "Avenida Waldemar Costa Filho", 
          "Avenida Antônio de Almeida", "Avenida Pedro Romero", "Rua Professor Walter Aparecido da Silva", 
          "Rotatória", "Rua Professor Walter Aparecido da Silva", "Avenida Pedro Romero", "Avenida Antônio de Almeida", 
          "Avenida Waldemar Costa Filho", "Rua Carlos Barattino", "Rua Manoel de Oliveira", "Avenida José Meloni", 
          "Rua Doutor Deodato Wertheimer", "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", 
          "Complexo Viário Jornalista Tirreno da San Biagio", "Avenida Governador Adhemar de Barros", "Rua Basílio Batalha", 
          "Rua Professor Flaviano de Melo", "Terminal Central"
        ]
      }
    },
    {
      "linha": "C101 - Parque São Martinho via Jundiapeba e Varinhas",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Parque São Martinho",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "B": "Hospital Doutor Arnaldo",
          "A": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:15 A", "07:25 A", "10:40 A", "13:00 A", "15:20 A", "17:50 A", "19:30 A", 
            "21:10 A", "22:50 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "07:45 A", "11:00 A", "13:20 A", "18:20 B"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "07:45 A", "11:00 A", "13:20 A", "18:20 B"
          ]
        }
      },
      "itinerarios": {
        "hospital_doutor_arnaldo": {
          "sentido": "Ida",
          "roteiro": [
            "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
            "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
            "Rua Nito Sona", "Rua Expedicionário Antônio dos Santos Taboada", "Rua Professora Lucinda Bastos", 
            "Avenida Presidente Altino Arantes", "Rodovia Engenheiro Cândido do Rego Chaves (SP39)", 
            "Rua Principal (Hospital)", "Contorno", "Rua Principal (Hospital)", "Rodovia Engenheiro Cândido do Rego Chaves (SP39)", 
            "Estrada Municipal Santo Angelo (Chácara dos Baianos)", "Rua São José", "Rua São Tomé", 
            "Avenida Japão", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli Júnior", "Retorno", 
            "Avenida Ricieri Bertaiolli Junior", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli", 
            "Rua Raimundo Glicério Augusto", "Rua Mauro Alves da Silva"
          ]
        },
        "regular": {
          "sentido": ["Centro-Bairro", "Bairro-Centro"],
          "roteiro_ida": [
            "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
            "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
            "Rua Nito Sona", "Rua Expedicionário Antônio dos Santos Taboada", "Rua Professora Lucinda Bastos", 
            "Avenida Presidente Altino Arantes", "Rodovia Engenheiro Cândido do Rego Chaves (SP39)", 
            "Estrada Municipal Santo Angelo (Chácara dos Baianos)", "Rua São José", "Rua São Tomé", 
            "Avenida Japão", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli Júnior", "Retorno", 
            "Avenida Ricieri Bertaiolli Junior", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli", 
            "Rua Raimundo Glicério Augusto", "Rua Mauro Alves da Silva"
          ],
          "roteiro_volta": [
            "Rua Mauro Alves da Silva", "Rua Raimundo Glicério Augusto", "Avenida Ricieri Bertaiolli", 
            "Estrada das Aroeiras", "Avenida Japão", "Rua São Tomé", "Rua São José", 
            "Estrada Municipal Santo Angelo (Chácara dos Baianos)", "Rodovia Engenheiro Cândido do Rego Chaves (SP39)", 
            "Avenida Presidente Altino Arantes", "Rua Alexandre Andreotti", "Rua Professora Lucinda Bastos", 
            "Rua Expedicionário Antônio dos Santos Taboada", "Rua Nito Sona", "Alameda Santo Ângelo", 
            "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
            "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", 
            "Terminal Central"
          ]
        }
      }
    },
    {
      "linha": "C002B - Circular Saúde",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": ""
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:42 .", "05:08 .", "05:32 .", "05:58 .", "06:22 .", "06:48 .", "07:12 .", 
            "07:38 .", "08:10 .", "09:05 .", "10:00 .", "10:50 .", "11:30 .", "12:00 .", 
            "12:30 .", "13:00 .", "13:30 .", "14:00 .", "14:30 .", "15:00 .", "15:30 .", 
            "16:00 .", "16:30 .", "17:00 .", "17:30 .", "18:00 .", "18:35 .", "19:30 .", 
            "20:10 .", "21:00 .", "21:45 .", "22:15 .", "22:45 .", "23:25 .", "00:15 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:42 .", "05:08 .", "05:32 .", "05:58 .", "06:22 .", "06:48 .", "07:12 .", 
            "07:38 .", "08:10 .", "09:05 .", "10:00 .", "10:50 .", "11:30 .", "12:00 .", 
            "12:30 .", "13:00 .", "13:30 .", "14:00 .", "14:30 .", "15:25 .", "16:15 .", 
            "17:05 .", "17:55 .", "18:45 .", "19:30 .", "21:25 .", "22:15 .", "23:05 .", 
            "23:55 .", "00:40 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 .", "05:30 .", "06:10 .", "06:50 .", "07:30 .", "08:10 .", "09:00 .", 
            "09:45 .", "11:30 .", "12:20 .", "13:00 .", "13:40 .", "14:20 .", "15:00 .", 
            "15:40 .", "16:20 .", "17:00 .", "17:40 .", "18:30 .", "19:15 .", "21:00 .", 
            "21:40 .", "22:20 .", "23:00 .", "23:40 .", "00:20 ."
          ]
        }
      },
      "itinerarios": {
        "sentido": "Ida",
        "roteiro": [
          "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Doutor Cândido Xavier de Almeida e Souza", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Passagem Subterrânea Osvaldo Crespo de Abreu", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Rua Carlos Barattino", "Avenida Waldemar Costa Filho", 
          "Avenida Antônio de Almeida", "Avenida Pedro Romero", "Rua Professor Walter Aparecido da Silva", 
          "Rotatória", "Rua Professor Walter Aparecido da Silva", "Avenida Pedro Romero", "Avenida Antônio de Almeida", 
          "Avenida Waldemar Costa Filho", "Rua Carlos Barattino", "Rua Manoel de Oliveira", "Avenida José Meloni", 
          "Rua Doutor Deodato Wertheimer", "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", 
          "Complexo Viário Jornalista Tirreno da San Biagio", "Avenida Governador Adhemar de Barros", "Rua Basílio Batalha", 
          "Rua Professor Flaviano de Melo", "Terminal Central"
        ]
      }
    },
    {
      "linha": "C105 - Vila Pomar via Cond. Apoema II",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "05:50 .", "06:15 .", "06:45 .", "07:10 .", "07:40 .", "08:05 .", 
            "08:35 .", "10:10 .", "11:00 .", "11:50 .", "12:40 .", "13:30 .", "14:20 .", 
            "15:10 .", "16:00 .", "16:55 .", "17:25 .", "17:50 .", "18:20 .", "18:45 .", 
            "19:15 .", "19:40 .", "21:20 .", "22:10 .", "23:10 .", "00:10 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "05:50 .", "06:15 .", "06:45 .", "07:10 .", "07:40 .", "08:05 .", 
            "08:35 .", "10:10 .", "11:00 .", "11:50 .", "12:40 .", "13:30 .", "14:20 .", 
            "15:10 .", "16:00 .", "16:55 .", "17:50 .", "18:45 .", "19:40 .", "21:20 .", 
            "22:40 .", "00:10 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:50 .", "06:40 .", "07:30 .", "08:20 .", "10:10 .", "11:00 .", "11:50 .", 
            "12:40 .", "13:30 .", "14:20 .", "15:10 .", "16:00 .", "16:55 .", "17:50 .", 
            "18:45 .", "19:40 .", "21:20 .", "22:40 .", "00:10 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": "Ida",
          "roteiro": [
            "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Henrique Peres", 
            "Avenida Doutor Álvaro De Campos Carneiro", "Avenida Prefeito Maurillo Sousa Leite Filho", 
            "Avenida Julio Simões", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
            "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", 
            "Terminal Central"
          ]
        }
      }
    },
    {
      "linha": "C106 - Vila Brasileira",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "via Braz Cubas",
          "B": "Via Jardim Universo"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:05 A", "04:55 B", "05:25 A", "05:50 B", "06:15 A", "06:45 B", "07:15 A", 
            "07:45 B", "08:15 A", "08:50 A", "09:10 B", "09:40 A", "10:00 A", "11:00 B", 
            "11:35 A", "12:00 B", "12:30 A", "13:00 B", "13:30 A", "14:00 B", "14:30 A", 
            "15:00 B", "15:30 A", "16:00 B", "16:30 A", "17:00 B", "17:30 A", "18:00 B", 
            "18:30 A", "19:00 B", "19:30 A", "20:20 B", "21:00 A", "21:50 B", "22:10 A", 
            "22:40 B", "23:20 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:05 B", "04:55 B", "05:50 A", "06:15 B", "06:45 A", "07:15 B", "07:45 A", 
            "08:15 B", "09:10 A", "10:00 B", "11:00 A", "11:35 B", "12:00 A", "12:30 B", 
            "13:00 A", "13:30 B", "14:00 A", "15:00 B", "16:00 A", "17:00 B", "18:00 A", 
            "19:00 B", "20:35 A", "21:15 B", "23:20 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:05 B", "04:55 B", "05:45 A", "06:35 B", "07:25 A", "08:15 B", "10:00 A", 
            "10:50 B", "11:40 A", "12:30 B", "13:20 A", "14:10 B", "15:00 A", "15:50 B", 
            "16:40 A", "17:30 B", "18:20 A", "19:10 B", "21:00 A", "21:50 B", "22:35 A", 
            "23:20 A"
          ]
        }
      },
      "itinerarios": {
        "via_braz_cubas": {
          "sentido": "Ida",
          "roteiro": [
            "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Rua Padre Álvaro Quinonez Zuniga", 
            "Rua Valmet", "Rua Santa Adelaide", "Rua Thuller", "Avenida Japão", 
            "Rua Geraldo Gomes Loureiro", "Rua João Baptista Monteiro", "Rua João Borges", 
            "Rua Ana dos Passos Silva", "Rua Augusto Belizário", "Rua João Ferreira Dias", 
            "Rua Professor João Gualberto Mafra Machado", "Rua Alfredo Gomes Loureiro", 
            "Rua Gilberto Budin", "Avenida Japão", "Rua Ipiranga", "Rua Presidente Campos Salles", 
            "Rua Professor Flaviano de Melo", "Terminal Central"
          ]
        },
        "via_jardim_universo": {
          "sentido": "Ida",
          "roteiro": [
            "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Japão", "Rua Geraldo Gomes Loureiro", 
            "Rua João Baptista Monteiro", "Rua João Borges", "Rua Ana dos Passos Silva", 
            "Rua Augusto Belizário", "Rua João Ferreira Dias", "Rua Professor João Gualberto Mafra Machado", 
            "Rua Alfredo Gomes Loureiro", "Rua Gilberto Budin", "Avenida Japão", "Rua Thuller", 
            "Rua Santa Cecília", "Rua Santa Efigênia", "Rua Santa Adelaide", "Rua Valmet", 
            "Rua Padre Álvaro Quinonez Zuniga", "Avenida Manoel Alves", "Rua Capitão Francisco de Almeida", 
            "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
            "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
          ]
        }
      }
    },
    {
      "linha": "C192 - Quatinga - Tomoki Hiramoto",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Quatinga",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "9 de Julho",
          "B": "Hospital / 9 de Julho",
          "C": "9 de Julho / Furnas",
          "D": "Hospital / 9 de Julho / Furnas"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 B", "07:30 D", "10:15 D", "11:50 A", "13:30 A", "14:30 B", 
            "16:30 B", "17:45 B", "19:10 C"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "08:20 C", "12:50 A", "17:10 C"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "13:30 A", "18:00 C"
          ]
        }
      },
      "itinerarios": {
        "9_de_julho": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Estrada Misao Kinoshita", "Estrada Tomoki Hiramoto", "Rua Antonio Rozendo de Lima"
            ],
            "volta": [
              "Rua Antonio Rozendo de Lima", "Estrada Tomoki Hiramoto", "Estrada Misao Kinoshita", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Brasilio Ferreira Leal", "Rua Hugo Torres", 
              "Rua João José Ferreira", "Rua Nishio Tadasi", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Avenida Presidente Altino Arantes", "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "hospital_9_de_julho": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Principal (Hospital)", "Contorno", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Estrada Misao Kinoshita", "Estrada Tomoki Hiramoto", "Rua Antonio Rozendo de Lima"
            ],
            "volta": [
              "Rua Antonio Rozendo de Lima", "Estrada Tomoki Hiramoto", "Estrada Misao Kinoshita", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Brasilio Ferreira Leal", "Rua Hugo Torres", 
              "Rua João José Ferreira", "Rua Nishio Tadasi", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rua Principal (Hospital)", "Contorno", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Avenida Presidente Altino Arantes", "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "9_de_julho_furnas": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Estrada Misao Kinoshita", "Estrada Tomoki Hiramoto", "Rua Antonio Rozendo de Lima", 
              "Estrada Marechal Tomoki Hiramoto", "Estrada de Furnas"
            ],
            "volta": [
              "Estrada de Furnas", "Estrada Marechal Tomoki Hiramoto", "Rua Antonio Rozendo de Lima", 
              "Estrada Tomoki Hiramoto", "Estrada Misao Kinoshita", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rua Brasilio Ferreira Leal", "Rua Hugo Torres", "Rua João José Ferreira", "Rua Nishio Tadasi", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "hospital_9_de_julho_furnas": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Principal (Hospital)", "Contorno", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Estrada Misao Kinoshita", "Estrada Tomoki Hiramoto", "Rua Antonio Rozendo de Lima", 
              "Estrada Marechal Tomoki Hiramoto", "Estrada de Furnas"
            ],
            "volta": [
              "Estrada de Furnas", "Estrada Marechal Tomoki Hiramoto", "Rua Antonio Rozendo de Lima", 
              "Estrada Tomoki Hiramoto", "Estrada Misao Kinoshita", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rua Brasilio Ferreira Leal", "Rua Hugo Torres", "Rua João José Ferreira", "Rua Nishio Tadasi", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Principal (Hospital)", "Contorno", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C193 - Quatinga via Barroso",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Quatinga",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "9 de Julho",
          "B": "Hospital Dr. Arnaldo / 9 de Julho",
          "C": "9 de Julho / Furnas",
          "D": "Hospital / 9 de Julho / Furnas"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 C", "05:00 A", "05:30 A", "05:50 D", "06:10 B", "06:35 B", "06:50 B", 
            "08:00 B", "08:45 A", "09:25 A", "09:50 A", "10:45 A", "11:15 D", "12:30 B", 
            "13:00 A", "14:00 B", "14:50 C", "15:15 B", "15:50 A", "16:55 A", "17:20 B", 
            "18:05 B", "18:40 D", "19:50 B", "20:40 A", "21:10 B", "21:40 A", "22:10 A", 
            "22:30 B", "23:45 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 A", "05:15 A", "06:05 B", "06:25 D", "07:25 D", "09:10 A", "09:50 A", 
            "10:30 B", "11:15 C", "12:10 B", "13:30 A", "14:20 A", "15:10 A", "16:15 B", 
            "18:00 C", "19:00 B", "20:00 A", "21:00 B", "22:15 B", "23:45 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 A", "05:15 A", "06:20 D", "07:20 A", "09:45 A", "10:30 B", "12:00 C", 
            "12:50 A", "14:30 A", "15:30 A", "16:40 B", "19:30 B", "21:00 B", "22:15 B", 
            "23:45 A"
          ]
        }
      },
      "itinerarios": {
        "9_de_julho": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rodovia Quatinga - Barroso (SP43)", "Rua Antonio Rozendo de Lima"
            ],
            "volta": [
              "Rua Antonio Rozendo de Lima", "Rodovia Quatinga - Barroso (SP43)", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Brasilio Ferreira Leal", 
              "Rua Hugo Torres", "Rua João José Ferreira", "Rua Nishio Tadasi", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "hospital_9_de_julho": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Principal (Hospital)", "Contorno", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rodovia Quatinga - Barroso (SP43)", "Rua Antonio Rozendo de Lima"
            ],
            "volta": [
              "Rua Antonio Rozendo de Lima", "Rodovia Quatinga - Barroso (SP43)", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Brasilio Ferreira Leal", 
              "Rua Hugo Torres", "Rua João José Ferreira", "Rua Nishio Tadasi", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Principal (Hospital)", 
              "Contorno", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "9_de_julho_furnas": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rodovia Quatinga - Barroso (SP43)", "Rua Antonio Rozendo de Lima", 
              "Estrada Marechal Tomoki Hiramoto", "Estrada de Furnas"
            ],
            "volta": [
              "Estrada de Furnas", "Estrada Marechal Tomoki Hiramoto", "Rua Antonio Rozendo de Lima", 
              "Rodovia Quatinga - Barroso (SP43)", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rua Brasilio Ferreira Leal", "Rua Hugo Torres", "Rua João José Ferreira", "Rua Nishio Tadasi", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "hospital_9_de_julho_furnas": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Principal (Hospital)", "Contorno", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Nishio Tadasi", "Rua João José Ferreira", 
              "Rua Hugo Torres", "Rua Brasilio Ferreira Leal", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rodovia Quatinga - Barroso (SP43)", "Rua Antonio Rozendo de Lima", 
              "Estrada Marechal Tomoki Hiramoto", "Estrada de Furnas"
            ],
            "volta": [
              "Estrada de Furnas", "Estrada Marechal Tomoki Hiramoto", "Rua Antonio Rozendo de Lima", 
              "Rodovia Quatinga - Barroso (SP43)", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", 
              "Rua Brasilio Ferreira Leal", "Rua Hugo Torres", "Rua João José Ferreira", "Rua Nishio Tadasi", 
              "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Rua Principal (Hospital)", 
              "Contorno", "Rodovia Engenheiro Cândido do Rego Chaves Rodovia SP-39", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Angelo", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C202 - Conjunto Santo Angelo via Braz Cubas",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Conjunto Santo Angelo",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:05 .", "05:35 .", "06:00 .", "06:30 .", "06:55 .", "07:10 .", "07:35 .", 
            "08:20 .", "08:50 .", "09:20 .", "10:15 .", "10:55 .", "11:25 .", "11:50 .", 
            "12:10 .", "12:35 .", "13:00 .", "13:25 .", "13:50 .", "14:15 .", "14:40 .", 
            "15:05 .", "15:30 .", "15:55 .", "16:20 .", "16:45 .", "17:15 .", "17:45 .", 
            "18:10 .", "18:35 .", "19:00 .", "19:25 .", "20:00 .", "20:35 .", "21:15 .", 
            "21:55 .", "22:20 .", "22:35 .", "23:05 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:05 .", "05:35 .", "06:00 .", "06:25 .", "06:55 .", "07:30 .", "07:55 .", 
            "08:30 .", "09:20 .", "10:15 .", "11:05 .", "11:50 .", "12:20 .", "12:50 .", 
            "13:25 .", "13:55 .", "14:25 .", "15:00 .", "15:30 .", "16:00 .", "16:35 .", 
            "17:05 .", "17:35 .", "18:10 .", "18:40 .", "19:20 .", "20:10 .", "21:05 .", 
            "22:00 .", "22:35 .", "23:05 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "05:35 .", "06:15 .", "07:00 .", "07:50 .", "08:40 .", "10:30 .", 
            "11:20 .", "12:10 .", "13:00 .", "13:50 .", "14:40 .", "15:30 .", "16:20 .", 
            "17:10 .", "18:00 .", "18:50 .", "19:40 .", "21:25 .", "22:10 .", "22:50 .", 
            "23:30 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Rua Gaspar Vaz", 
              "Av. Anchieta", "Rua Schwartzmann", "Rua Gutermann", "Rua Francisco Affonso de Melo", 
              "Rua do Agricultor", "Rua Capitão Francisco de Almeida", "Rua Gutermann", 
              "Avenida Henrique Peres", "Avenida Japão", "Rua São Marcelo", "Rua São Camilo de Léllis", 
              "Rua São José", "Rua São Thomé", "Avenida Japão", "Rua Nossa Senhora das Graças", 
              "Rua Santa Margarida", "Avenida Japão"
            ],
            "volta": [
              "Avenida Japão", "Rua São Thomé", "Rua São José", "Rua São Camilo de Léllis", 
              "Rua São Marcelo", "Avenida Japão", "Avenida Dr. Álvaro de Campos Carneiro", 
              "Avenida Henrique Peres", "Rua Gutermann", "Rua Padre Álvaro Quinonez Zuniga", 
              "Rua Gutermann", "Rua Francisco Affonso de Melo", "Rua do Agricultor", 
              "Rua Capitão Francisco de Almeida", "Rua Gutermann", "Rua Julio Aragão", 
              "Avenida Francisco Ferreira Lopes", "Rua Gaspar Vaz", "Avenida Anchieta", 
              "Rua Schwartzmann", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Fláviano de Mello", 
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C204 - Jardim Aeroporto III via Conjunto do Bosque",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Jardim Aeroporto III",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:35 .", "05:20 .", "06:10 .", "07:05 .", "07:30 .", "08:05 .", 
            "09:00 .", "10:00 .", "10:50 .", "11:50 .", "12:40 .", "13:40 .", 
            "14:30 .", "15:00 .", "15:35 .", "16:30 .", "17:00 .", "17:35 .", 
            "18:30 .", "19:20 .", "20:30 .", "21:25 .", "22:10 .", "23:00 .", "23:45 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:35 .", "05:20 .", "06:10 .", "07:05 .", "08:05 .", "09:00 .", 
            "10:00 .", "10:50 .", "11:50 .", "12:40 .", "13:40 .", "15:35 .", 
            "17:35 .", "20:30 .", "22:10 .", "23:45 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "07:05 .", "09:00 .", "11:50 .", "13:40 .", "15:35 .", 
            "17:35 .", "20:30 .", "22:10 .", "23:45 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Japão", "Rua José Pedro Naure", "Rua Capitão Joaquim de Mello Freire", 
              "Rua Severo dos Santos", "Rua Francisco Rodrigues Passos", "Rua Dom Luiz de Souza", 
              "Rua Thuller", "Rua Santa Cecilia", "Rua Santa Efigênia", "Rua Santa Adelaíde", "Rua Valmet", 
              "Rua Padre Álvaro Quinonez Zuniga", "Avenida Manoel Alves", "Rua Capitão Francisco de Almeida", 
              "Avenida Francisco Ferreira Lopes", "Contorno Viaduto Argeu Batalha", "Avenida Francisco Ferreira Lopes", 
              "Avenida Gaspar Vaz", "Rua Ramez Rachid Sleiman", "Avenida Saraiva", "Rua Carlos Lacerda", 
              "Avenida Shozo Sakai", "Rua Silvestre", "Rua Gramado", "Rua Corola", "Rua Camboatã", 
              "Rua Faveiro", "Rua Darci Pereira", "Rua Sacadura Cabral", "Rua Benedito de Carvalho Filho", 
              "Praça da Aeronaútica", "Rua Salgado Filho", "Rua Zeppelin", "Rua Lindenberg", "Rua Campo de Marte", 
              "Rua Catalina", "Rua Gabriel D Anunzio"
            ],
            "volta": [
              "Rua Gabriel D Anunzio", "Rua Catalina", "Rua Campo de Marte", "Rua Lindenberg", "Rua Zeppelin", 
              "Rua Salgado Filho", "Praça da Aeronaútica", "Rua Benedito de Carvalho Filho", "Rua Darci Pereira", 
              "Rua Faveiro", "Rua Camboatã", "Rua Corola", "Rua Gramado", "Rua do Bosque", "Avenida Shozo Sakai", 
              "Avenida Conceição", "Avenida Francisco Ferreira Lopes", "Rua Schwartzmann", "Rua Gutermann", 
              "Rua Padre Álvaro Quinonez Zuniga", "Rua Valmet", "Rua Santa Adelaíde", "Rua Thuller", 
              "Rua Dom Luiz de Souza", "Rua Francisco Rodrigues Passos", "Rua Severo dos Santos", 
              "Rua Capitão Joaquim de Mello Freire", "Rua José Pedro Naure", "Avenida Japão", 
              "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C205 - Parque São Martinho",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Parque São Martinho",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Parque São Martinho",
          "B": "Parque São Martinho Via Santos Dummond",
          "C": "Parque São Martinho via Varinhas",
          "D": "Parque São Martinho Via Santos Dummond Via Varinhas"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:45 C", "05:35 C", "06:25 C", "07:00 B", "07:25 C", "08:15 C", "08:55 C", 
            "09:30 B", "10:00 C", "10:50 C", "11:40 D", "12:30 C", "13:20 D", "14:10 C", 
            "15:00 C", "15:50 C", "16:20 B", "16:50 C", "17:30 B", "18:20 B", "19:10 C", 
            "20:00 C", "21:05 C", "21:55 D", "22:45 D", "23:45 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:45 A", "05:35 C", "06:25 C", "07:15 C", "08:05 C", "08:55 C", "10:00 C", 
            "10:50 C", "11:40 B", "12:30 C", "13:20 B", "14:10 C", "15:05 C", "15:50 C", 
            "16:40 C", "17:30 D", "18:20 B", "19:10 C", "20:00 C", "21:05 C", "21:55 C", 
            "22:45 D", "23:45 C"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:45 A", "06:25 C", "08:05 C", "10:05 A", "11:45 B", "13:25 A", "15:05 A", 
            "16:45 A", "18:25 C", "20:05 A", "22:05 C", "23:40 A"
          ]
        }
      },
      "itinerarios": {
        "parque_sao_martinho": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Japão", "Rua São Marcelo", "Rua São Camilo de Lellis", 
              "Rua São José", "Rua São Tomé", "Avenida Japão", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli", 
              "Rua Raimundo Glicério Augusto", "Rua Mauro Alves da Silva"
            ],
            "volta": [
              "Rua Mauro Alves da Silva", "Rua Raimundo Glicério Augusto", "Avenida Ricieri Bertaiolli", 
              "Estrada das Aroeiras", "Avenida Japão", "Rua São Tomé", "Rua São José", "Rua São Camilo de Lellis", 
              "Rua São Marcelo", "Avenida Japão", "Rua Ipiranga", "Rua Presidente Campos Salles", 
              "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "parque_sao_martinho_via_santos_dummond": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Japão", "Avenida Manoel Lino da Silva", "Rua Laos", 
              "Rua Tanzânia", "Avenida Doutor Pantaleão Trandafilov Filho", "Avenida Japão", "Rua São Marcelo", 
              "Rua São Camilo de Lellis", "Rua São José", "Rua São Tomé", "Avenida Japão", 
              "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli", "Rua Raimundo Glicério Augusto", 
              "Rua Mauro Alves da Silva"
            ],
            "volta": [
              "Rua Mauro Alves da Silva", "Rua Raimundo Glicério Augusto", "Avenida Ricieri Bertaiolli", 
              "Estrada das Aroeiras", "Avenida Japão", "Rua São Tomé", "Rua São José", "Rua São Camilo de Lellis", 
              "Rua São Marcelo", "Avenida Japão", "Avenida Doutor Pantaleão Trandafilov Filho", "Rua Tanzânia", 
              "Rua Laos", "Avenida Manoel Lino da Silva", "Avenida Japão", "Rua Ipiranga", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "parque_sao_martinho_via_varinhas": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Japão", "Rua São Marcelo", "Rua São Camilo de Lellis", 
              "Rua São José", "Rua São Tomé", "Avenida Japão", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli Junior", 
              "Retorno (Rua Jose Perez)", "Avenida Ricieri Bertaiolli Junior", "Rua Cinco", "Avenida Ricieri Bertaiolli", 
              "Rua Raimundo Glicério Augusto", "Rua Mauro Alves da Silva"
            ],
            "volta": [
              "Rua Mauro Alves da Silva", "Rua Raimundo Glicério Augusto", "Avenida Ricieri Bertaiolli", 
              "Rua Cinco", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli Junior", "Retorno (Rua Jose Perez)", 
              "Avenida Ricieri Bertaiolli Junior", "Estrada das Aroeiras", "Avenida Japão", "Rua São Tomé", 
              "Rua São José", "Rua São Camilo de Lellis", "Rua São Marcelo", "Avenida Japão", "Rua Ipiranga", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "parque_sao_martinho_via_santos_dummond_via_varinhas": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Japão", "Avenida Manoel Lino da Silva", "Rua Laos", 
              "Rua Tanzânia", "Avenida Doutor Pantaleão Trandafilov Filho", "Avenida Japão", "Rua São Marcelo", 
              "Rua São Camilo de Lellis", "Rua São José", "Rua São Tomé", "Avenida Japão", 
              "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli Junior", "Retorno (Rua Jose Perez)", 
              "Avenida Ricieri Bertaiolli Junior", "Rua Cinco", "Avenida Ricieri Bertaiolli", 
              "Rua Raimundo Glicério Augusto", "Rua Mauro Alves da Silva"
            ],
            "volta": [
              "Rua Mauro Alves da Silva", "Rua Raimundo Glicério Augusto", "Avenida Ricieri Bertaiolli", 
              "Rua Cinco", "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli Junior", "Retorno (Rua Jose Perez)", 
              "Avenida Ricieri Bertaiolli Junior", "Estrada das Aroeiras", "Avenida Japão", "Rua São Tomé", 
              "Rua São José", "Rua São Camilo de Lellis", "Rua São Marcelo", "Avenida Japão", 
              "Avenida Doutor Pantaleão Trandafilov Filho", "Rua Tanzânia", "Rua Laos", "Avenida Manoel Lino da Silva", 
              "Avenida Japão", "Rua Ipiranga", "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", 
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C207 - Parque Olímpico",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 .", "05:15 .", "05:40 .", "06:10 .", "06:40 .", "07:10 .", "07:40 .", 
            "08:10 .", "08:30 .", "09:00 .", "09:50 .", "10:20 .", "11:15 .", "12:10 .", 
            "13:05 .", "14:00 .", "15:00 .", "15:30 .", "16:00 .", "16:30 .", "17:00 .", 
            "17:30 .", "18:00 .", "18:30 .", "19:00 .", "19:30 .", "20:20 .", "21:00 .", 
            "21:50 .", "22:40 .", "23:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 .", "05:15 .", "05:40 .", "06:10 .", "06:40 .", "07:10 .", "07:40 .", 
            "08:10 .", "08:30 .", "09:00 .", "09:50 .", "10:20 .", "11:15 .", "12:10 .", 
            "13:05 .", "14:00 .", "15:00 .", "15:30 .", "16:00 .", "16:30 .", "17:00 .", 
            "17:30 .", "18:00 .", "18:30 .", "19:00 .", "19:30 .", "20:20 .", "21:00 .", 
            "21:50 .", "22:40 .", "23:30 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 .", "05:45 .", "06:35 .", "07:25 .", "08:15 .", "09:05 .", "10:50 .", 
            "11:40 .", "12:30 .", "13:20 .", "14:10 .", "15:00 .", "15:50 .", "16:40 .", 
            "17:30 .", "18:20 .", "19:10 .", "21:00 .", "21:50 .", "22:40 .", "23:30 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Japão", "Rua José Feal Cardelli", 
              "Avenida Elbio Federici Pacheco", "Rua Flora Benedita de Almeida", 
              "Rua Gervásio Maria Pinheiro", "Rua José Stolemberger", "Praça Waldomiro dos Santos Filho", 
              "Avenida Elbio Federici Pacheco", "Avenida Rosa Apparecida C. Bertaiolli", 
              "Avenida Prefeito Maurílio Souza Leite Filho", "Avenida Júlio Simões", 
              "Avenida Japão", "Rua Ipiranga", "Rua Presidente Campos Salles", 
              "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C210 - Condomínio Manacá via Oropó",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:30 .", "06:30 .", "07:40 .", "08:50 .", "11:00 .", "12:10 .", 
            "13:20 .", "14:30 .", "15:40 .", "16:50 .", "18:00 .", "19:10 .", 
            "21:10 .", "22:10 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:30 .", "06:30 .", "07:40 .", "08:50 .", "11:00 .", "12:10 .", 
            "13:20 .", "14:30 .", "15:40 .", "16:50 .", "18:00 .", "19:10 .", 
            "21:10 .", "22:10 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Japão", "Rua José António da Costa", 
              "Rua Maria da Luz da Cunha Costa", "Avenida Oceania", "Rua Neuza Righi Ferreira", 
              "Avenida Manoel Lino da Silva", "Avenida Japão", "Avenida Kaoru Hiramatsu", 
              "Contorno Cempre Vereador Ivam Nunes de Siqueira", "Avenida Kaoru Hiramatsu", 
              "Avenida Japão", "Rua Ipiranga", "Rua Presidente Campos Salles", 
              "Rua Professor Flaviano de Mello", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C301 - Conjunto São Sebastião via Deodato Wertheimer",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Conjunto São Sebastião",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "06:00 .", "07:00 .", "08:10 .", "09:50 .", "11:20 .", 
            "12:20 .", "13:20 .", "14:20 .", "15:20 .", "16:20 .", "17:20 .", 
            "18:30 .", "19:35 .", "22:10 .", "23:00 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:00 .", "08:00 .", "11:20 .", "13:20 .", "15:20 .", "17:20 .", 
            "19:20 .", "22:00 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:00 .", "08:00 .", "11:20 .", "13:20 .", "15:20 .", "17:20 .", 
            "19:20 .", "22:00 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Princesa Isabel de Bragança", 
              "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", 
              "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", "Avenida Prefeito Francisco Ribeiro Nogueira", 
              "Avenida Francisco Ruiz", "Rua João Moro", "Rua Capitão Melo", "Contorno", "Rua Capitão Melo", 
              "Rua João Moro", "Avenida Francisco Ruiz", "Rua Antônio Gonçalves dos Santos", 
              "Rua Pedro José de Araujo", "Praça Alexandre de Deus Carvalho Santos P.A."
            ],
            "volta": [
              "Praça Alexandre de Deus Carvalho Santos P.A.", "Rua Pedro José de Araujo", 
              "Rua Antônio Gonçalves dos Santos", "Avenida Francisco Ruiz", "Rua João Moro", 
              "Rua Capitão Melo", "Contorno", "Rua Capitão Melo", "Rua João Moro", 
              "Avenida Francisco Ruiz", "Avenida Prefeito Francisco Ribeiro Nogueira", 
              "Rua Doutor Deodato Wertheimer", "Rua Coronel Marcolino Paiva", "Rua Braz Cubas", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Rua Presidente Campos Salles", 
              "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C302 - Conjunto São Sebastião via Avenida Brasil",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Conjunto São Sebastião",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:30 .", "06:30 .", "07:30 .", "09:10 .", "10:50 .", 
            "11:50 .", "12:50 .", "13:50 .", "14:50 .", "15:50 .", "16:55 .", 
            "18:00 .", "19:05 .", "20:40 .", "21:10 .", "22:35 .", "23:30 .", "00:00 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "07:00 .", "09:10 .", "12:20 .", "14:20 .", "16:20 .", 
            "18:20 .", "20:20 .", "23:00 .", "00:00 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "07:00 .", "09:10 .", "12:20 .", "14:20 .", "16:20 .", 
            "18:20 .", "20:20 .", "23:00 .", "00:00 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Corrêa", 
              "Rua Otto Unger", "Rua São João", "Avenida José Glicério de Melo", 
              "Rua Raphael Fernandes", "Avenida Brasil", "Rua Ferdinando Morroni", 
              "Avenida Presidente Getúlio Vargas", "Avenida Prefeito Carlos Alberto Lopes", 
              "Avenida Prefeito Francisco Ribeiro Nogueira", "Avenida Francisco Ruiz", 
              "Rua João Moro", "Rua Capitão Melo", "Contorno", "Rua Capitão Melo", 
              "Rua João Moro", "Avenida Francisco Ruiz", "Rua Antônio Gonçalves dos Santos", 
              "Praça Alexandre de Deus Carvalho Santos P.A."
            ],
            "volta": [
              "Praça Alexandre de Deus Carvalho Santos P.A.", "Rua Antônio Gonçalves dos Santos", 
              "Avenida Francisco Ruiz", "Rua João Moro", "Rua Capitão Melo", "Contorno", 
              "Rua Capitão Melo", "Rua João Moro", "Avenida Francisco Ruiz", 
              "Avenida Prefeito Francisco Ribeiro Nogueira", "Avenida Prefeito Carlos Alberto Lopes", 
              "Avenida Presidente Getúlio Vargas", "Rua Ferdinando Morroni", "Avenida Brasil", 
              "Rua Doutor Deodato Wertheimer", "Rua Coronel Marcolino Paiva", "Rua Braz Cubas", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Rua Presidente Campos Salles", 
              "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C401 - São João via Avenida Brasil",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": "Atendimento pelas Linhas C301 e C302 aos sábados e domingos."
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "06:00 .", "06:40 .", "07:20 .", "08:00 .", 
            "16:00 .", "16:40 .", "17:20 .", "18:00 .", "18:40 .", 
            "19:20 .", "20:00 .", "21:40 .", "22:15 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "06:00 .", "06:40 .", "07:20 .", "08:00 .", 
            "16:00 .", "16:40 .", "17:20 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Corrêa", 
              "Rua Otto Unger", "Rua São João", "Avenida José Glicério de Melo", 
              "Rua Maria Gaudência Sant Ana", "Avenida Presidente Getúlio Vargas", 
              "Rua Ferdinando Morroni", "Avenida Brasil", "Rua Doutor Deodato Wertheimer", 
              "Rua Coronel Marcolino Paiva", "Rua Braz Cubas", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C402 - Socorro",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Estância/Socorro/Shopping",
          "B": "Shopping/Socorro/Estância"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "05:30 A", "06:00 A", "06:15 B", "06:40 A", "06:55 B", 
            "07:25 A", "07:50 B", "08:15 A", "08:40 B", "09:30 A", "10:00 A", 
            "10:50 A", "11:40 A", "12:30 A", "13:10 A", "13:50 A", "14:40 A", 
            "15:00 A", "15:30 A", "16:00 B", "16:30 A", "17:00 B", "17:30 A", 
            "18:00 B", "18:30 A", "19:10 B", "20:00 A", "20:30 A", "21:20 A", 
            "22:10 A", "23:00 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "06:00 A", "06:40 A", "07:20 A", "08:00 A", "08:40 A", 
            "09:30 A", "10:50 A", "12:10 A", "13:00 A", "13:50 A", "14:40 A", 
            "15:30 A", "16:20 A", "17:10 A", "18:00 A", "19:00 A", "20:30 A", 
            "21:40 A", "22:40 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "06:00 A", "06:40 A", "07:20 A", "08:00 A", "08:40 A", 
            "09:30 A", "10:50 A", "12:10 A", "13:00 A", "13:50 A", "14:40 A", 
            "15:30 A", "16:20 A", "17:10 A", "18:00 A", "19:00 A", "20:30 A", 
            "21:40 A", "22:40 A"
          ]
        }
      },
      "itinerarios": {
        "estancia_socorro_shopping": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Olegário Paiva", 
              "Rua Otto Unger", "Rua Carmela Dutra", "Avenida Capitão Manoel Rudge", 
              "Avenida Frederico Straube", "Avenida Doutor Aristeu Ribeiro de Rezende", 
              "Rua Desembargador Djalma Pinheiro Franco", "Rua Vereador Jair Salvarani", 
              "Rua Jean Dornauf", "Rua Marques de Olinda", "Rua Mariana Najar", 
              "Rua Pedro Fernandes de Souza", "Rua Professora Maria Aparecida Richa", 
              "Rua Professor Herval Brasil", "Rua Armando Maritan", 
              "Rua Dom Paulo Rolim Loureiro", "Rua Joaquim de Mello Freire Júnior (Zozó)", 
              "Rua Professor Herval Brasil", "Rua Professora Maria Aparecida Richa", 
              "Rua Pedro Fernandes de Souza", "Rua Mariana Najar", "Avenida São Paulo", 
              "Rua Coronel Fernão Guedes de Souza", "Rua José Henrique Lagden", 
              "Rua João Amaro Gomes", "Avenida São Paulo", "Praça Dezoito de Junho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", 
              "Terminal Central"
            ]
          }
        },
        "shopping_socorro_estancia": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Francisco Martins", 
              "Praça Dezoito de Junho", "Avenida São Paulo", "Rua Mariana Najar", 
              "Rua Pedro Fernandes de Souza", "Rua Professora Maria Aparecida Richa", 
              "Rua Professor Herval Brasil", "Rua Armando Maritan", "Avenida Dom Paulo Rolim Loureiro", 
              "Rua Joaquim de Mello Freire Júnior (Zozó)", "Rua Professor Herval Brasil", 
              "Rua Professora Maria Aparecida Richa", "Rua Pedro Fernandes de Souza", 
              "Rua Mariana Najar", "Rua Vereador Jair Salvarani", 
              "Rua Desembargador Djalma Pinheiro Franco", "Avenida Doutor Aristeu Ribeiro de Rezende", 
              "Rua Agostinho Caporalli", "Rua Capitão Manoel Rudge", "Rua Duarte de Freitas", 
              "Rua Coronel Souza Franco", "Rua Dom Antonio Cândido de Alvarenga", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", 
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C403 - Jardim Camila",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:00 .", "05:15 .", "05:35 .", "05:50 .", "06:05 .", 
            "06:20 .", "06:35 .", "06:50 .", "07:10 .", "07:25 .", "07:40 .", 
            "08:00 .", "08:30 .", "09:15 .", "09:45 .", "10:10 .", "10:35 .", 
            "11:00 .", "11:25 .", "11:50 .", "12:15 .", "12:40 .", "13:05 .", 
            "13:30 .", "13:55 .", "14:20 .", "14:45 .", "15:10 .", "15:35 .", 
            "16:00 .", "16:20 .", "16:40 .", "17:00 .", "17:20 .", "17:40 .", 
            "18:00 .", "18:20 .", "18:40 .", "19:00 .", "19:30 .", "20:00 .", 
            "20:20 .", "20:50 .", "21:30 .", "21:50 .", "22:15 .", "22:45 .", 
            "23:30 .", "00:10 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:00 .", "05:15 .", "05:35 .", "05:50 .", "06:05 .", 
            "06:20 .", "06:35 .", "06:50 .", "07:10 .", "07:25 .", "07:40 .", 
            "08:00 .", "08:30 .", "09:15 .", "09:45 .", "10:10 .", "10:35 .", 
            "11:00 .", "11:25 .", "11:50 .", "12:15 .", "12:40 .", "13:05 .", 
            "13:30 .", "14:00 .", "14:30 .", "15:00 .", "15:30 .", "16:00 .", 
            "16:30 .", "17:00 .", "17:30 .", "18:00 .", "18:30 .", "19:00 .", 
            "19:40 .", "20:20 .", "21:00 .", "21:25 .", "21:50 .", "22:15 .", 
            "23:10 .", "00:10 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:15 .", "06:05 .", "06:55 .", "07:45 .", "08:40 .", 
            "09:40 .", "11:15 .", "12:05 .", "12:55 .", "13:45 .", "14:35 .", 
            "15:30 .", "16:30 .", "17:30 .", "18:30 .", "19:30 .", "21:20 .", 
            "22:20 .", "23:10 .", "00:10 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Corrêa", 
              "Rua Otto Unger", "Rua São João", "Avenida José Glicério de Melo", 
              "Rua Ricardina de Almeida Carbonari", "Rua Professor Mariano Salvarani", 
              "Rua Francisco Correa", "Avenida Prefeito Carlos Alberto Lopes", 
              "Avenida Presidente Getúlio Vargas", "Rua Maria Gaudência Sant Ana", 
              "Avenida José Glicério de Melo", "Rua São João", "Rua Primeiro de Setembro", 
              "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C404 - Conjunto Residencial Toyama",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 .", "04:30 .", "05:10 .", "05:50 .", "06:20 .", "06:50 .",
            "07:20 .", "07:50 .", "08:20 .", "08:50 .", "09:20 .", "10:10 .",
            "11:00 .", "11:50 .", "12:40 .", "13:30 .", "14:20 .", "15:10 .",
            "16:00 .", "16:50 .", "17:20 .", "17:50 .", "18:20 .", "18:50 .",
            "19:20 .", "19:50 .", "20:10 .", "21:35 .", "22:20 .", "23:05 .",
            "23:45 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 .", "04:30 .", "05:10 .", "05:50 .", "06:15 .", "06:40 .",
            "07:05 .", "07:30 .", "07:55 .", "08:20 .", "08:45 .", "09:40 .",
            "10:20 .", "11:00 .", "11:40 .", "12:20 .", "13:00 .", "13:40 .",
            "14:20 .", "15:00 .", "15:40 .", "16:20 .", "17:05 .", "17:50 .",
            "18:35 .", "19:20 .", "20:05 .", "21:45 .", "22:30 .", "23:10 .",
            "23:45 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 .", "04:30 .", "05:10 .", "05:50 .", "06:35 .", "07:20 .",
            "08:05 .", "08:50 .", "10:35 .", "11:20 .", "12:05 .", "12:50 .",
            "13:35 .", "14:20 .", "15:05 .", "15:50 .", "16:35 .", "17:20 .",
            "18:05 .", "18:50 .", "19:35 .", "20:20 .", "21:45 .", "22:30 .",
            "23:10 .", "23:45 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Engenheiro Miguel Gemma", 
              "Rua Um (Conjunto Habitacional Toyama)", "Avenida Engenheiro Miguel Gemma", 
              "Retorno", "Avenida Engenheiro Miguel Gemma", "Rua Julio Perotti", 
              "Avenida João XXIII", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Tenente Luiz Marcondes dos Santos", "Rua Doutor Ricardo Vilela", 
              "Avenida Governador Adhemar de Barros", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C405 - Conjunto Residencial Cocuera",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "CJ Res. Cocuera via Cardoso Siqueira",
          "B": "CJ Res. Cocuera via Vicentinos"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:15 B", "04:30 A", "04:45 B", "05:00 A", "05:12 B",
            "05:24 A", "05:36 B", "05:48 A", "06:00 B", "06:12 A", "06:24 B",
            "06:36 A", "06:48 B", "07:00 A", "07:12 B", "07:24 A", "07:36 B",
            "07:48 A", "08:00 B", "08:15 A", "08:30 B", "08:50 A", "09:25 B",
            "09:50 A", "10:15 B", "10:30 A", "11:00 B", "11:15 A", "11:30 B",
            "11:45 A", "12:00 B", "12:15 A", "12:30 B", "12:45 A", "13:00 B",
            "13:15 A", "13:30 B", "13:45 A", "14:00 B", "14:15 A", "14:30 B",
            "14:45 A", "15:00 B", "15:15 A", "15:30 B", "15:45 A", "16:00 B",
            "16:15 A", "16:30 B", "16:45 A", "17:00 B", "17:12 A", "17:24 B",
            "17:36 A", "17:50 B", "18:05 A", "18:17 B", "18:30 A", "18:42 B",
            "18:55 A", "19:10 B", "19:22 A", "19:35 B", "19:55 A", "20:25 B",
            "20:50 A", "21:10 B", "21:30 A", "21:50 B", "22:05 A", "22:20 B",
            "22:30 A", "22:45 B", "23:00 A", "23:15 B", "23:30 A", "23:50 B", 
            "00:10 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:20 B", "04:40 A", "05:00 B", "05:15 A", "05:30 B",
            "05:45 A", "06:00 B", "06:15 A", "06:30 B", "06:45 A", "07:00 B",
            "07:17 A", "07:35 B", "07:50 A", "08:07 B", "08:25 A", "09:00 B",
            "09:40 A", "10:15 B", "10:35 A", "10:55 B", "11:12 A", "11:30 B",
            "11:45 A", "12:02 B", "12:20 A", "12:35 B", "12:52 A", "13:10 B",
            "13:25 A", "13:42 B", "14:00 A", "14:15 B", "14:32 A", "14:50 B",
            "15:05 A", "15:22 B", "15:40 A", "15:55 B", "16:12 A", "16:30 B",
            "16:45 A", "17:02 B", "17:20 A", "17:35 B", "17:52 A", "18:10 B",
            "18:25 A", "18:50 B", "19:15 A", "19:40 B", "20:00 A", "20:30 B",
            "20:50 A", "21:10 B", "21:40 A", "22:00 B", "22:15 A", "22:30 B",
            "22:50 A", "23:10 B", "23:30 A", "23:50 B", "00:10 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:25 B", "04:50 A", "05:15 B", "05:40 A", "06:05 B",
            "06:30 A", "06:55 B", "07:20 A", "07:45 B", "08:10 A", "08:30 B",
            "09:15 A", "10:00 B", "10:45 A", "11:10 B", "11:35 A", "12:00 B",
            "12:25 A", "12:50 B", "13:15 A", "13:40 B", "14:05 A", "14:30 B",
            "14:55 A", "15:20 B", "15:45 A", "16:10 B", "16:35 A", "17:00 B",
            "17:25 A", "17:50 B", "18:15 A", "18:40 B", "19:05 A", "19:30 B",
            "20:15 A", "21:00 B", "21:40 A", "22:10 B", "22:45 A", "23:10 B",
            "23:30 A", "23:50 B", "00:10 A"
          ]
        }
      },
      "itinerarios": {
        "CJ Res. Cocuera via Cardoso Siqueira": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Olegário Paiva",
              "Rua Coronel Cardoso de Siqueira", "Rua Desembargador Francisco Ferreira",
              "Rua Joaquim de Mello Freire Junior", "Rua Coronel Cardoso de Siqueira",
              "Rua Felipe Abud", "Travessa Seis", "Rua Sebastião Michel Miguel",
              "Travessa Joaquim Fidélis Chagas", "Rua Aniz Tanuz Resek", 
              "Rua Coronel Cardoso de Siqueira", "Rua Manuel Inácio da Silva Alvarenga", 
              "Rua dos Vicentinos", "Rua Coronel Cardoso de Siqueira", 
              "Rua Doutor Antonio Cândido Vieira", "Rua Coronel Souza Franco", 
              "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", 
              "Terminal Central"
            ]
          }
        },
        "CJ Res. Cocuera via Vicentinos": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Olegário Paiva",
              "Rua Coronel Cardoso de Siqueira", "Rua Saulo de Abreu", "Rua Antonio Pinhal",
              "Rua dos Vicentinos", "Rua Manuel Inácio da Silva Alvarenga", 
              "Rua Coronel Cardoso de Siqueira", "Rua Felipe Abud", "Travessa Seis", 
              "Rua Sebastião Michel Miguel", "Travessa Joaquim Fidélis Chagas", 
              "Rua Aniz Tanuz Resek", "Rua Coronel Cardoso de Siqueira", 
              "Rua Joaquim de Mello Freire Júnior (Zozó)", 
              "Rua Desembargador Francisco Ferreira", 
              "Rua Coronel Cardoso de Siqueira", "Rua Doutor Antonio Cândido Vieira", 
              "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", 
              "Rua Presidente Campos Salles", "Rua Professor Flaviano de Melo", 
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C501 - César de Souza via FATEC",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "César de Souza",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:00 .", "05:40 .", "06:20 .", "07:00 .", "07:15 .", 
            "07:50 .", "08:30 .", "09:00 .", "09:40 .", "10:40 .", "11:20 .", 
            "11:50 .", "12:30 .", "13:10 .", "13:45 .", "14:25 .", "15:00 .", 
            "15:40 .", "16:20 .", "16:55 .", "17:35 .", "18:10 .", "19:40 .", 
            "20:20 .", "21:00 .", "22:15 .", "22:45 .", "23:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "05:20 .", "06:10 .", "07:00 .", "07:50 .", "08:40 .", 
            "10:30 .", "11:20 .", "12:10 .", "13:00 .", "13:50 .", "14:40 .", 
            "15:30 .", "16:20 .", "17:10 .", "18:00 .", "18:50 .", "19:40 .", 
            "21:55 .", "22:45 .", "23:30 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "05:50 .", "07:00 .", "08:10 .", "10:20 .", "11:30 .", 
            "12:40 .", "13:50 .", "15:00 .", "16:10 .", "17:20 .", "18:30 .", 
            "20:40 .", "21:40 .", "22:40 .", "23:40 ."
          ]
        }
      },
      "itinerarios": {
        "Regular - Centro-Bairro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga",
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva",
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Rua Carlos Barattino", 
              "Avenida Yoshiteru Onishi", "Praça Kazuo Kimura", 
              "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto", 
              "Avenida Nilo Marcatto", "Avenida João XXIII"
            ],
            "volta": [
              "Avenida João XXIII", "Avenida Nilo Marcatto", 
              "Avenida Ricieri José Marcatto", "Avenida Francisco Rodrigues Filho", 
              "Praça Kazuo Kimura", "Avenida Yoshiteru Onishi", "Rua Carlos Barattino", 
              "Avenida Prefeito Carlos Ferreira Lopes", 
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Rua Olegário Paiva", "Rua Doutor Ricardo Vilela", 
              "Avenida Governador Adhemar de Barros", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C502 - César de Souza via Dante Jordão Stoppa",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "César de Souza",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "06:00 .", "06:40 .", "07:30 .", "08:10 .", "10:00 .", 
            "11:00 .", "11:35 .", "12:10 .", "12:50 .", "13:25 .", "14:05 .", 
            "14:45 .", "15:20 .", "16:00 .", "16:35 .", "17:15 .", "17:55 .", 
            "18:30 .", "19:00 .", "20:40 .", "21:30 .", "22:00 .", "22:30 .", 
            "23:00 .", "23:50 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 .", "06:35 .", "07:25 .", "08:15 .", "10:00 .", "10:55 .", 
            "11:45 .", "12:35 .", "13:25 .", "14:15 .", "15:05 .", "15:55 .", 
            "16:45 .", "17:35 .", "18:25 .", "19:15 .", "21:00 .", "21:30 .", 
            "22:20 .", "23:10 .", "23:50 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:15 .", "06:25 .", "07:35 .", "08:45 .", "10:55 .", "12:05 .", 
            "13:15 .", "14:25 .", "15:35 .", "16:45 .", "17:55 .", "19:05 .", 
            "21:10 .", "22:10 .", "23:10 ."
          ]
        }
      },
      "itinerarios": {
        "Regular - Centro-Bairro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto", 
              "Avenida Nellusco Lourenço Boratto", "Avenida Vereador Dante Jordão Stoppa", 
              "Avenida João XXIII"
            ],
            "volta": [
              "Avenida João XXIII", "Avenida Vereador Dante Jordão Stoppa", "Rua José Lemos", 
              "Rua Nilo Garcia Alabarce", "Avenida Vereador Antonio Teixeira Muniz", 
              "Rua Doutor Rômulo Pasqualini", "Rua Izabel Motta da Silva", 
              "Avenida Ricieri José Marcatto", "Avenida Francisco Rodrigues Filho", 
              "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", 
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C503 - Jardim das Bandeiras",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Jardim das Bandeiras",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:45 .", "05:50 .", "07:10 .", "08:40 .", "10:55 .", "12:15 .", 
            "13:40 .", "15:10 .", "16:40 .", "18:05 .", "19:35 .", "21:45 .", 
            "23:05 .", "00:10 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:45 .", "05:50 .", "07:00 .", "08:30 .", "10:40 .", "12:10 .", 
            "13:40 .", "15:10 .", "16:40 .", "18:00 .", "19:30 .", "21:30 .", 
            "23:00 .", "00:10 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:50 .", "07:00 .", "08:30 .", "10:40 .", "12:10 .", "13:40 .", 
            "15:10 .", "16:40 .", "18:00 .", "19:30 .", "21:30 .", "23:00 .", 
            "00:10 ."
          ]
        }
      },
      "itinerarios": {
        "Regular - Centro-Bairro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto", 
              "Avenida Nilo Marcatto", "Avenida Major Mello", "Rua Sales Torres Homem", 
              "Rua Casimiro de Abreu", "Rua Castro Alves", "Rua Julio Ribeiro"
            ],
            "volta": [
              "Rua Julio Ribeiro", "Rua Manuel Antonio de Almeida", "Rua Aloisio de Azevedo", 
              "Rua Castro Alves", "Rua Casimiro de Abreu", "Rua Sales Torres Homem", 
              "Avenida Major Mello", "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", 
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C505 - Morada do Sol",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Morada do Sol",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:05 .", "06:20 .", "07:50 .", "09:25 .", "11:50 .", "13:10 .", 
            "14:30 .", "15:50 .", "17:10 .", "18:30 .", "19:50 .", "21:10 .", 
            "22:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:05 .", "06:20 .", "07:40 .", "09:00 .", "10:30 .", "11:50 .", 
            "13:10 .", "14:30 .", "15:50 .", "17:10 .", "18:30 .", "19:50 .", 
            "21:10 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:05 .", "06:20 .", "07:40 .", "09:00 .", "10:30 .", "11:50 .", 
            "13:10 .", "14:30 .", "15:50 .", "17:10 .", "18:30 .", "19:50 .", 
            "21:10 ."
          ]
        }
      },
      "itinerarios": {
        "Regular - Centro-Bairro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto", 
              "Avenida Nilo Marcatto", "Avenida Major Mello", "Rua Sales Torres Homem", 
              "Rua Casimiro de Abreu", "Rua Castro Alves", "Rua Antonio Bavoso", 
              "Rua Joana Neres Nóbrega", "Rua Marcelino Maximo", "Rua Georges Rachid Sleiman de Assis", 
              "Rua Aloísio de Azevedo", "Rua Manuel Antonio de Almeida", "Rua Julio Ribeiro", 
              "Rua Antonio Pinto Guedes", "Rua Dinorah da Conceição Braga", "Rua Antonio Pinto Guedes"
            ],
            "volta": [
              "Rua Antonio Pinto Guedes", "Rua Julio Ribeiro", "Rua Manuel Antonio de Almeida", 
              "Rua Aloísio de Azevedo", "Rua Georges Rachid Sleiman de Assis", 
              "Rua Marcelino Maximo", "Rua Joana Neres Nóbrega", "Rua Antonio Bavoso", 
              "Rua Castro Alves", "Rua Casimiro de Abreu", "Rua Sales Torres Homem", 
              "Avenida Major Mello", "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", 
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C507 - Vila Aparecida",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Vila Aparecida",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "05:35 .", "06:05 .", "06:40 .", "07:30 .", "08:05 .", 
            "08:40 .", "09:40 .", "10:45 .", "11:45 .", "12:10 .", "12:55 .", 
            "13:30 .", "14:10 .", "14:50 .", "15:30 .", "16:10 .", "16:50 .", 
            "17:30 .", "18:10 .", "18:50 .", "19:30 .", "21:05 .", "21:40 .", 
            "22:20 .", "23:00 .", "23:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "06:00 .", "07:20 .", "08:30 .", "10:30 .", "11:30 .", 
            "12:40 .", "14:00 .", "15:20 .", "16:40 .", "18:00 .", "19:10 .", 
            "21:00 .", "22:20 .", "23:30 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "06:00 .", "07:20 .", "08:30 .", "10:30 .", "11:30 .", 
            "12:40 .", "14:20 .", "15:20 .", "16:40 .", "18:00 .", "19:10 .", 
            "21:00 .", "22:00 .", "23:20 ."
          ]
        }
      },
      "itinerarios": {
        "Regular - Circular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", 
              "Avenida Ricieri José Marcatto", "Avenida Nilo Marcatto", "Rua Michel Namura", 
              "Rua Justiniano José da Rocha", "Avenida Major Mello", "Rua Francisco Vilani Bicudo", 
              "Rua Avelino Faria de Souza Franco", "Rua Lopes Gama", "Rua General Osorio", 
              "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", "Avenida Francisco Rodrigues Filho", 
              "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C601 - Alto do Botujuru",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Alto do Botujuru",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "BA": "Bairro-Centro",
          "E": "Frei Atanásio Maatman",
          "A": "via Felipe Sawaya/Santa Cruz do André/Rua do Rosário",
          "B": "Alto do Botujuru Via Rosário",
          "C": "Sawaya /Concórdia",
          "D": "Concórdia/Rosário"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:20 B", "04:40 A", "05:00 B", "05:10 C", "05:20 A", "05:30 B", 
            "05:45 A", "06:00 B", "06:15 A", "06:30 B", "06:40 C", "06:50 B", 
            "07:00 A", "07:15 B", "07:30 C", "07:45 B", "08:00 A", "08:10 B", 
            "08:20 A", "08:30 B", "09:00 A", "09:30 B", "10:00 A", "10:20 B", 
            "10:40 A", "11:00 B", "11:20 A", "11:40 B", "12:00 A", "12:20 B", 
            "12:40 A", "13:00 B", "13:20 A", "13:40 B", "14:00 A", "14:20 B", 
            "14:40 A", "15:00 B", "15:20 A", "15:40 B", "16:00 A", "16:10 A", 
            "16:20 B", "16:30 A", "16:45 B", "17:00 A", "17:15 B", "17:30 A", 
            "17:40 B", "17:50 A", "18:00 B", "18:15 A", "18:30 D", "18:45 A", 
            "19:00 D", "19:10 A", "19:30 B", "20:00 A", "20:30 B", "21:00 D", 
            "21:20 B", "21:45 A", "22:00 B", "22:15 A", "22:45 B", "23:25 A", "00:00 E"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:40 B", "05:00 A", "05:20 B", "05:40 A", "06:00 B", 
            "06:20 C", "06:40 B", "07:00 C", "07:20 B", "07:40 C", "08:10 B", 
            "08:40 A", "09:35 B", "10:10 A", "10:40 B", "11:00 A", "11:25 B", 
            "11:50 A", "12:15 B", "12:40 A", "13:05 B", "13:30 A", "13:55 B", 
            "14:20 A", "14:45 B", "15:10 A", "15:35 B", "16:00 A", "16:25 B", 
            "16:50 A", "17:15 D", "17:40 A", "18:05 B", "18:30 A", "19:10 D", 
            "19:40 A", "20:10 B", "21:00 A", "21:35 B", "22:10 A", "22:50 B", 
            "23:20 A", "00:00 E"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:40 B", "05:10 B", "05:45 A", "06:20 B", "06:55 A", 
            "07:30 B", "08:05 A", "08:40 B", "09:30 A", "10:40 B", "11:30 A", 
            "11:55 B", "12:30 A", "13:05 B", "13:40 A", "14:15 B", "14:50 A", 
            "15:25 B", "16:00 A", "16:35 B", "17:10 A", "17:45 B", "18:35 A", 
            "19:45 B", "20:35 A", "21:05 B", "21:35 A", "22:15 B", "22:55 A"
          ]
        }
      },
      "itinerarios": {
        "Bairro-Centro - Circular-BA": {
          "sentido": {
            "volta": [
              "Rua Manjar Celeste", "Rua Palestina", "Avenida Felipe Sawaya", 
              "Rua Régis Plinio Batalha", "Rua Christovam Colombo", "Rua Aleluia", 
              "Avenida Felipe Sawaya", "Rua Santa Cruz do André", "Rua Rosário", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
              "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", 
              "Rua Salvador Cabral", "Rua Cabo Diogo Oliver", 
              "Complexo Viário Jornalista Tirreno da San Biagio", 
              "Avenida Adhemar de Barros", "Rua Basilio Batalha", 
              "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        },
        "Frei Atanásio Maatman - Circular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer", 
              "Rua Doutor Ricardo Vilela", "Complexo Viário Jornalista Tirreno da San Biagio", 
              "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho", 
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
              "Avenida Francisco Rodrigues Filho", "Avenida Frei Atanásio Maatman", 
              "Rua Manjar Celeste", "Acesso a rua Palestina", "Rua Palestina", 
              "Avenida Felipe Sawaya", "Rua Régis Plinio Batalha", "Rua Christovam Colombo", 
              "Rua Aleluia", "Avenida Felipe Sawaya", "Avenida Francisco Rodrigues Filho", 
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", 
              "Rua Doutor Deodato Wertheimer", "Rua Salvador Cabral", 
              "Rua Cabo Diogo Oliver", "Complexo Viário Jornalista Tirreno da San Biagio", 
              "Avenida Adhemar de Barros", "Rua Basilio Batalha", "Rua Professor Flaviano de Melo", 
              "Terminal Central"
            ]
          }
        },
        "via Felipe Sawaya/Santa Cruz do André/Rua do Rosário - Circular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer", 
              "Rua Doutor Ricardo Vilela", "Complexo Viário Jornalista Tirreno da San Biagio", 
              "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho", 
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
              "Avenida Francisco Rodrigues Filho", "Avenida Felipe Sawaya", 
              "Rua Manjar Celeste", "Rua Palestina", "Avenida Felipe Sawaya", 
              "Rua Régis Plinio Batalha", "Rua Christovam Colombo", "Rua Aleluia", 
              "Avenida Felipe Sawaya", "Rua Santa Cruz do André", "Rua Rosário", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
              "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", 
              "Rua Salvador Cabral", "Rua Cabo Diogo Oliver", 
              "Complexo Viário Jornalista Tirreno da San Biagio", 
              "Avenida Adhemar de Barros", "Rua Basilio Batalha", 
              "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C602 - Botujuru",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Botujuru",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Rosário via Estrada Antiga Imperial",
          "B": "Timbó via Estrada Antiga Imperial"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:25 A", "06:10 A", "06:40 B", "07:30 A", "08:05 A", "08:40 A",
            "10:15 A", "10:55 A", "11:15 A", "11:55 A", "12:35 B", "13:10 A",
            "13:50 A", "14:35 A", "15:15 A", "15:55 A", "16:35 A", "17:15 A",
            "17:50 A", "18:35 A", "19:15 B", "19:50 A", "21:25 B", "22:00 A", "22:30 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:35 A", "06:10 A", "06:30 B", "07:10 A", "07:50 A", "08:20 A",
            "09:00 A", "10:15 A", "11:10 A", "11:55 A", "12:30 A", "13:15 B",
            "13:50 A", "14:25 A", "15:40 A", "16:45 A", "17:55 A", "19:15 A",
            "21:25 A", "22:40 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:25 A", "06:40 B", "07:45 A", "09:00 A", "11:20 A", "12:25 A",
            "13:35 B", "14:45 A", "15:55 A", "17:05 A", "18:20 A", "19:25 A",
            "21:50 A", "23:00 A"
          ]
        }
      },
      "itinerarios": {
        "Rosário via Estrada Antiga Imperial - Circular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer",
              "Rua Doutor Ricardo Vilela", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho",
              "Avenida Frei Atanásio Maatman", "Rua Manjar Celeste", "Avenida Felipe Sawaya",
              "Rua Régis Plínio Batalha", "Rua Cristovão Colombo", "Rua Aleluia", "Avenida Felipe Sawaya",
              "Avenida Francisco Rodrigues Filho", "Estrada Antiga Imperial", "Avenida Francisco Rodrigues Filho",
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer",
              "Rua Salvador Cabral", "Rua Cabo Diogo Oliver", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Avenida Governador Adhemar de Barros", "Rua Basílio Batalha", "Rua Professor Flaviano de Melo",
              "Terminal Central"
            ]
          }
        },
        "Timbó via Estrada Antiga Imperial - Circular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer",
              "Rua Doutor Ricardo Vilela", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho",
              "Avenida Frei Atanásio Maatman", "Rua Manjar Celeste", "Avenida Felipe Sawaya",
              "Rua Régis Plinio Batalha", "Rua Cristovão Colombo", "Rua Aleluia", "Avenida Felipe Sawaya",
              "Avenida Francisco Rodrigues Filho", "Rodovia Henrique Eroles (SP66)",
              "Estrada Itapeti do Salto", "Retorno (Bairro Timbó)", "Estrada Itapeti do Salto",
              "Rodovia Henrique Eroles (SP66)", "Avenida Francisco Rodrigues Filho",
              "Estrada Antiga Imperial", "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura",
              "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", "Rua Salvador Cabral",
              "Rua Cabo Diogo Oliver", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Avenida Governador Adhemar de Barros", "Rua Basílio Batalha", "Rua Professor Flaviano de Melo",
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C603 - Estrada Imperial",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Circular",
        "sentido": ["Circular"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00", "06:05", "07:10", "08:20", "10:30", "11:40", "12:50",
            "14:00", "15:10", "16:20", "17:30", "18:40", "19:50", "22:00"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00", "06:05", "07:10", "08:20", "10:30", "11:40", "12:50",
            "14:00", "15:10", "16:20", "17:30", "18:40", "19:50", "22:00"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00", "06:05", "07:10", "08:20", "10:30", "11:40", "12:50",
            "14:00", "15:10", "16:20", "17:30", "18:40", "19:50", "22:00"
          ]
        }
      },
      "itinerarios": {
        "Regular - Circular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer",
              "Rua Doutor Ricardo Vilela", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho",
              "Contorno (Próximo à Avenida Felipe Sawaya)", "Avenida Francisco Rodrigues Filho",
              "Estrada Imperial", "Avenida Francisco Rodrigues Filho", "Avenida Pedro Romero",
              "Avenida Lothar Waldemar Hoehne", "Avenida Prefeito Carlos Ferreira Lopes", 
              "Rua Manoel de Oliveira", "Avenida José Meloni", "Rua Doutor Deodato Wertheimer",
              "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", 
              "Complexo Viário Jornalista Tirreno da San Biagio", 
              "Avenida Governador Adhemar de Barros", "Rua Basílio Batalha", 
              "Rua Professor Flaviano de Melo", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C691 - Sabaúna via Tronco",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Sabaúna",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "C": "UPA",
          "A": "Via Tronco",
          "B": "Botujuru"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "03:40 A", "04:55 A", "05:30 A", "06:20 A", "07:10 A", "07:50 A", "08:50 A", "10:20 C", 
            "10:50 A", "11:50 C", "12:30 C", "13:20 A", "14:05 A", "14:55 C", "15:40 C", "16:30 A",
            "17:20 A", "18:10 A", "19:00 A", "20:20 A", "20:50 A", "22:00 A", "23:20 A", "00:30 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "05:30 A", "06:15 A", "07:40 A", "09:15 C", "11:00 A", "12:00 C", "13:10 A",
            "15:10 A", "16:30 A", "17:40 C", "18:40 A", "20:30 A", "22:00 A", "23:30 A", "00:30 B"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "05:30 A", "06:15 A", "07:40 A", "09:15 C", "11:00 A", "12:00 C", "13:10 A",
            "15:10 A", "16:30 A", "17:40 C", "18:40 A", "20:30 A", "22:00 A", "23:30 A", "00:30 B"
          ]
        }
      },
      "itinerarios": {
        "UPA - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer", "Rua Doutor Ricardo Vilela",
              "Complexo Viário Jornalista Tirreno da San Biagio", "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Francisco Rodrigues Filho",
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Avenida Pedro Romero", "Rotatória",
              "Avenida Pedro Romero", "Avenida Francisco Rodrigues Filho", "Rodovia Henrique Eroles", "Avenida José Figueira Filho",
              "Rua Maria de Almeida Vasques Neo", "Rua Antonio Castilho Gualda", "Praça dos Expedicionários", "Rua Francisco Rodrigues Mathias",
              "Rua Olavo Cabral", "Rua Elza Mathias", "Rua Armando Constantino", "Rua Joaquim Cardoso de Souza", "Rua Ramon Maldonado",
              "Rua Benedicta Marques Carrasco", "Rua Moacyr Barbosa Triboni"
            ],
            "volta": [
              "Rua Moacyr Barbosa Triboni", "Rua Joaquim Cardoso de Souza", "Rua Armando Constantino", "Rua Elza Mathias", "Rua Olavo Cabral",
              "Rua Francisco Rodrigues Mathias", "Praça dos Expedicionários", "Rua Antônio Castilho Gualda", "Rua Maria de Almeida Vasques Neo",
              "Avenida José Figueira Filho", "Rodovia Henrique Eroles", "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura",
              "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", "Rua Salvador Cabral", "Rua Cabo Diogo Oliver",
              "Complexo Viário Jornalista Tirreno da San Biagio", "Avenida Adhemar de Barros", "Rua Basilio Batalha", "Rua Professor Flaviano de Melo",
              "Terminal Central"
            ]
          }
        },
        "Via Tronco - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer", "Rua Doutor Ricardo Vilela",
              "Complexo Viário Jornalista Tirreno da San Biagio", "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Francisco Rodrigues Filho",
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Rodovia Henrique Eroles", "Avenida José Figueira Filho",
              "Rua Maria de Almeida Vasques Neo", "Rua Antonio Castilho Gualda", "Praça dos Expedicionários", "Rua Francisco Rodrigues Mathias",
              "Rua Olavo Cabral", "Rua Elza Mathias", "Rua Armando Constantino", "Rua Joaquim Cardoso de Souza", "Rua Ramon Maldonado",
              "Rua Benedicta Marques Carrasco", "Rua Moacyr Barbosa Triboni"
            ],
            "volta": [
              "Rua Moacyr Barbosa Triboni", "Rua Joaquim Cardoso de Souza", "Rua Armando Constantino", "Rua Elza Mathias", "Rua Olavo Cabral",
              "Rua Francisco Rodrigues Mathias", "Praça dos Expedicionários", "Rua Antônio Castilho Gualda", "Rua Maria de Almeida Vasques Neo",
              "Avenida José Figueira Filho", "Rodovia Henrique Eroles", "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura",
              "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", "Rua Salvador Cabral", "Rua Cabo Diogo Oliver",
              "Complexo Viário Jornalista Tirreno da San Biagio", "Avenida Adhemar de Barros", "Rua Basilio Batalha", "Rua Professor Flaviano de Melo",
              "Terminal Central"
            ]
          }
        },
        "Botujuru - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer", "Rua Doutor Ricardo Vilela",
              "Complexo Viário Jornalista Tirreno da San Biagio", "Rua Engenheiro Gualberto", "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Francisco Rodrigues Filho",
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Avenida Felipe Sawaya", "Rua Santa Cruz do André", "Rua Rosário",
              "Avenida Francisco Rodrigues Filho", "Rodovia Henrique Eroles", "Avenida José Figueira Filho", "Rua Maria de Almeida Vasques Neo",
              "Rua Antonio Castilho Gualda", "Praça dos Expedicionários", "Rua Francisco Rodrigues Mathias", "Rua Olavo Cabral",
              "Rua Elza Mathias", "Rua Armando Constantino", "Rua Joaquim Cardoso de Souza", "Rua Ramon Maldonado", "Rua Benedicta Marques Carrasco",
              "Rua Moacyr Barbosa Triboni"
            ]
          }
        }
      }
    },
    {
      "linha": "C692 - Sabaúna via Cezar de Souza",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Sabaúna",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:25", "05:10", "06:40", "07:25", "08:25", "09:45", "11:25", "12:05",
            "12:55", "13:40", "14:30", "15:15", "16:05", "16:55", "17:45", "18:35",
            "19:30", "21:20", "22:30", "23:00"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:45", "07:00", "08:25", "09:50", "11:30", "12:40", "13:40", "14:30",
            "16:00", "17:00", "18:00", "19:20", "21:15", "22:45"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:45", "07:00", "08:25", "09:50", "11:30", "12:40", "13:40", "14:30",
            "16:00", "17:00", "18:00", "19:20", "21:15", "22:45"
          ]
        }
      },
      "itinerarios": {
        "Regular - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga",
              "Avenida Vereador Narciso Yague Guimarães", "Avenida João XXIII", "Avenida Nilo Marcatto",
              "Avenida Ricieri José Marcatto", "Avenida Francisco Rodrigues Filho", "Rodovia Henrique Eroles",
              "Avenida José Figueira Filho", "Rua Maria de Almeida Vasques Neo", "Rua Antônio Castilho Gualda",
              "Praça dos Expedicionários", "Rua Francisco Rodrigues Mathias", "Rua Olavo Cabral",
              "Rua Elza Mathias", "Rua Armando Constantino", "Rua Joaquim Cardoso de Souza",
              "Rua Ramon Maldonado", "Rua Benedicta Marques Carrasco", "Rua Moacyr Barbosa Triboni"
            ],
            "volta": [
              "Rua Moacyr Barbosa Triboni", "Rua Joaquim Cardoso de Souza", "Rua Armando Constantino",
              "Rua Elza Mathias", "Rua Olavo Cabral", "Rua Francisco Rodrigues Mathias", "Praça dos Expedicionários",
              "Rua Antônio Castilho Gualda", "Rua Maria de Almeida Vasques Neo", "Avenida José Figueira Filho",
              "Rodovia Henrique Eroles", "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto",
              "Avenida Nilo Marcatto", "Avenida João XXIII", "Avenida Vereador Narciso Yague Guimarães",
              "Rua Tenente Luiz Marcondes dos Santos", "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros",
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C701 - Jardim Maricá via Avenida Prefeito Carlos Ferreira Lopes",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Jardim Maricá",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "B": "Bl.Cittá",
          "A": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 A", "05:20 A", "05:50 A", "06:25 A", "07:15 B", "07:40 B", "09:10 A", "10:50 A",
            "11:30 A", "12:10 A", "12:50 A", "13:30 A", "14:10 A", "14:50 A", "15:25 A", "15:55 A",
            "16:30 A", "17:00 A", "17:35 A", "18:10 A", "18:45 A", "19:40 A", "21:10 A", "21:50 A",
            "23:00 A", "23:45 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 A", "06:10 A", "07:10 A", "07:25 A", "08:30 A", "09:10 A", "10:25 A", "11:10 A",
            "12:20 A", "13:20 A", "14:40 A", "15:00 A", "16:20 A", "17:40 A", "19:00 A", "21:00 A",
            "23:15 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:20 A", "05:20 A", "06:20 A", "07:20 A", "08:20 A", "09:20 A", "11:20 A", "12:20 A",
            "13:20 A", "14:20 A", "15:20 A", "16:20 A", "17:20 A", "18:20 A", "19:20 A", "21:30 A",
            "22:40 A", "23:45 A"
          ]
        }
      },
      "itinerarios": {
        "Bl.Cittá - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga",
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho",
              "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Avenida Prefeito Carlos Ferreira Lopes",
              "Avenida Lothar Waldemar Hoehne", "Rotatória", "Avenida Antonio de Almeida", 
              "Rua Professora Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu",
              "Avenida Expedicionário Jose Barca", "Contorno nº 43", "Avenida Expedicionário Jose Barca", 
              "Rua Professor Walter Aparecido da Silva-Xuxu", "Avenida Pedro Romero", "Rotatória", 
              "Avenida Antonio de Almeida", "Rua Antenor de Souza Melo", "Rua Theodomiro Ferreira Gomes",
              "Avenida Ezelino da Cunha Glória", "Avenida Antonio de Almeida", "Rua João Benegas Ortiz"
            ],
            "volta": [
              "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória", 
              "Rua Theodomiro Ferreira Gomes", "Rua Antenor de Souza Melo", "Avenida Antonio de Almeida", 
              "Rua Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu", "Avenida Expedicionário Jose Barca",
              "Contorno nº 43", "Avenida Expedicionário Jose Barca", "Rua Professor Walter Aparecido da Silva-Xuxu",
              "Avenida Pedro Romero", "Rotatória", "Avenida Lothar Waldemar Hoehne", "Avenida Prefeito Carlos Ferreira Lopes",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Francisco Rodrigues Filho", 
              "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães",
              "Rua Tenente Luiz Marcondes dos Santos", "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", 
              "Terminal Central"
            ]
          }
        },
        "Regular - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga",
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", "Praça Kazuo Kimura",
              "Avenida Francisco Rodrigues Filho", "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Lothar Waldemar Hoehne",
              "Rotatória", "Avenida Antonio de Almeida", "Rua Professora Eliane Hiratsuka", 
              "Rua Professor Walter Aparecido da Silva-Xuxu", "Avenida Pedro Romero", "Rotatória", 
              "Avenida Antonio de Almeida", "Rua Antenor de Souza Melo", "Rua Theodomiro Ferreira Gomes",
              "Avenida Ezelino da Cunha Glória", "Avenida Antonio de Almeida", "Rua João Benegas Ortiz"
            ],
            "volta": [
              "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória", 
              "Rua Theodomiro Ferreira Gomes", "Rua Antenor de Souza Melo", "Avenida Antonio de Almeida", 
              "Rua Professora Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu", 
              "Avenida Pedro Romero", "Rotatória", "Avenida Lothar Waldemar Hoehne", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C702 - Jardim Maricá via Cabo Diogo",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Jardim Maricá",
        "sentido": ["Centro-Bairro", "Bairro-Centro"],
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Regular",
          "B": "Bl.Cittá"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:35 A", "05:05 A", "05:35 A", "06:10 A", "06:38 A", "06:50 B", "07:25 B",
            "08:00 A", "08:10 B", "08:45 B", "09:20 A", "09:40 A", "10:25 A", "11:10 A", "11:50 A",
            "12:30 A", "13:10 A", "13:50 A", "14:30 A", "15:10 A", "15:40 A", "16:15 A", "16:45 A",
            "17:15 A", "17:55 A", "18:25 A", "19:00 A", "19:20 A", "20:10 A", "21:30 A", "22:15 A",
            "22:40 A", "23:15 A", "00:15 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:50 A", "05:50 A", "06:25 A", "06:50 B", "08:05 B", "10:10 B", "10:40 A",
            "11:40 A", "12:00 A", "13:00 A", "13:40 A", "14:20 A", "15:40 A", "17:00 A", "18:20 A",
            "19:40 A", "20:40 A", "22:00 A", "22:40 A", "00:15 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:50 A", "05:50 A", "06:50 A", "07:50 A", "09:50 A", "10:50 A", "11:50 A",
            "12:50 A", "13:50 A", "14:50 A", "15:50 A", "16:50 A", "17:50 A", "18:50 A", "21:00 A",
            "22:10 A", "23:15 A", "00:15 A"
          ]
        }
      },
      "itinerarios": {
        "Regular - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer",
              "Rua Doutor Ricardo Vilela", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Rua Hamilton da Silva e Costa", "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver",
              "Avenida Lothar Waldemar Hoehne", "Rotatória", "Avenida Antonio de Almeida",
              "Rua Professora Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu",
              "Avenida Pedro Romero", "Rotatória", "Avenida Antonio de Almeida", "Rua Antenor de Souza Melo",
              "Rua Theodomiro Ferreira Gomes", "Avenida Ezelino da Cunha Glória", "Avenida Antonio de Almeida",
              "Rua João Benegas Ortiz"
            ],
            "volta": [
              "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória",
              "Rua Theodomiro Ferreira Gomes", "Rua Antenor de Souza Melo", "Avenida Antonio de Almeida",
              "Rua Professora Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu",
              "Avenida Pedro Romero", "Rotatória", "Avenida Lothar Waldemar Hoehne",
              "Avenida Doutor Edison Consolmagno", "Acesso da Avenida Doutor Edison Consolmagno a Avenida Lothar Waldemar Hoehne",
              "Avenida Lothar Waldemar Hoehne", "Rua Cabo Diogo Oliver", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Avenida Governador Adhemar de Barros", "Rua Basilio Batalha", "Rua Professor Flaviano de Melo",
              "Terminal Central"
            ]
          }
        },
        "Bl.Cittá - Centro-Bairro | Bairro-Centro": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Doutor Deodato Wertheimer",
              "Rua Doutor Ricardo Vilela", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Rua Cabo Diogo Oliver", "Avenida Lothar Waldemar Hoehne", "Rotatória", "Avenida Antonio de Almeida",
              "Rua Professora Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu",
              "Avenida Expedicionário Jose Barca", "Contorno nº 43", "Avenida Expedicionário Jose Barca",
              "Rua Professor Walter Aparecido da Silva-Xuxu", "Avenida Pedro Romero", "Rotatória",
              "Avenida Antonio de Almeida", "Rua Antenor de Souza Melo", "Rua Theodomiro Ferreira Gomes",
              "Avenida Ezelino da Cunha Glória", "Avenida Antonio de Almeida", "Rua João Benegas Ortiz"
            ],
            "volta": [
              "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória",
              "Rua Theodomiro Ferreira Gomes", "Rua Antenor de Souza Melo", "Avenida Antonio de Almeida",
              "Rua Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu", "Avenida Expedicionário Jose Barca",
              "Contorno nº 43", "Avenida Expedicionário Jose Barca", "Rua Professor Walter Aparecido da Silva-Xuxu",
              "Avenida Pedro Romero", "Rotatória", "Avenida Lothar Waldemar Hoehne",
              "Avenida Doutor Edison Consolmagno", "Acesso da Avenida Doutor Edison Consolmagno a Avenida Lothar Waldemar Hoehne",
              "Avenida Lothar Waldemar Hoehne", "Rua Cabo Diogo Oliver", "Complexo Viário Jornalista Tirreno da San Biagio",
              "Avenida Governador Adhemar de Barros", "Rua Basilio Batalha", "Rua Professor Flaviano de Melo",
              "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "C801 - Jardim Aracy",
      "informacoes_gerais": {
        "pontoA": "Terminal Central",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "05:00 .", "05:30 .", "06:00 .", "06:30 .", "07:00 .", "07:30 .", "08:00 .", 
            "09:00 .", "09:30 .", "10:30 .", "11:30 .", "12:30 .", "13:30 .", "14:30 .", "15:40 .", 
            "16:20 .", "17:00 .", "17:40 .", "18:20 .", "19:00 .", "20:00 .", "21:20 .", "22:10 .", 
            "23:00 .", "23:50 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "05:30 .", "06:30 .", "07:30 .", "08:30 .", "09:30 .", "11:30 .", "12:30 .", 
            "13:30 .", "14:30 .", "15:30 .", "16:30 .", "17:30 .", "18:30 .", "19:30 .", "21:20 .", 
            "22:10 .", "23:00 .", "23:50 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "05:30 .", "06:30 .", "07:30 .", "08:30 .", "09:30 .", "11:30 .", "12:30 .", 
            "13:30 .", "14:30 .", "15:30 .", "16:30 .", "17:30 .", "18:30 .", "19:30 .", "21:20 .", 
            "22:10 .", "23:00 ."
          ]
        }
      },
      "itinerarios": {
        "Regular - Circular": {
          "sentido": {
            "ida": [
              "Terminal Central", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Lothar Waldemar Hoehne", "Avenida Doutor Edison Consolmagno", 
              "Acesso da Avenida Doutor Edison Consolmagno à Avenida Lothar Waldemar Hoehne", "Avenida Lothar Waldemar Hoehne", 
              "Rua Cabo Diogo Oliver", "Rodovia Pedro Eroles", "Rua Joaquim Rama Forte", "Rua Cândido Portinari", "Rua Manoel Martins Sanches", 
              "Avenida Benedicto Pereira de Faria", "Rodovia Pedro Eroles", "Avenida Doutor Edison Consolmagno", "Acesso da Avenida Doutor Edison Consolmagno à Rodovia Pedro Eroles (SP-88)", 
              "Rodovia Pedro Eroles", "Retorno ( Posto Itamaraty )", "Rodovia Pedro Eroles", "Avenida Benedito Alves dos Anjos", "Rua Coelho Neto", 
              "Rua Marques de Pombal", "Rua Julio Diniz", "Avenida Benedito Alves dos Anjos", "Rodovia Pedro Eroles", "Avenida Doutor Edison Consolmagno", 
              "Acesso da Avenida Doutor Edison Consolmagno à Avenida Lothar Waldemar Hoehne", "Avenida Lothar Waldemar Hoehne", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Rua Olegário Paiva", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", "Terminal Central"
            ]
          }
        }
      }
    },
    {
      "linha": "E006A - Jardim Maricá via Cézar de Souza",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Regular",
          "A*": "Bl.Cittá"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 A", "06:00 A", "07:00 A*", "08:10 A", "09:10 A", "11:10 A", 
            "12:10 A", "13:10 A", "14:20 A*", "15:30 A", "16:40 A", "17:50 A", 
            "19:00 A", "21:00 A", "22:00 A", "22:50 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 A", "06:00 A", "07:00 A*", "08:10 A", "09:10 A", "11:10 A", 
            "12:10 A", "13:10 A", "14:20 A", "15:30 A", "16:40 A", "17:50 A", 
            "19:00 A", "21:00 A", "22:00 A", "22:50 A"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 A", "07:00 A", "08:40 A", "11:30 A", "13:10 A", "14:50 A", 
            "16:30 A", "18:10 A", "19:50 A", "22:45 A"
          ]
        }
      },
      "itinerarios": {
        "Regular - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida João XXIII", 
              "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", "Rua Edvwald Muhleise", 
              "Avenida Kennedy", "Rua Benedito Martins dos Santos", "Rua Antonio Boz Vidal", 
              "Avenida Capitão Arcilio Rizzi", "Avenida Kennedy", "Rua Edvwald Muhleise", 
              "Avenida Ricieri José Marcatto", "Avenida Pedro Romero", "Rua Professor Walter Aparecido da Silva-Xuxu", 
              "Rua Nelson Triboni", "Rua Eliane Hiratsuka", "Avenida Antonio de Almeida", "Rua João Benegas Ortiz", 
              "Retorno", "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória", 
              "Rua Theodomiro de Souza Melo", "Rua Antenor de Souza Melo", "Avenida Antonio de Almeida", 
              "Avenida Lothar Waldemar Hoehne", "Avenida Prefeito Carlos Ferreira Lopes", 
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Rua Olegário Paiva", 
              "Rua Major Pinheiro Franco", "Rua Doutor Antonio Cândido Vieira", "Rua Navajas", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Bl.Cittá - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida João XXIII", 
              "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", "Rua Edvwald Muhleise", 
              "Avenida Kennedy", "Rua Benedito Martins dos Santos", "Rua Antonio Boz Vidal", 
              "Avenida Capitão Arcilio Rizzi", "Avenida Kennedy", "Rua Edvwald Muhleise", 
              "Avenida Ricieri José Marcatto", "Avenida Pedro Romero", "Rua Professor Walter Aparecido da Silva-Xuxu", 
              "Avenida Expedicionário Jose Barca", "Contorno nº43", "Avenida Expedicionário Jose Barca", 
              "Rua Nelson Triboni", "Rua Eliane Hiratsuka", "Avenida Antonio de Almeida", "Rua João Benegas Ortiz", 
              "Retorno", "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória", 
              "Rua Theodomiro de Souza Melo", "Avenida Antenor de Souza Melo", "Avenida Antonio de Almeida", 
              "Avenida Lothar Waldemar Hoehne", "Avenida Prefeito Carlos Ferreira Lopes", 
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Rua Olegário Paiva", 
              "Rua Major Pinheiro Franco", "Rua Doutor Antonio Cândido Vieira", "Rua Navajas", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E006B - Cézar de Souza via Jardim Maricá",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "B": "Regular",
          "B*": "Bl.Cittá"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 B", "06:40 B*", "07:40 B", "08:40 B", "10:40 B", "11:40 B", 
            "12:40 B", "13:40 B", "14:50 B", "16:10 B", "17:20 B", "18:30 B", 
            "19:40 B", "21:30 B", "22:30 B", "23:20 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 B", "06:40 B", "07:40 B*", "08:40 B", "10:40 B", "11:40 B", 
            "12:40 B", "13:40 B", "14:50 B", "16:10 B", "17:20 B", "18:30 B", 
            "19:40 B", "21:30 B", "22:30 B", "23:20 B"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:10 B", "07:50 B", "10:40 B", "12:20 B", "14:00 B", "15:40 B", 
            "17:20 B", "19:00 B", "22:00 B"
          ]
        }
      },
      "itinerarios": {
        "Regular - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Prefeito Carlos Ferreira Lopes", 
              "Avenida Lothar Waldemar Hoehne", "Avenida Antonio de Almeida", "Rua João Benegas Ortiz", 
              "Retorno", "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória", 
              "Rua Theodomiro Ferreira Gomes", "Rua Antenor de Souza Melo", "Avenida Antonio de Almeida", 
              "Rua Eliane Hiratsuka", "Rua Professor Walter Aparecido da Silva-Xuxu", "Avenida Pedro Romero", 
              "Avenida Ricieri José Marcatto", "Rua Edvwald Muhleise", "Avenida Kennedy", "Rua Benedito Martins dos Santos", 
              "Rua Antonio Boz Vidal", "Avenida Capitão Arcilio Rizzi", "Avenida Kennedy", "Rua Edvwald Muhleise", 
              "Avenida Ricieri José Marcatto", "Avenida Nilo Marcatto", "Avenida João XXIII", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
              "Terminal Estudantes"
            ]
          }
        },
        "Bl.Cittá - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Prefeito Carlos Alberto Lopes", 
              "Avenida Lothar Waldemar Hoehne", "Avenida Antonio de Almeida", "Rua João Benegas Ortiz", 
              "Retorno", "Rua João Benegas Ortiz", "Avenida Antonio de Almeida", "Avenida Ezelino da Cunha Glória", 
              "Rua Theodomiro Ferreira Gomes", "Rua Antenor de Souza Melo", "Avenida Antonio de Almeida", 
              "Rua Eliane Hiratsuka", "Avenida Expedicionário Jose Barca", "Contorno nº43", 
              "Avenida Expedicionário Jose Barca", "Rua Professor Walter Aparecido da Silva-Xuxu", 
              "Avenida Pedro Romero", "Avenida Ricieri José Marcatto", "Rua Edvwald Muhleise", 
              "Avenida Kennedy", "Rua Benedito Martins dos Santos", "Rua Antonio Boz Vidal", 
              "Avenida Capitão Arcilio Rizzi", "Avenida Kennedy", "Rua Edvwald Muhleise", 
              "Avenida Ricieri José Marcatto", "Avenida Nilo Marcatto", "Avenida João XXIII", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E102 - Jardim Pavão via Vila Paulista",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "B": "Avenida Julio Simões (Atendimento B)",
          "A": "Avenida Alexandrina de Paula (Atendimento A)"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:30 B", "05:00 A", "05:30 B", "05:50 A", "06:15 B", 
            "06:40 A", "07:05 B", "07:30 A", "08:15 B", "09:00 A", "09:45 B", 
            "10:15 A", "10:40 B", "11:05 A", "11:30 B", "11:55 A", "12:20 B", 
            "12:45 A", "13:10 B", "13:35 A", "14:00 B", "14:30 A", "14:55 B", 
            "15:20 A", "15:50 B", "16:15 A", "16:40 B", "17:10 A", "17:35 B", 
            "18:00 A", "18:30 B", "19:00 A", "19:30 B", "20:15 A", "21:15 B", 
            "21:45 A", "22:15 B", "22:30 A", "23:00 B", "23:30 A", "00:00 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:30 B", "05:00 A", "05:30 B", "06:00 A", "06:30 B", 
            "07:00 A", "07:45 B", "08:30 A", "10:00 B", "10:45 A", "11:30 B", 
            "12:15 A", "13:00 B", "13:45 A", "14:30 B", "15:15 A", "16:00 B", 
            "16:40 A", "17:20 B", "18:00 A", "18:40 B", "19:20 A", "21:00 B", 
            "21:30 A", "22:00 B", "22:30 A", "23:00 B", "23:30 A", "00:00 B"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "05:00 B", "06:00 A", "07:20 B", "08:25 A", "09:45 B", 
            "11:05 A", "12:25 B", "13:50 A", "15:15 B", "16:40 A", "18:05 B", 
            "19:30 A", "21:45 B", "23:00 A", "00:00 B"
          ]
        }
      },
      "itinerarios": {
        "Avenida Julio Simões (Atendimento B)": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Doutor Albert Sabin", 
              "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Rua Doutor Correa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Rua Capitão Joaquim de Mello Freire", "Rua Jose D`Carlo", "Rua Guttermann", 
              "Avenida Henrique Peres", "Avenida Francisco Ferreira Lopes", "Avenida Julio Simões", 
              "Rua Apolo Dezoito", "Rua Alexandre Virgilio de Figueiredo", "Avenida Florêncio de Paiva", 
              "Rua Shiguetoshi Suzuki", "Avenida Alexandrina de Paula", "Avenida Francisco Ferreira Lopes", 
              "Rua Doutor Frederico Renê de Jaegher", "Rua Jose D'Carlo", "Rua Capitão Joaquim de Mello Freire", 
              "Avenida Fernando Costa", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
              "Rua Coronel Cardoso de Siqueira", "Rua Doutor Correa", "Rua Otto Unger", 
              "Rua Dom Antonio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Avenida Manoel Bezerra Lima Filho", "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Rua Professor Álvaro Pavan", "Praça Albert Sabin", "Rua Professor Álvaro Pavan", 
              "Terminal Estudantes"
            ]
          }
        },
        "Avenida Alexandrina de Paula (Atendimento A)": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Albert Sabin", 
              "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Rua Doutor Correa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Rua Capitão Joaquim de Mello Freire", "Rua Jose D`Carlo", "Rua Guttermann", 
              "Avenida Henrique Peres", "Avenida Francisco Ferreira Lopes", "Avenida Gaspar Vaz", 
              "Rua Ramez Rachid Sleiman", "Avenida Saraiva", "Rua Odilon Afonso", 
              "Avenida Alexandrina de Paula", "Rua Shiguetoshi Suzuki", "Avenida Florêncio de Paiva", 
              "Rua Alexandre Virgilio de Figueiredo", "Rua Apolo Dezoito", "Avenida Julio Simões", 
              "Avenida Francisco Ferreira Lopes", "Rua Doutor Frederico Renê de Jaegher", 
              "Rua Jose D'Carlo", "Rua Capitão Joaquim de Mello Freire", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", 
              "Rua Doutor Correa", "Rua Otto Unger", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", "Rua Professor Álvaro Pavan", 
              "Praça Doutor Albert Sabin", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E103 - Jundiapeba via João de Souza Franco",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular-BA",
        "sentido": "Circular-BA",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Jundiapeba - Golf",
          "B": "Jundiapeba - Estação",
          "G": "Parte da Rua Augusto Regueiro com Av. João de Souza Franco",
          "D": "Parte da Rua Augusto Regueiro com Av. João de Souza Franco e atende o CDHU",
          "F": "Rua Augusto Regueiro/Av. Pres. Altino Arantes/CDHU/Rua Otto Unger",
          "C": "Estação/Rua Otto Unger",
          "E": "Rua Augusto Regueiro/Av. João de Souza Franco/CDHU/Rua Braz Cubas"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 A", "04:50 A", "05:00 A", "05:15 B", "05:30 B", "05:45 A", "06:00 B", 
            "06:05 A", "06:12 A", "06:24 B", "06:32 A", "06:38 A", "06:48 B", "07:00 A", 
            "07:12 B", "07:24 A", "07:36 B", "07:40 A", "07:48 A", "08:00 B", "08:12 A", 
            "08:24 B", "08:36 A", "08:48 B", "09:00 A", "09:20 B", "09:30 B", "09:40 A", 
            "10:00 B", "10:15 A", "10:30 B", "10:45 A", "11:00 B", "11:20 A", "11:40 B", 
            "12:00 A", "12:15 B", "12:30 A", "12:45 B", "13:00 A", "13:20 B", "13:40 A", 
            "14:00 B", "14:15 A", "14:30 B", "14:45 A", "15:00 B", "15:12 A", "15:24 B", 
            "15:36 A", "15:48 B", "16:00 A", "16:12 B", "16:24 A", "16:36 B", "16:40 B", 
            "16:46 A", "15:58 B", "17:10 A", "17:20 B", "17:30 A", "17:40 B", "17:50 A", 
            "18:00 B", "18:10 A", "18:22 B", "18:34 A", "18:46 B", "19:00 A", "19:20 B", 
            "19:40 A", "19:55 B", "20:15 A", "20:45 B", "21:15 A", "21:40 B", "22:05 A", 
            "22:15 B", "22:35 A", "23:00 B", "23:25 A", "23:50 B", "00:20 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 A", "04:30 A", "05:00 B", "05:30 B", "05:45 A", "06:00 B", "06:20 A", 
            "06:40 B", "07:05 A", "07:25 B", "07:45 A", "08:20 B", "09:00 A", "09:40 B", 
            "10:30 A", "11:05 B", "11:40 A", "12:00 B", "12:25 A", "12:50 B", "13:30 A", 
            "13:50 B", "14:25 A", "14:55 B", "15:25 A", "15:55 B", "16:25 A", "16:55 B", 
            "17:30 A", "18:00 B", "18:30 A", "19:10 B", "19:50 A", "20:20 B", "20:50 A", 
            "21:30 B", "22:05 A", "22:40 B", "23:20 A", "00:20 B"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 A", "04:30 A", "04:50 B", "05:30 A", "05:45 B", "06:00 A", "06:35 B", 
            "07:05 A", "07:30 B", "08:40 A", "09:40 B", "10:00 A", "10:50 B", "11:30 A", 
            "12:15 B", "13:00 A", "13:40 B", "14:20 A", "15:00 B", "15:40 A", "16:20 B", 
            "16:50 A", "17:20 B", "17:50 A", "18:20 B", "19:15 A", "20:15 B", "21:00 A", 
            "22:05 B", "23:20 A", "00:20 B"
          ]
        }
      },
      "itinerarios": {
        "Jundiapeba - Golf - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
              "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rotatória (Acesso à Avenida João de Souza Franco)", "Avenida João de Souza Franco", 
              "Rua Professora Lucinda Bastos", "Avenida Líbano", "Rua Pedro Paulo dos Santos", 
              "Avenida Líbia", "Rua José Pereira", "Rua José da Silva Barreto", "Rua Augusto Regueiro", 
              "Avenida João de Souza Franco", "Rua Professora Lucinda Bastos", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Ângelo", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", "Rua Braz Cubas", 
              "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Jundiapeba - Estação - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
              "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", 
              "Avenida Presidente Altino Arantes", "Rua Adriano Pereira", "Rua Professora Lucinda Bastos", 
              "Avenida João de Souza Franco", "Rua Augusto Regueiro", "Rua José da Silva Barreto", 
              "Rua João Pereira", "Avenida Líbia", "Rua Pedro Paulo dos Santos", "Avenida Líbano", 
              "Rua Professora Lucinda Bastos", "Avenida João de Souza Franco", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", "Rua Braz Cubas", 
              "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Parte da Rua Augusto Regueiro com Av. João de Souza Franco": {
          "sentido": {
            "volta": [
              "Rua Augusto Regueiro", "Rua José da Silva Barreto", "Rua João Pereira", 
              "Avenida Líbia", "Rua Pedro Paulo dos Santos", "Avenida Líbano", "Rua Professora Lucinda Bastos", 
              "Avenida João de Souza Franco", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Braz Cubas", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Parte da Rua Augusto Regueiro com Av. João de Souza Franco e atende o CDHU": {
          "sentido": {
            "volta": [
              "Rua Augusto Regueiro", "Rua José da Silva Barreto", "Rua João Pereira", 
              "Avenida Líbia", "Rua Pedro Paulo dos Santos", "Avenida Líbano", 
              "Rua Professora Lucinda Bastos", "Avenida Presidente Altino Arantes", 
              "Rua Doutor Francisco Soares Marialva", "Rua Benedicto de Souza Branco", 
              "Rua Manoel Fernandes", "Alameda Santo Ângelo", "Rua Nito Sona", 
              "Rua Expedicionário Antônio dos Santos Taboada", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", 
              "Rua Doutor Corrêa", "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Rua Augusto Regueiro/Av. Pres. Altino Arantes/CDHU/Rua Otto Unger": {
          "sentido": {
            "volta": [
              "Rua Augusto Regueiro", "Avenida Presidente Altino Arantes", 
              "Rua Doutor Francisco Soares Marialva", "Rua Benedicto de Souza Branco", 
              "Rua Nito Sona", "Rua Expedicionário Antônio dos Santos Taboada", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", 
              "Avenida Fernando Costa", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
              "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", "Rua Otto Unger", 
              "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Estação/Rua Otto Unger": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
              "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rotatória (Acesso à Avenida João de Souza Franco)", "Avenida João de Souza Franco", 
              "Rua Professora Lucinda Bastos", "Avenida Líbano", "Rua Pedro Paulo dos Santos", 
              "Avenida Líbia", "Rua José Pereira", "Rua José da Silva Barreto", "Rua Augusto Regueiro", 
              "Avenida João de Souza Franco", "Rua Professora Lucinda Bastos", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Dolores de Aquino", "Alameda Santo Ângelo", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", 
              "Avenida Fernando Costa", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
              "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", "Rua Otto Unger", 
              "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Rua Augusto Regueiro/Av. João de Souza Franco/CDHU/Rua Braz Cubas": {
          "sentido": {
            "volta": [
              "Rua Augusto Regueiro", "Avenida João de Souza Franco", "Rua Professora Lucinda Bastos", 
              "Avenida Presidente Altino Arantes", "Rua Doutor Francisco Soares Marialva", 
              "Rua Benedicto de Souza Branco", "Rua Nito Sona", 
              "Rua Expedicionário Antônio dos Santos Taboada", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Braz Cubas", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E104 - Jundiapeba via CDHU",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Bairro",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Av. Pres. Altino Arantes - Rua Exp. Antonio dos Santos Taboada",
          "B": "Rua Exp. Antonio dos Santos Taboada - Av.Pres. Altino Arantes/Alameda Santo Ângelo",
          "EX": "Semi/Expresso"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:25 B", "04:45 A", "05:05 B", "05:10 A", "05:25 A", "05:40 B", 
            "05:55 A", "06:10 B", "06:20 A", "06:28 B", "06:37 B", "06:48 B", "07:05 A", 
            "07:25 B", "07:30 A", "07:50 A", "08:10 A", "08:20 B", "08:30 B", "09:15 A", 
            "09:50 B", "10:10 A", "10:30 B", "10:45 A", "11:05 B", "11:25 A", "11:45 B", 
            "12:10 A", "12:25 A", "12:35 B", "13:00 A", "13:20 B", "13:45 A", "14:00 A", 
            "14:10 B", "14:30 A", "14:55 B", "15:15 A", "15:35 B", "16:00 A", "16:25 B", 
            "16:35 A", "16:45 A", "17:05 B", "17:15 A", "17:30 A", "17:55 B", "18:15 A", 
            "18:35 B", "19:00 A", "19:40 B", "20:30 B", "21:20 A", "22:00 B", "22:30 A", 
            "23:15 B", "00:00 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:25 B", "04:45 A", "05:20 B", "05:50 A", "06:40 A", "07:10 B", "08:10 A", 
            "08:25 B", "09:35 A", "10:50 B", "11:35 A", "12:15 B", "13:00 A", "13:45 B", 
            "14:10 A", "14:50 B", "15:30 A", "16:10 B", "16:50 A", "17:50 B", "19:00 A", 
            "20:05 B", "21:15 A", "22:10 B", "23:10 A", "00:10 B"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:25 B", "04:45 A", "05:20 B", "05:50 A", "06:30 A", "07:10 B", "07:50 A", 
            "08:20 B", "09:30 A", "10:50 B", "11:30 A", "12:10 B", "12:50 A", "13:30 B", 
            "14:10 A", "14:50 B", "15:30 A", "16:10 B", "16:50 A", "17:50 B", "19:00 A", 
            "20:05 B", "21:15 A", "22:10 B", "23:10 A", "00:10 B"
          ]
        }
      },
      "itinerarios": {
        "Av. Pres. Altino Arantes - Rua Exp. Antonio dos Santos Taboada - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
              "Rua Carmela Dutra", "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Avenida Presidente Altino Arantes", 
              "Rua Adriano Pereira", "Rua Professora Lucinda Bastos", "Avenida João de Souza Franco", 
              "Rua Augusto Regueiro", "Avenida Presidente Altino Arantes", "Rua Doutor Francisco Soares Marialva", 
              "Rua Benedicto de Souza Branco", "Rua Nito Sona", "Rua Expedicionário Antônio dos Santos Taboada", 
              "Avenida Lourenço de Souza Franco", "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", 
              "Rua Doutor Corrêa", "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "Rua Exp. Antonio dos Santos Taboada - Av.Pres. Altino Arantes/Alameda Santo Ângelo - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
              "Rua Carmela Dutra", "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Avenida Lourenço de Souza Franco", 
              "Contorno (Divisa Mogi/Suzano)", "Avenida Lourenço de Souza Franco", 
              "Rua Expedicionário Antônio dos Santos Taboada", "Rua Nito Sona", "Rua Benedicto de Souza Branco", 
              "Rua Doutor Francisco Soares Marialva", "Avenida Presidente Altino Arantes", 
              "Rua Augusto Regueiro", "Avenida João de Souza Franco", "Rua Professora Lucinda Bastos", 
              "Avenida Presidente Altino Arantes", "Rua Adriano Pereira", "Rua Dolores de Aquino", 
              "Alameda Santo Ângelo", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", 
              "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        },
        "EX - Circular-BA": {
          "sentido": {
            "volta": [
              "Rua Expedicionário Antônio dos Santos Taboada", "Rua Nito Sona", "Rua Benedicto de Souza Branco", 
              "Rua Doutor Francisco Soares Marialva", "Avenida Presidente Altino Arantes", 
              "Rua Augusto Regueiro", "Avenida João de Souza Franco", "Rua Professora Lucinda Bastos", 
              "Avenida Presidente Altino Arantes", "Rua Adriano Pereira", "Rua Dolores de Aquino", 
              "Alameda Santo Ângelo", "Avenida Lourenço de Souza Franco", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", 
              "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E108 - Jardim Universo/Alto do Guaianazes",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Bairro",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Jd Universo - Av. Japão",
          "B": "Jd Universo - Braz Cubas"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:30 B", "05:00 A", "05:25 B", "05:40 A", "06:00 B", 
            "06:25 A", "06:50 B", "07:10 A", "07:35 B", "08:00 A", "08:50 B", 
            "09:35 A", "10:10 B", "10:45 A", "11:20 B", "11:55 A", "12:30 B", 
            "13:05 A", "13:40 B", "14:15 A", "14:50 B", "15:25 A", "16:00 B", 
            "16:20 A", "16:45 B", "17:10 A", "17:35 B", "18:00 A", "18:20 B", 
            "18:50 A", "19:15 B", "20:00 A", "20:40 B", "21:20 A", "22:00 B", 
            "22:30 A", "23:00 B", "23:30 A", "00:10 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "04:30 B", "05:00 A", "05:30 B", "06:00 A", "06:30 B", 
            "07:00 A", "07:30 B", "08:00 A", "08:30 B", "10:10 A", "10:45 B", 
            "11:20 A", "11:55 B", "12:30 A", "13:05 B", "13:40 A", "14:10 B", 
            "15:20 A", "16:30 B", "17:40 A", "18:50 B", "20:00 A", "22:00 B", 
            "23:10 A", "00:10 B"
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:00 A", "05:00 A", "06:00 B", "07:00 A", "08:00 B", "10:00 A", 
            "11:00 B", "12:00 A", "13:00 B", "14:00 A", "15:00 B", "16:00 A", 
            "17:00 B", "18:00 A", "19:00 B", "21:10 A", "22:10 B", "23:10 A", 
            "00:10 B"
          ]
        }
      },
      "itinerarios": {
        "Jd Universo - Av. Japão - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Albert Sabin", 
              "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Japão", "Rua Thuller", "Rua Santa Cecília", "Rua Santa Efigênia", 
              "Rua Santa Adelaide", "Rua Valmet", "Rua Padre Álvaro Quinonez Zuniga", 
              "Avenida Manoel Alves", "Rua Capitão Francisco de Almeida", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", 
              "Rua Ipiranga", "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", 
              "Rua Doutor Corrêa", "Rua Otto Unger", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Rua Professor Álvaro Pavan", "Praça Albert Sabin", "Rua Professor Álvaro Pavan", 
              "Terminal Estudantes"
            ]
          }
        },
        "Jd Universo - Braz Cubas - Circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Albert Sabin", 
              "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Rua Padre Álvaro Quinonez Zuniga", 
              "Rua Valmet", "Rua Santa Adelaide", "Rua Thuller", "Avenida Japão", 
              "Rua Ipiranga", "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", 
              "Rua Doutor Corrêa", "Rua Otto Unger", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Rua Professor Álvaro Pavan", "Praça Albert Sabin", "Rua Professor Álvaro Pavan", 
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E109 - Jardim Aeroporto III",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Jardim Aeroporto III",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "05:45 .", "06:15 .", "06:50 .", "07:20 .", "07:50 .", 
            "08:20 .", "09:10 .", "10:10 .", "10:45 .", "11:15 .", "11:45 .", 
            "12:15 .", "12:45 .", "13:15 .", "13:45 .", "14:15 .", "14:45 .", 
            "15:15 .", "15:45 .", "16:15 .", "16:45 .", "17:15 .", "17:45 .", 
            "18:15 .", "18:50 .", "19:30 .", "20:15 .", "21:00 .", "21:30 .", 
            "21:45 .", "22:10 .", "22:40 .", "23:10 .", "23:45 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:30 .", "06:05 .", "06:50 .", "07:40 .", "09:30 .", "10:20 .", 
            "11:10 .", "12:00 .", "12:50 .", "13:40 .", "14:30 .", "15:20 .", 
            "16:10 .", "17:00 .", "17:40 .", "19:30 .", "20:15 .", "21:00 .", 
            "22:20 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:40 .", "07:00 .", "08:20 .", "10:45 .", "12:05 .", "13:35 .", 
            "15:05 .", "16:35 .", "18:05 .", "19:30 .", "22:00 .", "23:45 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Albert Sabin", 
              "Rua Professor Alvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Avenida Gaspar Vaz", "Rua Ramez Rachid Sleiman", 
              "Avenida Saraiva", "Rua Carlos Lacerda", "Avenida Shozo Sakai", 
              "Rua Shiguetoshi Suzuki", "Avenida Edith Inácia da Silva", 
              "Rua Francisco Martinez Casanova", "Rua João Assi", "Rua Benedito de Carvalho Filho", 
              "Praça da Aeronáutica", "Rua Campo de Marte", "Rua Del Prete", 
              "Rua Vasp", "Rua Nacional", "Rua Varig", "Rua Quinze de Agosto", 
              "Rua Catalina", "Rua Gabriel D Anunzio"
            ],
            "volta": [
              "Rua Gabriel D Anunzio", "Rua Catalina", "Rua Quinze de Agosto", 
              "Rua Varig", "Rua Nacional", "Rua Vasp", "Rua Del Prete", "Rua Campo de Marte", 
              "Praça da Aeronáutica", "Rua Benedito de Carvalho Filho", "Rua João Assi", 
              "Rua Francisco Martinez Casanova", "Avenida Edith Inácia da Silva", 
              "Rua Shiguetoshi Suzuki", "Avenida Shozo Sakai", "Avenida Conceição", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Braz Cubas", "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
              "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Rua Professor Álvaro Pavan", "Praça Albert Sabin", "Rua Professor Alvaro Pavan", 
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E110 - Jardim Layr via Jardim Esperança",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Jardim Layr",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 .", "04:50 .", "05:30 .", "06:20 .", "07:10 .", "08:00 .", 
            "08:50 .", "09:40 .", "11:30 .", "12:20 .", "13:10 .", "14:00 .", 
            "14:50 .", "15:40 .", "16:30 .", "17:20 .", "18:10 .", "19:05 .", 
            "20:40 .", "21:30 .", "22:10 .", "23:00 .", "23:45 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 .", "04:50 .", "05:30 .", "06:20 .", "07:10 .", "08:00 .", 
            "08:50 .", "09:40 .", "11:30 .", "12:20 .", "13:10 .", "14:00 .", 
            "15:30 .", "17:00 .", "18:30 .", "20:50 .", "22:20 .", "23:45 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 .", "05:30 .", "06:50 .", "08:10 .", "10:30 .", "11:50 .", 
            "13:10 .", "14:30 .", "15:50 .", "17:10 .", "18:30 .", "20:50 .", 
            "22:20 .", "23:45 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Doutor Albert Sabin", 
              "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
              "Rua Doutor Ricardo Vilela", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Francisco Ferreira Lopes", "Avenida Gaspar Vaz", "Rua Ramez Rachid Sleiman", 
              "Avenida Saraiva", "Rua Carlos Lacerda", "Avenida Shozo Sakai", 
              "Rua Shiguetoshi Suzuki", "Avenida Edith Inácia da Silva", 
              "Rua Francisco Martinez Casanova", "Rua Kazumo Sumizomo", 
              "Rua Vicente Antonio Grisaro", "Rua Osvaldo Canalli", "Rua Matathias Nogueira Novaes", 
              "Rua Expedicionário Benedicto de Souza Ferraz", "Rua Doutor Benedicto da Cunha Mello", 
              "Rua Expedicionário Francisco Antonio de Oliveira", "Rua Camargo", 
              "Rua Brigadeiro Newton Braga", "Rua Domingos de Souza", "Rua Guarapiranga", 
              "Rua Ibirapema", "Rua Aratimbó"
            ],
            "volta": [
              "Rua Aratimbó", "Rua Domingos de Souza", "Rua Brigadeiro Newton Braga", 
              "Rua Camargo", "Rua Expedicionário Francisco Antonio de Oliveira", 
              "Rua Doutor Benedicto da Cunha Mello", "Rua Expedicionário Benedicto de Souza Ferraz", 
              "Rua Matathias Nogueira Novaes", "Rua Osvaldo Canalli", "Rua Vicente Antonio Grisaro", 
              "Rua Kazumo Sumizomo", "Rua Francisco Martinez Casanova", 
              "Avenida Edith Inácia da Silva", "Rua Shiguetoshi Suzuki", 
              "Avenida Shozo Sakai", "Avenida Conceição", "Avenida Francisco Ferreira Lopes", 
              "Avenida Fernando Costa", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
              "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", "Rua Otto Unger", 
              "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Avenida Manoel Bezerra Lima Filho", "Praça Kazuo Kimura", 
              "Avenida Manoel Bezerra Lima Filho", "Rua Professor Álvaro Pavan", 
              "Praça Doutor Albert Sabin", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E111 - Jardim Layr",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Jardim Layr",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "04:50 .", "05:00 .", "05:20 .", "05:30 .", "05:40 .", 
            "06:00 .", "06:20 .", "06:40 .", "07:00 .", "07:15 .", "07:25 .", 
            "07:30 .", "07:40 .", "08:00 .", "08:10 .", "08:30 .", "08:40 .", 
            "09:00 .", "09:20 .", "09:55 .", "10:15 .", "10:30 .", "10:45 .", 
            "11:00 .", "11:18 .", "11:35 .", "11:55 .", "12:10 .", "12:25 .", 
            "12:40 .", "13:00 .", "13:15 .", "13:35 .", "13:50 .", "14:10 .", 
            "14:30 .", "14:50 .", "15:10 .", "15:20 .", "15:30 .", "15:40 .", 
            "15:50 .", "16:00 .", "16:10 .", "16:25 .", "16:35 .", "16:45 .", 
            "16:55 .", "17:05 .", "17:15 .", "17:25 .", "17:35 .", "17:45 .", 
            "17:57 .", "18:10 .", "18:20 .", "18:30 .", "18:40 .", "18:55 .", 
            "19:10 .", "19:20 .", "19:40 .", "20:00 .", "20:30 .", "21:00 .", 
            "21:30 .", "21:50 .", "22:15 .", "22:35 .", "23:00 .", "00:10 .", 
            "01:15 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "05:05 .", "05:40 .", "06:00 .", "06:35 .", "07:10 .", 
            "07:30 .", "07:45 .", "08:10 .", "08:30 .", "09:15 .", "09:55 .", 
            "10:20 .", "10:45 .", "11:05 .", "11:30 .", "11:50 .", "12:10 .", 
            "12:30 .", "12:50 .", "13:10 .", "13:30 .", "13:50 .", "14:10 .", 
            "14:30 .", "14:50 .", "15:10 .", "15:30 .", "15:50 .", "16:10 .", 
            "16:30 .", "16:50 .", "17:10 .", "17:30 .", "17:50 .", "18:10 .", 
            "18:30 .", "18:50 .", "19:10 .", "19:40 .", "20:10 .", "20:40 .", 
            "21:10 .", "21:30 .", "21:50 .", "22:20 .", "23:00 .", "00:10 .", 
            "01:15 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "05:00 .", "05:30 .", "06:00 .", "06:30 .", "07:00 .", 
            "07:30 .", "08:00 .", "09:00 .", "09:30 .", "10:30 .", "11:00 .", 
            "11:30 .", "12:00 .", "12:30 .", "13:00 .", "13:30 .", "14:00 .", 
            "14:30 .", "15:00 .", "15:30 .", "16:00 .", "16:30 .", "17:00 .", 
            "17:30 .", "18:00 .", "18:30 .", "19:00 .", "19:30 .", "20:30 .", 
            "21:00 .", "22:00 .", "23:00 .", "00:10 .", "01:15 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
              "Rua Carmela Dutra", "Rua Coronel Souza Franco", "Rua Doutor Corrêa", 
              "Rua José Bonifácio", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Avenida Fernando Costa", "Avenida Francisco Ferreira Lopes", "Avenida Gaspar Vaz", 
              "Rua Ramez Rachid Sleiman", "Avenida Saraiva", "Rua Carlos Lacerda", 
              "Avenida Shozo Sakai", "Rua Shiguetoshi Suzuki", "Avenida Edith Inácia da Silva", 
              "Rua Francisco Martinez Casanova", "Rua João Assi", "Rua Benedito de Carvalho Filho", 
              "Rua Gago Coutinho", "Rua Brigadeiro Newton Braga", "Rua Domingos de Souza", 
              "Rua Guarapiranga", "Rua Ibirapema", "Rua Aratimbó"
            ],
            "volta": [
              "Rua Aratimbó", "Rua Domingos de Souza", "Rua Brigadeiro Newton Braga", 
              "Rua Gago Coutinho", "Rua Benedito de Carvalho Filho", "Rua João Assi", 
              "Rua Francisco Martinez Casanova", "Avenida Edith Inácia da Silva", 
              "Rua Shiguetoshi Suzuki", "Avenida Shozo Sakai", "Avenida Conceição", 
              "Avenida Francisco Ferreira Lopes", "Avenida Fernando Costa", "Rua Ipiranga", 
              "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", 
              "Rua Doutor Corrêa", "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E112 - Vila Cintra via Avenida Japão",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Vila Cintra",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:10 .", "05:30 .", "06:00 .", "06:30 .", "07:00 .", 
            "07:30 .", "08:05 .", "08:30 .", "10:00 .", "10:30 .", "11:00 .", 
            "11:30 .", "12:00 .", "12:30 .", "13:00 .", "13:30 .", "14:00 .", 
            "14:35 .", "15:05 .", "15:35 .", "16:10 .", "16:45 .", "17:15 .", 
            "17:50 .", "18:25 .", "19:00 .", "19:50 .", "21:00 .", "21:30 .", 
            "22:10 .", "22:40 .", "23:45 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:15 .", "05:45 .", "06:35 .", "07:15 .", "08:05 .", 
            "09:40 .", "10:30 .", "11:15 .", "12:00 .", "12:45 .", "13:30 .", 
            "14:15 .", "15:45 .", "17:15 .", "18:45 .", "21:10 .", "22:30 .", 
            "23:40 ."
          ]
        },
        "domingo_feriado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 .", "07:15 .", "09:40 .", "11:15 .", "12:45 .", "14:15 .", 
            "15:45 .", "17:15 .", "18:45 .", "21:10 .", "22:30 .", "23:40 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Alvaro Pavan", "Rua Olegário Paiva", 
              "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
              "Avenida Japão", "Rua Thuller", "Rua Massao Kakiuti", "Rua Santa Lúcia", 
              "Rua José Fernandes Figueira", "Rua Santa Tereza", "Rua Pitanga", 
              "Rua Santa Ursula", "Avenida Japão", "Rua Juvenal Philadelpho", 
              "Rua Vereador Benedito de Oliveira Flores", "Rua Expedicionário Francisco Antonio de Oliveira", 
              "Rua Camargo", "Rua Brigadeiro Newton Braga", "Rua Gago Coutinho", 
              "Rua Benedito de Carvalho Filho", "Rua Doutor José Juca Assi", 
              "Rua Faveiro", "Rua Camboatã", "Rua Corola", "Rua Gramado", "Rua do Bosque", 
              "Rua Kazumo Sumizono", "Rua João Assi", "Rua Francisco Martinez Casanova", 
              "Avenida Edith Inácia da Silva", "Rua Shiguetoshi Suzuki", "Avenida Shozo Sakai", 
              "Rua Paulo Leite de Siqueira", "Rua Glaciano Lopes", "Avenida Amazonas"
            ],
            "volta": [
              "Avenida Amazonas", "Rua Benedita Aparecida Lapido", "Avenida Shozo Sakai", 
              "Rua Shiguetoshi Suzuki", "Avenida Edith Inácia da Silva", "Rua Francisco Martinez Casanova", 
              "Rua João Assi", "Rua Kazumo Sumizono", "Rua do Bosque", "Rua Gramado", 
              "Rua Corola", "Rua Camboatã", "Rua Faveiro", "Rua Doutor José Juca Assi", 
              "Rua Benedito de Carvalho Filho", "Rua Gago Coutinho", "Rua Brigadeiro Newton Braga", 
              "Rua Camargo", "Rua Expedicionário Antonio de Oliveira", 
              "Rua Vereador Benedito de Oliveira Flores", "Rua Juvenal Philadelpho", 
              "Avenida Japão", "Rua Santa Ursula", "Rua Pitanga", "Rua Santa Tereza", 
              "Rua José Fernandes Figueira", "Rua Santa Lúcia", "Rua Massao Kakiuti", 
              "Rua Thuller", "Avenida Japão", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
              "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", "Rua Otto Unger", 
              "Rua Dom Antonio Cândido Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Olegário Paiva", "Rua Professor Alvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E114 - Jundiapeba via Avenida das Orquídeas",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:50 .", "07:10 .", "08:30 .", "10:50 .", 
            "12:10 .", "13:30 .", "14:50 .", "16:10 .", "17:30 .", 
            "18:50 .", "21:10 .", "22:20 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:50 .", "07:10 .", "08:30 .", "10:50 .", 
            "12:10 .", "13:30 .", "14:50 .", "16:10 .", "17:30 .", 
            "18:50 .", "21:10 .", "22:20 ."
          ]
        }
      },
      "itinerarios": {
        "regular_circular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
              "Rua Doutor Ricardo Vilela", "Avenida Governador Adhemar de Barros", 
              "Terminal Central", "Rua Sebastião Furlan", "Avenida Voluntário Fernando Pinheiro Franco", 
              "Rua Basilio Batalha", "Rua Professor Flaviano de Melo", "Avenida Governador Adhemar de Barros", 
              "Avenida Cavalheiro Nami Jafet", "Retorno", "Avenida Cavalheiro Nami Jafet", 
              "Avenida Tenente Onofre de Aguiar", "Rua David Bobrow", "Avenida das Orquídeas", 
              "Rua Guilherme Giorge", "Contorno n°2290", "Rua Guilherme Giorge", 
              "Rua Adriano Pereira", "Avenida Dona Áurea Martins dos Anjos", "Rua Benedita Pereira Franco", 
              "Avenida Lourenço de Souza Franco", "Contorno divisa (Mogi/Suzano)", 
              "Avenida Lourenço de Souza Franco", "Rua Expedicionário Antonio dos Santos Taboada", 
              "Rua Nito Sona", "Avenida Laurindo Pereira", "Rua Doutor Francisco Soares Marialva", 
              "Avenida Presidente Altino Arantes", "Rua Adriano Pereira", "Rua Guilherme Giorge", 
              "Avenida das Orquídeas", "Rua David Bobrow", "Avenida Tenente Onofre de Aguiar", 
              "Avenida Cavalheiro Nami Jafet", "Avenida Governador Adhemar de Barros", 
              "Avenida Voluntário Fernando Pinheiro Franco", "Rua Basílio Batalha", 
              "Rua Professor Flaviano de Melo", "Terminal Central", "Rua Barão de Jaceguai", 
              "Rua Dom Antonio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
              "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E203 - Conjunto Santo Angelo",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular-BA",
        "sentido": "Circular-BA",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "D": "São Martinho via Henrique Peres",
          "A": "Regular",
          "B": "Hospital Doutor Arnaldo",
          "C": "Parque São Martinho"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": "Alteração dia 12/08/2024"
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 A", "04:42 C", "04:54 A", "05:06 A", "05:16 C", 
            "05:28 A", "05:40 A", "05:52 A", "06:02 C", "06:12 A",
            "06:22 A", "06:32 A", "06:42 C", "06:52 A", "07:02 B",
            "07:14 A", "07:26 A", "07:38 A", "07:50 A", "08:02 A",
            "08:12 A", "08:24 A", "08:36 A", "08:50 A", "09:05 A",
            "09:45 A", "10:05 A", "10:25 A", "10:40 A", "10:55 A",
            "11:10 A", "11:25 A", "11:40 A", "11:55 A", "12:05 A",
            "12:15 A", "12:25 A", "12:35 A", "12:45 A", "12:55 A",
            "13:05 A", "13:17 A", "13:30 A", "13:42 A", "13:54 A",
            "14:06 A", "14:18 A", "14:30 A", "14:42 A", "14:54 A",
            "15:06 A", "15:18 A", "15:30 A", "15:42 A", "15:54 B",
            "16:06 A", "16:18 A", "16:30 A", "16:42 A", "16:54 A",
            "17:06 A", "17:18 A", "17:30 A", "17:42 A", "17:54 C",
            "18:06 A", "18:18 A", "18:30 C", "18:42 A", "18:54 A",
            "19:06 A", "19:18 A", "19:30 C", "19:45 A", "20:00 A",
            "20:20 C", "20:40 A", "21:00 A", "21:20 A", "21:35 A",
            "21:47 A", "22:00 A", "22:12 A", "22:24 A", "22:36 A",
            "22:48 A", "23:00 A", "23:15 A", "23:30 A", "23:45 A",
            "00:00 A", "00:30 A", "01:15 D"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 C", "04:40 A", "04:50 A", "05:00 A", "05:12 A",
            "05:24 C", "05:36 A", "05:48 A", "06:00 C", "06:12 A",
            "06:24 A", "06:36 A", "06:48 A", "07:00 C", "07:12 A",
            "07:25 A", "07:38 A", "07:50 A", "08:10 A", "08:30 A",
            "08:50 A", "09:10 A", "09:30 A", "09:50 A", "10:10 A",
            "10:30 A", "10:48 A", "11:05 A", "11:22 A", "11:40 A",
            "11:55 A", "12:10 A", "12:25 A", "12:40 A", "12:55 A",
            "13:10 A", "13:24 A", "13:37 A", "13:50 A", "14:02 A",
            "14:15 A", "14:28 A", "14:40 A", "14:53 A", "15:06 A",
            "15:20 A", "15:33 A", "15:46 A", "15:58 A", "16:10 A",
            "16:23 A", "16:36 A", "16:50 A", "17:02 A", "17:15 A",
            "17:28 A", "17:40 A", "17:52 A", "18:05 A", "18:18 A",
            "18:32 A", "18:44 A", "18:57 A", "19:10 A", "19:30 A",
            "19:55 A", "20:20 A", "20:45 A", "21:10 A", "21:30 A",
            "21:45 A", "22:00 A", "22:20 A", "22:40 A", "23:00 A",
            "23:15 A", "23:30 A", "23:45 A", "00:00 A", "00:30 A",
            "01:15 D"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 A", "04:50 A", "05:10 A", "05:30 A", "05:47 A",
            "06:05 A", "06:20 A", "06:37 A", "06:55 A", "07:13 A",
            "07:30 A", "07:55 A", "08:30 A", "09:00 A", "09:30 A",
            "10:00 A", "10:30 A", "11:00 A", "11:20 A", "11:38 A",
            "11:55 A", "12:13 A", "12:30 A", "12:50 A", "13:08 A",
            "13:25 A", "13:43 A", "14:00 A", "14:20 A", "14:38 A",
            "14:55 A", "15:13 A", "15:30 A", "15:50 A", "16:08 A",
            "16:25 A", "16:43 A", "17:00 A", "17:20 A", "17:38 A",
            "17:55 A", "18:13 A", "18:30 A", "18:50 A", "19:10 A",
            "19:40 A", "20:20 A", "21:00 A", "21:25 A", "21:50 A",
            "22:15 A", "22:40 A", "23:00 A", "23:15 A", "23:30 A",
            "23:45 A", "00:00 A", "00:30 A", "01:15 D"
          ]
        }
      },
      "itinerarios": {
        "sao_martinho_via_henrique_peres": {
          "sentido": "Centro-Bairro | Bairro-Centro",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
            "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
            "Rua Doutor Ricardo Vilela", "Rua Doutor Correa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
            "Avenida Francisco Ferreira Lopes", "Avenida Henrique Peres", "Avenida Japão", 
            "Estrada das Aroeiras", "Avenida Ricieri Bertaiolli", "Rua Raimundo Glicério Augusto", 
            "Rua Mauro Alves da Silva"
          ]
        },
        "regular_circular": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
            "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
            "Rua Doutor Ricardo Vilela", "Rua Doutor Correa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
            "Avenida Japão", "Rua São Marcelo", "Rua São Camilo de Lellis", 
            "Rua São José", "Rua São Tomé", "Avenida Japão", "Rua Santa Margarida", 
            "Rua Nossa Senhora das Graças", "Avenida Japão"
          ]
        },
        "hospital_doutor_arnaldo": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
            "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
            "Rua Doutor Ricardo Vilela", "Rua Doutor Correa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
            "Avenida Japão", "Rua São Marcelo", "Rua São Camilo de Lellis", 
            "Rua São José", "Estrada Municipal Santo Angelo", "Retorno (Portaria II Hospital Doutor Arnaldo)"
          ]
        },
        "parque_sao_martinho": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
            "Avenida Vereador Narciso Yague Guimarães", "Rua Tenente Luiz Marcondes dos Santos", 
            "Rua Doutor Ricardo Vilela", "Rua Doutor Correa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
            "Avenida Japão", "Rua São Marcelo", "Rua São Camilo de Lellis", 
            "Rua São José", "Rua São Tomé", "Avenida Japão", "Estrada das Aroeiras", 
            "Avenida Ricieri Bertaiolli", "Rua Raimundo Glicério Augusto", "Rua Mauro Alves da Silva"
          ]
        }
      }
    },
    {
      "linha": "E208 - Vila São Sebastião",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:20 .", "05:10 .", "06:00 .", "06:35 .", "07:10 .", 
            "07:40 .", "08:35 .", "09:40 .", "10:35 .", "11:45 .", 
            "13:00 .", "14:25 .", "15:35 .", "16:45 .", "17:20 .", 
            "17:55 .", "18:30 .", "19:00 .", "19:40 .", "21:00 .", 
            "22:10 .", "23:20 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:20 .", "05:30 .", "06:35 .", "07:50 .", "09:00 .", 
            "10:50 .", "12:00 .", "13:10 .", "14:30 .", "15:45 .", 
            "16:50 .", "17:55 .", "19:00 .", "21:00 .", "22:10 .", 
            "23:20 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:20 .", "05:30 .", "06:35 .", "07:50 .", "09:00 .", 
            "10:50 .", "12:00 .", "13:10 .", "14:30 .", "15:45 .", 
            "16:50 .", "17:55 .", "19:00 .", "21:00 .", "22:10 .", 
            "23:20 ."
          ]
        }
      },
      "itinerarios": {
        "regular_circular_ida": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
            "Avenida Doutor Cândido Xavier de Almeida e Souza", "Rua Carmela Dutra", 
            "Rua Coronel Souza Franco", "Rua Doutor Correa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Avenida Fernando Costa", 
            "Avenida Japão", "Rua José Pedro Naure", "Rua Capitão Joaquim de Mello Freire", 
            "Rua Severo dos Santos", "Rua Francisco Rodrigues Passos", "Rua Itaquaquecetuba", 
            "Avenida Japão", "Rua José Rosa", "Rua Professora Marietta Pasquinelli Alckmin Franco", 
            "Rua Francelino Rodrigues", "Rua Doutor Sebastião Joel Luz", 
            "Rua Doutor José Oswaldo Jardim de Azevedo", "Rua Wilson de Lima Fernandes", 
            "Rua Pedro Paulo de Carlo"
          ]
        },
        "regular_circular_volta": {
          "sentido": "Volta",
          "volta": [
            "Rua Pedro Paulo de Carlo", "Rua Profeta Jonas", "Rua Doutor José Oswaldo Jardim de Azevedo", 
            "Avenida Doutro Álvaro de Campos Carneiro", "Avenida Japão", "Rua Itaquaquecetuba", 
            "Rua Francisco Rodrigues Passos", "Rua Maestro Benedito Olegário Berti", 
            "Avenida Japão", "Rua Ipiranga", "Rua Braz Cubas", "Rua Barão de Jaceguai", 
            "Rua Dom Antonio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
            "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E209 - Porteira Preta via Jardim Santos Dumont",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Porteira Preta",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "06:10 .", "08:00 .", "10:40 .", "12:30 .", 
            "14:20 .", "16:20 .", "18:20 .", "21:10 .", "22:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 .", "06:10 .", "08:00 .", "10:40 .", "12:30 .", 
            "14:20 .", "16:20 .", "18:20 .", "21:10 .", "22:30 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "06:40 .", "08:30 .", "11:00 .", "12:50 .", 
            "14:50 .", "16:50 .", "19:40 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
            "Rua Olegário Paiva", "Rua Coronel Souza Franco", 
            "Rua Doutor Corrêa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Japão", 
            "Avenida Manoel Lino da Silva", "Rua Laos", 
            "Rua Tanzânia", "Avenida Doutor Pantaleão Trandafilov Filho", 
            "Avenida Japão", "Rua Comendador Koheiji Adachi", 
            "Estrada Etsunari Adachi", "Travessa Japão"
          ]
        },
        "regular_bairro_centro": {
          "sentido": "Volta",
          "volta": [
            "Travessa Japão", "Estrada Etsunari Adachi", 
            "Rua Comendador Koheiji Adachi", "Avenida Japão", 
            "Avenida Doutor Pantaleão Trandafilov Filho", 
            "Rua Tanzânia", "Rua Laos", "Avenida Manoel Lino da Silva", 
            "Avenida Japão", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
            "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", 
            "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", 
            "Avenida Vereador Narciso Yague Guimarães", 
            "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
            "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E211 - Jardim Santos Dumont",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "."
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": "Início dia 12/08/2024"
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:10 .", "05:50 .", "06:30 .", "07:10 .", 
            "07:50 .", "08:30 .", "10:10 .", "10:50 .", "11:30 .", 
            "12:10 .", "12:50 .", "13:30 .", "14:10 .", "14:50 .", 
            "15:30 .", "16:10 .", "16:50 .", "17:30 .", "18:10 .", 
            "18:50 .", "19:30 .", "21:10 .", "21:50 .", "22:30 .", 
            "23:10 .", "23:50 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:10 .", "05:50 .", "06:30 .", "07:10 .", 
            "07:50 .", "08:30 .", "10:10 .", "10:50 .", "11:30 .", 
            "12:10 .", "12:50 .", "13:30 .", "14:10 .", "14:50 .", 
            "15:30 .", "16:10 .", "16:50 .", "17:30 .", "18:10 .", 
            "18:50 .", "19:30 .", "21:10 .", "21:50 .", "22:30 .", 
            "23:10 .", "23:50 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:50 .", "07:10 .", "08:30 .", "10:50 .", 
            "12:10 .", "13:30 .", "14:50 .", "16:10 .", "17:30 .", 
            "18:50 .", "20:10 .", "22:30 .", "23:10 ."
          ]
        }
      },
      "itinerarios": {
        "regular_circular": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
            "Rua Olegário Paiva", "Rua Doutor Ricardo Vilela", 
            "Rua Doutor Correa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Japão", 
            "Rua José Antônio da Costa", "Rua Rússia", 
            "Avenida Austrália", "Rua Laos", "Rua Tanzania", 
            "Avenida das Nações", "Rua Uganda", "Rua Rodesia", 
            "Avenida Japão", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
            "Rua Coronel Cardoso de Siqueira", "Rua Doutor Correa", 
            "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", 
            "Avenida Vereador Narciso Yague Guimães", 
            "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
            "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E211 - Jardim Santos Dumont",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "."
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": "Início dia 12/08/2024"
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:10 .", "05:50 .", "06:30 .", "07:10 .", 
            "07:50 .", "08:30 .", "10:10 .", "10:50 .", "11:30 .", 
            "12:10 .", "12:50 .", "13:30 .", "14:10 .", "14:50 .", 
            "15:30 .", "16:10 .", "16:50 .", "17:30 .", "18:10 .", 
            "18:50 .", "19:30 .", "21:10 .", "21:50 .", "22:30 .", 
            "23:10 .", "23:50 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:10 .", "05:50 .", "06:30 .", "07:10 .", 
            "07:50 .", "08:30 .", "10:10 .", "10:50 .", "11:30 .", 
            "12:10 .", "12:50 .", "13:30 .", "14:10 .", "14:50 .", 
            "15:30 .", "16:10 .", "16:50 .", "17:30 .", "18:10 .", 
            "18:50 .", "19:30 .", "21:10 .", "21:50 .", "22:30 .", 
            "23:10 .", "23:50 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:50 .", "07:10 .", "08:30 .", "10:50 .", 
            "12:10 .", "13:30 .", "14:50 .", "16:10 .", "17:30 .", 
            "18:50 .", "20:10 .", "22:30 .", "23:10 ."
          ]
        }
      },
      "itinerarios": {
        "regular_circular": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
            "Rua Olegário Paiva", "Rua Doutor Ricardo Vilela", 
            "Rua Doutor Correa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", 
            "Avenida Fernando Costa", "Avenida Japão", 
            "Rua José Antônio da Costa", "Rua Rússia", 
            "Avenida Austrália", "Rua Laos", "Rua Tanzania", 
            "Avenida das Nações", "Rua Uganda", "Rua Rodesia", 
            "Avenida Japão", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
            "Rua Coronel Cardoso de Siqueira", "Rua Doutor Correa", 
            "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga", 
            "Avenida Vereador Narciso Yague Guimães", 
            "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
            "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E303 - Conjunto São Sebastião via São João",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Conjunto São Sebastião",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Conj. São Sebastião - São João",
          "B": "Conj. São Sebastião - Caputera"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 B", "05:50 A", "06:50 B", "08:00 A", "09:05 B", "11:00 A",
            "12:00 B", "13:05 A", "13:40 B", "14:50 A", "16:00 B", "17:10 A",
            "18:25 B", "19:40 A", "20:40 B", "21:55 A", "23:00 B", "00:10 A", "01:25 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 B", "05:50 A", "06:50 B", "07:55 A", "09:00 B", "10:50 A",
            "12:00 B", "13:05 A", "14:50 B", "16:00 A", "17:10 B", "18:20 A",
            "19:30 B", "21:40 A", "23:00 B", "00:10 A", "01:25 B"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 B", "05:50 A", "06:50 B", "07:55 A", "09:00 B", "10:50 A",
            "12:00 B", "13:05 A", "14:50 B", "16:00 A", "17:10 B", "18:20 A",
            "19:30 B", "21:40 A", "23:00 B", "00:10 A", "01:25 B"
          ]
        }
      },
      "itinerarios": {
        "conj_sao_sebastiao_sao_joao": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Doutor Albert Sabin",
            "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães",
            "Rua Tenente Luiz Marcondes dos Santos", "Rua Doutor Ricardo Vilela",
            "Rua Doutor Corrêa", "Rua Otto Unger", "Rua São João",
            "Avenida José Glicério de Melo", "Rua Maria Gaudência Sant Ana",
            "Avenida Presidente Getúlio Vargas", "Avenida Prefeito Carlos Alberto Lopes",
            "Avenida Francisco Ruiz", "Rua João Moro", "Rua Capitão Melo",
            "Praça Alexandre de Deus Carvalho Santos P.A."
          ],
          "volta": [
            "Praça Alexandre de Deus Carvalho Santos P.A.", "Rua Antonio Gonçalves dos Santos",
            "Avenida Francisco Ruiz", "Rua João Moro", "Rua Capitão Melo",
            "Avenida Prefeito Francisco Ribeiro Nogueira", "Rua Maria Gaudência Sant Ana",
            "Rua Primeiro de Setembro", "Rua Doutor Corrêa", "Rua Otto Unger",
            "Avenida Vereador Narciso Yague Guimarães", "Terminal Estudantes"
          ]
        },
        "conj_sao_sebastiao_caputera": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Doutor Corrêa",
            "Avenida José Glicério de Melo", "Avenida Presidente Getúlio Vargas",
            "Rua Francisco Corrêa", "Rua Koheiji Adachi", "Rua João Moro",
            "Praça Alexandre de Deus Carvalho Santos P.A."
          ],
          "volta": [
            "Praça Alexandre de Deus Carvalho Santos P.A.", "Rua João Moro",
            "Rua Koheiji Adachi", "Avenida Prefeito Francisco Ribeiro Nogueira",
            "Rua Doutor Corrêa", "Rua Olegário Paiva", "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E304 - Vila Rachel",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Circular",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:05 .", "05:30 .", "06:00 .", "06:30 .", "07:00 .", "07:30 .",
            "08:00 .", "08:30 .", "09:00 .", "09:50 .", "10:30 .", "11:20 .",
            "12:00 .", "12:30 .", "13:00 .", "13:30 .", "14:00 .", "14:30 .",
            "15:00 .", "15:30 .", "16:00 .", "16:30 .", "17:00 .", "17:30 .",
            "18:00 .", "18:30 .", "19:00 .", "19:45 .", "21:00 .", "21:30 .",
            "22:00 .", "22:20 .", "22:50 .", "23:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:05 .", "05:30 .", "06:00 .", "06:30 .", "07:00 .", "07:30 .",
            "08:00 .", "08:30 .", "09:00 .", "09:50 .", "10:30 .", "11:20 .",
            "12:00 .", "12:30 .", "13:00 .", "13:30 .", "14:00 .", "14:30 .",
            "15:00 .", "15:50 .", "16:50 .", "17:50 .", "18:50 .", "19:50 .",
            "21:30 .", "22:30 .", "23:30 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "06:00 .", "06:50 .", "07:40 .", "08:30 .", "09:20 .",
            "11:00 .", "11:50 .", "12:40 .", "13:30 .", "14:20 .", "15:10 .",
            "16:00 .", "16:50 .", "17:50 .", "18:50 .", "19:50 .", "21:30 .",
            "22:30 .", "23:30 ."
          ]
        }
      },
      "itinerarios": {
        "regular_circular": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva",
            "Rua Doutor Ricardo Vilela", "Rua Doutor Corrêa", "Rua José Bonifácio",
            "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança",
            "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello",
            "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", "Avenida Pedro Machado",
            "Rua Caetano de Campos", "Rua Carlos Gomes", "Rua João Kopke", "Rua Doutor Gabriel Prestes",
            "Rua Eurotides Guimarães", "Rua Gomes Cardim", "Rua Caetano de Campos",
            "Avenida Pedro Machado", "Rua Doutor Deodato Wertheimer", "Rua Ipiranga",
            "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira",
            "Rua Doutor Corrêa", "Rua Otto Unger", "Rua Dom Antônio Cândido de Alvarenga",
            "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan", "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E305 - Conjunto Santo Angelo via Bom Pastor",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Conjunto Santo Angelo",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "B": "Cidade Jardim",
          "A": "Cj Santo Ângelo Via Bom Pastor"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "05:30 A", "06:00 B", "06:25 A", "06:50 A", "07:05 B", "07:30 A", 
            "08:10 B", "08:50 A", "09:30 A", "10:00 A", "10:25 A", "10:50 A", "11:15 A", 
            "11:40 B", "12:05 A", "12:30 B", "12:55 A", "13:20 A", "13:45 A", "14:10 A", 
            "14:40 A", "15:05 B", "15:30 A", "15:55 A", "16:25 B", "16:45 A", "17:00 A", 
            "17:15 A", "17:40 B", "18:10 A", "18:35 B", "19:00 A", "19:30 A", "20:10 B", 
            "20:50 A", "21:20 A", "21:50 A", "22:10 A", "22:30 B", "22:55 A", "23:30 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "05:30 A", "06:00 B", "06:25 A", "07:00 B", "07:30 B", "08:10 A", 
            "09:05 A", "09:50 A", "10:45 A", "11:30 B", "11:55 A", "12:25 B", "13:05 A", 
            "13:40 A", "14:05 A", "14:35 A", "15:15 B", "15:45 A", "16:15 B", "16:55 A", 
            "17:25 B", "17:55 B", "18:35 B", "19:20 A", "20:10 B", "21:00 A", "21:55 A", 
            "22:25 B", "22:55 A", "23:30 A"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 A", "06:00 A", "06:40 A", "07:20 A", "08:10 B", "09:00 A", "09:50 A", 
            "10:40 A", "11:30 A", "12:20 B", "13:10 A", "14:00 A", "14:50 A", "15:40 A", 
            "16:30 A", "17:20 A", "18:10 B", "19:00 A", "19:50 A", "20:40 A", "21:30 A", 
            "22:00 A", "22:50 A", "23:20 B"
          ]
        }
      },
      "itinerarios": {
        "cidade_jardim": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
            "Rua Carmela Dutra", "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", "Rua Tenente Manoel Alves dos Anjos", 
            "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", 
            "Avenida Prefeito Francisco Ribeiro Nogueira", "Rua Antônio Guido Alberti", "Rua Mário Augusto", 
            "Rua Noraldino Luiz Vieira", "Rua Antônio José de Deus Neto", "Rua Décio Rodrigues Mathias", 
            "Rua Antônio Guido Alberti", "Avenida Prefeito Francisco Ribeiro Nogueira", "Avenida Doutor Álvaro de Campos Carneiro", 
            "Contorno (Residencial Primavera)", "Avenida Doutor Álvaro de Campos Carneiro", "Avenida Prefeito Francisco Ribeiro Nogueira", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Avenida Kaoru Hiramatsu", "Avenida Japão", 
            "Rua São Marcelo", "Rua São Camilo de Lellis", "Rua São José", "Rua São Tomé", 
            "Avenida Japão", "Rua Nossa Senhora das Graças", "Rua Santa Margarida", "Avenida Japão"
          ],
          "volta": [
            "Avenida Japão", "Rua São Tomé", "Rua São José", "Rua São Camilo de Lellis", 
            "Rua São Marcelo", "Avenida Japão", "Avenida Kaoru Hiramatsu", 
            "Rua Pedro Luiz Alencastro Gasparetto", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Avenida Prefeito Francisco Ribeiro Nogueira", "Rua Antônio Guido Alberti", "Rua Mário Augusto", 
            "Rua Noraldino Luiz Vieira", "Rua Antônio José de Deus Neto", "Rua Décio Rodrigues Mathias", 
            "Rua Antônio Guido Alberti", "Avenida Prefeito Francisco Ribeiro Nogueira", "Rua Doutor Deodato Wertheimer", 
            "Rua Coronel Marcolino Paiva", "Rua Braz Cubas", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
            "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
          ]
        },
        "cj_santo_angelo": {
          "sentido": "Ida",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
            "Rua Carmela Dutra", "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", "Rua Tenente Manoel Alves dos Anjos", 
            "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", 
            "Avenida Prefeito Francisco Ribeiro Nogueira", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Avenida Kaoru Hiramatsu", "Avenida Japão", "Rua São Marcelo", "Rua São Camilo de Lellis", 
            "Rua São José", "Rua São Tomé", "Avenida Japão", "Rua Nossa Senhora das Graças", 
            "Rua Santa Margarida", "Avenida Japão"
          ],
          "volta": [
            "Avenida Japão", "Rua São Tomé", "Rua São José", "Rua São Camilo de Lellis", 
            "Rua São Marcelo", "Avenida Japão", "Avenida Kaoru Hiramatsu", 
            "Rua Pedro Luiz Alencastro Gasparetto", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Avenida Prefeito Francisco Ribeiro Nogueira", "Rua Doutor Deodato Wertheimer", "Rua Coronel Marcolino Paiva", 
            "Rua Braz Cubas", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
            "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E306 - Conjunto Residencial Bertioga - Seki",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Conjunto Residencial Bertioga - Seki",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:40 .", "06:20 .", "07:05 .", "07:50 .", "08:35 .", "10:20 .", 
            "11:05 .", "11:50 .", "12:35 .", "13:20 .", "14:05 .", "14:55 .", 
            "15:35 .", "16:20 .", "17:15 .", "18:10 .", "19:00 .", "20:50 .", 
            "22:05 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:40 .", "06:20 .", "07:05 .", "07:50 .", "08:35 .", "10:20 .", 
            "11:05 .", "11:50 .", "12:35 .", "13:20 .", "14:05 .", "14:55 .", 
            "15:35 .", "16:20 .", "17:15 .", "18:10 .", "19:00 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": "Circular",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
            "Rua Doutor Ricardo Vilela", "Rua Doutor Corrêa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", 
            "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", 
            "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", "Avenida Pedro Machado", 
            "Rua Caetano de Campos", "Rua Carlos Gomes", "Rua João Kopke", 
            "Rua Doutor Gabriel Prestes", "Rua Eurotides Guimarães", "Rua Gomes Cardim", 
            "Rua Caetano de Campos", "Rua Henrique Pettená", "Rua Guaratuba", 
            "Rua Indaiá", "Rua Bertioga", "Rua Boracéia", "Rua Perequê", 
            "Rua Doutor Jair Rocha Batalha", "Avenida Prefeito Francisco Ribeiro Nogueira", 
            "Contorno Vila da Prata", "Avenida Prefeito Francisco Ribeiro Nogueira", 
            "Rua Doutor Deodato Wertheimer", "Rua Ipiranga", "Rua Major Arouche de Toledo", 
            "Rua Coronel Cardoso de Siqueira", "Rua Doutor Corrêa", "Rua Otto Unger", 
            "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
            "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E391 - Vila Moraes",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Vila Moraes",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          "E": "Bairro Fazenda Cuiaba",
          "A": "Vila Moraes",
          "B": "Vila Moraes - Cuiabá",
          "C": "Vila Moraes - Boa Vista",
          "D": "Vila Moraes - Nagao"
        },
        "empresa": "Mogi Mob Transportes de Passageiros Ltda",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:15 A",
            "06:05 B",
            "06:35 B",
            "08:20 B",
            "10:45 C",
            "12:25 B",
            "14:00 A",
            "15:40 B",
            "17:20 A",
            "19:40 C",
            "21:35 A",
            "22:20 A",
            "23:20 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:15 A",
            "06:35 B",
            "08:20 B",
            "10:45 C",
            "12:25 B",
            "14:00 A",
            "15:40 B",
            "17:20 A",
            "19:40 C",
            "21:35 A"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:15 A",
            "06:35 B",
            "08:20 B",
            "10:45 C",
            "12:25 B",
            "14:00 A",
            "15:40 B",
            "17:20 A",
            "19:40 C",
            "21:35 A"
          ]
        }
      },
      "itinerarios": {
        "bairro_fazenda_cuiaba": {
          "sentido": "Volta",
          "rota": [
            "Estrada Municipal Shohei Inui",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada da Estiva",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Avenida Prefeito Francisco Ribeiro Nogueira",
            "Rua Doutor Deodato Wertheimer",
            "Rua Ipiranga",
            "Rua Major Arouche de Toledo",
            "Rua Coronel Cardoso de Siqueira",
            "Rua Doutor Corrêa",
            "Rua Otto Unger",
            "Rua Dom Antonio Cândido de Alvarenga",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        },
        "vila_moraes": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Avenida Doutor Cândido Xavier de Almeida e Souza",
              "Rua Carmela Dutra",
              "Rua Coronel Souza Franco",
              "Rua Doutor Corrêa",
              "Rua José Bonifácio",
              "Avenida Voluntário Fernando Pinheiro Franco",
              "Rua Princesa Isabel de Bragança",
              "Rua Tenente Manoel Alves dos Anjos",
              "Rua Ipiranga",
              "Rua Joaquim Fabiano de Mello",
              "Rua Carmem Moura Santos",
              "Rua Doutor Deodato Wertheimer",
              "Avenida Prefeito Francisco Ribeiro Nogueira",
              "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
              "Avenida Kaoru Hiramatsu",
              "Rua José Costa",
              "Rua Pedro Alencastro Gasparetto",
              "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
              "Estrada da Estiva"
            ],
            "volta": [
              "Estrada da Estiva",
              "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
              "Avenida Prefeito Francisco Ribeiro Nogueira",
              "Rua Doutor Deodato Wertheimer",
              "Rua Ipiranga",
              "Rua Major Arouche de Toledo",
              "Rua Coronel Cardoso de Siqueira",
              "Rua Doutor Corrêa",
              "Rua Otto Unger",
              "Rua Dom Antonio Cândido de Alvarenga",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        },
        "vila_moraes_cuiaba": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Avenida Doutor Cândido Xavier de Almeida e Souza",
            "Rua Carmela Dutra",
            "Rua Coronel Souza Franco",
            "Rua Doutor Corrêa",
            "Rua José Bonifácio",
            "Avenida Voluntário Fernando Pinheiro Franco",
            "Rua Princesa Isabel de Bragança",
            "Rua Tenente Manoel Alves dos Anjos",
            "Rua Ipiranga",
            "Rua Joaquim Fabiano de Mello",
            "Rua Carmem Moura Santos",
            "Rua Doutor Deodato Wertheimer",
            "Avenida Prefeito Francisco Ribeiro Nogueira",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Avenida Kaoru Hiramatsu",
            "Rua José Costa",
            "Rua Pedro Alencastro Gasparetto",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada Municipal Shohei Inui",
            "Retorno",
            "Estrada Municipal Shohei Inui",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada da Estiva"
          ]
        },
        "vila_moraes_boa_vista": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Avenida Doutor Cândido Xavier de Almeida e Souza",
            "Rua Carmela Dutra",
            "Rua Coronel Souza Franco",
            "Rua Doutor Corrêa",
            "Rua José Bonifácio",
            "Avenida Voluntário Fernando Pinheiro Franco",
            "Rua Princesa Isabel de Bragança",
            "Rua Tenente Manoel Alves dos Anjos",
            "Rua Ipiranga",
            "Rua Joaquim Fabiano de Mello",
            "Rua Carmem Moura Santos",
            "Rua Doutor Deodato Wertheimer",
            "Avenida Prefeito Francisco Ribeiro Nogueira",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada da Estiva",
            "Estrada Municipal Bela Vista"
          ]
        },
        "vila_moraes_nagao": {
          "sentido": "Volta",
          "rota": [
            "Estrada da Estiva",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada Fujitaro Nagao",
            "Retorno (Antiga Granja Nagao)",
            "Estrada Fujitaro Nagao",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Avenida Prefeito Francisco Ribeiro Nogueira",
            "Rua Doutor Deodato Wertheimer",
            "Rua Ipiranga",
            "Rua Major Arouche de Toledo",
            "Rua Coronel Cardoso de Siqueira",
            "Rua Doutor Corrêa",
            "Rua Otto Unger",
            "Rua Dom Antonio Cândido de Alvarenga",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E392 - Manoel Ferreira",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Manoel Ferreira",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "D": "Fazenda Abe / Boa Vista",
          "E": "Boa Vista / São Lazaro",
          "A": "Manoel Ferreira",
          "B": "Boa Vista",
          "C": "Escola Paulo Tapajós"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "05:40 A", "06:10 C", "06:45 A", "07:30 A", "08:20 A", 
            "08:45 A", "09:30 A", "10:40 A", "11:45 A", "12:40 A", "13:25 A", 
            "14:00 A", "14:35 A", "15:10 C", "16:25 A", "17:15 A", "17:45 A", 
            "18:40 A", "19:05 B", "19:55 A", "20:10 A", "20:40 D", "21:10 B", 
            "21:50 A", "22:40 A", "23:30 E"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "05:40 A", "06:10 A", "06:45 A", "07:40 A", "08:20 A", 
            "09:30 A", "10:40 A", "11:45 A", "12:40 A", "14:00 A", "15:10 A", 
            "16:20 A", "17:10 A", "17:45 A", "18:40 A", "19:05 B", "20:10 A", 
            "21:10 B", "21:45 A", "22:40 A", "23:30 B"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:30 A", "06:30 A", "07:00 A", "08:30 A", "09:00 A", "10:40 A", 
            "11:45 A", "13:15 A", "14:15 A", "14:45 A", "15:15 A", "16:20 A", 
            "16:50 A", "17:40 A", "18:30 A", "20:30 A", "21:30 A", "22:40 B", 
            "23:30 B"
          ]
        }
      },
      "itinerarios": {
        "fazenda_abe_boa_vista": {
          "sentido": "Centro-Bairro | Bairro-Centro",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
            "Avenida Doutor Cândido Xavier de Almeida e Souza", "Rua Carmela Dutra", 
            "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", 
            "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", 
            "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", "Avenida Prefeito Francisco Ribeiro Nogueira", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Estrada Fazenda Abe", "Retorno (Fazenda Abe)", 
            "Estrada Fazenda Abe", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Estrada de Boa Vista", 
            "Boa Vista", "Estrada de Boa Vista", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Retorno para Biritiba Ussú (SP-98, Km 69,6)", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Rua Thiago Silvestre Furtado", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Retorno para Manoel Ferreira (SP-98, Km 69)", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Retorno no Posto de Pesagem/Acampamento (SP-98, Km 77)", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Estrada do Leste", "Estrada Municipal Kamazuka"
          ],
          "volta": [
            "Estrada Municipal Kamazuka", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Rua Thiago Silvestre Furtado", "Rodovia Dom Paulo Rolim Loureiro (SP 98)", 
            "Avenida Prefeito Francisco Ribeiro Nogueira", "Rua Doutor Deodato Wertheimer", 
            "Rua Ipiranga", "Rua Major Arouche de Toledo", "Rua Coronel Cardoso de Siqueira", 
            "Rua Doutor Corrêa", "Rua Otto Unger", "Rua Dom Antonio Cândido de Alvarenga", 
            "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
            "Terminal Estudantes"
          ]
        },
        "boa_vista_sao_lazaro": {
          "sentido": "Centro-Bairro | Bairro-Centro",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
            "Avenida Doutor Cândido Xavier de Almeida e Souza", "Rua Carmela Dutra", 
            "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", 
            "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", 
            "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", "Avenida Prefeito Francisco Ribeiro Nogueira", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Estrada de Boa Vista", "Estrada do São Lazaro", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Retorno no Posto de Pesagem/Acampamento (SP-98, Km 77)", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Estrada do Leste", "Estrada Municipal Kamazuka"
          ]
        },
        "escola_paulo_tapajos": {
          "sentido": "Centro-Bairro | Bairro-Centro",
          "ida": [
            "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
            "Avenida Doutor Cândido Xavier de Almeida e Souza", "Rua Carmela Dutra", 
            "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
            "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", 
            "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", 
            "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", "Avenida Prefeito Francisco Ribeiro Nogueira", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Retorno para Biritiba Ussú (SP-98, Km 69,6)", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Rua Thiago Silvestre Furtado", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Retorno para Manoel Ferreira (SP-98, Km 69)", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Retorno no Posto de Pesagem/Acampamento (SP-98, Km 77)", 
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)", "Estrada do Leste", "Estrada Municipal Kamazuka", 
            "Escola Paulo Tapajós"
          ]
        }
      }
    },
    {
      "linha": "E394 - Taiaçupeba",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Taiaçupeba",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .", "05:45 .", "06:15 .", "06:40 .", "06:55 .", "07:15 .", 
            "07:40 .", "08:50 .", "09:25 .", "10:00 .", "10:40 .", "12:20 .", 
            "13:30 .", "14:00 .", "15:00 .", "16:00 .", "16:20 .", "16:40 .", 
            "18:00 .", "18:15 .", "19:40 .", "20:20 .", "21:20 .", "22:00 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "09:20 .", "12:15 .", "13:10 .", "15:00 .", "22:25 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .", "09:20 .", "12:15 .", "13:10 .", "15:00 .", "22:25 ."
          ]
        }
      },
      "itinerarios": {
        "ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Doutor Cândido Xavier de Almeida e Souza", 
          "Rua Carmela Dutra", "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
          "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", 
          "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", 
          "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", "Avenida Prefeito Francisco Ribeiro Nogueira", 
          "Rodovia Dom Paulo Rolim Loureiro (SP-98)", "Avenida Kaoru Hiramatsu", "Retorno", 
          "Rua Pedro Luiz Alencastro Gasparetto", "Rodovia Dom Paulo Rolim Loureiro (SP-98)", 
          "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)", "Rua Aleixo Costa", "Rua Seis de Junho", 
          "Rua Antonio Pinheiro Nobre"
        ],
        "volta": [
          "Rua Antonio Pinheiro Nobre", "Rua Seis de Junho", "Rua Guararema", 
          "Rua Seis de Junho", "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)", 
          "Rodovia Dom Paulo Rolim Loureiro (SP-98)", "Avenida Prefeito Francisco Ribeiro Nogueira", 
          "Rua Doutor Deodato Wertheimer", "Rua Coronel Marcolino Paiva", "Rua Braz Cubas", 
          "Rua Barão de Jaceguai", "Rua Dom Antonio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E393 - Biritiba Ussu via Boa Vista",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Biritiba Ussu",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          "A": "Biritiba Ussu",
          "B": "São Lazaro",
          "C": "Fazenda Abe"
        },
        "empresa": "Mogi Mob Transportes de Passageiros Ltda",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 B",
            "05:40 C",
            "06:05 B",
            "07:00 A",
            "07:40 A",
            "09:00 B",
            "10:00 A",
            "11:20 B",
            "12:00 C",
            "12:30 A",
            "13:20 B",
            "14:30 A",
            "14:50 A",
            "15:20 A",
            "16:10 B",
            "16:40 A",
            "17:30 A",
            "18:10 B",
            "19:30 B",
            "22:30 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 B",
            "05:40 C",
            "06:05 B",
            "06:50 A",
            "07:30 A",
            "09:00 B",
            "10:00 A",
            "11:20 B",
            "12:00 C",
            "13:20 B",
            "14:30 A",
            "16:10 B",
            "16:40 A",
            "17:30 A",
            "18:10 B",
            "19:30 B",
            "20:40 B",
            "22:30 B"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:00 B",
            "07:30 B",
            "09:40 B",
            "11:15 A",
            "13:45 A",
            "16:00 B",
            "18:00 A",
            "19:30 B"
          ]
        }
      },
      "itinerarios": {
        "biritiba_ussu": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Avenida Doutor Cândido Xavier de Almeida e Souza",
              "Rua Carmela Dutra",
              "Rua Coronel Souza Franco",
              "Rua Doutor Corrêa",
              "Rua José Bonifácio",
              "Avenida Voluntário Fernando Pinheiro Franco",
              "Rua Princesa Isabel de Bragança",
              "Rua Tenente Manoel Alves dos Anjos",
              "Rua Ipiranga",
              "Rua Joaquim Fabiano de Mello",
              "Rua Carmem Moura Santos",
              "Rua Doutor Deodato Wertheimer",
              "Avenida Prefeito Francisco Ribeiro Nogueira",
              "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
              "Estrada de Boa Vista",
              "Retorno Boa Vista (Sindicato dos Metalúrgicos)",
              "Estrada de Boa Vista",
              "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
              "Retorno para Biritiba Ussú (Km 69,6)",
              "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
              "Rua Thiago Silvestre Furtado"
            ],
            "volta": [
              "Rua Thiago Silvestre Furtado",
              "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
              "Avenida Prefeito Francisco Ribeiro Nogueira",
              "Rua Doutor Deodato Wertheimer",
              "Rua Ipiranga",
              "Rua Major Arouche de Toledo",
              "Rua Coronel Cardoso de Siqueira",
              "Rua Doutor Corrêa",
              "Rua Otto Unger",
              "Rua Dom Antonio Cândido de Alvarenga",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        },
        "sao_lazaro": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Avenida Doutor Cândido Xavier de Almeida e Souza",
            "Rua Carmela Dutra",
            "Rua Coronel Souza Franco",
            "Rua Doutor Corrêa",
            "Rua José Bonifácio",
            "Avenida Voluntário Fernando Pinheiro Franco",
            "Rua Princesa Isabel de Bragança",
            "Rua Tenente Manoel Alves dos Anjos",
            "Rua Ipiranga",
            "Rua Joaquim Fabiano de Mello",
            "Rua Carmem Moura Santos",
            "Rua Doutor Deodato Wertheimer",
            "Avenida Prefeito Francisco Ribeiro Nogueira",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada de Boa Vista",
            "Estrada do São Lazaro",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Rua Thiago Silvestre Furtado"
          ]
        },
        "fazenda_abe": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Avenida Doutor Cândido Xavier de Almeida e Souza",
            "Rua Carmela Dutra",
            "Rua Coronel Souza Franco",
            "Rua Doutor Corrêa",
            "Rua José Bonifácio",
            "Avenida Voluntário Fernando Pinheiro Franco",
            "Rua Princesa Isabel de Bragança",
            "Rua Tenente Manoel Alves dos Anjos",
            "Rua Ipiranga",
            "Rua Joaquim Fabiano de Mello",
            "Rua Carmem Moura Santos",
            "Rua Doutor Deodato Wertheimer",
            "Avenida Prefeito Francisco Ribeiro Nogueira",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada Fazenda Abe",
            "Retorno (Fazenda Abe)",
            "Estrada Fazenda Abe",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Estrada de Boa Vista",
            "Boa Vista",
            "Estrada de Boa Vista",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Retorno para Biritiba Ussú (Km 69,6)",
            "Rodovia Dom Paulo Rolim Loureiro (SP 98)",
            "Rua Thiago Silvestre Furtado"
          ]
        }
      }
    },
    {
      "linha": "E397 - Bairro do São Sebastião",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Bairro do São Sebastião",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Bairro do São Sebastião"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:50 .", "05:10 .", "08:15 .", "11:40 .", "13:10 .", "14:30 .", 
            "14:45 .", "15:30 .", "17:00 .", "17:40 .", "18:45 .", "19:10 .", 
            "23:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:10 .", "08:30 .", "10:05 .", "11:20 .", "14:00 .", 
            "15:50 .", "17:40 .", "18:30 .", "20:20 .", "23:30 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:10 .", "08:30 .", "10:05 .", "11:20 .", "14:00 .", 
            "15:50 .", "17:40 .", "18:30 .", "20:20 .", "23:30 ."
          ]
        }
      },
      "itinerarios": {
        "ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
          "Avenida Doutor Cândido Xavier de Almeida e Souza", "Rua Carmela Dutra", 
          "Rua Coronel Souza Franco", "Rua Doutor Corrêa", "Rua José Bonifácio", 
          "Avenida Voluntário Fernando Pinheiro Franco", "Rua Princesa Isabel de Bragança", 
          "Rua Tenente Manoel Alves dos Anjos", "Rua Ipiranga", "Rua Joaquim Fabiano de Mello", 
          "Rua Carmem Moura Santos", "Rua Doutor Deodato Wertheimer", 
          "Avenida Prefeito Francisco Ribeiro Nogueira", "Rodovia Dom Paulo Rolim Loureiro (SP-98)", 
          "Avenida Kaoru Hiramatsu", "Retorno", "Rua Pedro Luiz Alencastro Gasparetto", 
          "Rodovia Dom Paulo Rolim Loureiro (SP-98)", "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)", 
          "Rua Aleixo Costa", "Rua Antonio Pinheiro Nobre", "Rua Seis de Junho", 
          "Estrada da Adutora Rio Claro", "Capela de São Sebastião"
        ],
        "volta": [
          "Capela de São Sebastião", "Estrada da Adutora Rio Claro", "Rua Seis de Junho", 
          "Rua Antonio Pinheiro Nobre", "Rua Guararema", "Rua Seis de Junho", 
          "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)", "Rodovia Dom Paulo Rolim Loureiro (SP-98)", 
          "Avenida Prefeito Francisco Ribeiro Nogueira", "Rua Doutor Deodato Wertheimer", 
          "Rua Coronel Marcolino Paiva", "Rua Braz Cubas", "Rua Barão de Jaceguai", 
          "Rua Dom Antonio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E491 - Vila Hilário",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Vila Hilário",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:00 .", "07:00 .", "08:20 .", "11:55 .", "15:30 .", 
            "17:25 .", "18:35 .", "19:45 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:05 .", "07:15 .", "11:55 .", "18:35 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "07:15 .", "11:55 .", "18:35 ."
          ]
        }
      },
      "itinerarios": {
        "ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Engenheiro Miguel Gemma", 
          "Rua Um (Conjunto Habitacional Toyama)", "Avenida Engenheiro Miguel Gemma", 
          "Rodovia Professor Alfredo Rolim de Moura", "Estrada Gunroku Suenaga", 
          "Estrada Takaoka", "Vila Hilário"
        ],
        "volta": [
          "Vila Hilário", "Estrada Shoichi Ueda", "Estrada Gunroku Suenaga", 
          "Rodovia Professor Alfredo Rolim de Moura", "Avenida Engenheiro Miguel Gemma", 
          "Rua Julio Perotti", "Avenida João XXIII", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E396 - Fazenda Pedra Branca",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Fazenda Pedra Branca",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          ".": "Vargem Grande"
        },
        "empresa": "Mogi Mob Transportes de Passageiros Ltda",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:35 .",
            "11:00 .",
            "17:25 .",
            "20:45 .",
            "22:40 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:30 .",
            "10:30 .",
            "16:50 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:30 .",
            "10:30 .",
            "16:50 ."
          ]
        }
      },
      "itinerarios": {
        "vargem_grande": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Avenida Doutor Cândido Xavier de Almeida e Souza",
              "Rua Carmela Dutra",
              "Rua Coronel Souza Franco",
              "Rua Doutor Corrêa",
              "Rua José Bonifácio",
              "Avenida Voluntário Fernando Pinheiro Franco",
              "Rua Princesa Isabel de Bragança",
              "Rua Tenente Manoel Alves dos Anjos",
              "Rua Ipiranga",
              "Rua Joaquim Fabiano de Mello",
              "Rua Carmem Moura Santos",
              "Rua Doutor Deodato Wertheimer",
              "Avenida Prefeito Francisco Ribeiro Nogueira",
              "Rodovia Dom Paulo Rolim Loureiro (SP-98)",
              "Avenida Kaoru Hiramatsu",
              "Retorno",
              "Rua Pedro Luiz Alencastro Gasparetto",
              "Rodovia Dom Paulo Rolim Loureiro (SP-98)",
              "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)",
              "Rua Aleixo Costa",
              "Rua Seis de Junho",
              "Rua Antonio Pinheiro Nobre",
              "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)",
              "Estrada de Vargem Grande",
              "Retorno",
              "Estrada de Vargem Grande",
              "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)",
              "Parque da Neblina"
            ],
            "volta": [
              "Parque da Neblina",
              "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)",
              "Rua Antonio Pinheiro Nobre",
              "Rua Seis de Junho",
              "Rua Guararema",
              "Rua Seis de Junho",
              "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)",
              "Rodovia Dom Paulo Rolim Loureiro (SP-98)",
              "Avenida Prefeito Francisco Ribeiro Nogueira",
              "Rua Doutor Deodato Wertheimer",
              "Rua Coronel Marcolino Paiva",
              "Rua Braz Cubas",
              "Rua Barão de Jaceguai",
              "Rua Dom Antonio Cândido de Alvarenga",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E492 - Bairro São João - Estrada Katsuji Kitaguchi",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Bairro São João",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:50 .",
            "09:00 .",
            "11:45 .",
            "14:00 .",
            "15:00 .",
            "16:20 .",
            "17:35 .",
            "18:30 .",
            "20:20 .",
            "22:40 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:50 .",
            "09:00 .",
            "11:45 .",
            "15:00 .",
            "17:35 .",
            "20:20 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:50 .",
            "09:00 .",
            "11:45 .",
            "17:35 .",
            "21:40 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Rua Olegário Paiva",
              "Avenida Vereador Narciso Yague Guimarães",
              "Avenida Engenheiro Miguel Gemma",
              "Rua Um (Conjunto Habitacional Toyama)",
              "Avenida Engenheiro Miguel Gemma",
              "Rodovia Professor Alfredo Rolim de Moura",
              "Estrada Katsuji Kitaguchi",
              "Estrada do Servidão",
              "Estrada Ken Saito",
              "Contorno Pesqueiro Katóia",
              "Estrada Ken Saito",
              "Estrada Shida"
            ],
            "volta": [
              "Estrada Shida",
              "Estrada Ken Saito",
              "Estrada do Batista",
              "Estrada Haru",
              "Estrada Ken Saito",
              "Estrada do Servidão",
              "Estrada Katsuji Kitaguchi",
              "Rodovia Professor Alfredo Rolim de Moura",
              "Avenida Engenheiro Miguel Gemma",
              "Rua Julio Perotti",
              "Avenida João XXIII",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E493 - Cocuera",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Cocuera",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "B": "Capixinga",
          "A": "Cocuera Lago Azul",
          "C": "São João / Hilário"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 B", "05:30 B", "06:20 B", "07:10 B", "07:50 B", 
            "08:35 B", "09:25 B", "10:10 A", "11:00 A", "11:40 B", 
            "12:20 B", "13:00 A", "13:50 A", "14:30 B", "15:10 B", 
            "16:00 A", "16:40 A", "17:30 B", "18:05 B", "19:00 B", 
            "19:30 B", "20:20 B", "21:30 B", "22:20 B", "23:30 C"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 B", "06:00 B", "06:40 B", "07:20 B", "08:20 A", 
            "09:00 B", "09:40 B", "11:00 A", "12:20 B", "13:40 A", 
            "15:00 B", "16:20 A", "17:40 B", "19:00 B", "20:20 B", 
            "22:25 B", "23:30 C"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 B", "06:40 B", "08:20 A", "09:40 B", "11:00 A", 
            "12:20 B", "13:40 A", "15:00 B", "16:20 A", "17:40 B", 
            "19:00 A", "20:20 B", "22:15 B", "23:30 B"
          ]
        }
      },
      "itinerarios": {
        "capixinga_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Engenheiro Miguel Gemma", 
          "Rua Um (Conjunto Habitacional Toyama)", "Avenida Engenheiro Miguel Gemma", 
          "Rodovia Professor Alfredo Rolim de Moura (SP-88)", "Estrada do Capixinga", 
          "Estrada Sertãozinho", "Estrada Ken Saito", "Contorno (nº 181)", 
          "Estrada Ken Saito", "Estrada Sertãozinho", "Estrada de Servidão", 
          "Bifurcação (Bairro do Leme)", "Estrada de Servidão", "Estrada do Capixinga", 
          "Rodovia Professor Alfredo Rolim de Moura (SP-88)", "Divisa Mogi das Cruzes/Biritiba Mirim"
        ],
        "capixinga_volta": [
          "Divisa Mogi das Cruzes/Biritiba Mirim", "Rodovia Professor Alfredo Rolim de Moura (SP-88)", 
          "Estrada do Capixinga", "Estrada de Servidão", "Bifurcação (Bairro do Leme)", 
          "Estrada de Servidão", "Estrada Sertãozinho", "Estrada Ken Saito", 
          "Contorno (nº 181)", "Estrada Ken Saito", "Estrada Sertãozinho", 
          "Estrada do Capixinga", "Rodovia Professor Alfredo Rolim de Moura (SP-88)", 
          "Avenida Engenheiro Miguel Gemma", "Rua Julio Perotti", "Avenida João XXIII", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "cocuera_lago_azul_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Engenheiro Miguel Gemma", 
          "Rua Um (Conjunto Habitacional Toyama)", "Avenida Engenheiro Miguel Gemma", 
          "Rodovia Professor Alfredo Rolim de Moura (SP-88)", "Divisa Mogi das Cruzes/Biritiba Mirim"
        ],
        "cocuera_lago_azul_volta": [
          "Divisa Biritiba Mirim/Mogi das Cruzes", "Rodovia Professor Alfredo Rolim de Moura (SP-88)", 
          "Avenida Engenheiro Miguel Gemma", "Rua Julio Perotti", "Avenida João XXIII", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "sao_joao_hilario_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Engenheiro Miguel Gemma", 
          "Rua Um (Conjunto Habitacional Toyama)", "Avenida Engenheiro Miguel Gemma", 
          "Rodovia Professor Alfredo Rolim de Moura (SP-88)", "Estrada Gunroku Suenaga", 
          "Vila Hilário", "Estrada Gunroku Suenaga", "Rodovia Professor Alfredo Rolim de Moura (SP-88)", 
          "Estrada Katsuji Kitaguchi", "Estrada do Servidão", "Estrada Ken Saito", 
          "Estrada do Shida", "Retorno Sitio Esperança", "Estrada do Shida", 
          "Estrada Ken Saito", "Estrada do Servidão", "Estrada Katsuji Kitaguchi", 
          "Rodovia Professor Alfredo Rolim de Moura (SP-88)", "Divisa Mogi das Cruzes/Biritiba Mirim"
        ],
        "sao_joao_hilario_volta": [
          "Divisa Mogi das Cruzes/Biritiba Mirim", "Rodovia Professor Alfredo Rolim de Moura (SP-88)", 
          "Estrada Katsuji Kitaguchi", "Estrada do Servidão", "Estrada Ken Saito", 
          "Estrada do Shida", "Retorno Sitio Esperança", "Estrada do Shida", 
          "Estrada Ken Saito", "Estrada do Servidão", "Estrada Katsuji Kitaguchi", 
          "Rodovia Professor Alfredo Rolim de Moura (SP-88)", "Estrada Gunroku Suenaga", 
          "Vila Hilário", "Estrada Gunroku Suenaga", "Rodovia Professor Alfredo Rolim de Moura (SP-88)", 
          "Avenida Engenheiro Miguel Gemma", "Rua Julio Perotti", "Avenida João XXIII", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E506 - Morada do Sol via João XXIII",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": null,
        "sentido": "Circular",
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          "B": "Condomínio Mosaico Essence",
          "A": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 A",
            "05:30 A",
            "06:30 B",
            "07:30 A",
            "08:30 A",
            "09:30 A",
            "10:30 A",
            "11:30 A",
            "12:30 A",
            "13:30 A",
            "14:30 A",
            "15:30 A",
            "16:30 B",
            "17:30 A",
            "18:30 A",
            "19:30 A",
            "20:30 A",
            "21:30 A",
            "22:30 A",
            "23:30 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 A",
            "05:30 A",
            "06:30 A",
            "07:30 A",
            "08:30 A",
            "09:30 A",
            "11:30 A",
            "12:30 A",
            "13:30 A",
            "14:30 A",
            "15:30 A",
            "16:30 A",
            "17:30 A",
            "18:30 A",
            "19:30 A",
            "20:30 A",
            "22:30 A",
            "23:30 A"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 A",
            "05:30 A",
            "06:30 A",
            "07:30 A",
            "08:30 A",
            "09:30 A",
            "11:30 A",
            "12:30 A",
            "13:30 A",
            "14:30 A",
            "15:30 A",
            "16:30 A",
            "17:30 A",
            "18:30 A",
            "19:30 A",
            "20:30 A",
            "22:30 A",
            "23:30 A"
          ]
        }
      },
      "itinerarios": {
        "condominio_mosaico_essence": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Rua Olegário Paiva",
            "Avenida Vereador Narciso Yague Guimarães",
            "Avenida João XXIII",
            "Avenida Vereador Dante Jordão Stoppa",
            "Rua José Lemos",
            "Rua Nilo Garcia Alabarce",
            "Avenida Vereador Antonio Teixeira Muniz",
            "Rua Doutor Rômulo Pasqualini",
            "Rua Izabel Motta da Silva",
            "Avenida Ricieri José Marcatto",
            "Avenida Nilo Marcatto",
            "Avenida Major Mello",
            "Rua Sales Torres Homem",
            "Rua Casimiro de Abreu",
            "Rua Castro Alves",
            "Rua Aloísio de Azevedo",
            "Rua Manuel Antonio de Almeida",
            "Rua Julio Ribeiro",
            "Rua Tobias Barreto",
            "Avenida Presidente Castelo Branco",
            "Condomínio Mosaico Essence",
            "Avenida Presidente Castelo Branco",
            "Rua Tobias Barreto",
            "Rua Julio Ribeiro",
            "Rua Antonio Pinto Guedes",
            "Rua Dinorah da Conceição Braga",
            "Rua Antonio Pinto Guedes",
            "Avenida João XXIII",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        },
        "regular": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Rua Olegário Paiva",
            "Avenida Vereador Narciso Yague Guimarães",
            "Avenida João XXIII",
            "Avenida Vereador Dante Jordão Stoppa",
            "Rua José Lemos",
            "Rua Nilo Garcia Alabarce",
            "Avenida Vereador Antonio Teixeira Muniz",
            "Rua Doutor Rômulo Pasqualini",
            "Rua Izabel Motta da Silva",
            "Avenida Ricieri José Marcatto",
            "Avenida Nilo Marcatto",
            "Avenida Major Mello",
            "Rua Sales Torres Homem",
            "Rua Casimiro de Abreu",
            "Rua Castro Alves",
            "Rua Aloísio de Azevedo",
            "Rua Manuel Antonio de Almeida",
            "Rua Julio Ribeiro",
            "Rua Antonio Pinto Guedes",
            "Rua Dinorah da Conceição Braga",
            "Rua Antonio Pinto Guedes",
            "Avenida João XXIII",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E494 - Granja Nagao",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Granja Nagao",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Estrada Fufitaro Nagao",
          "B": "Estrada Ishiro Konno"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:55 B", "05:55 A", "07:25 A", "09:00 A", "12:10 B", 
            "13:30 B", "14:45 B", "16:15 A", "18:10 A", "19:30 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:55 B", "06:00 A", "07:25 A", "09:00 A", "12:10 B", 
            "13:30 B", "14:45 B", "16:15 A", "18:10 A", "19:30 B"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:55 B", "06:00 B", "12:10 B", "14:45 B", "18:10 B", "19:30 B"
          ]
        }
      },
      "itinerarios": {
        "estrada_fufitaro_nagao_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Engenheiro Miguel Gemma", 
          "Rua Um (Conjunto Habitacional Toyama)", "Avenida Engenheiro Miguel Gemma", 
          "Rodovia Professor Alfredo Rolim de Moura", "Estrada Fujitaro Nagao", 
          "Trevo com Rodovia Dom Paulo Rolim Loureiro (SP-98)"
        ],
        "estrada_fufitaro_nagao_volta": [
          "Trevo com Rodovia Dom Paulo Rolim Loureiro (SP-98)", "Estrada Fujitaro Nagao", 
          "Rodovia Professor Alfredo Rolim de Moura", "Avenida Engenheiro Miguel Gemma", 
          "Rua Julio Perotti", "Avenida João XXIII", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "estrada_ishiro_konno_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Engenheiro Miguel Gemma", 
          "Rua Um (Conjunto Habitacional Toyama)", "Avenida Engenheiro Miguel Gemma", 
          "Rodovia Professor Alfredo Rolim de Moura", "Estrada Fujitaro Nagao", 
          "Estrada Ishiro Konno", "Estrada Fujitaro Nagao", 
          "Trevo com Rodovia Dom Paulo Rolim Loureiro (SP-98)"
        ]
      }
    },
    {
      "linha": "E509 - Jardim Bela Vista",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": null,
        "sentido": "Circular",
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          "C": "Vila Aparecida",
          "A": "João XXIII",
          "B": "Via Francisco Rodrigues Filho",
          "A*": "Residencial Vem Viver"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 A",
            "04:35 B",
            "05:00 A*",
            "05:20 B",
            "05:40 A*",
            "06:00 B",
            "06:20 A*",
            "06:40 B",
            "07:00 A*",
            "07:20 B",
            "07:45 A*",
            "08:00 B",
            "08:20 A*",
            "09:10 B",
            "09:45 A*",
            "10:10 B",
            "10:45 A*",
            "11:10 B",
            "11:40 A*",
            "12:10 B",
            "12:40 A*",
            "13:10 B",
            "13:40 A*",
            "14:10 B",
            "14:40 A*",
            "15:00 B",
            "15:20 A*",
            "15:40 B",
            "16:00 A*",
            "16:20 B",
            "16:40 A*",
            "17:05 B",
            "17:20 A*",
            "17:40 B",
            "18:00 A*",
            "18:30 B",
            "18:40 A*",
            "19:20 B",
            "19:35 A*",
            "20:10 B",
            "20:40 A*",
            "21:25 B",
            "21:50 A*",
            "22:10 B",
            "22:40 A*",
            "23:00 B",
            "23:30 A*",
            "00:00 B",
            "00:45 C"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 A",
            "04:40 B",
            "05:10 A*",
            "05:40 B",
            "06:10 A*",
            "06:40 B",
            "07:10 A*",
            "07:40 B",
            "08:10 A*",
            "08:40 B",
            "10:10 A*",
            "10:40 B",
            "11:10 A*",
            "11:40 B",
            "12:10 A*",
            "12:40 B",
            "13:10 A*",
            "13:40 B",
            "14:10 A*",
            "14:40 B",
            "15:10 A*",
            "15:40 B",
            "16:10 A*",
            "16:40 B",
            "17:10 A*",
            "17:40 B",
            "18:10 A*",
            "18:40 B",
            "19:10 A*",
            "19:40 B",
            "21:10 A*",
            "21:45 B",
            "22:25 A*",
            "22:50 B",
            "23:15 A*",
            "23:40 B",
            "00:45 C"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:10 A",
            "05:00 B",
            "05:50 A*",
            "06:40 B",
            "07:30 A*",
            "08:20 B",
            "10:10 A*",
            "11:00 B",
            "11:50 A*",
            "12:40 B",
            "13:30 A*",
            "14:20 B",
            "15:10 A*",
            "16:00 B",
            "16:50 A*",
            "17:40 B",
            "18:30 A*",
            "19:20 B",
            "21:10 A*",
            "22:00 B",
            "22:50 A*",
            "23:40 B"
          ]
        }
      },
      "itinerarios": {
        "vila_aparecida": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Rua Olegário Paiva",
            "Avenida Vereador Narciso Yague Guimarães",
            "Avenida Manoel Bezerra Lima Filho",
            "Praça Kazuo Kimura",
            "Avenida Francisco Rodrigues Filho",
            "Avenida Ricieri José Marcatto",
            "Rua Ewald Muhleise",
            "Avenida Kennedy",
            "Rua Benedito de Oliveira",
            "Rua Antônio Boz Vidal",
            "Avenida Capitão Arcílio Rizzi",
            "Avenida Kennedy",
            "Rua Ewald Muhleise",
            "Avenida Ricieri José Marcatto",
            "Avenida Nilo Marcatto",
            "Rua Michel Namura",
            "Rua Justiniano José da Rocha",
            "Rua Avelino Faria de Souza Franco (CDHU)"
          ]
        },
        "joao_xxiii": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Rua Olegário Paiva",
            "Avenida Vereador Narciso Yague Guimarães",
            "Avenida João XXIII",
            "Avenida Nilo Marcatto",
            "Avenida Ricieri José Marcatto",
            "Rua Ewald Muhleise",
            "Avenida Kennedy",
            "Rua Benedito de Oliveira",
            "Rua Antonio Boz Vidal",
            "Avenida Capitão Arcílio Rizzi",
            "Avenida Kennedy",
            "Rua Ewald Muhleise",
            "Avenida Ricieri José Marcatto",
            "Avenida Francisco Rodrigues Filho",
            "Praça Kazuo Kimura",
            "Avenida Manoel Bezerra Lima Filho",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        },
        "via_francisco_rodrigues_filho": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Rua Olegário Paiva",
            "Avenida Vereador Narciso Yague Guimarães",
            "Avenida Manoel Bezerra Lima Filho",
            "Praça Kazuo Kimura",
            "Avenida Francisco Rodrigues Filho",
            "Avenida Ricieri José Marcatto",
            "Rua Ewald Muhleise",
            "Avenida Kennedy",
            "Rua Benedito de Oliveira",
            "Rua Antonio Boz Vidal",
            "Avenida Capitão Arcílio Rizzi",
            "Avenida Kennedy",
            "Rua Ewald Muhleise",
            "Avenida Ricieri José Marcatto",
            "Avenida Nilo Marcatto",
            "Avenida João XXIII",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        },
        "residencial_vem_viver": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Rua Olegário Paiva",
            "Avenida Vereador Narciso Yague Guimarães",
            "Avenida João XXIII",
            "Avenida Nilo Marcatto",
            "Rua Natalino dos Santos Gonçalves",
            "Retorno",
            "Rua Natalino dos Santos Gonçalves",
            "Avenida Nilo Marcatto",
            "Avenida Ricieri José Marcatto",
            "Rua Ewald Muhleise",
            "Avenida Kennedy",
            "Rua Benedito de Oliveira",
            "Rua Antonio Boz Vidal",
            "Avenida Capitão Arcílio Rizzi",
            "Avenida Kennedy",
            "Rua Ewald Muhleise",
            "Avenida Ricieri José Marcatto",
            "Avenida Francisco Rodrigues Filho",
            "Praça Kazuo Kimura",
            "Avenida Manoel Bezerra Lima Filho",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E508 - Conjunto Residencial Veneza",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Bairro",
          "A": "Residencial Veneza",
          "B": "Escola Rural"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 A", "05:40 B", "06:50 B", "08:10 B", "10:40 B", "12:00 B", 
            "13:20 B", "14:40 B", "16:00 B", "17:40 B", "19:00 B", "21:05 A", 
            "22:15 B", "23:15 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 A", "05:40 B", "06:50 A", "08:10 B", "10:40 A", "12:00 B", 
            "13:20 A", "14:40 B", "16:00 A", "17:40 B", "19:00 A", "21:05 B", 
            "22:15 A", "23:15 B"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 A", "05:40 B", "06:50 A", "08:10 B", "10:40 A", "12:00 B", 
            "13:20 A", "14:40 B", "16:00 A", "17:40 B", "18:55 A", "21:05 B", 
            "22:15 A", "23:15 B"
          ]
        }
      },
      "itinerarios": {
        "bairro_circular_volta": [
          "Estrada Professora Marilda Strazzi Martins", "Rua Três", "Rua Treze", 
          "Rua Dez", "Rua Catorze", "Rua Nove", "Rua Treze", "Rua Três", 
          "Rua Doze", "Rua Quatro", "Rua Onze", "Rua Três", 
          "Estrada Professora Marilda Strazzi Martins", "Estrada Santa Catarina", 
          "Avenida João XXIII", "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "residencial_veneza_circular_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
          "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto", 
          "Avenida Nilo Marcatto", "Avenida João XXIII", "Estrada Santa Catarina", 
          "Residêncial Veneza", "Estrada Santa Catarina", 
          "Estrada Professora Marilda Strazzi Martins", "Rua Três", "Rua Treze", 
          "Rua Dez", "Rua Catorze", "Rua Nove", "Rua Treze", "Rua Três", 
          "Rua Doze", "Rua Quatro", "Rua Onze", "Rua Três", 
          "Estrada Professora Marilda Strazzi Martins", "Estrada Santa Catarina", 
          "Avenida João XXIII", "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "escola_rural_circular_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Avenida Vereador Narciso Yague Guimarães", "Avenida Manoel Bezerra Lima Filho", 
          "Praça Kazuo Kimura", "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto", 
          "Avenida Nilo Marcatto", "Avenida João XXIII", "Estrada Santa Catarina", 
          "Escola Rural", "Estrada Santa Catarina", 
          "Estrada Professora Marilda Strazzi Martins", "Rua Três", "Rua Treze", 
          "Rua Dez", "Rua Catorze", "Rua Nove", "Rua Treze", "Rua Três", 
          "Rua Doze", "Rua Quatro", "Rua Onze", "Rua Três", 
          "Estrada Professora Marilda Strazzi Martins", "Estrada Santa Catarina", 
          "Avenida João XXIII", "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E511 - Rio Acima",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Rio Acima",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .",
            "07:10 .",
            "09:00 .",
            "11:00 .",
            "13:00 .",
            "15:00 .",
            "17:10 .",
            "19:15 .",
            "23:10 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .",
            "07:10 .",
            "09:00 .",
            "11:00 .",
            "13:00 .",
            "15:00 .",
            "17:10 .",
            "19:15 .",
            "23:10 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 .",
            "07:10 .",
            "09:00 .",
            "11:00 .",
            "13:00 .",
            "15:00 .",
            "17:10 .",
            "19:15 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Rua Olegário Paiva",
              "Avenida Vereador Narciso Yague Guimarães",
              "Avenida Manoel Bezerra Lima Filho",
              "Praça Kazuo Kimura",
              "Avenida Francisco Rodrigues Filho",
              "Avenida Ricieri José Marcatto",
              "Avenida Nellusco Lourenço Boratto",
              "Avenida Vereador Dante Jordão Stoppa",
              "Avenida João XXIII",
              "Avenida Major Mello",
              "Rua Sales Torres Homem",
              "Rua Casimiro de Abreu",
              "Rua Castro Alves",
              "Rua Julio Ribeiro",
              "Rua Tobias Barreto",
              "Avenida Presidente Castelo Branco",
              "Estrada do Rio Acima",
              "Estrada Santa Catarina",
              "Retorno (Bar do Bagu)",
              "Estrada Santa Catarina",
              "Igreja de Santa Catarina"
            ],
            "volta": [
              "Igreja de Santa Catarina",
              "Estrada Santa Catarina",
              "Estrada do Rio Acima",
              "Avenida Presidente Castelo Branco",
              "Rua Tobias Barreto",
              "Rua Julio Ribeiro",
              "Rua Castro Alves",
              "Rua Casimiro de Abreu",
              "Rua Sales Torres Homem",
              "Avenida Major Mello",
              "Avenida João XXIII",
              "Avenida Vereador Dante Jordão Stoppa",
              "Rua José Lemos",
              "Rua Nilo Garcia Alabarce",
              "Avenida Vereador Antônio Teixeira Muniz",
              "Rua Doutor Rômulo Pasqualini",
              "Rua Izabel Motta da Silva",
              "Avenida Ricieri José Marcatto",
              "Avenida Francisco Rodrigues Filho",
              "Praça Kazuo Kimura",
              "Avenida Manoel Bezerra Lima Filho",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E510 - Vila Suíssa",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "",
        "sentido": "Circular-BA",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "R. Catarina C. Marcatto",
          "B": "R. Maria do N Boz Vidal",
          "BA": "Bairro-Centro"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 A", "05:15 B", "05:50 A", "06:20 B", "07:10 A", "07:40 B", 
            "08:30 A", "10:00 B", "10:50 A", "11:20 B", "12:10 A", "12:40 B", 
            "13:30 A", "14:00 B", "14:50 A", "15:20 B", "16:10 A", "16:40 B", 
            "17:30 A", "18:00 B", "18:50 A", "19:20 B", "21:00 A", "21:30 B", 
            "22:10 A", "22:40 B", "23:10 A", "23:40 B"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:40 A", "05:15 B", "05:50 A", "06:20 B", "07:10 A", "07:40 B", 
            "08:30 A", "10:00 B", "10:50 A", "11:20 B", "12:10 A", "12:40 B", 
            "13:30 A", "14:00 B", "14:50 A", "15:20 B", "16:10 A", "16:40 B", 
            "17:30 A", "18:00 B", "18:50 A", "19:20 B", "21:00 A", "21:30 B", 
            "22:10 A", "22:40 B", "23:10 A", "23:40 B"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 B", "06:40 A", "08:00 B", "09:30 A", "11:30 B", "12:40 A", 
            "14:00 B", "15:20 A", "16:40 B", "18:00 A", "19:30 B", "21:30 A", 
            "22:30 B", "23:40 A"
          ]
        }
      },
      "itinerarios": {
        "r_catarina_c_marcatto_circular_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Rua Otto Unger", "Rua Carmela Dutra", "Avenida Capitão Manoel Rudge", 
          "Avenida Frederico Straube", "Avenida São Paulo", "Rua Coronel Fernão Guedes de Souza", 
          "Rua José Henrique Lagden", "Rua João Amaro Gomes", "Avenida São Paulo", 
          "Praça Dezoito de Junho", "Avenida Vereador Narciso Yague Guimarães", 
          "Avenida João XXIII", "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
          "Rua Catarina Carrera Marcatto", "Rua Guarda Chaves", "Rua Zeferino Vaisset", 
          "Rua Manoel Joaquim Ferreira", "Rua Alberto Torres", "Avenida Brasílio de Magalhães", 
          "Avenida Floresbal Chacon Martins", "Rua Pedro Genovês", "Rua Euclides da Cunha", 
          "Rua José Veríssimo", "Rua João Ribeiro", "Avenida Brasílio de Magalhães", 
          "Rua Capistrano de Abreu", "Rua Maria do Nascimento Boz Vidal", 
          "Avenida Ricieri José Marcatto", "Avenida Nilo Marcatto", "Avenida João XXIII", 
          "Avenida Vereador Narciso Yague Guimarães", "Retorno", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Adriano Cézar Pinto", "Avenida São Paulo", "Rua Agostinho Caporali", 
          "Avenida Capitão Manoel Rudge", "Rua Duarte de Freitas", "Rua Coronel Souza Franco", 
          "Rua Dom Antônio Cândido de Alvarenga", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "r_maria_do_n_boz_vidal_circular_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Rua Olegário Paiva", 
          "Rua Otto Unger", "Rua Carmela Dutra", "Avenida Capitão Manoel Rudge", 
          "Avenida Frederico Straube", "Avenida São Paulo", "Rua Coronel Fernão Guedes de Souza", 
          "Rua José Henrique Lagden", "Rua João Amaro Gomes", "Avenida São Paulo", 
          "Praça Dezoito de Junho", "Avenida Vereador Narciso Yague Guimarães", 
          "Avenida João XXIII", "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
          "Rua Maria do Nascimento Boz Vidal", "Rua Capistrano de Abreu", "Avenida Brasílio de Magalhães", 
          "Rua João Ribeiro", "Rua José Veríssimo", "Rua Euclides da Cunha", 
          "Rua Pedro Genovês", "Avenida Floresbal Chacon Martins", "Avenida Brasílio de Magalhães", 
          "Rua Alberto Torres", "Rua Manoel Joaquim Ferreira", "Rua Zeferino Vaisset", 
          "Rua Katsuzo Matsutani", "Avenida Ricieri José Marcatto", "Avenida Nilo Marcatto", 
          "Avenida João XXIII", "Avenida Vereador Narciso Yague Guimarães", "Retorno", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Adriano Cézar Pinto", "Avenida São Paulo", 
          "Rua Agostinho Caporali", "Avenida Capitão Manoel Rudge", "Rua Duarte de Freitas", 
          "Rua Coronel Souza Franco", "Rua Dom Antônio Cândido de Alvarenga", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
          "Terminal Estudantes"
        ],
        "bairro_centro_circular_ba": [
          "Avenida Brasílio de Magalhães", "Rua Capistrano de Abreu", 
          "Rua Maria do Nascimento Boz Vidal", "Avenida Ricieri José Marcatto", 
          "Avenida Nilo Marcatto", "Avenida João XXIII", "Avenida Vereador Narciso Yague Guimarães", 
          "Retorno", "Avenida Vereador Narciso Yague Guimarães", "Rua Adriano Cézar Pinto", 
          "Avenida São Paulo", "Rua Agostinho Caporali", "Avenida Capitão Manoel Rudge", 
          "Rua Duarte de Freitas", "Rua Coronel Souza Franco", "Rua Dom Antônio Cândido de Alvarenga", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", 
          "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E693 - Sabaúna via Estrada Velha",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Sabaúna",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "07:00 .",
            "10:40 .",
            "16:20 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "10:30 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "10:30 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Rua Olegário Paiva",
              "Avenida Vereador Narciso Yague Guimarães",
              "Avenida João XXIII",
              "Avenida Nilo Marcatto",
              "Avenida Ricieri José Marcatto",
              "Rua Catarina Carrera Marcatto",
              "Avenida Brasílio de Magalhães",
              "Avenida Floresbal Chacon Martins",
              "Rua Pedro Genoves",
              "Rua José Veríssimo",
              "Avenida Floresbal Chacon Martins",
              "Avenida Brasílio de Magalhães",
              "Rua Catarina Carrera Marcatto",
              "Avenida Romilda Pecorari Nor",
              "Avenida José Figueira Filho",
              "Rua Maria de Almeida Vasques Neo",
              "Rua Antonio Castilho Gualda",
              "Praça dos Expedicionário",
              "Rua Francisco Rodrigues Mathias",
              "Rua Olavo Cabral",
              "Rua Elza Mathias",
              "Rua Armando Constantino",
              "Rua Joaquim Cardoso de Souza",
              "Rua Ramon Maldonado",
              "Rua Benedicta Marques Carrasco",
              "Rua Moacyr Barbosa Triboni"
            ],
            "volta": [
              "Rua Moacyr Barbosa Triboni",
              "Rua Joaquim Cardoso de Souza",
              "Rua Armando Constantino",
              "Rua Elza Mathias",
              "Rua Olavo Cabral",
              "Rua Francisco Rodrigues Mathias",
              "Praça dos Expedicionário",
              "Rua Antonio Castilho Gualda",
              "Rua Maria de Almeida Vasques Neo",
              "Avenida José Figueira Filho",
              "Avenida Romilda Pecorari Nor",
              "Rua Catarina Carrera Marcatto",
              "Avenida Brasílio de Magalhães",
              "Avenida Floresbal Chacon Martins",
              "Rua Pedro Genoves",
              "Rua José Veríssimo",
              "Avenida Floresbal Chacon Martins",
              "Avenida Brasílio de Magalhães",
              "Rua Catarina Carrera Marcatto",
              "Rua Guarda Chaves",
              "Rua Zeferino Vaisset",
              "Rua Katsuzo Matsutani",
              "Avenida Ricieri José Marcatto",
              "Avenida Nilo Marcatto",
              "Avenida João XXIII",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E693 - Sabaúna via Estrada Velha",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Sabaúna",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "07:00 .",
            "10:40 .",
            "16:20 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "10:30 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "10:30 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Rua Olegário Paiva",
              "Avenida Vereador Narciso Yague Guimarães",
              "Avenida João XXIII",
              "Avenida Nilo Marcatto",
              "Avenida Ricieri José Marcatto",
              "Rua Catarina Carrera Marcatto",
              "Avenida Brasílio de Magalhães",
              "Avenida Floresbal Chacon Martins",
              "Rua Pedro Genoves",
              "Rua José Veríssimo",
              "Avenida Floresbal Chacon Martins",
              "Avenida Brasílio de Magalhães",
              "Rua Catarina Carrera Marcatto",
              "Avenida Romilda Pecorari Nor",
              "Avenida José Figueira Filho",
              "Rua Maria de Almeida Vasques Neo",
              "Rua Antonio Castilho Gualda",
              "Praça dos Expedicionário",
              "Rua Francisco Rodrigues Mathias",
              "Rua Olavo Cabral",
              "Rua Elza Mathias",
              "Rua Armando Constantino",
              "Rua Joaquim Cardoso de Souza",
              "Rua Ramon Maldonado",
              "Rua Benedicta Marques Carrasco",
              "Rua Moacyr Barbosa Triboni"
            ],
            "volta": [
              "Rua Moacyr Barbosa Triboni",
              "Rua Joaquim Cardoso de Souza",
              "Rua Armando Constantino",
              "Rua Elza Mathias",
              "Rua Olavo Cabral",
              "Rua Francisco Rodrigues Mathias",
              "Praça dos Expedicionário",
              "Rua Antonio Castilho Gualda",
              "Rua Maria de Almeida Vasques Neo",
              "Avenida José Figueira Filho",
              "Avenida Romilda Pecorari Nor",
              "Rua Catarina Carrera Marcatto",
              "Avenida Brasílio de Magalhães",
              "Avenida Floresbal Chacon Martins",
              "Rua Pedro Genoves",
              "Rua José Veríssimo",
              "Avenida Floresbal Chacon Martins",
              "Avenida Brasílio de Magalhães",
              "Rua Catarina Carrera Marcatto",
              "Rua Guarda Chaves",
              "Rua Zeferino Vaisset",
              "Rua Katsuzo Matsutani",
              "Avenida Ricieri José Marcatto",
              "Avenida Nilo Marcatto",
              "Avenida João XXIII",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "E512 - Vila Aparecida",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Vila Aparecida",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:35 .", "05:25 .", "06:05 .", "06:45 .", "07:25 .", "08:10 .", 
            "09:00 .", "09:40 .", "10:20 .", "11:45 .", "12:35 .", "13:25 .", 
            "14:05 .", "14:45 .", "15:20 .", "16:05 .", "16:45 .", "17:25 .", 
            "18:05 .", "18:45 .", "19:20 .", "20:45 .", "21:35 .", "22:10 .", 
            "22:40 .", "23:10 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "06:45 .", "08:00 .", "09:20 .", "11:30 .", "12:50 .", 
            "14:10 .", "15:30 .", "16:50 .", "18:10 .", "19:30 .", "21:45 .", 
            "22:55 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 .", "06:45 .", "08:00 .", "09:20 .", "11:30 .", "12:50 .", 
            "14:10 .", "15:30 .", "16:50 .", "18:10 .", "19:30 .", "21:45 .", 
            "22:55 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
          "Avenida Doutor Cândido Xavier de Almeida e Souza", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Francisco Rodrigues Filho", "Avenida Ricieri José Marcatto", 
          "Avenida Nellusco Lourenço Boratto", "Avenida Vereador Dante Jordão Stoppa", 
          "Avenida João XXIII", "Avenida Nilo Marcatto", "Rua Michel Namura", 
          "Rua Justiniano José da Rocha", "Rua Avelino Faria de Souza Franco", 
          "Contorno 1.599", "Rua Avelino Faria de Souza Franco"
        ],
        "regular_bairro_centro_volta": [
          "Rua Avelino Faria de Souza Franco", "Rua Justiniano José da Rocha", 
          "Rua Michel Namura", "Avenida Nilo Marcatto", "Avenida João XXIII", 
          "Avenida Nilo Marcatto", "Avenida Ricieri José Marcatto", 
          "Rua Manuel Sanchez Grillo", "Avenida João XXIII", 
          "Avenida Vereador Dante Jordão Stoppa", "Rua José Lemos", 
          "Rua Nilo Garcia Alabarce", "Avenida Vereador Antônio Teixeira Muniz", 
          "Rua Doutor Rômulo Pasqualini", "Rua Izabel Motta da Silva", 
          "Avenida Ricieri José Marcatto", "Avenida Francisco Rodrigues Filho", 
          "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
          "Rua Professor Álvaro Pavan", "Praça Doutor Albert Sabin", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E694 - Divisa de Guararema",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Divisa de Guararema",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 .", "07:00 .", "08:55 .", "11:20 .", "13:00 .", 
            "15:00 .", "17:05 .", "19:15 .", "21:35 .", "23:00 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 .", "07:00 .", "08:45 .", "11:20 .", "13:00 .", 
            "15:00 .", "17:05 .", "19:00 .", "21:35 .", "23:00 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:10 .", "07:00 .", "10:15 .", "12:15 .", "14:15 .", 
            "16:15 .", "19:15 .", "21:15 .", "23:00 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
          "Avenida Doutor Cândido Xavier de Almeida e Souza", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Lothar Waldemar Hoehne", 
          "Avenida Pedro Romero", "Avenida Francisco Rodrigues Filho", 
          "Avenida Felipe Sawaya", "Rua Santa Cruz do André", "Rua Rosário", 
          "Rua Palestina", "Rua Concórdia", "Rua Luzia dos Santos Cardoso", 
          "Rua Professor Mário Galicho", "Rua Concórdia", "Rua Aurora", 
          "Avenida Francisco Rodrigues Filho", "Rodovia Henrique Eroles", 
          "Divisa de Mogi das Cruzes/Guararema"
        ],
        "regular_bairro_centro_volta": [
          "Divisa de Mogi das Cruzes/Guararema", "Rodovia Henrique Eroles", 
          "Avenida Francisco Rodrigues Filho", "Rua Raimundo Correia", 
          "Rua Aurora", "Rua Concórdia", "Rua Luzia dos Santos Cardoso", 
          "Rua Professor Mário Galicho", "Rua Palestina", "Rua Rosário", 
          "Rua Santa Cruz do André", "Avenida Felipe Sawaya", 
          "Avenida Francisco Rodrigues Filho", "Avenida Pedro Romero", 
          "Avenida Lothar Waldemar Hoehne", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Rua Olegário Paiva", "Rua Barão de Jaceguai", "Rua Dom Antônio Cândido de Alvarenga", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E802 - Vila São Francisco",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": null,
        "sentido": "Circular",
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .",
            "05:25 .",
            "06:25 .",
            "07:25 .",
            "08:25 .",
            "09:15 .",
            "11:15 .",
            "12:15 .",
            "13:10 .",
            "14:20 .",
            "15:30 .",
            "16:40 .",
            "17:50 .",
            "18:50 .",
            "20:40 .",
            "21:35 .",
            "22:30 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .",
            "05:25 .",
            "06:25 .",
            "07:25 .",
            "08:25 .",
            "09:15 .",
            "11:15 .",
            "12:15 .",
            "13:10 .",
            "14:20 .",
            "15:30 .",
            "16:40 .",
            "17:50 .",
            "18:50 .",
            "20:40 .",
            "21:35 .",
            "22:30 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 .",
            "05:25 .",
            "06:25 .",
            "07:25 .",
            "08:25 .",
            "09:15 .",
            "11:15 .",
            "12:15 .",
            "13:10 .",
            "14:20 .",
            "15:30 .",
            "16:40 .",
            "17:50 .",
            "18:50 .",
            "20:40 .",
            "21:35 .",
            "22:30 ."
          ]
        }
      },
      "itinerarios": {
        "regular": {
          "sentido": "Ida",
          "rota": [
            "Terminal Estudantes",
            "Rua Professor Álvaro Pavan",
            "Avenida Cândido Xavier de Almeida e Souza",
            "Avenida Vereador Narciso Yague Guimarães",
            "Rua Olegário Paiva",
            "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
            "Avenida Prefeito Carlos Ferreira Lopes",
            "Rua Manuel de Oliveira",
            "Avenida José Meloni",
            "Rua Doutor Deodato Wertheimer",
            "Avenida José Benedito Braga",
            "Rua Cabo Diogo Oliver",
            "Avenida Lothar Waldemar Hoehne",
            "Acesso Avenida Doutor Edison Consolmagno",
            "Avenida Doutor Edison Consolmagno",
            "Rua Gonçalo Ferreira",
            "Avenida Cavalheiro Nami Jafet",
            "Rua Tenente Onofre Rodrigues de Aguiar",
            "Rua David Brobow",
            "Rotatória (Caravelas)",
            "Rua David Brobow",
            "Avenida Valentina Mello Freire Borenstein",
            "Rua Professor Mário Portes",
            "Rua Antonio Gulin",
            "Rua Expedicionário Domingos de Lucca",
            "Avenida Valentina Mello Freire Borenstein",
            "Rua Tenente Onofre Rodrigues de Aguiar",
            "Avenida Cavalheiro Nami Jafet",
            "Rua Benedito da Silva",
            "Rua João Cardoso dos Santos",
            "Rua Rômulo de Brito",
            "Rua Presidente Campos Salles",
            "Rua Engenheiro Gualberto",
            "Rua Cabo Diogo Oliver",
            "Rua Américo Rodrigues da San Biagio - FEB",
            "Rua Doutor Deodato Wertheimer",
            "Avenida José Meloni",
            "Rua Manuel de Oliveira",
            "Avenida Prefeito Carlos Ferreira Lopes",
            "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
            "Rua Olegário Paiva",
            "Rua Major Pinheiro Franco",
            "Rua Dom Antonio Cândido Vieira",
            "Rua Navajas",
            "Rua Olegário Paiva",
            "Rua Professor Álvaro Pavan",
            "Terminal Estudantes"
          ]
        }
      }
    },
    {
      "linha": "E805 - Rio Abaixo",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Rio Abaixo",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:15 .", "07:10 .", "09:35 .", "11:30 .", "13:30 .", 
            "15:30 .", "18:15 .", "20:20 .", "22:00 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "07:10 .", "11:30 .", "15:30 .", "18:15 .", "20:20 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "07:10 .", "11:30 .", "15:30 .", "18:15 .", "20:20 ."
          ]
        }
      },
      "itinerarios": {
        "regular_centro_bairro_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
          "Avenida Doutor Cândido Xavier de Almeida e Souza", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Rotatória (Avenida Professor Ismael Alves dos Santos)", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Francisco Rodrigues Filho", 
          "Rua Doutor Deodato Wertheimer", "Avenida José Meloni", "Rua Manuel de Oliveira", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Lothar Waldemar Hoehne", 
          "Avenida Doutor Edison Consolmagno", "Rua Gonçalo Ferreira", 
          "Avenida Joaquim Pereira de Carvalho-Zito", "Estrada Volta Fria"
        ],
        "regular_bairro_centro_volta": [
          "Estrada Volta Fria", "Avenida Joaquim Pereira de Carvalho-Zito", "Rua Gonçalo Ferreira", 
          "Avenida Doutor Edison Consolmagno", "Avenida Lothar Waldemar Hoehne", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Rua Manuel de Oliveira", 
          "Avenida José Meloni", "Rua Doutor Deodato Wertheimer", 
          "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", 
          "Rua Américo Rodrigues Da San Biagio-FEB", "Rua Doutor Deodato Wertheimer", 
          "Avenida Francisco Rodrigues Filho", "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Rua Olegário Paiva", "Rua Major Pinheiro Franco", 
          "Rua Doutor Antônio Cândido Vieira", "Rua Navajas", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
  
      {
        "linha": "E890 - Polo Industrial do Taboão - Taboão via Outlet Premium",
        "informacoes_gerais": {
          "pontoA": "Terminal Estudantes",
          "pontoB": "Taboão",
          "sentido": "Centro-Bairro | Bairro-Centro",
          "dias_atendidos": ["Úteis"],
          "legenda_atendimento": {
            "D": "Murata",
            "E": "Outlet",
            "F": "Murata / Outlet",
            "G": "Incra / Murata",
            "A": "Polo",
            "B": "Piedade",
            "C": "Incra"
          },
          "empresa": "Empresa Princesa do Norte S/A",
          "observacoes": ""
        },
        "horarios": {
          "dia_util": {
            "ponto": "A",
            "sentido": "Ida",
            "horarios": [
              "05:10 A",
              "06:00 A",
              "07:00 A",
              "10:00 A",
              "12:30 B",
              "15:00 E",
              "15:30 F",
              "17:10 C",
              "20:50 G"
            ]
          },
          "sabado": {
            "ponto": "A",
            "sentido": "Ida",
            "horarios": [
              "05:10 A",
              "13:00 D",
              "21:00 D"
            ]
          }
        },
        "itinerarios": {
          "murata": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho",
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Rotatória (Avenida Professor Ismael Alves dos Santos)", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Francisco Rodrigues Filho", 
              "Rua Doutor Deodato Werteimer", "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", 
              "Rodovia Pedro Eroles (SP-88)", "Estrada Taboão do Paratei", "Rua Recanto Céu Azul", 
              "Rua Aldersio Luis da Silva", "Estrada do Murata", "Estrada Taboão do Paratei", 
              "Estrada Yoneji Nakamura", "Retorno", "Estrada Yoneji Nakamura", "Estrada Mauro Auricchio", 
              "Industria Auricchio (Ponto Final)"
            ],
            "volta": [
              "Industria Auricchio", "Estrada Mauro Auricchio", "Estrada Yoneji Nakamura", 
              "Estrada Taboão do Paratei", "Rua Recanto Céu Azul", "Rua Aldersio Luis da Silva", 
              "Estrada do Murata", "Estrada Taboão do Paratei", "Rodovia Pedro Eroles (SP-88)", 
              "Rua Cabo Diogo Oliver", "Rua Américo Rodrigues da San Biagio - FEB", 
              "Rua Doutor Deodato Werteimer", "Avenida Francisco Rodrigues Filho", 
              "Contorno sobre Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Avenida Cândido Xavier de Almeida e Souza", 
              "Rua Professor Álvaro Pavan", "Terminal Estudantes"
            ]
          },
          "outlet": {
            "ida": [
              "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
              "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Rotatória (Avenida Professor Ismael Alves dos Santos)", 
              "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Francisco Rodrigues Filho", 
              "Rua Doutor Deodato Werteimer", "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", 
              "Rodovia Pedro Eroles (SP-88)", "Rodovia Pedro Eroles (SP-88), saida 38", 
              "Acesso Outlet Premium", "Outlet Premium", "Rodovia Pedro Eroles (SP-88)", 
              "Estrada Taboão do Paratei", "Estrada Yoneji Nakamura", "Retorno", 
              "Estrada Yoneji Nakamura", "Estrada Mauro Auricchio", "Industria Auricchio (Ponto Final)"
            ],
            "volta": [
              "Industria Auricchio", "Estrada Mauro Auricchio", "Estrada Yoneji Nakamura", 
              "Estrada Taboão do Paratei", "Rodovia Pedro Eroles (SP-88)", 
              "Acesso Outlet Premium", "Outlet Premium", "Rodovia Pedro Eroles (SP-88)", 
              "Rua Cabo Diogo Oliver", "Rua Américo Rodrigues da San Biagio - FEB", 
              "Rua Doutor Deodato Werteimer", "Avenida Francisco Rodrigues Filho", 
              "Contorno sobre Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
              "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
              "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
              "Avenida Cândido Xavier de Almeida e Souza", "Rua Professor Álvaro Pavan", 
              "Terminal Estudantes"
            ]
          }
        }
      },
      
    {
      "linha": "E894 - Beija-Flor",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Beija-Flor",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Beija-Flor",
          "B": "Nova Geração",
          "C": "Chácara Guanabara",
          "E": "Piedade",
          "G": "Incra"
        },
        "empresa": "Empresa Princesa do Norte S/A",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:20 A", "08:20 B", "11:00 A", "15:15 A", 
            "18:30 A", "21:00 C", "23:20 E"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 A", "08:20 A", "11:00 A", "15:15 G", 
            "18:30 A", "20:50 C"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 A", "08:20 A", "11:00 A", "15:15 A", 
            "18:30 A", "20:50 C"
          ]
        }
      },
      "itinerarios": {
        "beija_flor_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
          "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Rotatória (Avenida Professor Ismael Alves dos Santos)", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Francisco Rodrigues Filho", 
          "Rua Doutor Deodato Wertheimer", "Avenida José Benedito Braga", 
          "Rua Cabo Diogo Oliver", "Rodovia Pedro Eroles (SP-88)", "Estrada Taboão do Paratei", 
          "Estrada Beija - Flor"
        ],
        "beija_flor_volta": [
          "Estrada Beija - Flor", "Estrada Taboão do Paratei", 
          "Rodovia Pedro Eroles (SP-88)", "Rua Cabo Diogo Oliver", 
          "Rua Americo Rodrigues Da San Biagio-FEB", "Rua Doutor Deodato Wertheimer", 
          "Avenida Francisco Rodrigues Filho", "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
          "Avenida Doutor Cândido Xavier de Almeida e Souza", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "nova_geracao_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Rotatória (Avenida Professor Ismael Alves dos Santos)", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", 
          "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", "Rodovia Pedro Eroles (SP-88)", 
          "Estrada Taboão do Paratei", "Estrada São Bento do Lambari", 
          "Retorno (Mercado Nova Geração)", "Estrada São Bento do Lambari", "Estrada Beija - Flor"
        ],
        "nova_geracao_volta": [
          "Estrada Beija - Flor", "Estrada São Bento do Lambari", 
          "Retorno (Mercado Nova Geração)", "Estrada São Bento do Lambari", 
          "Estrada Taboão do Paratei", "Rodovia Pedro Eroles (SP-88)", 
          "Rua Cabo Diogo Oliver", "Rua Americo Rodrigues Da San Biagio-FEB", 
          "Rua Doutor Deodato Wertheimer", "Avenida Francisco Rodrigues Filho", 
          "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
          "Avenida Doutor Cândido Xavier de Almeida e Souza", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ],
        "chacara_guanabara_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Rotatória (Avenida Professor Ismael Alves dos Santos)", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", 
          "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", "Rodovia Pedro Eroles (SP-88)", 
          "Estrada Taboão do Paratei", "Estrada São Bento do Lambari", 
          "Rua Santa Catarina", "Rua Minas Gerais", "Rua São Paulo", "Avenida América", 
          "Retorno", "Avenida América", "Rua São Paulo", "Rua Minas Gerais", 
          "Rua Santa Catarina", "Estrada São Bento do Lambari", "Estrada Taboão do Paratei", 
          "Estrada Beija - Flor"
        ],
        "piedade_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Rotatória (Avenida Professor Ismael Alves dos Santos)", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", 
          "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", "Rodovia Pedro Eroles (SP-88)", 
          "Estrada Taboão do Paratei", "Estrada Velha de Santa Isabel", 
          "Bairro Piedade (Retorno Escola Rural Kaoru Hiramatsu)", 
          "Estrada Velha de Santa Isabel", "Estrada Taboão do Paratei", "Estrada Beija - Flor"
        ],
        "incra_ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Rotatória (Avenida Professor Ismael Alves dos Santos)", "Avenida Prefeito Carlos Ferreira Lopes", 
          "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", 
          "Avenida José Benedito Braga", "Rua Cabo Diogo Oliver", "Rodovia Pedro Eroles (SP-88)", 
          "Estrada Aparecidinha", "Retorno com a Estrada David Ferreira dos Santos", 
          "Estrada Aparecidinha", "Estrada Taboão do Paratei", "Estrada Beija - Flor"
        ]
      }
    },
    {
      "linhas": [
        {
          "linha": "E892 - Jardim Vieira",
          "informacoes_gerais": {
            "ponto_A": "Terminal Estudantes",
            "ponto_B": "Jardim Vieira",
            "sentido": [
              "Centro-Bairro",
              "Bairro-Centro"
            ],
            "dias_atendidos": [
              "Úteis",
              "Sábados",
              "Domingos/Feriados"
            ],
            "legenda_atendimento": {
              ".": "Regular"
            },
            "empresa": "Mogi Mob Transporets de Passageiros Ltda",
            "observacao": null
          },
          "horarios": {
            "dia_util": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "05:10 .",
                "07:00 .",
                "09:00 .",
                "11:00 .",
                "12:50 .",
                "14:50 .",
                "16:50 .",
                "19:00 .",
                "21:00 .",
                "23:05 ."
              ]
            },
            "sabado": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "05:30 .",
                "07:20 .",
                "11:00 .",
                "15:00 .",
                "18:45 ."
              ]
            },
            "domingo": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "07:20 .",
                "11:00 .",
                "15:00 .",
                "18:45 ."
              ]
            }
          },
          "itinerarios": {
            "regular": {
              "sentido": {
                "ida": [
                  "Terminal Estudantes",
                  "Rua Professor Álvaro Pavan",
                  "Praça Doutor Albert Sabin",
                  "Rua Professor Álvaro Pavan",
                  "Avenida Manoel Bezerra Lima Filho",
                  "Avenida Vereador Narciso Yague Guimarães",
                  "Rua Olegário Paiva",
                  "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                  "Avenida Prefeito Carlos Ferreira Lopes",
                  "Rotatória (Avenida Professor Ismael Alves dos Santos)",
                  "Avenida Prefeito Carlos Ferreira Lopes",
                  "Avenida Francisco Rodrigues Filho",
                  "Rua Doutor Deodato Wertheimer",
                  "Avenida José Meloni",
                  "Avenida Lothar Waldemar Hoehne",
                  "Avenida Doutor Edison Consolmagno",
                  "Acesso Avenida Doutor Edison Consolmagno",
                  "Avenida Lothar Waldemar Hoehne",
                  "Rua Cabo Diogo Oliver",
                  "Rodovia Pedro Eroles",
                  "Estrada da Moralogia",
                  "Estrada Cruz das Almas"
                ],
                "volta": [
                  "Estrada Cruz das Almas",
                  "Estrada da Moralogia",
                  "Rodovia Pedro Eroles",
                  "Estrada Joel Hermenegildo Barbieri",
                  "Rodovia Pedro Eroles",
                  "Avenida Doutor Edison Consolmagno",
                  "Avenida Lothar Waldemar Hoehne",
                  "Avenida José Meloni",
                  "Rua Doutor Deodato Wertheimer",
                  "Avenida José Benedito Braga",
                  "Rua Cabo Diogo Oliver",
                  "Rua Américo Rodrigues Da San Biagio-FEB",
                  "Rua Doutor Deodato Wertheimer",
                  "Avenida Francisco Rodrigues Filho",
                  "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                  "Avenida Francisco Rodrigues Filho",
                  "Praça Kazuo Kimura",
                  "Avenida Manoel Bezerra Lima Filho",
                  "Avenida Vereador Narciso Yague Guimarães",
                  "Rua Olegário Paiva",
                  "Rua Professor Álvaro Pavan",
                  "Terminal Estudantes"
                ]
              }
            }
          }
        },
        {
          "linha": "E893 - Chácara Guanabara",
          "informacoes_gerais": {
            "ponto_A": "Terminal Estudantes",
            "ponto_B": "Chácara Guanabara",
            "sentido": [
              "Centro-Bairro",
              "Bairro-Centro"
            ],
            "dias_atendidos": [
              "Úteis",
              "Sábados",
              "Domingos/Feriados"
            ],
            "legenda_atendimento": {
              "F": "Piedade / Outlet",
              "G": "Outlet",
              "A": "Chácara Guanabara",
              "B": "Piedade",
              "D": "Incra"
            },
            "empresa": "Empresa Princesa do Norte S/A",
            "observacao": null
          },
          "horarios": {
            "dia_util": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "03:50 A",
                "04:50 A",
                "05:40 B",
                "06:40 A",
                "08:30 A",
                "10:30 F",
                "11:45 A",
                "14:10 G",
                "15:50 G",
                "17:00 F",
                "19:00 A",
                "19:50 F",
                "22:20 A"
              ]
            },
            "sabado": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "04:10 A",
                "05:00 A",
                "06:00 A",
                "07:00 A",
                "10:40 F",
                "14:10 G",
                "16:25 F",
                "19:50 F",
                "22:20 A"
              ]
            },
            "domingo": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "06:00 A",
                "08:15 G",
                "11:10 F",
                "14:00 G",
                "16:20 F",
                "19:50 F"
              ]
            }
          },
          "itinerarios": {
            "piedade_outlet": {
              "sentido": {
                "ida": [
                  "Terminal Estudantes",
                  "Rua Professor Álvaro Pavan",
                  "Avenida Manoel Bezerra Lima Filho",
                  "Avenida Vereador Narciso Yague Guimarães",
                  "Rua Olegário Paiva",
                  "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                  "Avenida Prefeito Carlos Ferreira Lopes",
                  "Rotatória (Avenida Professor Ismael Alves dos Santos)",
                  "Avenida Prefeito Carlos Ferreira Lopes",
                  "Avenida Francisco Rodrigues Filho",
                  "Rua Doutor Deodato Wertheimer",
                  "Avenida José Benedito Braga",
                  "Rua Cabo Diogo Oliver",
                  "Rodovia Pedro Eroles (SP-88)",
                  "Rodovia Pedro Eroles (SP-88), saída 38",
                  "Acesso Outlet Premium",
                  "Outlet Premium",
                  "Rodovia Pedro Eroles (SP-88)",
                  "Estrada Taboão do Paratei",
                  "Estrada Velha de Santa Isabel",
                  "Bairro Piedade (Retorno Escola Rural Kaoru Hiramatsu)",
                  "Estrada Velha de Santa Isabel",
                  "Estrada São Bento do Lambari",
                  "Rua Santa Catarina",
                  "Rua Minas Gerais",
                  "Rua São Paulo",
                  "Avenida América"
                ],
                "volta": [
                  "Avenida América",
                  "Rua São Paulo",
                  "Rua Minas Gerais",
                  "Rua Santa Catarina",
                  "Estrada São Bento do Lambari",
                  "Estrada Taboão do Paratei",
                  "Rodovia Pedro Eroles (SP-88), saída 38",
                  "Acesso Outlet Premium",
                  "Outlet Premium",
                  "Rodovia Pedro Eroles (SP-88)",
                  "Rua Cabo Diogo Oliver",
                  "Rua Américo Rodrigues Da San Biagio-FEB",
                  "Rua Doutor Deodato Wertheimer",
                  "Avenida Francisco Rodrigues Filho",
                  "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                  "Avenida Francisco Rodrigues Filho",
                  "Praça Kazuo Kimura",
                  "Avenida Manoel Bezerra Lima Filho",
                  "Avenida Vereador Narciso Yague Guimarães",
                  "Avenida Doutor Candido Xavier de Almeida e Souza",
                  "Rua Professor Álvaro Pavan",
                  "Terminal Estudantes"
                ]
              }
            },
            "outlet": {
              "sentido": {
                "ida": [
                  "Terminal Estudantes",
                  "Rua Professor Álvaro Pavan",
                  "Avenida Manoel Bezerra Lima Filho",
                  "Avenida Vereador Narciso Yague Guimarães",
                  "Rua Olegário Paiva",
                  "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                  "Avenida Prefeito Carlos Ferreira Lopes",
                  "Rotatória (Avenida Professor Ismael Alves dos Santos)",
                  "Avenida Prefeito Carlos Ferreira Lopes",
                  "Avenida Francisco Rodrigues Filho",
                  "Rua Doutor Deodato Wertheimer",
                  "Avenida José Benedito Braga",
                  "Rua Cabo Diogo Oliver",
                  "Rodovia Pedro Eroles (SP-88)",
                  "Rodovia Pedro Eroles (SP-88), saída 38",
                  "Acesso Outlet Premium",
                  "Outlet Premium",
                  "Estrada São Bento do Lambari",
                  "Rua Santa Catarina",
                  "Rua Minas Gerais",
                  "Rua São Paulo",
                  "Avenida América"
                ],
                "volta": [
                  "Avenida América",
                  "Rua São Paulo",
                  "Rua Minas Gerais",
                  "Rua Santa Catarina",
                  "Estrada São Bento do Lambari",
                  "Rodovia Pedro Eroles (SP-88), saída 38",
                  "Acesso Outlet Premium",
                  "Outlet Premium",
                  "Rodovia Pedro Eroles (SP-88)",
                  "Rua Cabo Diogo Oliver",
                  "Rua Américo Rodrigues Da San Biagio-FEB",
                  "Rua Doutor Deodato Wertheimer",
                  "Avenida Francisco Rodrigues Filho",
                  "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                  "Avenida Francisco Rodrigues Filho",
                  "Praça Kazuo Kimura",
                  "Avenida Manoel Bezerra Lima Filho",
                  "Avenida Vereador Narciso Yague Guimarães",
                  "Avenida Doutor Candido Xavier de Almeida e Souza",
                  "Rua Professor Álvaro Pavan",
                  "Terminal Estudantes"
                ]
              }
            }
          }
        }
      ]
    },
    {
      "linha": "E895 - Jardim São José",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Jardim São José",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          "A": "Jardim São José"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "07:10 A", "09:20 A", "11:15 A", 
            "12:30 A", "14:50 A", "17:20 A", "19:30 A", "22:00 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "07:10 A", "09:20 A", "11:15 A", 
            "12:30 A", "14:50 A", "17:20 A", "19:30 A", "22:00 A"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:00 A", "07:10 A", "09:20 A", "11:15 A", 
            "12:30 A", "14:50 A", "17:20 A", "19:30 A", "22:00 A"
          ]
        }
      },
      "itinerarios": {
        "ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", "Praça Doutor Albert Sabin", 
          "Rua Professor Álvaro Pavan", "Avenida Manoel Bezerra Lima Filho", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Prefeito Carlos Ferreira Lopes", 
          "Rotatória (Avenida Professor Ismael Alves dos Santos)", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Avenida Francisco Rodrigues Filho", 
          "Rua Doutor Deodato Wertheimer", "Avenida José Meloni", 
          "Avenida Lothar Waldemar Hoehne", "Avenida Doutor Edison Consolmagno", 
          "Acesso da Avenida Doutor Edison Consolmagno a Avenida Lothar Waldemar Hoehne", 
          "Avenida Lothar Waldemar Hoehne", "Rua Cabo Diogo Oliver", 
          "Rodovia Pedro Eroles", "Estrada Joel Hermenegildo Barbieri", 
          "Avenida Guilherme Garijo", "Avenida Celeste", "Retorno", 
          "Avenida Celeste", "Avenida Guilherme Garijo", 
          "Rua Paulo Ernani Braga do Nascimento", "Rua Orestes Ximenes", 
          "Rua Vicente F. de Queiros", "Rua Clara Lima Ribeiro", 
          "Rua Joaquim Felix Marquês", "Rua Galdino Cunha Moraes", 
          "Rua Mário Candelária", "Rua Antonieta Nunes Nabiça", 
          "Rua Justino Alves Pereira", "Rua Ezidro Antonio Ferreira", 
          "Rua Isaías Soares da Silva"
        ],
        "volta": [
          "Rua Isaías Soares da Silva", "Rua Antonieta Nunes Nabiça", 
          "Rua Mario Candelária", "Rua Galdina da Cunha Moraes", 
          "Rua Joaquim Felix Marquês", "Rua Clara Lima Ribeiro", 
          "Rua Vicente F. de Queiroz", "Rua Orestes Ximenes", 
          "Rua Paulo Ernani Braga do Nascimento", "Avenida Guilherme Garijo", 
          "Estrada Joel Hermenegildo Barbieri", "Rodovia Pedro Eroles", 
          "Rodovia Pedro Eroles", "Avenida Doutor Edison Consolmagno", 
          "Avenida Lothar Waldemar Hoehne", "Avenida José Meloni", 
          "Rua Doutor Deodato Wertheimer", "Avenida José Benedito Braga", 
          "Rua Cabo Diogo Oliver", "Rua Américo Rodrigues Da San Biagio-FEB", 
          "Rua Doutor Deodato Wertheimer", "Avenida Francisco Rodrigues Filho", 
          "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Manoel Bezerra Lima Filho", "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "E898 - Jardim Novo Horizonte",
      "informacoes_gerais": {
        "pontoA": "Terminal Estudantes",
        "pontoB": "Novo Horizonte",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "."
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": "Início 29/07/2024"
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:00 .", "07:00 .", "08:00 .", "16:15 .", 
            "17:15 .", "18:15 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:15 .", "06:50 .", "08:30 .", "16:00 .", 
            "18:00 .", "19:40 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "06:50 .", "16:15 .", "18:00 .", "19:40 ."
          ]
        }
      },
      "itinerarios": {
        "ida": [
          "Terminal Estudantes", "Rua Professor Álvaro Pavan", 
          "Avenida Manoel Bezerra Lima Filho", 
          "Avenida Vereador Narciso Yague Guimarães", 
          "Rua Olegário Paiva", 
          "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Prefeito Carlos Ferreira Lopes", "Contorno", 
          "Avenida Prefeito Carlos Ferreira Lopes", 
          "Avenida Francisco Rodrigues Filho", "Rua Doutor Deodato Wertheimer", 
          "Avenida José Meloni", "Avenida Lothar Waldemar Hoehne", 
          "Avenida Doutor Edison Consolmagno", 
          "Acesso à Avenida Lothar Waldemar Hoehne", 
          "Avenida Lothar Waldemar Hoehne", "Rua Cabo Diogo Oliver", 
          "Rodovia Pedro Eroles (SP-88)", "Estrada Joel Hermenegildo Barbieri", 
          "Avenida Guilherme Garijo", "Avenida Celeste", 
          "Rua Silvandira", "Avenida Água das Pedras", 
          "Rua Garcia Rodrigues Pais", "Rua Pascoal Moreira Cabral", 
          "Rua Domingos Jorge Velho", "Rua José Antonio Campoy", 
          "Rua Mauricio José Oliveira", "Rua Soldado José Roberto Ramos"
        ],
        "volta": [
          "Rua Soldado José Roberto Ramos", "Rua Mauricio José Oliveira", 
          "Rua José Antonio Campoy", "Rua Domingos Jorge Velho", 
          "Rua Pascoal Moreira Cabral", "Rua Garcia Rodrigues Pais", 
          "Avenida Água das Pedras", "Rua Silvandira", 
          "Avenida Celeste", "Avenida Guilherme Garijo", 
          "Estrada Joel Hermenegildo Barbieri", 
          "Rodovia Pedro Eroles (SP-88)", 
          "Rodovia Pedro Eroles (SP-88) Saida B", 
          "Avenida Doutor Edison Consolmagno", 
          "Avenida Lothar Waldemar Hoehne", "Avenida José Meloni", 
          "Rua Doutor Deodato Wertheimer", "Avenida José Benedito Braga", 
          "Rua Cabo Diogo Oliver", "Rua Américo Rodrigues Da San Biagio-FEB", 
          "Rua Doutor Deodato Wertheimer", 
          "Avenida Francisco Rodrigues Filho", 
          "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu", 
          "Avenida Francisco Rodrigues Filho", "Praça Kazuo Kimura", 
          "Avenida Manoel Bezerra Lima Filho", 
          "Avenida Vereador Narciso Yague Guimarães", "Rua Olegário Paiva", 
          "Rua Professor Álvaro Pavan", "Terminal Estudantes"
        ]
      }
    },
    {
      "linha": "L007 - Estação Jundiapeba - Taiaçupeba",
      "informacoes_gerais": {
        "pontoA": "Jundiapeba",
        "pontoB": "Taiaçupeba",
        "sentido": "Centro-Bairro | Bairro-Centro",
        "dias_atendidos": ["Úteis", "Sábados", "Domingos/Feriados"],
        "legenda_atendimento": {
          ".": "Regular"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 .", "07:15 .", "10:15 .", "12:05 .", 
            "14:05 .", "16:05 .", "17:45 .", "20:45 .", "22:15 ."
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 .", "07:15 .", "10:15 .", "12:05 .", 
            "14:05 .", "16:05 .", "17:45 .", "20:45 ."
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:45 .", "07:15 .", "14:45 .", 
            "16:15 .", "17:45 ."
          ]
        }
      },
      "itinerarios": {
        "ida": [
          "Estação de Jundiapeba", "Avenida Dona Áurea Martins dos Anjos", 
          "Avenida Presidente Altino Arantes", 
          "Rodovia Engenheiro Cândido do Rego Chaves (Rodovia SP-39)", 
          "Avenida Drº Aureliano Fernandes Schmidt", 
          "Retorno (Hospital Drº Arnaldo Pezzuti Cavalcante)", 
          "Avenida Drº Aureliano Fernandes Schmidt", 
          "Rodovia Engenheiro Cândido do Rego Chaves (Rodovia SP-39)", 
          "Estrada do Karuka", "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)", 
          "Rua Aleixo Costa", "Rua Seis de Junho", 
          "Rua Antonio Pinheiro Nobre"
        ],
        "volta": [
          "Rua Antônio Pinheiro Nobre", "Rua Seis de Junho", 
          "Rua Antonio Pinheiro Nobre", "Rua Alberto Willy Auerbach", 
          "Rodovia Prefeito Francisco Ribeiro Nogueira (SP-102)", 
          "Estrada do Karuka", "Rodovia Engenheiro Cândido do Rego Chaves (Rodovia SP-39)", 
          "Avenida Drº Aureliano Fernandes Schmidt", 
          "Retorno (Hospital Drº Arnaldo Pezzuti Cavalcante)", 
          "Avenida Drº Aureliano Fernandes Schmidt", 
          "Rodovia Engenheiro Cândido do Rego Chaves (SP-39)", 
          "Avenida Presidente Altino Arantes", "Rua Adriano Pereira", 
          "Avenida Dona Áurea Martins dos Anjos", "Estação de Jundiapeba"
        ]
      }
    },
    {
      "linha": "E896 - Jardim Piatã",
      "informacoes_gerais": {
        "ponto_A": "Terminal Estudantes",
        "ponto_B": "Jardim Piatã",
        "sentido": [
          "Centro-Bairro",
          "Bairro-Centro"
        ],
        "dias_atendidos": [
          "Úteis",
          "Sábados",
          "Domingos/Feriados"
        ],
        "legenda_atendimento": {
          "A": "Jardim Piatã",
          "B": "Eco Park",
          "E": "Eco Park/Piatã II"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacao": null
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "03:30 A",
            "04:30 A",
            "05:15 E",
            "05:40 A",
            "06:10 A",
            "06:25 B",
            "07:05 A",
            "07:30 B",
            "08:05 A",
            "08:40 E",
            "09:10 A",
            "09:50 A",
            "10:25 A",
            "11:00 A",
            "11:30 E",
            "12:05 A",
            "12:40 A",
            "13:10 A",
            "13:40 A",
            "14:10 A",
            "14:40 A",
            "15:10 A",
            "15:30 A",
            "15:40 E",
            "16:00 A",
            "16:30 A",
            "16:45 A",
            "17:00 A",
            "17:35 B",
            "18:00 B",
            "18:20 B",
            "18:40 A",
            "19:10 B",
            "19:50 A",
            "20:30 A",
            "21:00 A",
            "22:10 A",
            "22:20 A",
            "22:45 A"
          ]
        },
        "sabado": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "04:30 A",
            "05:30 B",
            "06:00 B",
            "06:30 E",
            "07:35 A",
            "08:40 A",
            "09:50 A",
            "10:30 B",
            "11:30 A",
            "12:00 E",
            "12:50 A",
            "13:50 A",
            "14:40 E",
            "15:20 A",
            "16:15 A",
            "16:40 A",
            "17:00 E",
            "17:40 A",
            "18:45 A",
            "20:15 A",
            "22:20 A"
          ]
        },
        "domingo": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "05:30 A",
            "06:30 E",
            "07:40 A",
            "08:50 A",
            "09:50 A",
            "10:30 A",
            "11:20 E",
            "12:00 A",
            "12:40 A",
            "13:30 E",
            "14:40 A",
            "15:40 A",
            "17:10 A",
            "18:00 E",
            "18:45 A",
            "20:15 A",
            "22:20 A"
          ]
        }
      },
      "itinerarios": {
        "jardim_piata": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Praça Doutor Albert Sabin",
              "Rua Professor Álvaro Pavan",
              "Avenida Manoel Bezerra Lima Filho",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Prefeito Carlos Ferreira Lopes",
              "Contorno (Avenida Professor Ismael Alves dos Santos)",
              "Avenida Prefeito Carlos Ferreira Lopes",
              "Avenida Francisco Rodrigues Filho",
              "Rua Doutor Deodato Wertheimer",
              "Avenida José Meloni",
              "Avenida Lothar Waldemar Hoehne",
              "Avenida Doutor Edison Consolmagno",
              "Acesso Avenida Lothar Waldemar Hoehne",
              "Avenida Lothar Waldemar Hoehne",
              "Rua Cabo Diogo Oliver",
              "Rodovia Pedro Eroles (SP-88)",
              "Estrada Joel Hermenegildo Barbieri",
              "Avenida Guilherme Garijo",
              "Avenida Celeste",
              "Rua Silvandira",
              "Avenida Água das Pedras",
              "Rua Garcia Rodrigues Pais",
              "Rua Pascoal Moreira Cabral",
              "Rua Domingos Jorge Velho",
              "Rua José Antonio Campoy",
              "Rua Mauricio José Oliveira",
              "Rua Soldado José Roberto Ramos",
              "Rua Mauricio José Oliveira",
              "Rua José Antonio Campoy",
              "Rua Domingos Jorge Velho",
              "Rua Pascoal Moreira Cabral",
              "Rua Garcia Rodrigues Pais",
              "Avenida Água das Pedras",
              "Rua Mirandopolis",
              "Rua Miracatu",
              "Rua Ouro Verde",
              "Rua Mombuca",
              "Rua das Monções",
              "Rua Belmonte",
              "Rua Galeão",
              "Rua Guaratinga"
            ],
            "volta": [
              "Rua Guaratinga",
              "Rua Galeão",
              "Rua Belmonte",
              "Rua das Monções",
              "Rua Mombuca",
              "Rua Ouro Verde",
              "Rua Miracatu",
              "Rua Mirandopolis",
              "Avenida Água das Pedras",
              "Rua Garcia Rodrigues Pais",
              "Rua Pascoal Moreira Cabral",
              "Rua Domingos Jorge Velho",
              "Rua José Antonio Campoy",
              "Rua Mauricio José Oliveira",
              "Rua Soldado José Roberto Ramos",
              "Rua Mauricio José Oliveira",
              "Rua José Antonio Campoy",
              "Rua Domingos Jorge Velho",
              "Rua Pascoal Moreira Cabral",
              "Rua Garcia Rodrigues Pais",
              "Avenida Água das Pedras",
              "Rua Silvandira",
              "Avenida Celeste",
              "Avenida Guilherme Garijo",
              "Estrada Joel Hermenegildo Barbieri",
              "Rodovia Pedro Eroles (SP-88)",
              "Rodovia Pedro Eroles (SP-88) Saida B",
              "Avenida Doutor Edison Consolmagno",
              "Avenida Lothar Waldemar Hoehne",
              "Avenida José Meloni",
              "Rua Doutor Deodato Wertheimer",
              "Avenida José Benedito Braga",
              "Rua Cabo Diogo Oliver",
              "Rua Americo Rodrigues Da San Biagio-FEB",
              "Rua Doutor Deodato Wertheimer",
              "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Francisco Rodrigues Filho",
              "Praça Kazuo Kimura",
              "Avenida Manoel Bezerra Lima Filho",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        },
        "eco_park": {
          "sentido": {
            "ida": [
              "Terminal Estudantes",
              "Rua Professor Álvaro Pavan",
              "Praça Doutor Albert Sabin",
              "Rua Professor Álvaro Pavan",
              "Avenida Manoel Bezerra Lima Filho",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Prefeito Carlos Ferreira Lopes",
              "Contorno (Avenida Professor Ismael Alves dos Santos)",
              "Avenida Prefeito Carlos Ferreira Lopes",
              "Avenida Francisco Rodrigues Filho",
              "Rua Doutor Deodato Wertheimer",
              "Avenida José Meloni",
              "Avenida Lothar Waldemar Hoehne",
              "Avenida Doutor Edison Consolmagno",
              "Acesso Avenida Lothar Waldemar Hoehne",
              "Avenida Lothar Waldemar Hoehne",
              "Rua Cabo Diogo Oliver",
              "Rodovia Pedro Eroles (SP-88)",
              "Estrada Joel Hermenegildo Barbieri",
              "Avenida Presidente General Dutra",
              "Rua Agudos",
              "Contorno",
              "Rua Agudos",
              "Avenida Presidente General Dutra",
              "Estrada Joel Hermenegildo Barbieri",
              "Avenida Guilherme Garijo",
              "Avenida Celeste",
              "Rua Silvandira",
              "Avenida Água das Pedras",
              "Rua Garcia Rodrigues Pais",
              "Rua Pascoal Moreira Cabral",
              "Rua Domingos Jorge Velho",
              "Rua José Antonio Campoy",
              "Rua Mauricio José Oliveira",
              "Rua Soldado José Roberto Ramos",
              "Rua Mauricio José Oliveira",
              "Rua José Antonio Campoy",
              "Rua Domingos Jorge Velho",
              "Rua Pascoal Moreira Cabral",
              "Rua Garcia Rodrigues Pais",
              "Avenida Água das Pedras",
              "Rua Mirandopolis",
              "Rua Miracatu",
              "Rua Ouro Verde",
              "Rua Mombuca",
              "Rua das Monções",
              "Rua Santos",
              "Rua Galeão",
              "Rua Guaratinga"
            ],
            "volta": [
              "Rua Guaratinga",
              "Rua Galeão",
              "Rua Santos",
              "Rua das Monções",
              "Rua Mombuca",
              "Rua Ouro Verde",
              "Rua Miracatu",
              "Rua Mirandopolis",
              "Avenida Água das Pedras",
              "Rua Garcia Rodrigues Pais",
              "Rua Pascoal Moreira Cabral",
              "Rua Domingos Jorge Velho",
              "Rua José Antonio Campoy",
              "Rua Mauricio José Oliveira",
              "Rua Soldado José Roberto Ramos",
              "Rua Mauricio José Oliveira",
              "Rua José Antonio Campoy",
              "Rua Domingos Jorge Velho",
              "Rua Pascoal Moreira Cabral",
              "Rua Garcia Rodrigues Pais",
              "Avenida Água das Pedras",
              "Rua Silvandira",
              "Avenida Celeste",
              "Avenida Guilherme Garijo",
              "Estrada Joel Hermenegildo Barbieri",
              "Avenida Presidente General Dutra",
              "Rua Agudos",
              "Contorno",
              "Rua Agudos",
              "Avenida Presidente General Dutra",
              "Estrada Joel Hermenegildo Barbieri",
              "Rodovia Pedro Eroles (SP-88)",
              "Rodovia Pedro Eroles (SP-88) Saida B",
              "Avenida Doutor Edison Consolmagno",
              "Avenida Lothar Waldemar Hoehne",
              "Avenida José Meloni",
              "Rua Doutor Deodato Wertheimer",
              "Avenida José Benedito Braga",
              "Rua Cabo Diogo Oliver",
              "Rua Americo Rodrigues Da San Biagio-FEB",
              "Rua Doutor Deodato Wertheimer",
              "Avenida Francisco Rodrigues Filho",
              "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
              "Avenida Francisco Rodrigues Filho",
              "Praça Kazuo Kimura",
              "Avenida Manoel Bezerra Lima Filho",
              "Avenida Vereador Narciso Yague Guimarães",
              "Rua Olegário Paiva",
              "Rua Professor Álvaro Pavan",
              "Terminal Estudantes"
            ]
          }
        }
      }
    },
    {
      "linha": "L897 - Aruã / Eco Park - Jd. Piatã I via Jd. Piatã II",
      "informacoes_gerais": {
        "pontoA": "Aruã/Eco Park",
        "pontoB": "",
        "sentido": "Circular",
        "dias_atendidos": ["Úteis"],
        "legenda_atendimento": {
          ".": "Regular",
          "Eco Park": "Partida do Bairro"
        },
        "empresa": "Mogi Mob Transporets de Passageiros Ltda",
        "observacoes": ""
      },
      "horarios": {
        "dia_util": {
          "ponto": "A",
          "sentido": "Ida",
          "horarios": [
            "16:50 .",
            "18:10 .",
            "19:30 ."
          ]
        }
      },
      "itinerarios": {
        "ida": [
          "Rua Agudos", "Avenida Presidente General Dutra", 
          "Estrada Joel Hermenegildo Barbieri", "Avenida Guilherme Garijo", 
          "Avenida Celeste", "Rua Silvandira", "Avenida Água das Pedras", 
          "Rua Garcia Rodrigues Paes", "Rua Pascoal Moreira Cabral", 
          "Rua Domingos Jorge Velho", "Rua José Antonio Campoy", 
          "Rua Maurício José Oliveira", "Rua Sergio Gonzáles Novoa", 
          "Rua Soldado Jose Roberto Ramos", "Rua Maurício José Oliveira", 
          "Rua José Antonio Campoy", "Rua Domingos Jorge Velho", 
          "Rua Pascoal Moreira Cabral", "Rua Garcia Rodrigues", 
          "Avenida Água das Pedras", "Rua Mirandopolis", 
          "Rua Miracatu", "Rua Ouro Verde", "Rua Mombuca", 
          "Rua das Monções", "Rua Santos", "Rua Belmonte", 
          "Rua Galeão", "Viaduto", "Estrada do Pium", 
          "Rua Carapicuíba", "Rua Cachoeira de Minas", 
          "Rua Casa Branca", "Rua Barra Velha", 
          "Rua Bragança Paulista", "Estrada do Pium", "Viaduto", 
          "Rua Galeão", "Retorno", "Rua Galeão", "Rua Guaratinga", 
          "Rua Galeão", "Rua Belmonte", "Rua Santos", 
          "Rua das Monções", "Rua Mombuca", "Rua Ouro Verde", 
          "Rua Miracatu", "Rua Mirandopolis", "Avenida Água das Pedras", 
          "Rua Garcia Rodrigues", "Rua Pascoal Moreira Cabral", 
          "Rua Domingos Jorge Velho", "Rua José Antonio Campoy", 
          "Rua Maurício José Oliveira", "Rua Sergio Gonzáles Novoa", 
          "Rua Soldado Jose Roberto Ramos", "Rua Maurício José Oliveira", 
          "Rua José Antonio Campoy", "Rua Domingos Jorge Velho", 
          "Rua Pascoal Moreira Cabral", "Rua Garcia Rodrigues", 
          "Avenida Água das Pedras", "Rua Silvandira", "Avenida Celeste", 
          "Avenida Guilherme Garijo", "Estrada Joel Hermenegildo Barbieri", 
          "Avenida Presidente General Dutra", "Rua Agudos", 
          "Portaria Eco Park"
        ]
      }
    },
    {
      "linhas": [
        {
          "linha": "E898 - Jardim Novo Horizonte",
          "informacoes_gerais": {
            "ponto_A": "Terminal Estudantes",
            "ponto_B": "Novo Horizonte",
            "sentido": [
              "Centro-Bairro",
              "Bairro-Centro"
            ],
            "dias_atendidos": [
              "Úteis",
              "Sábados",
              "Domingos/Feriados"
            ],
            "legenda_atendimento": ". = .",
            "empresa": "Mogi Mob Transporets de Passageiros Ltda",
            "observacao": "Início 29/07/2024"
          },
          "horarios": {
            "dia_util": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "06:00 .",
                "07:00 .",
                "08:00 .",
                "16:15 .",
                "17:15 .",
                "18:15 ."
              ]
            },
            "sabado": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "05:15 .",
                "06:50 .",
                "08:30 .",
                "16:00 .",
                "18:00 .",
                "19:40 ."
              ]
            },
            "domingo": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "06:50 .",
                "16:15 .",
                "18:00 .",
                "19:40 ."
              ]
            }
          },
          "itinerarios": {
            "centro_bairro": {
              "ida": [
                "Terminal Estudantes",
                "Rua Professor Álvaro Pavan",
                "Avenida Manoel Bezerra Lima Filho",
                "Avenida Vereador Narciso Yague Guimarães",
                "Rua Olegário Paiva",
                "Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                "Avenida Prefeito Carlos Ferreira Lopes",
                "Contorno",
                "Avenida Prefeito Carlos Ferreira Lopes",
                "Avenida Francisco Rodrigues Filho",
                "Rua Doutor Deodato Wertheimer",
                "Avenida José Meloni",
                "Avenida Lothar Waldemar Hoehne",
                "Avenida Doutor Edison Consolmagno",
                "Acesso à Avenida Lothar Waldemar Hoehne",
                "Avenida Lothar Waldemar Hoehne",
                "Rua Cabo Diogo Oliver",
                "Rodovia Pedro Eroles (SP-88)",
                "Estrada Joel Hermenegildo Barbieri",
                "Avenida Guilherme Garijo",
                "Avenida Celeste",
                "Rua Silvandira",
                "Avenida Água das Pedras",
                "Rua Garcia Rodrigues Pais",
                "Rua Pascoal Moreira Cabral",
                "Rua Domingos Jorge Velho",
                "Rua José Antonio Campoy",
                "Rua Mauricio José Oliveira",
                "Rua Soldado José Roberto Ramos"
              ],
              "volta": [
                "Rua Soldado José Roberto Ramos",
                "Rua Mauricio José Oliveira",
                "Rua José Antonio Campoy",
                "Rua Domingos Jorge Velho",
                "Rua Pascoal Moreira Cabral",
                "Rua Garcia Rodrigues Pais",
                "Avenida Água das Pedras",
                "Rua Silvandira",
                "Avenida Celeste",
                "Avenida Guilherme Garijo",
                "Estrada Joel Hermenegildo Barbieri",
                "Rodovia Pedro Eroles (SP-88)",
                "Rodovia Pedro Eroles (SP-88) Saída B",
                "Avenida Doutor Edison Consolmagno",
                "Avenida Lothar Waldemar Hoehne",
                "Avenida José Meloni",
                "Rua Doutor Deodato Wertheimer",
                "Avenida José Benedito Braga",
                "Rua Cabo Diogo Oliver",
                "Rua Américo Rodrigues Da San Biagio-FEB",
                "Rua Doutor Deodato Wertheimer",
                "Avenida Francisco Rodrigues Filho",
                "Contorno sobre a Passagem Subterrânea Engenheiro Osvaldo Crespo de Abreu",
                "Avenida Francisco Rodrigues Filho",
                "Praça Kazuo Kimura",
                "Avenida Manoel Bezerra Lima Filho",
                "Avenida Vereador Narciso Yague Guimarães",
                "Rua Olegário Paiva",
                "Rua Professor Álvaro Pavan",
                "Terminal Estudantes"
              ]
            }
          }
        },
        {
          "linha": "L003 - Circular São Sebastião-Taiaçupeba-Bairro dos Pintos",
          "informacoes_gerais": {
            "ponto_A": "São Sebastião",
            "ponto_B": "",
            "sentido": "Circular",
            "dias_atendidos": [
              "Úteis"
            ],
            "legenda_atendimento": ". = Regular",
            "empresa": "Mogi Mob Transporets de Passageiros Ltda",
            "observacao": null
          },
          "horarios": {
            "dia_util": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "05:20 .",
                "06:10 .",
                "07:00 .",
                "07:50 .",
                "16:10 .",
                "17:00 .",
                "17:50 .",
                "18:40 ."
              ]
            },
            "sabado": {
              "ponto": "A",
              "sentido": "Ida",
              "horarios": [
                "06:40 .",
                "07:30 .",
                "08:20 .",
                "16:20 .",
                "17:10 .",
                "18:00 ."
              ]
            }
          },
          "itinerarios": {
            "regular": {
              "ida": [
                "Bairro do São Sebastião",
                "Estrada da Adutora Rio Claro",
                "Rua Seis de Junho",
                "Rua Guararema",
                "Rua Domingos Torquato",
                "Estrada do Bairro dos Pintos",
                "Estrada Barroca de Furnas",
                "Estrada Velha de Taiaçupeba",
                "Rua Antonio Pinheiro Nobre",
                "Rua Seis de Junho",
                "Estrada da Adutora Rio Claro",
                "Bairro do São Sebastião"
              ]
            }
          }
        }
      ]
    }
    
  ]

