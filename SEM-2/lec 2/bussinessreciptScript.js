
const price= 500; // price per item
let d = 0.1; // 10% discount
let gst = 0.18; // 18% GST

function calprice(q){
    let tp = price * q;
    if(q >= 10){tp = tp - tp * d;}
    let gstP = tp*gst;
    let Fprice = tp + gstP;

    console.log("total price before gst: ", tp);
    console.log("gst amount: ", gstP);  

    console.log("amount to be paid: ", Fprice);

}

calprice(10); // for 10 items