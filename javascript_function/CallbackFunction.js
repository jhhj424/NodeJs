function one() { 
	return 1;
}
function invoke_and_add(a, b) {
  return a() + b();
}
invoke_and_add(one, function() { 
  return 2; 
});

//3
console.log(invoke_and_add(one, function() { 
  return 2; 
}))