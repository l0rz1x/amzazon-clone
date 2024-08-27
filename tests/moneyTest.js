import { calmoney } from '../scripts/utils/money.js';

console.log('case suit: formatCurrency');

console.log('convert cents into dollars');
if(calmoney(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('works with 0');
if(calmoney(0) === '0.00'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('rounds up to nearest cent');
if(calmoney(2000.5) === '20.01'){
    console.log('passed');
}else{
    console.log('failed');
}

