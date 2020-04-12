// Sshapenmwiezphard: number to words converter
// Author: Bryan Angelo O. Pedrosa

const ones = ["nol", "ozn", "do", "tri", "vad", "vid", "ses", "sev", "okt", "non"];
const big = ["","mil", "milzen", "bilzen", "trilzen", "vadlzen", "vidlzen", "seslzen", "sevlzen", "oktlzen", "nonlzen", "zyelzen", "azelzen"];

function wordify(data){
  var i, data_;
  if(Number.isInteger(data)){
    data = data.toString().match(/.{1,3}(?=(.{3})*$)/g).reverse();
    // convert hundreds' block to words
    for(i=0;i<data.length;i++){
      data_ = data[i].split("").reverse(); // split all chars
      data_[0] = (data_.length >= 1) ? (!(data_.length > 1 && parseInt(data_[0]) == 0)) ? ones[parseInt(data_[0])] : "" : "";
      data_[1] = (data_.length >= 2) ? (parseInt(data_[1]) == 1 && parseInt(data_[0]) > 0) ? "zye"+ones[parseInt(data_[0])] : (parseInt(data_[1]) > 1) ? ones[parseInt(data_[1])]+"zye": (data_.length != 3) ? "zye" : "" : "";
      data_[2] = (data_.length == 3) ? (parseInt(data_[2]) > 0) ? ones[parseInt(data_[2])]+"dan" : "" : "";
      data[i] = (data_.length >= 1 && data_.join("") != "") ? data_.reverse().join("") + big[i] : "";
    }
    return data.reverse().join(" ");
  }
}
console.log(wordify(0));
console.log(wordify(5));
console.log(wordify(9));
console.log(wordify(10));
console.log(wordify(11));
console.log(wordify(19));
console.log(wordify(20));
console.log(wordify(22));
console.log(wordify(100));
console.log(wordify(122));
console.log(wordify(12200000));

