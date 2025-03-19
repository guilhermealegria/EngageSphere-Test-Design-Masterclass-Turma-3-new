const soap = require('soap')


module.exports = {
    soaprequest() {
        return new Promise((resolve, reject) => {
            const baseUrl = 'http://www.dneonline.com/calculator.asmx'
            soap.createClient('http://www.dneonline.com/calculator.asmx?wsdl', (err, client) => {
                if(err){
                    reject(err)
                } else {
                    const args = {
                        intA: 1,
                        intB: 2
                    }
                    client['Add'](args, (err, resul, rawRequest) => {
                        console.log(rawRequest)
                        resolve(rawRequest)
                    }, {mock: true})
                }
            })
            
          })
    }
}