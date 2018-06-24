class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._negociacoes = new Negociacoes();
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            DateConverter.paraData(this._data.value),
            parseFloat(this._valor.value),
            parseInt(this._quantidade.value)
        );

        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes);
    }
}