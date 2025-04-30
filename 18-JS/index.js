const print = ()=>console.log("hola desde el callback") 
const print2 = ()=>console.log("hola desde el 2do callback") 

const myfunction = (callback) => {
	console.log("Hola desde la funcion 1")
	setTimeout(() => {
		callback(print)
	}
		, 5000
	)
}

const myfunction2 = (callback) => {
	console.log("Hola desde la funcion 2")
	setTimeout(
			callback
		, 3000)
	}

myfunction(myfunction2)


