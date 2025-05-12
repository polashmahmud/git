# 🔁 Fork এবং Pull Request Workflow

## 🧠 Fork কী?

**Fork** হলো GitHub-এ অন্য কারও রিপোজিটরির একটি কপি নিজের GitHub অ্যাকাউন্টে নিয়ে আসা। আপনি এই কপি-তে যেকোনো পরিবর্তন করতে পারেন, অথচ মূল রিপোজিটরির কোনো ক্ষতি হবে না।

✅ আপনি যখন মূল প্রোজেক্টে সরাসরি write access পান না, তখন Fork করে কাজ করতে হয়।


## 🎯 Fork এবং Pull Request কেন প্রয়োজন?

| বিষয়                | কারণ                                      |
| ------------------- | ----------------------------------------- |
| আপনি contributor নন | মূল প্রোজেক্টে সরাসরি push করতে পারবেন না |
| ওপেন সোর্স প্রজেক্ট | অনেকের কাজ আলাদা রাখা দরকার               |
| Code Review দরকার   | Pull Request এর মাধ্যমে রিভিউ সহজ         |
| উন্নত Collaboration | সকল commit আলাদা ব্রাঞ্চে থাকবে           |


## 🛠️ Step-by-step: Fork ও Pull Request Workflow

ধরি আপনি একটি ওপেন সোর্স Laravel প্রজেক্টে কাজ করতে চান।


### ১. 🔗 GitHub থেকে Fork করুন

যে প্রোজেক্টে কাজ করতে চান, GitHub এ গিয়ে:

* "Fork" বাটনে ক্লিক করুন
* এটি আপনার GitHub অ্যাকাউন্টে কপি হয়ে যাবে


### ২. 🔻 Fork করা প্রজেক্ট ক্লোন করুন

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### ৩. 🔄 মূল রিপোজিটরি যোগ করুন (remote upstream)

```bash
git remote add upstream https://github.com/original-owner/project-name.git
```

✅ এখন আপনার কাছে দুইটি remote থাকবে:

* `origin` → আপনার Fork
* `upstream` → মূল প্রজেক্ট

### ৪. 🌿 নতুন ব্রাঞ্চ তৈরি করুন

```bash
git checkout -b feature/add-contact-form
```

### ৫. 🧑‍💻 ফিচার বা ফিক্স যোগ করুন

* `ContactController.php` যোগ করুন
* `contact.blade.php` তৈরি করুন

```bash
git add .
git commit -m "Add contact form with validation"
```

### ৬. 🚀 নিজের Fork এ Push করুন

```bash
git push origin feature/add-contact-form
```

### ৭. 🔁 Pull Request তৈরি করুন

GitHub এ যান → আপনার Fork → “Compare & Pull Request” বাটনে ক্লিক করুন:

* base: original/master
* compare: your-branch-name

📝 একটি সুন্দর বিবরণ লিখুন:

> This PR adds a new contact form with validation and stores messages to database.

## 📌 উদাহরণ ২: বাগ ফিক্স

```bash
git checkout -b fix/typo-in-readme
# README.md ফিক্স করুন
git commit -am "Fix typo in README"
git push origin fix/typo-in-readme
# PR তৈরি করুন
```

## 🔁 Upstream থেকে Sync রাখার নিয়ম

মাঝে মাঝে মূল প্রজেক্টে নতুন commit আসবে। সেগুলো আনতে:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

## 🧠 কখন Fork দরকার?

| কেস                         | Fork লাগবে                        |
| --------------------------- | --------------------------------- |
| আপনি core টিমের বাইরে       | ✅ দরকার                           |
| প্রাইভেট টিম প্রজেক্ট       | ❌ দরকার নেই (ব্রাঞ্চ দিয়েই সম্ভব) |
| ওপেন সোর্সে অবদান রাখতে চান | ✅ খুব দরকার                       |

## ✅ Best Practices

* meaningful ব্রাঞ্চ নাম দিন (যেমন: `feature/add-login`, `fix/button-bug`)
* ছোট ছোট PR পাঠান
* Pull Request এ বিস্তারিত লিখুন
* commit message পরিষ্কার দিন
* অন্য কারো PR এ রিভিউ করুন

## 🔐 Real-life Scenario: Contributing to Laravel

ধরি আপনি Laravel framework-এ একটা ছোট বাগ ফিক্স করতে চান:

1. **Fork করুন:** [https://github.com/laravel/framework](https://github.com/laravel/framework)
2. **ক্লোন করুন:** নিজের GitHub থেকে
3. **fix/add করুন** → commit
4. **PR তৈরি করুন:** মূল Laravel রিপোজিটরিতে

## 🧪 Bonus: CLI দিয়ে PR তৈরি (GitHub CLI)

```bash
gh pr create --base main --head feature/add-stats --title "Add Stats Section" --body "Adds a new stats section to homepage"
```

## 🤔 Pull Request Accept না হলে?

* পরিবর্তন করতে বললে → নিজের ব্রাঞ্চে update করে আবার push করুন
* আলোচনা করুন → comment এর মাধ্যমে
* PR বন্ধ করতে পারেন, আবার reopen করতে পারেন

## 🎯 উপসংহার

Fork এবং Pull Request হলো ওপেন সোর্স কনট্রিবিউশনের মূল চাবিকাঠি। এটি আপনার কাজকে আলাদা করে রাখে, রিভিউ এবং টেস্টের সুযোগ দেয় এবং মূল প্রজেক্টে অবদান রাখতে সাহায্য করে।
