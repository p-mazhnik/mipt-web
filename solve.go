package main

import (
	"unicode"
	"strings"
	//"fmt"
)

func RemoveEven(input []int) []int {
	slice := make([]int, 0)
	for i := range input {
		if input[i]%2 == 1 {
			slice = append(slice, input[i])
		}
	}
	return slice
}

func DifferentWordsCount(s string) int {
	result := make([]string, 1)
	var j = 0
	var isNotWord = false
	for i:= range s {
		if unicode.IsLetter(rune(s[i])){
			//fmt.Println(string(unicode.ToLower(rune(s[i]))))
			result[j] = result[j] + string(unicode.ToLower(rune(s[i])))
			isNotWord = false
		} else if !isNotWord {
			isNotWord = true
			result = append(result, "")
			j = j + 1
		}
	}
	/*for i := range result {
		fmt.Println(result[i])
	}*/
	var countDifWords = 0
	for i := 0; i < len(result) - 1; i++ {
		if strings.Compare(result[0], result[i]) != 0 {
			countDifWords++
		}
	}
	return countDifWords
}

func PowerGenerator(a int) func() int{
	b := a
	return func() (pow int) {
		pow = b
		b = b * a
		return
	}
}

/*func main() {
	//1
	input := []int{0, 10}
	result := RemoveEven(input)
	fmt.Println(result) // Должно напечататься []
	//2
	gen := PowerGenerator(2)
	fmt.Println(gen()) // Должно напечатать 2
	fmt.Println(gen()) // Должно напечатать 4
	fmt.Println(gen()) // Должно напечатать 8
	//3
	fmt.Println(DifferentWordsCount("Hello, world!HELLO  wOrlD...12")) // Должно напечатать 2
}*/
