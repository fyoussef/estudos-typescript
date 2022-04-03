const objetoA: {
    chaveA: string,
    chaveB: string,
    chaveC?: string,
    [key: string]: unknown // index signature
} = {
    chaveA: 'valorA',
    chaveB: 'valorB'
}

objetoA.chaveA = 'Outro valor' // OK
objetoA.chaveC = 'Nova chave' // no typescript não é permitido fazer isso sem tipar o objeto
// Só pe possivel se o objeto permitir ou se tiver um index signature
objetoA.chaveD = 'valor D'
