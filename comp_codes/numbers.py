#!/usr/bin/python
# Sshapenmwiezphard: number to words converter
# Author: Bryan Angelo O. Pedrosa

ones = ("nol", "ozn", "do", "tri", "vad", "vid", "ses", "sev", "okt", "non");
big = ("","mil", "milzen", "bilzen", "trilzen", "vadlzen", "vidlzen", "seslzen", "sevlzen", "oktlzen", "nonlzen", "zyelzen", "azelzen");

def wordify(data):
  data__,data = [],str(data)
  if data.isdigit():
    data = [data[::-1][i:i + 3] for i in range(0, len(data), 3)]
    # convert hundreds' block to words
    for i in range(len(data)):
      data_ = list(data[i]) # split all chars
      data__.insert(0, ("" if not(len(data_) >= 1) else ones[int(data_[0])] if (not(len(data_) > 1 and int(data_[0]) == 0)) else ""))
      data__.insert(1, ("" if not(len(data_) >= 2) else ones[int(data_[1])]+"zye" if (int(data_[1]) > 1) else "zye" if (len(data_) != 3) else "zye"+ones[int(data_[0])] if (int(data_[1]) == 1 and int(data_[0]) > 0) else ""))
      data__.insert(2, ("" if not(len(data_) == 3) else ones[int(data_[2])]+"dan" if (int(data_[2]) > 0) else ""))
      data[i] = ("".join(data__[::-1]) + big[i] if (len(data__) >= 1 and "".join(data__) != "") else "")
    return " ".join(data[::-1]);

print(wordify(0));
print(wordify(5));
print(wordify(9));
print(wordify(10));
print(wordify(11));
print(wordify(19));
print(wordify(20));
print(wordify(22));
print(wordify(100));
print(wordify(122));
print(wordify(1220000012345678));

