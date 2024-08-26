
export function calmoney(priceCents){
   const result = (priceCents / 100).toFixed(2);
   return result;
}


export default calmoney;