function getText() {
  const books = document.getElementsByClassName('book_selection')
  for (var i = 0; i < books.length; i++) {
    books[i].addEventListener("click", function(e){
      e.preventDefault()
      document.getElementById('title').innerHTML = e.target.innerHTML
      fetch(e.target.innerHTML.replace(/[^a-zA-Z]/g, "")+".txt")
      .then(function(response){
        return response.text();
      })
      .then(function(myBook) {
        let text = myBook;
        document.getElementById('hello').innerHTML = text;
      })
      .then(function(){
        $(".word_split").lettering('words');
        getTranslation()
      })
    })
  }
}

function getTranslation() {
  const word = document.getElementsByTagName('span');
  for (let i = 0; i < word.length; i++) {
    word[i].addEventListener("click", function(e) {
      document.querySelector('#translationOutput').innerHTML = " "
      document.getElementById('dictionaryOutput').innerHTML = " "
      document.getElementById('pos').innerHTML = " "
      e.target.style.fontWeight = 600;
      let api_key = 'trnsl.1.1.20190803T205532Z.8647ed72c2fd9935.88fa851b8a0d3b85ed70dc1ceb33a675c477242b';
      fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + api_key + '&text=' + e.target.innerHTML + '&lang=fr-en&format=html')
      .then(function(response) {
        return response.json();
      })
      .then(res => {
        for (var i = 0; i < res.text.length; i++) {
          document.querySelector('#translationOutput').innerHTML = res.text[i].replace(/[^a-zA-Z]/g, " ")
        }
      });
      let api_dictionary = 'dict.1.1.20190805T202709Z.335da31d890b6512.d631a95d13606b8a5c82e663ad3f7f2760869ba1';
      fetch('https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key='+ api_dictionary + '&lang=fr-en&text=' + e.target.innerHTML )
      .then(function(response) {
        return response.json();
      })
      .then(res => {
        if (res.def[0]) {
          for (let i = 0; i < res.def[0].tr.length; i++) {
            document.getElementById('dictionaryOutput').innerHTML += '<p>' + res.def[0].tr[i].text.replace(/[^a-zA-Zá]/g, " ") +  ' <br></p>'
            document.getElementById('pos').innerHTML += '<p>' + res.def[0].tr[i].pos.replace(/[^a-zA-Z]/g, " ") + ' <br></p>'
            console.log(res);
          }
        } else {
          document.getElementById('dictionaryOutput').innerHTML = "<p>None Found</p>"
        }
      })
    })
    word[i].addEventListener("mouseout", function(e) {
      e.target.style.fontWeight = "";
      document.querySelector('#translationOutput').innerHTML = " "
      document.getElementById('dictionaryOutput').innerHTML = " "
      document.getElementById('pos').innerHTML = " "
    });
  };
}


getText();
