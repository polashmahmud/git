# 🔀 Git - Switching Branches (ব্রাঞ্চ পরিবর্তন)

Git এ কাজ করার সময়, আপনি এক ব্রাঞ্চ থেকে আরেক ব্রাঞ্চে যেতে চাইলে `switch` বা `checkout` কমান্ড ব্যবহার করেন। এতে আপনি পূর্ববর্তী কাজের উপর প্রভাব না ফেলেই নতুন কাজ শুরু করতে পারেন বা অন্য কোন অংশে ফিরে যেতে পারেন।

## 🆕 ১. নতুন পদ্ধতি: `git switch`

Git 2.23 থেকে `git switch` এবং `git restore` নামের কমান্ড যুক্ত হয়েছে। এগুলো `checkout` এর চেয়ে সহজভাবে নির্দিষ্ট কাজ করার জন্য ডিজাইন করা।

### ✅ ব্রাঞ্চ পরিবর্তন:

```bash
git switch branch-name
````

### ✅ নতুন ব্রাঞ্চ তৈরি করে স্যুইচ করা:

```bash
git switch -c new-branch-name
```

## 🧓 ২. পুরানো পদ্ধতি: `git checkout`

```bash
git checkout branch-name
```

> এটি এখনও অনেক জায়গায় ব্যবহৃত হয় এবং backward-compatible।

## 📋 উদাহরণ ১: main ব্রাঞ্চে ফিরে যাওয়া

```bash
git switch main
# অথবা
git checkout main
```

## 🧪 উদাহরণ ২: একটি নতুন ফিচার ব্রাঞ্চে যাওয়া

```bash
git switch feature/login-ui
```

## ✨ উদাহরণ ৩: নতুন ব্রাঞ্চ তৈরি করে সরাসরি স্যুইচ করা

```bash
git switch -c feature/user-settings
# কোড লিখুন
git add .
git commit -m "Add user settings page"
```

## 🛠️ উদাহরণ ৪: বাগ ফিক্স করার জন্য নতুন ব্রাঞ্চে যাওয়া

```bash
git switch -c fix/404-error
# বাগ ফিক্স করুন
git commit -am "Fix 404 error in route"
```

## 🕹️ উদাহরণ ৫: বর্তমান ব্রাঞ্চ চেক করা

```bash
git branch
```

> `*` দিয়ে আপনি কোন ব্রাঞ্চে আছেন তা বোঝা যাবে।

## 🔀 উদাহরণ ৬: একটি ট্যাগ বা নির্দিষ্ট কমিটে চেকআউট করা (Detached HEAD)

```bash
git checkout v1.0.0
# অথবা
git checkout 83f24e6
```

> ⚠️ এখানে আপনি ব্রাঞ্চে নন, HEAD detached অবস্থায় আছেন। কোন কমিট করলে তা আলাদা থাকবে।

## 💡 Detached HEAD থেকে ব্রাঞ্চ তৈরি

```bash
git switch -c hotfix/detached-work
```

## 🔁 উদাহরণ ৭: আগের ব্রাঞ্চে ফিরে যাওয়া

```bash
git switch -
```

> এটি আপনাকে আগের ব্রাঞ্চে ফিরিয়ে নিয়ে যায় (এক ধাপ পেছনে)।

## 🔍 উদাহরণ ৮: সব ব্রাঞ্চের তালিকা দেখা

```bash
git branch
```

> লোকাল ব্রাঞ্চ দেখায়।

```bash
git branch -a
```

> লোকাল + রিমোট উভয় ব্রাঞ্চ দেখায়।

## 🚫 যদি আপনি কাজ না সংরক্ষণ করেন?

```bash
git switch branch-name
```

> ⚠️ যদি আপনার বর্তমান ব্রাঞ্চে আনকমিটেড চেঞ্জ থাকে, Git আপনাকে স্যুইচ করতে দেবে না।

### সমাধান ১: পরিবর্তন স্ট্যাশ করুন

```bash
git stash
git switch branch-name
```

### সমাধান ২: পরিবর্তন কমিট করুন

```bash
git add .
git commit -m "WIP: incomplete work"
git switch branch-name
```

## 🧠 Best Practices

* ✅ কাজ শুরুর আগে সঠিক ব্রাঞ্চে আছেন কি না নিশ্চিত হোন
* ✅ ব্রাঞ্চ নাম অর্থবোধক দিন (feature/, fix/, docs/, refactor/)
* ✅ নতুন ব্রাঞ্চে কাজ শুরু করার সময় `git switch -c` ব্যবহার করুন
* ❌ `main` বা `master` ব্রাঞ্চে সরাসরি কাজ করবেন না
* ✅ বারবার `git branch` চালিয়ে ব্রাঞ্চ অবস্থা দেখুন

