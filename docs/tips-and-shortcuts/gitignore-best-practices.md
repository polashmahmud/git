# 🛡️ `.gitignore` ব্যবহার করার সেরা পদ্ধতি


## 🔍 `.gitignore` কী?

`.gitignore` একটি বিশেষ ফাইল যা Git-কে বলে দেয় কোন কোন ফাইল বা ফোল্ডার version control-এর বাইরে রাখা হবে।
এই ফাইলটি ব্যবহার করে আপনি **build files, sensitive credentials, system-specific ফাইল** ইত্যাদি Git এ না তোলার ব্যবস্থা করতে পারেন।

## 📂 কোথায় `.gitignore` রাখা হয়?

* সাধারণত, `.gitignore` রাখা হয় **প্রজেক্ট রুট ডিরেক্টরিতে**।
* আপনি চাইলে সাব-ডিরেক্টরিতেও `.gitignore` রাখতে পারেন।
* আর চাইলে গ্লোবাল লেভেলেও `.gitignore` সেট করতে পারেন (সবার নিচে ব্যাখ্যা করা হয়েছে)।

## 🧠 কেন `.gitignore` গুরুত্বপূর্ণ?

* **ক্লিন রিপোজিটরি রাখে** — অপ্রয়োজনীয় `.log`, `.DS_Store`, `node_modules`, `vendor` এসব ফাইল আপনার কোডবেইজে আসবে না।
* **security বজায় রাখে** — `.env`, API key, credentials ইত্যাদি Git এ উঠবে না।
* **অন্যদের জন্য ঝামেলা কমায়** — IDE-specific বা OS-specific ফাইল অন্য ডেভেলপারদের সমস্যায় ফেলবে না।


## ✅ সবচেয়ে সাধারণ `.gitignore` উদাহরণ (Laravel Project)

```
/node_modules
/public/hot
/public/storage
/storage/*.key
/vendor
.env
.phpunit.result.cache
Homestead.json
Homestead.yaml
/.vagrant
/.idea
.DS_Store
```

## 💡 বেস্ট প্র্যাকটিসসমূহ

### 1. **Sensitive ফাইল Git-এ না তোলা**

**ভুল:**

```
.env
```

গিটে `.env` একবার উঠিয়ে ফেললে `.gitignore` পরে কাজ করবে না।

**ঠিক কাজ:**
`.env` তৈরি করার আগেই `.gitignore` এ যুক্ত করুন।

### 2. **`node_modules/` কখনো গিটে তুলবেন না**

```bash
node_modules/
```

> এই ফোল্ডার খুব বড় হয়, এবং এতে বাইরের প্যাকেজ থাকে — পুনরায় install করলেই চলবে।

### 3. **বিল্ড আউটপুট, IDE, OS ফাইল বাদ দিন**

#### 🔧 Common IDE files:

```
.idea/
.vscode/
```

#### 🖥️ OS-specific files:

```
.DS_Store     # macOS
Thumbs.db     # Windows
```

### 4. **কম্পাইল্ড ফাইল বাদ দিন**

```
*.class
*.pyc
*.o
*.out
```

### 5. **লগ ফাইল বাদ দিন**

```
*.log
logs/
```

### 6. **Custom ক্যাশ বা ব্যাকআপ ফাইল**

```
*.swp
*.bak
*.tmp
```

## 🏗️ ফোল্ডার ইগনোর করার নিয়ম

### শুধু ফোল্ডার:

```
/storage/logs/
```

### ফোল্ডার সহ ভিতরের সব:

```
/storage/*
```

## 🧪 কিছু উন্নত `.gitignore` নিয়ম

### ✅ শুধু একটি নির্দিষ্ট টাইপ বাদ দিন

```
*.log
```

### ✅ একটি ফাইল বাদ দিন, কিন্তু এর মধ্যে একটি আবার অনুমোদন করুন:

```bash
/storage/*
!/storage/README.md
```

> উপরের কোডটি `/storage/` এর সব বাদ দিবে, কিন্তু `README.md` রাখবে।

## 🌍 গ্লোবাল `.gitignore` তৈরি

```bash
git config --global core.excludesfile ~/.gitignore_global
```

তারপর সেই ফাইলে লিখুন:

```bash
.DS_Store
Thumbs.db
*.log
```

## 📁 GitHub থেকে তৈরি `.gitignore` টেমপ্লেট

GitHub নিজেই অনেক সুন্দর `.gitignore` টেমপ্লেট দেয়:

* [https://github.com/github/gitignore](https://github.com/github/gitignore)

উদাহরণ:

```bash
curl https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore -o .gitignore
```

## 🚫 `.gitignore` কাজ না করলে করণীয়

1. হয়তো আপনি আগেই সেই ফাইল Git-এ Add করে ফেলেছেন।
   সমাধান:

   ```bash
   git rm --cached path/to/file
   ```

2. তারপর `.gitignore` এ যুক্ত করুন।

## 🧩 Language/Framework Specific উদাহরণ

### 🐘 Laravel

```
/vendor
/node_modules
.env
.phpunit.result.cache
/storage/*.key
```

### 🟢 Node.js

```
node_modules/
npm-debug.log
.env
dist/
```

### 🐍 Python

```
__pycache__/
*.pyc
.env
```

### 🐘 PHP

```
vendor/
*.log
.env
```

## 🧠 সংক্ষেপে মনে রাখার টিপস

| করণীয়                            | বর্জনীয়                         |
| -------------------------------- | ------------------------------- |
| `.env` না তুলুন                  | credentials কখনো Git-এ না তুলুন |
| `node_modules` বাদ দিন           | build output Git-এ দেবেন না     |
| IDE/OS-specific ফাইল ignore করুন | local সেটিং Git-এ দেবেন না      |

## 📦 উপসংহার

`.gitignore` ছোট একটি ফাইল হলেও এটি **Git প্রজেক্টের নিরাপত্তা, দক্ষতা ও মান বজায় রাখার জন্য অপরিহার্য।**
সঠিক `.gitignore` ব্যবহার করলে আপনার প্রজেক্ট থাকবে পরিপাটি এবং নিরাপদ।
