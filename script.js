


//  <button class="btn btn-success" type="button">Order Placed</button>
//  <button class="btn btn-success" type="button">Verifying Order Details</button>
//  <button class="btn btn-success" type="button">Checking Inventory</button>
//  <button class="btn btn-success" type="button">25% of Items Fetched</button>
//  <button class="btn btn-success" type="button">50% of Items Fetched</button>
//  <button class="btn btn-success" type="button">75% of Items Fetched</button>
//  <button class="btn btn-success" type="button">All Items Fetched</button>
//  <button class="btn btn-success" type="button">Order Packed and Ready for Pick Up</button>




let orderPlaced = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Order Placed')
        document.getElementsByClassName('status')[0].classList.replace('btn-light', 'btn-success')
        resolve();
    },1000)
})


let verifyOrder = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Verifying Order Details')
        document.getElementsByClassName('status')[1].classList.replace('btn-light', 'btn-success')

        resolve();
    },2000)
})


let checkInventory = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Checking Inventory')
        document.getElementsByClassName('status')[2].classList.replace('btn-light', 'btn-success')

        resolve();
    },5000)
})

let progress25 =() =>  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('25% of items fetched')
        document.getElementsByClassName('status')[3].classList.replace('btn-light', 'btn-success')

        resolve();
    },3000)
})


let progress50 =() =>  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('50% of items fetched')
        document.getElementsByClassName('status')[4].classList.replace('btn-light', 'btn-success')

        resolve();
    },3000)
})

let progress75 =() =>  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('75% of items fetched')
        document.getElementsByClassName('status')[5].classList.replace('btn-light', 'btn-success')

        resolve();
    },3000)
})

let progress100 =() =>  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('All items fetched')
        document.getElementsByClassName('status')[6].classList.replace('btn-light', 'btn-success')

        resolve();
    },3000)
})

let executeOrder = async () => {
    // console.log('This is Test message')
    // console.log('This is Message 2')
    //  await setTimeout(()=>{ console.log('This is Message Inside SetTime')},5000)
   
    // console.log('This is Message 3')
    // console.log('This is Message 4')

    try{
        await orderPlaced();
        await verifyOrder();
        await checkInventory();
        await progress25();
        await progress50();
        await progress75();
        await progress100();
        console.log('Order Packed and is ready!')
        document.getElementsByClassName('status')[7].classList.replace('btn-light', 'btn-success')

    }
    catch(e)
    {
        console.log(e);
        console.log('Inside Catch Block')
    }
}