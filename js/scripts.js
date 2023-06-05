function handleForm(event) {
    event.preventDefault();
    let userSelect= document.querySelectorAll("input[name=food-option]:checked");
    console.log(userSelect);
    const userArray = Array.from(userSelect);
    let lastArray =[]

    userArray.forEach(function(food) {
        lastArray.push(food.value.toUpperCase());
    });

    console.log(lastArray);
    lastArray.sort();
    console.log(lastArray);
    
 


    
    // // userArray.forEach(function(food) {
    // //     ;
    // // })
    // let newArray = [];
    // let anotherNewArray = [];

    // function test() {
    //     // let newArray = [];
    //     // let anotherNewArray = [];
    //     for (var i=1; i<=7; i++) {
    //         newArray.push(i);
    //         anotherNewArray.push(newArray);
    //     }
    // }
    // anotherNewArray.sort();
    // console.log(anotherNewArray);

    lastArray.forEach(function(food) {

        const listItem = document.createElement("h1");
        listItem.append(food);
        document.body.append(listItem);
    });
    


};

window.addEventListener("load", function() {
    document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});



