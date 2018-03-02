var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Oscar" + i,
            email: "i" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 === 0 ? true : false
        };
        people.push(newPerson);
        if (i == 3 || i == 5) {
            newPerson = {
                name: "Oscar" + i,
                email: "i" + i + "@.com",
                salary: (i + 10000),
                active: i % 2 === 0 ? true : false
            };
            people.push(newPerson);
        }
    }
}
function imprimirPeople() {
    var er = new RegExp("(A-Za)*@gmail.com");
    for (var i = 0; i < people.length; i++) {
        if (people[i].active == true && people[i].email.match(er)) {
            console.log(people[i]);
        }
    }
}
createPeople();
imprimirPeople();
