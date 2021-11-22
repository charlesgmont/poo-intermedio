const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
};

const obj2 = {};
    for (prop in obj1) {
        obj2[a] = obj1[prop];
}

const obj3 = Object.assign(pendiente, obj1);
const obj4 = Object.create(obj1)