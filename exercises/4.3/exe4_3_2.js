let param = 5
let var1 = '*';
let var2 = ' ';
let i;

for (i = 0; i < 1; i += 1) {
  var1 = var2 + var1;
};
for (i = 1; i < param; i += 1) {
  var2 = var2 + var1;
  console.log(var2);
};