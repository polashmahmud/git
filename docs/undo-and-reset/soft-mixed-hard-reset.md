# 🔁 Git Reset

Git reset কমান্ড দিয়ে আপনি `HEAD`, `staging area (index)`, এবং `working directory`-কে নিয়ন্ত্রণ করতে পারেন।

`reset` এর প্রধান ৩টি মোড আছে:

1. `--soft`
2. `--mixed` (ডিফল্ট)
3. `--hard`

## 🔍 সংক্ষেপে পার্থক্য:

| রিসেট টাইপ | HEAD পরিবর্তন | Index (staging) পরিবর্তন | Working Directory পরিবর্তন | ফাইল থাকে কি? |
| ---------- | ------------- | ------------------------ | -------------------------- | ------------- |
| `--soft`   | ✅ হয়          | ❌ হয় না                  | ❌ হয় না                    | ✅ ফাইল থাকে   |
| `--mixed`  | ✅ হয়          | ✅ হয়                     | ❌ হয় না                    | ✅ ফাইল থাকে   |
| `--hard`   | ✅ হয়          | ✅ হয়                     | ✅ হয়                       | ❌ ফাইল হারায়  |

## ১️. `git reset --soft`

### 📌 কাজ:

* শুধু **HEAD** কে পেছনে নিয়ে যায়
* ফাইলগুলো **staged** অবস্থায়ই থাকে

### 🎯 উদাহরণ:

```bash
git reset --soft HEAD~1
```

আপনি শেষ যে কমিটটি করেছেন, সেটা মুছে যাবে কিন্তু আপনার সব ফাইল এখনো staging area-তে থাকবে।

```bash
git status
# Output: Changes to be committed: (staged files)
```

### 🛠️ কখন ব্যবহার করবেন?

* আপনি শেষ কমিট মেসেজে ভুল করেছেন
* অথবা একাধিক কমিট একটিতে করতে চান

## ২️. `git reset --mixed` (default)

### 📌 কাজ:

* **HEAD** এবং **staging area** (index) পেছনে নিয়ে যায়
* ফাইলগুলো working directory-তে রাখে (staged না)

### 🎯 উদাহরণ:

```bash
git reset --mixed HEAD~1
```

এবার `git status` দিলে দেখবেন ফাইলগুলো modified হিসেবে দেখাচ্ছে, কিন্তু unstaged।

### 🛠️ কখন ব্যবহার করবেন?

* ফাইলের কাজ ঠিক আছে, কিন্তু আপনি নতুন করে stage ও commit করতে চান

## ৩. `git reset --hard`

### 📌 কাজ:

* সব কিছু (HEAD, staging, working directory) পেছনে নিয়ে যায়
* আপনার শেষ করা কাজ পুরোপুরি **হারিয়ে যায়**

### 🎯 উদাহরণ:

```bash
git reset --hard HEAD~1
```

> ⚠️ সাবধান! এটি করার পর আগের কাজ ফেরত পাবেন না (যদি backup না থাকে)

### 🛠️ কখন ব্যবহার করবেন?

* আপনি পুরোপুরি সব বাতিল করতে চান
* যেমন: ভুলে `.env` বা credentials commit করে ফেলেছেন

## 📚 আরও উদাহরণ:

### ✅ একাধিক কমিট undo করতে চান?

```bash
git reset --soft HEAD~3
```

👉 শেষ ৩টি কমিট বাতিল, কাজ থাকবে staged হিসেবে

```bash
git reset --mixed HEAD~2
```

👉 শেষ ২টি কমিট বাতিল, কাজ থাকবে unstaged হিসেবে

```bash
git reset --hard HEAD~5
```

👉 শেষ ৫টি কমিট ও কাজ মুছে যাবে, সাবধান!

## ✅ Re-commit করার উদাহরণ (soft reset সহ)

```bash
git reset --soft HEAD~1
git commit -m "নতুন ও ঠিক করা কমিট মেসেজ"
```

## ✅ Reset করার পর আবার Push করতে চান?

```bash
git push origin main --force
```

> ⚠️ টিমে কাজ করলে `--force` ব্যবহারে সতর্ক থাকুন।

## ✅ Git Reset vs Git Revert

| কাজ                      | Reset | Revert |
| ------------------------ | ----- | ------ |
| কমিট মুছে ফেলে           | ✅     | ❌      |
| আগের মতো commit রেখে যায় | ❌     | ✅      |
| History পরিষ্কার         | ✅     | ❌      |
| টিমে নিরাপদ              | ❌     | ✅      |


## ✅ কিছু alias মনে রাখার জন্য

```bash
# soft reset (শুধু কমিট মুছে)
alias grs='git reset --soft HEAD~1'

# mixed reset (কমিট + stage বাতিল)
alias grm='git reset --mixed HEAD~1'

# hard reset (সব মুছে)
alias grh='git reset --hard HEAD~1'
```

## 🔚 উপসংহার

Git reset-এর এই ৩টি ধরন আপনার version history পরিচালনায় অনেক সহায়ক। নিচের বিষয়গুলো মনে রাখুন:

* `--soft`: কমিট বাতিল, কাজ staged থাকবে
* `--mixed`: কমিট + stage বাতিল, কাজ থাকবে unstaged
* `--hard`: সব বাতিল, কাজ হারিয়ে যাবে
