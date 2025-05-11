# 🚀 `git push` কমান্ড

`git push` হলো Git-এর একটি মৌলিক কমান্ড যা আপনার **লোকাল রিপোজিটরির পরিবর্তনগুলো (commits)** রিমোট রিপোজিটরিতে পাঠানোর জন্য ব্যবহৃত হয়। অর্থাৎ আপনি যখন আপনার কম্পিউটারে কোডে কাজ করে কমিট করেন, তখন সেই কোড অন্যদের দেখাতে বা সংরক্ষণ করতে রিমোটে পাঠাতে হয় — `git push` সেই কাজটাই করে।


## 📌 `git push` এর সাধারণ গঠন:

```bash
git push <remote-name> <branch-name>
```

* `remote-name`: সাধারণত `origin` হয়।
* `branch-name`: আপনি কোন ব্রাঞ্চে কোড পাঠাতে চান, যেমন `main`, `master`, `dev`, ইত্যাদি।


## ✅ সবচেয়ে সাধারণ ব্যবহার:

```bash
git push origin main
```

➡️ লোকাল `main` ব্রাঞ্চের পরিবর্তন `origin` রিমোটে পাঠাবে।


## 🎯 উদাহরণসহ বিস্তারিত:

### 1. প্রথমবার কোড পুশ করা (যখন রিমোট রিপোজিটরি নতুন):

```bash
git remote add origin https://github.com/username/project.git
git push -u origin main
```

➡️ `-u` মানে upstream সেট করা, পরবর্তীতে শুধু `git push` দিলেই কাজ করবে।


### 2. পরে শুধু `git push` দিলেই হবে:

```bash
git push
```

➡️ পূর্বে upstream সেট করা থাকলে, কোন রিমোট ও ব্রাঞ্চে পাঠাবে সেটা Git জানে।


### 3. নতুন ব্রাঞ্চ পুশ করা:

```bash
git checkout -b feature/login
git push -u origin feature/login
```

➡️ নতুন `feature/login` ব্রাঞ্চ রিমোটে তৈরি হয়ে যাবে।


### 4. Force push (খুব সতর্কভাবে ব্যবহার করুন):

```bash
git push --force
```

➡️ লোকালের ইতিহাস রিমোটে জোর করে বসিয়ে দেবে। অন্যদের কাজ নষ্ট হতে পারে, সাবধান!


### 5. শুধু নির্দিষ্ট ব্রাঞ্চ পুশ করা:

```bash
git push origin my-branch
```

➡️ `my-branch` শুধু রিমোটে পাঠাবে, অন্য ব্রাঞ্চ নয়।


### 6. সব ব্রাঞ্চ একসাথে পুশ করা:

```bash
git push --all origin
```

➡️ লোকালের সব ব্রাঞ্চ `origin`-এ পাঠাবে।


### 7. ট্যাগ পুশ করা:

```bash
git tag v1.0
git push origin v1.0
```

➡️ `v1.0` ট্যাগ পুশ হবে।

অথবা সব ট্যাগ একসাথে:

```bash
git push origin --tags
```


### 8. রিমোট রিপোজিটরি থেকে ব্রাঞ্চ মুছে দেওয়া:

```bash
git push origin --delete feature/login
```

➡️ রিমোট থেকে `feature/login` ব্রাঞ্চ মুছে যাবে।


### 9. SSH দিয়ে পুশ করা:

```bash
git push git@github.com:username/project.git
```

➡️ SSH কনফিগার করা থাকলে এটি পাসওয়ার্ড ছাড়াই কাজ করবে।


### 10. Upstream রিমোট ব্রাঞ্চ চেক করা:

```bash
git branch -vv
```

➡️ আপনি কোন ব্রাঞ্চ থেকে কোন রিমোটে পুশ করছেন তা দেখা যাবে।


## 🧨 সাধারণ সমস্যা ও সমাধান:

| সমস্যা                          | কারণ                                      | সমাধান                                   |
| ------------------------------- | ----------------------------------------- | ---------------------------------------- |
| `rejected` (non-fast-forward)   | রিমোটে নতুন আপডেট আছে, আপনার লোকাল পুরানো | `git pull --rebase` দিয়ে আপডেট আনুন      |
| `Permission denied`             | SSH key বা token সমস্যা                   | SSH key যুক্ত করুন বা token ব্যবহার করুন |
| `remote: Repository not found.` | URL ভুল বা পারমিশন নাই                    | রিপোজিটরি URL ঠিক আছে কিনা যাচাই করুন    |


## 🧭 গিটে কাজের একটি সাধারণ চক্র (workflow):

```bash
git clone <repo-url>
git checkout -b feature/new-stuff
<edit files>
git add .
git commit -m "Add new stuff"
git push -u origin feature/new-stuff
```


## ✅ কিছু ব্যবহারিক পরিস্থিতি:

### ✅ Situation 1: আপনি Laravel প্রজেক্টে কাজ করছেন

```bash
git push origin develop
```

### ✅ Situation 2: আপনার টিমলিড নতুন ব্রাঞ্চ চাইলো

```bash
git checkout -b feature/invoice-generator
git push -u origin feature/invoice-generator
```

### ✅ Situation 3: Pull Request এর আগে force-push দরকার পড়ল

```bash
git commit --amend
git push --force
```


## 🔚 উপসংহার

`git push` ছাড়া রিমোট রিপোজিটরি আপডেট হয় না। আপনি যতবার `commit` করেন, ততবার আপনার কোড শুধু লোকালেই থাকে। অন্যদের সাথে শেয়ার করতে বা production-এ নিতে হলে `git push` অবশ্যই করতে হবে। তবে সতর্ক থাকতে হবে, বিশেষ করে `--force` ব্যবহারে।
