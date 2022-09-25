export function verificaNome(nome) {
    //nome = nome.toLowerCase();
    const regex = /[^a-zà-ú a-zà-ú]/gi;
    const verificacao = nome.match(regex);
    //console.log(!!verificacao)
    return !!verificacao;
}

// extraido de https://www.geradorcpf.com/javascript-validar-cpf.htm
export function verificaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return true;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999")
        return true;
    // Valida 1o digito	
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9)))
        return true;
    // Valida 2o digito	
    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
        return true;
    return false;
}

export function verificaObservacao(obs){
    //console.log(obs.length)
    return obs.length > 300 ? true : false;
}