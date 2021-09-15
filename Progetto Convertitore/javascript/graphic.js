class Historycal {
    constructor(symbolFrom, symbolTo, date){
        this.host = 'api.frankfurter.app';
        this.symbolFrom = symbolFrom;
        this.symbolTo = symbolTo;
        this.date = date;
    }
    
    async getHistorycal() {
        const response = await fetch(`https://${this.host}/${this.date}..?from=${this.symbolFrom}&to=${this.symbolTo}`)
        const dataH = await response.json();
        return dataH;
    }
    
    changeFrom(symbolFrom) {
        this.symbolFrom = symbolFrom;
    }
    
    changeTo(symbolTo) {
        this.symbolTo = symbolTo;
    }

    changeDate(date) {
        this.date = date;
    }  
}

document.getElementById('button').addEventListener('click', getHistorycalData);

function getHistorycalData(e) {    
    let symbolFrom = document.getElementById('currency-left').value;
    let symbolTo = document.getElementById('currency-right').value;
    let date;
    let revDate;

    if (document.getElementById('date').value != "") {
        date = document.getElementById('date').value;
        revDate = date.replace(/-/g, " ").split(" ").reverse().toString().replace(/,/g, "-");
        document.getElementById('graphic-title').textContent = `Exchange rate ${symbolTo} from: ${revDate}`;

    } else{
        date = new Date();
        date.setDate(date.getDate()-30);
        date = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`
        revDate = date.replace(/-/g, " ").split(" ").reverse().toString().replace(/,/g, "-");
        document.getElementById('graphic-title').textContent = `Exchange rate ${symbolTo} from: ${revDate}`;
    }
    const historycal = new Historycal(symbolFrom, symbolTo, date);
    const uih = new UIH();
    historycal.getHistorycal()
        .then(dataH => uih.insertDataH(dataH))   
        .catch(error => console.log(error));
    
    e.preventDefault();
}
