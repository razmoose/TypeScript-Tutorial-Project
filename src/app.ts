import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';

let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne= new Invoice('yoshi','web work', 250);
docTwo= new Payment('mario','plumbiing work', 200)

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs)
const invOne = new Invoice('mario', 'work on website', 250);
const invTwo = new Invoice('oden', 'work on wano', 500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});


const form = document.querySelector('.new-item-form') as HTMLFormElement ;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})