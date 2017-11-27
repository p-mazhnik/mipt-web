package main

import (
	"github.com/gorilla/mux"
	"net/http"
	"encoding/json"
	"strconv"
)

type LongUrl struct {
	Url  string `json:"url"`
}

type ShortUrl struct {
	Key  int `json:"key"`
}

var(
	keyId = 0
	URLStore = make(map[int]string)
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", AddURL).Methods("POST")
	r.HandleFunc("/{key}", GetURL)/*.Methods("GET")*/ //Фигурные скобки означают переменную
	http.ListenAndServe(":8082", r)
}

func AddURL(w http.ResponseWriter, r *http.Request) {
	//r - переданный запрос
	//w - ответ
	var MyLongUrl LongUrl
	json.NewDecoder(r.Body).Decode(&MyLongUrl) // записали в itemAdd информацию из json-строки

	var MyShortUrl ShortUrl
	MyShortUrl.Key = keyId
	URLStore[MyShortUrl.Key] = MyLongUrl.Url //записали URL в мэпу
	keyId += 1

	json.NewEncoder(w).Encode(&MyShortUrl)
}

func GetURL(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	InputString := vars["key"]

	Input, err := strconv.Atoi(InputString)
	if err != nil {
		panic(err)
	}
	var MyShortUrl ShortUrl
	MyShortUrl.Key = Input

	w.Header().Set("Location", URLStore[MyShortUrl.Key])
	w.WriteHeader(http.StatusMovedPermanently)
	/*var MyLongUrl LongUrl
	MyLongUrl.Url = URLStore[MyShortUrl.Key]
	j, err := json.Marshal(MyLongUrl)
	if err != nil {
		panic(err)
	}
	w.Write(j)*/
}