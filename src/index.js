// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    let H = Math.floor(currency/50);
    let Q = Math.floor((currency - 50*H)/25);
    let D = Math.floor((currency - 50*H - 25*Q)/10);
    let N = Math.floor((currency - 50*H - 25*Q - 10*D)/5);
    let P = Math.floor((currency - 50*H - 25*Q - 10*D - 5*N));
    let arr = [];
    if (H > 0) {
    	let strH = '"H": '+H;
    	arr.push(strH);
    }
    if (Q > 0) {
    	let strQ = '"Q": '+Q;
    	arr.push(strQ);
    }
    if (D > 0) {
    	let strD = '"D": '+D;
    	arr.push(strD);
    }
    if (N > 0) {
    	let strN = '"N": '+N;
    	arr.push(strN);
    }
    if (P > 0) {
    	let strP = '"P": '+P;
    	arr.push(strP);
    }
    arr = arr.toString();
    return eval ("({"+arr+"})");
}
