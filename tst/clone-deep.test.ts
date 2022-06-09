import { cloneDeep } from "../src";

describe("clone deep", () => {
  test("must clone deep successfully", async () => {
    const douglasAdams = {
      idade: 49,
      nome: "Douglas Adams",
      livros: [
        "O Guia do Mochileiro das Galáxias",
        "O Restaurante no Fim do Universo",
        "A Vida, o Universo e Tudo Mais",
        "Até mais, e Obrigado pelos Peixes",
        "Praticamente Inofensiva",
      ],
      metadados: {
        anoNascimento: 1952,
      },
    };

    const cloneDouglasAdams = cloneDeep(douglasAdams);

    expect(cloneDouglasAdams).toEqual(douglasAdams);

    cloneDouglasAdams.idade = 200;
    cloneDouglasAdams.nome = "Douglas Adams 2.0";
    cloneDouglasAdams.livros.push("O Salmão da Dúvida");
    cloneDouglasAdams.metadados.anoNascimento = 3000;

    expect(douglasAdams.idade).toEqual(49);
    expect(douglasAdams.nome).toEqual("Douglas Adams");
    expect(douglasAdams.livros).toEqual([
      "O Guia do Mochileiro das Galáxias",
      "O Restaurante no Fim do Universo",
      "A Vida, o Universo e Tudo Mais",
      "Até mais, e Obrigado pelos Peixes",
      "Praticamente Inofensiva",
    ]);
    expect(douglasAdams.metadados.anoNascimento).toEqual(1952);

    expect(cloneDouglasAdams.idade).toEqual(200);
    expect(cloneDouglasAdams.nome).toEqual("Douglas Adams 2.0");
    expect(cloneDouglasAdams.livros).toEqual([
      "O Guia do Mochileiro das Galáxias",
      "O Restaurante no Fim do Universo",
      "A Vida, o Universo e Tudo Mais",
      "Até mais, e Obrigado pelos Peixes",
      "Praticamente Inofensiva",
      "O Salmão da Dúvida",
    ]);
    expect(cloneDouglasAdams.metadados.anoNascimento).toEqual(3000);
  });
});
