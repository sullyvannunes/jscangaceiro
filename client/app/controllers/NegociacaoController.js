class NegociacaoController {
    constructor(){
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            DateConverter.paraData(this._data.value),
            parseFloat(this._valor.value),
            parseInt(this._quantidade.value)
        );
    }
}