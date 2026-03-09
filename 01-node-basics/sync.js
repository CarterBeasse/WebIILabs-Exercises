function getUserSync(id) {
    const timeStop = Date.now() + 2000;

    while (Date.now() < timeStop) {

    }
    return user = {
        userId: id
    };
};

const userOne = getUserSync(1);
console.log(userOne);

const userTwo = getUserSync(2);
console.log(userTwo);

sum = 1+1;
console.log(sum);
