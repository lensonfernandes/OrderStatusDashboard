


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
        console.log('Promise 1')
        resolve();
    },2000)
})


let orderPlaced2 = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Promise 2')
        resolve();
    },7000)
})


let orderPlaced3 = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Promise 3')
        resolve();
    },5000)
})

let orderPlaced4 =() =>  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Promise 4')
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
        await orderPlaced2();
        await orderPlaced3();
        await orderPlaced4();

    }
    catch(e)
    {
        console.log(e);
        console.log('Inside Catch Block')
    }
}