let count = 0;

document.getElementById('calculate').addEventListener('click', function(){
    let num0 = parseInt(document.getElementById('num0').value);
    let num1 = parseInt(document.getElementById('num1').value);
    let op = document.getElementById('operator').value;
    let result;
    
    switch(op){
        case '+':
            result = num0 + num1;
            break;
        
        case '-':
            result = num0 - num1;
            break;

        case '/':
            result = num0 / num1;
            break;

        case '*':
            result = num0 * num1;
            break;
    }

    let output = document.createElement('li');
    output.id = 'result'+count;
    document.getElementById('output').append(output);
    document.getElementById('result'+count).innerHTML = num0 + ' ' + op + ' ' + num1 + ' = ' + result;

    count++;
})

