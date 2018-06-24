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

        this._negociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._negociacoes);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._data.value),
            parseFloat(this._valor.value),
            parseInt(this._quantidade.value)
        );
    }

    _limpaFormulario() {
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0;
        this._data.focus();
    }
}