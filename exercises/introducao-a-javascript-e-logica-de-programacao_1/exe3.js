let a = 8;
let b = 8;
let c = 8;

if (a != b && a != c && b != c) {
    if (a > b && a > c) {
        console.log("O maior número é " + a);
    } else if (b > a && b > c) {
        console.log("O maior número é " + b);
    } else {
        console.log("O maior número é " + c);
    }
}
if (a == b && a != c) {
    if (a > c) {
        console.log("O maior número é " + a);
    } else {
        console.log("O maior número é " + c);
    }
}
if (a == c && b != c) {
    if (a > b) {
        console.log("O maior número é " + a);
    } else {
        console.log("O maior número é " + b);
    }
}
if (b == c && b != a) {
    if (a > a) {
        console.log("O maior número é " + b);
    } else {
        console.log("O maior número é " + a);
    }
}
if (a == b && a == c) {
    console.log("Os três números sâo iguais");
}