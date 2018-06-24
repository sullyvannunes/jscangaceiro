class DateConverter {
    constructor() {
        throw new Error('Esta classe não deve ser instânciada');
    }

    static  paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(texto) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('A string deve ser no formato dddd-mm-aa');

        return new Date(
            ...texto
            .split('-')
            .map((item, indice) => item - (indice %2))
        );
    }
}