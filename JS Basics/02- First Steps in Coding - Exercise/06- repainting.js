function repainting(neededNylon, litrePaint, neededThinnerl, hours) {
    let nylonPrice = 1.50 * neededNylon;
    let paintPrice = 14.50 * litrePaint;
    let thinnerPrice = 5 * neededThinnerl;
    let totalPrice = nylonPrice + paintPrice + thinnerPrice + 0.10 * paintPrice + 3 + 0.40;  
    let priceMaster = (0.30 * totalPrice) * hours; 
    let expense = totalPrice + priceMaster ;
    console.log (expense);
}
repainting()  