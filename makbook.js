
// function for adding memory and delivery 

function addingItemPrice(idmc,idtp,ltotal,num){
   
   // extra memory cost calulate
    const price=document.getElementById(idmc);
   const pricenew=price.innerText;
   const  updateprice=parseFloat(pricenew)+num;
    
    // last total balance calculate for
    const lastpricetext=document.getElementById(ltotal);
    const lasttotalprice=lastpricetext.innerText;

    if(updateprice==num){
        price.innerText=num;
    }
        //total balance calculate for
    const totalprice=document.getElementById(idtp)
    const totalpricenew=totalprice.innerText
     if(updateprice==num){
        totalpricenum=parseInt(totalpricenew)+updateprice;
        totalprice.innerText=totalpricenum;
        lastpricetext.innerText=totalpricenum;
    }

}

// function for defult memory price and delivery charge
function removingItemPrice(priceid,totalp,lasttotal,number){
   
    // extra memory cost calulate
    const mprice=document.getElementById(priceid);
    const  mpricenew=mprice.innerText;
    const  mpricenewnum=parseInt(mpricenew);
   
    
    //total balance calculate for
    const tprice=document.getElementById(totalp);
    const newtotalprice=tprice.innerText;
    const newtotalpricenum=parseInt(newtotalprice);
    

    // last total balance calculate for
    const lastpricetext=document.getElementById(lasttotal);
    const lasttotalprice=lastpricetext.innerText;
    const  lasttotalpricenum=parseInt(lasttotalprice);

    
    if(mpricenewnum==number){
        mprice.innerText=mpricenewnum-number;
        tprice.innerText=newtotalpricenum-number;
        lastpricetext.innerText=lasttotalpricenum-number;
    }
}
    // .......................Memory.....................

// 8GB unified memory button
document.getElementById('memory8gb').addEventListener('click',function(){
    removingItemPrice('extraMempryCost','totalprice','total',180);    
})

//  16GB unified memory button
document.getElementById('memory16gb').addEventListener('click',function(){
    addingItemPrice('extraMempryCost','totalprice','total',180);
})

// .......................Storage.....................


// // adding 256GB SSD storage
document.getElementById('storage256gb').addEventListener('click',function(){
    
    
})



    // adding 512GB storage
    document.getElementById('storage512gb').addEventListener('click',function(){
        addingItemPrice('extraStorageCost','totalprice','total',100);
    })

    // adding 1TB SSD storage
    document.getElementById('storage1tb').addEventListener('click',function(){
    addingItemPrice('extraStorageCost','totalprice','total',180);
    })
    




// .......................Delivery....................

// for paid delivery
document.getElementById('paiddelivery').addEventListener('click',function(){
    addingItemPrice('deliverCharge','totalprice','total',20); 
})

// for free delivery
document.getElementById('freedelivery').addEventListener('click',function(){
    removingItemPrice('deliverCharge','totalprice','total',20); 
})


// after using promor code calculation

document.getElementById('apply').addEventListener('click',function(){
    
    // this for promo code input field
    const promoCodeText=document.getElementById('promoCode');
    const promoCodeInText=promoCodeText.value;

    // this for total value with 20% off 

    const totalamount=document.getElementById('total');
    const totalamountinner=totalamount.innerText;
    const totalamountnum=parseFloat(totalamountinner);

    // here create a condition for check valid promo code
    if(promoCodeInText=='stavinkaku'){
        console.log(totalamountnum);
        totalamount.innerText=totalamountnum-((totalamountnum/100)*20);
    }
    promoCodeText.value='';
})