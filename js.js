var arr = [1,2,3,1,2,3,4,5,6,7];
var n = [];

for(var i = 0; i < arr.length; i++){
	if(n.indexOf(arr[i])==-1){
		n.push(arr[i])
	}
}
console.log(n);