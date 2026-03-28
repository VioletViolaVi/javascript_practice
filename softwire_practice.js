function solution(n) {

    let str_n = String(n);

    let arr = [];

    let total = 0;

    for(i=0; i < str_n.length; i++){
        arr.push(str_n[i]);
    }  
    console.log(arr);

    for (let i_b = 0; i_b < arr.length; i_b++) {

        const singleNumber = Number(arr[i_b]);
        console.log(singleNumber);

        total += singleNumber
        console.log(total);               
    }

    return total;
}
solution(29);


/*  
    let str_container = "";
    for(i=0; i < str_n.length; i++){              
        
        str_container += str_n[i];   
    }
    console.log(str_container);
    return str_container;
}
solution(29);

*/





/*

// submitted version for code signal platform

function solution(n) {

    let str_n = String(n);
    let arr = [];
    let total = 0;

    for(i=0; i < str_n.length; i++){
        arr.push(str_n[i]);
    }

    for (let i_b = 0; i_b < arr.length; i_b++) {
        const singleNumber = Number(arr[i_b]);
        total += singleNumber            
    }

    return total;
}

*/