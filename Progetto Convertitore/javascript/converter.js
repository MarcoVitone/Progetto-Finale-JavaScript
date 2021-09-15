class Converter {
    constructor(symbolFrom, symbolTo, amount){
        this.host = 'api.frankfurter.app';
        this.symbolFrom = symbolFrom;
        this.symbolTo = symbolTo;
        this.amount = amount;
    }
    
    async getConverter() {
        const response = await fetch(`https://${this.host}/latest?amount=${this.amount}&from=${this.symbolFrom}&to=${this.symbolTo}`)
        const data = await response.json();
        return data;
    }
    
    changeFrom(symbolFrom) {
        this.symbolFrom = symbolFrom;
    }
    
    changeTo(symbolTo) {
        this.symbolTo = symbolTo;
    }
    
    changAmount(amount) {
        this.amount = amount;
    }
}

document.getElementById('button').addEventListener('click', getCurrencyData);

function getCurrencyData(e) {    
    let symbolFrom = document.getElementById('currency-left').value;
    let symbolTo = document.getElementById('currency-right').value;
    let amount = document.getElementById('amount').value;
    const converter = new Converter(symbolFrom, symbolTo, amount);
    const ui = new UI();
    converter.getConverter()
        .then(data => ui.insertData(data))    
        .catch(error => console.log(error));
    
    e.preventDefault();
}


