class Mae{
    nome;
    endereco: string;
    telefone;
    dtNascimento;


    constructor(nomeMae: string, endereco: string, telefone: number, dtNascimentoM: number) {
        this.nome = nomeMae;
        this.endereco = endereco;
        this.telefone = telefone;
        this.dtNascimento = dtNascimentoM;
    }

}

class Bebe extends Mae{
    nome;
    dtNascimento;
    peso;
    altura;
    nomeMedico;


    constructor(nome: string, dtNascimento: number, peso: number, altura: number, nomeMae: string, nomeMedico: string, endereco: string, telefone: number, dtNascimentoM: number){
        
        super(nomeMae, endereco, telefone, dtNascimentoM);
        this.nome = nome;
        this.dtNascimento = dtNascimento;
        this.peso = peso;
        this.altura = altura;
        this.nomeMedico = nomeMedico;

    }
}

class Medico {

    crm;
    nome;
    telefoneCel;
    especialidade;


    constructor(crm: number, nome: string, telefoneCel: number, especialidade: string){
        this.crm = crm;
        this.nome = nome;
        this.telefoneCel = telefoneCel;
        this.especialidade = especialidade;

    }
}
