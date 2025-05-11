# 🔍 Checking Git Status – কী অবস্থায় আছে আপনার প্রজেক্ট?

প্রতিদিনের Git ব্যবহারে সবচেয়ে গুরুত্বপূর্ণ ও নিরাপদ অভ্যাসগুলোর একটি হলো `git status` দিয়ে আপনার প্রজেক্টের অবস্থা চেক করা।

এই গাইডে আমরা দেখব কীভাবে Git স্ট্যাটাস চেক করতে হয়, এবং তার থেকে কী তথ্য পাওয়া যায় — অনেক রিয়েল লাইফ উদাহরণসহ।

## 📌 কেন `git status` এত গুরুত্বপূর্ণ?

- কোন ফাইলগুলো পরিবর্তিত হয়েছে দেখতে
- কোনগুলো স্টেজ করা হয়েছে, কোনগুলো হয়নি তা বুঝতে
- নতুন (untracked) ফাইলগুলো চিহ্নিত করতে
- ভুল কমিট করার সম্ভাবনা কমাতে

---

## 🧪 উদাহরণ ১: নতুন প্রজেক্টে কোনো পরিবর্তন নেই

```bash
$ git init
$ git status
On branch main
No commits yet
nothing to commit (create/copy files and use "git add" to track)
````

📌 অর্থ: এখনও কোনো ফাইল অ্যাড বা কমিট করা হয়নি।

---

## 🧪 উদাহরণ ২: নতুন একটি ফাইল তৈরি করলে কী হয়?

```bash
$ echo "Hello Git" > hello.txt
$ git status
Untracked files:
  (use "git add <file>..." to include in what will be committed)
    hello.txt
```

📌 Git বলছে, `hello.txt` নামের ফাইলটি নতুন এবং এটি ট্র্যাক করা হচ্ছে না।

✅ সমাধান:

```bash
git add hello.txt
```

---

## 🧪 উদাহরণ ৩: ফাইল স্টেজ করার পর কী দেখায়?

```bash
$ git add hello.txt
$ git status
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
    new file:   hello.txt
```

📌 অর্থ: ফাইলটি স্টেজ হয়েছে, এখন কমিটের জন্য প্রস্তুত।

---

## 🧪 উদাহরণ ৪: স্টেজ করার পর আবার পরিবর্তন করলে কী হয়?

```bash
$ echo "Another line" >> hello.txt
$ git status
Changes to be committed:
    new file:   hello.txt

Changes not staged for commit:
    modified:   hello.txt
```

📌 এক ফাইলেই এখন দুটি অবস্থা: এক অংশ স্টেজড, আরেক অংশ unstaged।

---

## 🧪 উদাহরণ ৫: একাধিক ফাইল নিয়ে কাজ

```bash
$ echo "A" > a.txt
$ echo "B" > b.txt
$ git add a.txt
$ git status
Changes to be committed:
    new file:   a.txt

Untracked files:
    b.txt
```

📌 `a.txt` স্টেজ করা হয়েছে, `b.txt` এখনও untracked।

---

## 🧪 উদাহরণ ৬: ফাইল মুছে ফেললে Git কী দেখায়?

```bash
$ rm a.txt
$ git status
Changes not staged for commit:
    deleted:    a.txt
```

📌 Git বলছে — `a.txt` ফাইলটি মুছে ফেলা হয়েছে, কিন্তু এটি এখনও কমিট হয়নি।

👉 সমাধান:

```bash
git add -u       # সব পরিবর্তন স্টেজ করবে
# অথবা
git rm a.txt     # একসাথে স্টেজ এবং ফাইল মুছে ফেলবে
```

---

## 🧪 উদাহরণ ৭: ফাইল রিনেম করলে

```bash
$ git mv b.txt b-renamed.txt
$ git status
Changes to be committed:
    renamed:    b.txt -> b-renamed.txt
```

📌 Git নিজে বুঝে নেয় এটি একটি রিনেম অপারেশন।

---

## 🧪 উদাহরণ ৮: `.gitignore` ফাইল কাজ করছে কিনা পরীক্ষা করা

```bash
$ echo "logs/" > .gitignore
$ mkdir logs
$ touch logs/app.log
$ git status
nothing to commit, working tree clean
```

📌 অর্থ: `.gitignore` কাজ করছে, তাই `logs/` ফোল্ডার Git উপেক্ষা করছে।

---

## 🧪 উদাহরণ ৯: সংক্ষিপ্ত (Short) স্ট্যাটাস দেখতে

```bash
$ git status -s
 M index.html
?? newfile.js
A  about.html
```

📌 ছোট করে দেখা গেলে দ্রুত বোঝা যায় কোন ফাইল কোন অবস্থায় আছে।

| চিহ্ন | অর্থ                    |
| ----- | ----------------------- |
| `M`   | Modified (পরিবর্তিত)    |
| `A`   | Added (স্টেজ করা হয়েছে) |
| `??`  | Untracked (নতুন ফাইল)   |

---

## 🧠 Git Status দেখা একটি অভ্যাসে পরিণত করুন

প্রতি ধাপে `git status` চালালে আপনি জানতে পারবেন:

| প্রশ্ন                 | উত্তর                                                    |
| ---------------------- | -------------------------------------------------------- |
| কোন ফাইলগুলো কমিট হবে? | `Changes to be committed:` সেকশন দেখে বুঝবেন             |
| নতুন ফাইল কি আছে?      | `Untracked files:` অংশে                                  |
| স্টেজ না করা পরিবর্তন? | `Changes not staged for commit:`                         |
| কিছু ভুল করে ফেলেছি?   | `git restore` বা `git reset` ব্যবহার করে ঠিক করতে পারবেন |

---

## 💡 pro টিপস

* শুধু `git status` না, মাঝে মাঝে `git diff` দিয়ে লাইনে লাইনে পার্থক্য দেখুন
* অনেক সময় ভুল বুঝে কিছু ফাইল স্টেজ করে ফেলেন — তখন `git restore --staged <file>` কাজে আসে
* `.gitignore` তৈরির পরে স্ট্যাটাস চেক করে যাচাই করুন সেটা কাজ করছে কিনা

---

## 🔚 উপসংহার

`git status` হচ্ছে Git ব্যবহারকারীদের সবচেয়ে বিশ্বস্ত সহচর। এটি রোজকার কাজে আপনাকে সঠিক দিক দেখায় যেন আপনি ভুল কমিট বা ডিলিট না করেন। প্রতিটি ধাপের পরে এটি চালানো আপনার প্রজেক্টকে নিরাপদ রাখে।
