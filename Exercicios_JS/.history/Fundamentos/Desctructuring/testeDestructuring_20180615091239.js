function pow({num1=0,num2=100}){
    const result = Math.pow(num1,num2);
    return (Math.s(result))
}

console.log(pow({num1:2,num2:3}));