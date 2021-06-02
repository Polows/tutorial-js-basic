let nameUser = 'John'; //Scope global


const Hello = () => {
    let surname = 'Doe'; // Scope block
    console.log(`name: ${nameUser} surname: ${surname}`);
}

Hello();

//console.log(surname)

// Scope lexico
const function1 = () => {
    let hello = 'Hello from function 1';
    const function2 = () => {
        console.log(hello);
    }
    return function2();
}

function1();