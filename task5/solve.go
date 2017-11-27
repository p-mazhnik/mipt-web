package main

import (
	"github.com/gorilla/mux"
	"net/http"
	"encoding/json"
)

type LongUrl struct {
	Url  string `json:"url"`
}

type ShortUrl struct {
	Key  string `json:"key"`
}

var(
	keyId = 0
	KeyString = "q"
	URLStore = make(map[ShortUrl]LongUrl)
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", AddURL).Methods("POST")
	r.HandleFunc("/{key}", GetURL).Methods("GET") //Фигурные скобки означают переменную
	http.ListenAndServe(":8082", r)
}

func AddURL(w http.ResponseWriter, r *http.Request) {
	//r - переданный запрос
	//w - ответ
	var MyLongUrl LongUrl
	json.NewDecoder(r.Body).Decode(&MyLongUrl) // записали в itemAdd информацию из json-строки

	var MyShortUrl ShortUrl
	MyShortUrl.Key = KeyString + string(keyId)
	URLStore[MyShortUrl] = MyLongUrl //записали URL в мэпу
	keyId += 1

	j, err := json.Marshal(MyShortUrl)
	if err != nil {
		panic(err)
	}
	w.Write(j)
}

func GetURL(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	Input := vars["key"]
	var MyShortUrl ShortUrl
	MyShortUrl.Key = Input
	if len(Input) > 0 {
		w.WriteHeader(http.StatusMovedPermanently)
		w.Header().Set("Location", URLStore[MyShortUrl].Url)
	}
}