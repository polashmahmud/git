# 📊 `git status` — Git-এ আপনার অবস্থান জানুন

`git status` কমান্ডটি Git রিপোজিটরির বর্তমান অবস্থা দেখানোর জন্য ব্যবহার করা হয়। এটি আপনাকে বলে দেয়:
- কোন ফাইল পরিবর্তিত হয়েছে
- কোন ফাইল স্টেজ করা আছে
- কোন ফাইল এখনও কমিট হয়নি
- কোন ফাইল untracked (নতুন)

## ✅ মৌলিক কমান্ড

```bash
git status
````


## 🧪 উদাহরণ ১: সবকিছু ঠিকঠাক আছে

```bash
$ git status
On branch main
nothing to commit, working tree clean
```

📌 অর্থ: কোন পরিবর্তন নেই, সবকিছু কমিট হয়ে গেছে।


## 🧪 উদাহরণ ২: নতুন ফাইল তৈরি করা হয়েছে

```bash
$ touch hello.txt
$ git status
On branch main

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    hello.txt

nothing added to commit but untracked files present
```

📌 অর্থ: `hello.txt` নতুন ফাইল, Git এটি ট্র্যাক করছে না।

👉 সমাধান:

```bash
git add hello.txt
```


## 🧪 উদাহরণ ৩: একটি ফাইল পরিবর্তন হয়েছে

```bash
$ echo "new line" >> hello.txt
$ git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
    modified:   hello.txt
```

📌 অর্থ: ফাইলটি আগে ট্র্যাক করা ছিল, কিন্তু এখন নতুন পরিবর্তন হয়েছে, যা এখনও স্টেজ করা হয়নি।

👉 সমাধান:

```bash
git add hello.txt
```


## 🧪 উদাহরণ ৪: স্টেজ ও আনস্টেজ মিশ্রিত অবস্থা

```bash
$ git add hello.txt
$ echo "another line" >> hello.txt
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
    modified:   hello.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
    modified:   hello.txt
```

📌 অর্থ: কিছু অংশ স্টেজ করা হয়েছে, আবার কিছু অংশ unstaged আছে।

👉 দেখতে চাইলে:

```bash
git diff hello.txt       # unstaged changes
git diff --staged        # staged changes
```


## 🧪 উদাহরণ ৫: অনেকগুলো ফাইল নিয়ে কাজ

```bash
$ git status
On branch main
Changes not staged for commit:
    modified:   index.html
    modified:   app.js

Untracked files:
    new-script.js
```
📌 অর্থ: `index.html` ও `app.js` ফাইল পরিবর্তিত হয়েছে, এবং `new-script.js` নতুন ফাইল।

👉 করণীয়:

```bash
git add index.html app.js new-script.js
git commit -m "Updated HTML and JS, added new script"
```


## 🧪 উদাহরণ ৬: ফাইল ডিলিট করা হয়েছে

```bash
$ rm old-file.txt
$ git status
On branch main
Changes not staged for commit:
    deleted:    old-file.txt
```
📌 অর্থ: `old-file.txt` ফাইলটি ডিলিট করা হয়েছে, কিন্তু Git জানে না।

👉 স্টেজ করতে:

```bash
git add -u
# অথবা
git rm old-file.txt
```


## 🧪 উদাহরণ ৭: ফাইল নাম পরিবর্তন (rename)

```bash
$ git mv about.html about-us.html
$ git status
On branch main
Changes to be committed:
    renamed:    about.html -> about-us.html
```
📌 অর্থ: `about.html` ফাইলের নাম পরিবর্তন করা হয়েছে, এবং Git এটি ট্র্যাক করছে।

## 🧪 উদাহরণ ৮: `.gitignore` কাজ করছে কি না?

```bash
$ echo "node_modules/" >> .gitignore
$ mkdir node_modules
$ git status
On branch main
nothing to commit, working tree clean
```

📌 অর্থ: `node_modules/` ফোল্ডার Git ইগনোর করছে।


## 🔍 `git status` কে আরও সংক্ষেপে দেখতে চান?

### সাজেস্টেড ফ্ল্যাগ: `-s` বা `--short`

```bash
$ git status -s
 M index.html
?? new.txt
A  contact.html
```

| প্রতীক | অর্থ                     |
| ------ | ------------------------ |
| `M`    | Modified (পরিবর্তিত)     |
| `A`    | Added (স্টেজড নতুন ফাইল) |
| `??`   | Untracked file (নতুন)    |
| `D`    | Deleted (মুছে ফেলা)      |

## 🧠 কেন `git status` এত জরুরি?

* কী স্টেজ করা হয়েছে আর কী হয়নি — সহজে দেখা যায়
* ভুল করে কিছু বাদ পড়েছে কি না — বুঝে ফেলা যায়
* `.gitignore` ঠিক মতো কাজ করছে কি না যাচাই করা যায়


## 🛠️ প্রাকটিসের জন্য পরামর্শ

1. নতুন ফাইল তৈরি করে দেখুন `git status` কিভাবে রিপোর্ট করে
2. একই ফাইলে একাধিক বার পরিবর্তন করে স্টেজ ও unstaged অবস্থা বুঝুন
3. স্টেজ করে আবার `git restore --staged` দিয়ে স্টেজ মুছে দিন
4. `.gitignore` ফাইল দিয়ে কিছু ফাইল বাদ দিন


## 🎯 সংক্ষেপে মনে রাখুন

| অবস্থা                    | `git status` এ কী দেখায়         |
| ------------------------- | ------------------------------- |
| নতুন ফাইল                 | `Untracked files`               |
| পরিবর্তিত কিন্তু unstaged | `Changes not staged for commit` |
| স্টেজ করা পরিবর্তন        | `Changes to be committed`       |
| ফাইল মুছে ফেলা            | `deleted:`                      |
| ফাইল রিনেম করা            | `renamed:`                      |


## 🔚 উপসংহার

`git status` হলো আপনার Git প্রজেক্টের বর্তমান চিত্র। এটি নিয়মিত চালিয়ে গেলে ভুল কম হবে, সময় বাঁচবে, এবং আত্মবিশ্বাস বাড়বে।
