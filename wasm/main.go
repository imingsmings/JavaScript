// go:build js && wasm
package main

import "syscall/js"

func main() {
	registerFuncs()
	select {}
}

func registerFuncs() {
	js.Global().Set("goAdd", js.FuncOf(Add))
}

func Add(this js.Value, args []js.Value) any {
	if len(args) < 2 {
		return js.ValueOf("need 2 args")
	}

	a := args[0].Int()
	b := args[1].Int()

	return js.ValueOf(a + b)
}
