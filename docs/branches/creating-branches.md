# 🌿 Git - Creating Branches (ব্রাঞ্চ তৈরি করা)

Git-এ ব্রাঞ্চ ব্যবহার করলে আপনি একই প্রজেক্টের বিভিন্ন ভার্সনে একসাথে কাজ করতে পারেন—একটার সঙ্গে আরেকটার কোনো সংঘর্ষ ছাড়াই। এটি বিশেষভাবে কাজে আসে যখন আপনি নতুন ফিচার যোগ করছেন, কোনো বাগ ঠিক করছেন, বা নতুন কিছু পরীক্ষা করে দেখছেন। প্রতিটি ব্রাঞ্চ যেন একটি আলাদা জগৎ, যেখানে আপনি স্বচ্ছন্দে কাজ করতে পারেন মূল প্রজেক্টের ধারাবাহিকতা নষ্ট না করেই।

## 🔰 ১. নতুন ব্রাঞ্চ তৈরি করা

```bash
git branch feature/login-form
````

এখানে `feature/login-form` হলো ব্রাঞ্চের নাম। এটি বর্তমান HEAD (সাধারণত `main`) থেকে তৈরি হবে।

## 🚀 ২. ব্রাঞ্চ তৈরি ও সরাসরি স্যুইচ করা

```bash
git checkout -b feature/user-profile
```

এই কমান্ডটি দুই কাজ করে:

* নতুন ব্রাঞ্চ তৈরি করে
* সেই ব্রাঞ্চে স্যুইচ করে দেয়

## 🔄 ৩. অন্য ব্রাঞ্চে স্যুইচ করা

```bash
git checkout feature/user-profile
```

অথবা, নতুন ভার্সনে:

```bash
git switch feature/user-profile
```

## 🔍 ৪. বর্তমানে আপনি কোন ব্রাঞ্চে আছেন তা দেখুন

```bash
git branch
```

> ⭐ বর্তমানে থাকা ব্রাঞ্চটি `*` চিহ্ন দিয়ে চিহ্নিত থাকবে।

## 📋 ৫. সকল ব্রাঞ্চ লিস্ট করুন

```bash
git branch
```

অথবা রিমোটসহ:

```bash
git branch -a
```

## 🧪 উদাহরণ ১: একটি নতুন ফিচার নিয়ে কাজ করা

```bash
git checkout -b feature/add-payment-method
# কোড এডিট করুন
git add .
git commit -m "Add PayPal payment method"
```

## 🛠️ উদাহরণ ২: বাগ ফিক্সিং

```bash
git checkout -b fix/navbar-link-error
# বাগ ফিক্স করুন
git commit -am "Fix broken navbar link on homepage"
```

## 🧪 উদাহরণ ৩: ডকুমেন্টেশন আপডেট

```bash
git checkout -b docs/readme-update
# README.md আপডেট করুন
git commit -am "Update README with setup instructions"
```

## 🔗 উদাহরণ ৪: এক্সপেরিমেন্টাল ফিচার

```bash
git checkout -b test/react-version-upgrade
# React নতুন ভার্সনে আপডেট করুন
git commit -am "Try upgrading to React 19"
```

## 🔍 বর্তমান ব্রাঞ্চের তথ্য

```bash
git status
```

অথবা, নির্দিষ্ট ব্রাঞ্চের লাস্ট কমিট:

```bash
git log -1
```

## 🧹 পুরাতন বা অপ্রয়োজনীয় ব্রাঞ্চ মুছে ফেলা

### লোকাল ব্রাঞ্চ ডিলিট:

```bash
git branch -d feature/old-feature
```

### জোরপূর্বক ডিলিট (যদি মার্জ না করা থাকে):

```bash
git branch -D feature/buggy
```

### রিমোট ব্রাঞ্চ ডিলিট:

```bash
git push origin --delete feature/buggy
```

## ☁️ রিমোট ব্রাঞ্চ তৈরি ও পুশ করা

```bash
git push -u origin feature/user-profile
```

> `-u` ফ্ল্যাগ দিয়ে upstream লিংক তৈরি হয়, পরবর্তীতে শুধু `git push` বা `git pull` দিয়ে কাজ হবে।

## 🌲 ব্রাঞ্চ নামকরণ কনভেনশন

| টাইপ       | উদাহরণ                                        |
| ---------- | --------------------------------------------- |
| ফিচার      | `feature/signup-flow`, `feature/dashboard-ui` |
| বাগ ফিক্স  | `fix/login-crash`, `fix/typo-footer`          |
| ডক         | `docs/readme-fix`, `docs/api-reference`       |
| রিফ্যাক্টর | `refactor/user-model`, `refactor/api-calls`   |
| টেস্ট      | `test/payment-tests`, `test/unit-auth`        |

## 🎯 সর্বোত্তম অনুশীলন (Best Practices)

* ✅ প্রতিটি কাজ আলাদা ব্রাঞ্চে করুন
* ✅ ব্রাঞ্চের নাম অর্থবোধক রাখুন
* ✅ কাজ শেষে `main`/`master` এ মার্জ করুন
* ✅ অপ্রয়োজনীয় ব্রাঞ্চ ডিলিট করুন
* ✅ `git pull origin main` দিয়ে আপডেট ব্রাঞ্চে মার্জ করুন

## 📘 সম্পর্কিত কমান্ড

| কাজ                 | কমান্ড                                 |
| ------------------- | -------------------------------------- |
| নতুন ব্রাঞ্চ তৈরি   | `git branch new-branch`                |
| তৈরি করে সুইচ       | `git checkout -b new-branch`           |
| ব্রাঞ্চ দেখুন       | `git branch`                           |
| ব্রাঞ্চ ডিলিট       | `git branch -d branch-name`            |
| রিমোটে পুশ          | `git push -u origin branch-name`       |
| রিমোট ব্রাঞ্চ ডিলিট | `git push origin --delete branch-name` |
