document.getElementById('formChave').addEventListener('submit', function(event)
{
    event.preventDefault();

    const primo1 = document.getElementById('primo1Crip').value;
    const primo2 = document.getElementById('primo2Crip').value;
    const expoente = document.getElementById('expoenteCrip').value;
    const chavePub = primo1 * primo2;
    const chavePri = primo1 * primo2 ^ expoente;

    const chavePubView = document.querySelector('#chavePublica');
    chavePubView.textContent = chavePub;

    const chavePriView = document.querySelector('#chavePrivada');
    chavePriView.textContent = chavePri;
})

document.getElementById('formEncriptografar').addEventListener('submit', function(event)
{
    event.preventDefault();

    const chavePub2 = document.getElementById('chavePublica2').value;
    const mensagem = document.getElementById('mensagem').value;

    const mensagemView = document.querySelector('#mensagemCriptografada');
    mensagemView.textContent = "HD0821HFO3JF290HG9024HG9340G203HG023GH329";
})

document.getElementById('formDescriptografar').addEventListener('submit', function(event)
{
    event.preventDefault();

    const primo1Desc = document.getElementById('primo1Desc').value;
    const primo2Desc = document.getElementById('primo2Desc').value;
    const expoenteDesc = document.getElementById('expoenteDesc').value;
    const mensagem2 = document.getElementById('mensagem2').value;

    const mensagemView = document.querySelector('#mensagemDescriptografada');
    mensagemView.textContent = "Alguma mensagem";
})