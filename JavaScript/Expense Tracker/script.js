const balanceEl = document.getElementById("balance");
const income = document.getElementById("income");
const expnses = document.getElementById("expnses");
const history = document.getElementById("history");
const Transaction = document.getElementById("Transaction")
const amount = document.getElementById("Amount")
const expnsesform = document.getElementById("expnessform")

let transactions = [];




const userid = () => {
    return Math.floor(Math.random() * 100)
}


const inti = () => {
    history.innerHTML = '';
    transactions.forEach(addTranaction);
    updatevalue();
    Transaction.value = '';
    amount.value = '';

}


const dlelet = (id) => {

    transactions = transactions.filter((transaction) => {
        return transaction.id !== id;
    });

    inti();


}

const updatevalue = () => {
    const incomes = transactions.filter((transaction) => transaction.amountdetails > 0)
        .map((transaction) => transaction.amountdetails)
        .reduce((acc, amountdetails) => acc + amountdetails, 0)

console.log(incomes);
    const expnsss = transactions.filter((transaction) => transaction.amountdetails < 0)
        .map((transaction) => transaction.amountdetails)
        .reduce((acc, amountdetails) => acc + amountdetails, 0)

    const balance = incomes + expnsss;

    balanceEl.innerText = `${balance}`
    income.innerText = `${incomes}`
    expnses.innerText = `${expnsss}`

}

const addTranaction = (transactionsobj) => {
    let { id, transactiondetail, amountdetails } = transactionsobj
    const transactiotaxt = document.createElement('li');
    console.log(transactiotaxt)
    transactiotaxt.innerHTML = `${transactiondetail}<span class="ml-20">${amountdetails}</span><button class=" ml-10 py-1 px-4 bg-white text-lg text-black rounded-xl " onclick="dlelet(${id})">dlelet</button>`
    history.appendChild(transactiotaxt)
    if(amountdetails>0){
        transactiotaxt.classList.add('profit')
    }else{
        transactiotaxt.classList.add('widthdrawl')
    }
}

expnsesform.addEventListener('submit', (e) => {
    e.preventDefault();
    let b = 0;
    const transactiondetail = Transaction.value;
    const amountdetails = Number(amount.value);
    if (transactiondetail && amountdetails) {
        const storeobject = {
            id: userid(),
            transactiondetail,
            amountdetails
        };
        transactions.push(storeobject);
        addTranaction(storeobject)
        inti();
    }


});

console.log(transactions)





























// let transaction=[];
// let a=1

// function add(){
//     const userid=a++;
//     console.log(userid);
// }


// expnsesform.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const transactiondetail=Transaction.value;
//     const amountdetails=Number(amount.value);
//     if(transactiondetail.trim() / amountdetails){
//        const newTransaction={
//         id:add(),
//         transactiondetail,
//         amountdetails,
//        }
//        console.log(newTransaction)
//        transaction.push(newTransaction);
//        addTransaction(newTransaction);

//     }

// })














