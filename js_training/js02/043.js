// 스코프 체인
// Execution Context, Lexical Environment
// Execution Context: 코드가 실행되기 위해 필요한 정보 가지고 있음
let person = 'harin';

function print() {
    let person2 = 'jay';

    function innerPrint() {
        console.log(person);
        console.log(person2);
    }

    innerPrint();

    console.log('print finished')
}

print();
console.log('finished');

// Lexcial Environment
//  └Environment Record
//  └OuterLexicalEnvironment

var ExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            
        },
        OuterLexicalEnvironment: 'ref'
    }    
}