const fibonacciIter ={
    [Symbol.iterator]: ()=>{
        let back_1 =0;
        let back_2 =1;
        let current = 1; //back_1+back_2
        return{
            next:() => {
                current = back_1+back_2;
                back_2 =back_1;
                back_1=current;
                return{done: false, value: current};
            }
        };
    }
};




export { fibonacciIter };
