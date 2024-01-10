function outerFunction() {
    let outerVar = 'Jsem vnější proměnná';

    function innerFunction() {
        let innerVar = 'Jsem vnitřní proměnná';

        // Demonstration of a closure
        function closureFunction() {
            let closureVar = 'Jsem closure proměnná';
            console.log(outerVar, innerVar, closureVar);
        }

        closureFunction();

        // Asynchronous code
        setTimeout(() => {
            let asyncVar = 'Jsem asynchronní proměnná';
            console.log(innerVar, asyncVar);
        }, 1000);

        // Error handling
        try {
            throw new Error('Ukázka chyby');
        } catch (error) {
            console.error('Chyba zachycena:', error);
        }
    }

    // Loop for breakpoint testing
    for (let i = 0; i < 3; i++) {
        console.log('Iterace cyklu:', i);
    }

    innerFunction();
}

// Running the outer function
outerFunction();