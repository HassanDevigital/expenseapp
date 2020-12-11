//get All transactions 
//Get /api/v1/transactions
// GET method

exports.getTransactions = (req, res, next) =>{

res.send('GetTransactiosn')

}

//Add transactions
//POST /api/v1/transactions
//POST method

exports.addTransactions = (req, res, next) =>{

    res.send('ADD transactions')
}


//DELTE transactions 
//route  Delet/api/v1/transactions:id
//DELTE

exports.deleteTransactions = (req, res, next) =>{

    res.send(' DELETE Transactiosn')
    
    }