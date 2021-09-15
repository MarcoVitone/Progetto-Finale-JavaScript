class UI{
    constructor(){
        this.rates = document.getElementById('rates'); 
        
    }

    insertData(data) {
       this.rates.value = Object.values(data.rates);
    }      
}

class UIH{
    constructor(){
        this.currency = document.getElementById('currency-right').value;
        
    }

     insertDataH(dataH) {
        this.hData = Object.keys(dataH.rates);
        this.hCurrency = Object.values(dataH.rates);
        this.hCurrencyArr = Object.values(dataH.rates).map(function(array){
            return Object.values(array);
        })
        this.hCurrencyStr = this.hCurrencyArr.toString();
        this.hRates = this.hCurrencyStr.split(/[ ,]+/);
        
        let ctx = document.getElementById('myChart').getContext('2d');
        this.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.values(this.hData),
                datasets: [{ 
                    data: this.hRates,
                    label: this.currency,
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                }
                ]
            }
        });

        this.maxRates = this.hRates.reduce(function(a, b) {
                        return Math.max(a, b);
                        }, 0);
        
        this.minRates = this.hRates.reduce(function(a, b) {
                        return Math.min(a, b);
                        }); 
        this.arrayRates = [Object.values(this.hRates)];
        
        let somma=0;
        for(let i=0; i<this.arrayRates[0].length; i++){
        somma += parseFloat(this.arrayRates[0][i]);
        }
        this.averageRates = somma /= this.arrayRates[0].length;  
        this.averageRates = this.averageRates.toFixed(4);   

        document.getElementById('min').innerHTML = `Minimum value: ${this.minRates}`;
        document.getElementById('max').innerHTML = `Maximum value: ${this.maxRates}`;
        document.getElementById('average').innerHTML = `Average value: ${this.averageRates}`;


    }
}