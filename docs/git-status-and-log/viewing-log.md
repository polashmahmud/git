# 📜 Viewing Git Log – কমিট হিস্টোরি দেখুন

`git log` কমান্ড ব্যবহার করে আপনি আপনার প্রজেক্টের সকল কমিটের বিস্তারিত ইতিহাস দেখতে পারবেন। এটি Git-এর অন্যতম গুরুত্বপূর্ণ টুল যা দিয়ে আপনি বুঝতে পারবেন, কে কখন কোন পরিবর্তন এনেছে।

## 🔍 বেসিক `git log`

```bash
git log
````

### 🧾 আউটপুট উদাহরণ:

```
commit 4f1e9b8fba1d72369e0e980c09e950fa6fc4d37c
Author: Polash Mahmud <polash@example.com>
Date:   Fri May 10 21:04:55 2025 +0600

    Add login page and basic validation
```

### এতে যা দেখবেন:

* `commit`: কমিট আইডি (SHA hash)
* `Author`: কে কমিট করেছে
* `Date`: কবে করেছে
* মেসেজ: কী পরিবর্তন হয়েছে

## 🧪 উদাহরণ ১: শুধুমাত্র সর্বশেষ ২টি কমিট দেখতে

```bash
git log -n 2
```

📌 শুধুমাত্র সাম্প্রতিক ২টি কমিট দেখাবে।

## 🧪 উদাহরণ ২: এক লাইনে ছোট করে দেখতে

```bash
git log --oneline
```

```
4f1e9b8 Add login page and basic validation
77d2943 Initial commit
```

📌 সংক্ষিপ্ত আকারে কমিট হ্যাশ ও মেসেজ এক লাইনে দেখায়।

## 🧪 উদাহরণ ৩: এক লাইনে ও গ্রাফ সহ

```bash
git log --oneline --graph
```

```
* 4f1e9b8 Add login page
* 77d2943 Initial commit
```

📌 ডেভেলপমেন্ট ব্রাঞ্চ ও মার্জ সহজে বোঝার জন্য ভিজ্যুয়াল গ্রাফ দেখায়।

## 🧪 উদাহরণ ৪: তারিখসহ সুন্দরভাবে ফরম্যাট করে দেখতে

```bash
git log --pretty=format:"%h - %an, %ar : %s"
```

```
4f1e9b8 - Polash Mahmud, 2 hours ago : Add login page
77d2943 - Polash Mahmud, 3 days ago : Initial commit
```

📌 নিজের মতো করে সাজানো আউটপুট দেখায়।

| Format | Description     |
| ------ | --------------- |
| `%h`   | সংক্ষিপ্ত হ্যাশ |
| `%an`  | Author Name     |
| `%ar`  | সময় (relative)  |
| `%s`   | কমিট মেসেজ      |

## 🧪 উদাহরণ ৫: একটি নির্দিষ্ট ফাইলের কমিট হিস্টোরি

```bash
git log --oneline login.vue
```

📌 `login.vue` ফাইলের সাথে সম্পর্কিত সকল কমিট দেখাবে।

## 🧪 উদাহরণ ৬: একটি নির্দিষ্ট ব্রাঞ্চের হিস্টোরি

```bash
git log main
```

📌 `main` ব্রাঞ্চে থাকা সকল কমিট দেখাবে।

## 🧪 উদাহরণ ৭: একটি নির্দিষ্ট সময়ের মধ্যে কমিটগুলো দেখতে

```bash
git log --since="2 days ago"
```

📌 শেষ ২ দিনের মধ্যে করা কমিটগুলো দেখাবে।

অথবা,

```bash
git log --since="2025-05-01" --until="2025-05-10"
```

📌 নির্দিষ্ট সময়সীমার মধ্যে কমিটগুলো দেখাবে।

## 🧪 উদাহরণ ৮: কোন ফাইলের লাইনে কে কী পরিবর্তন এনেছে?

```bash
git blame README.md
```

📌 লাইন বাই লাইন কোন কমিট এবং কে লেখক তা দেখাবে।

## 🧪 উদাহরণ ৯: মার্জসহ গ্রাফিক্যাল ইতিহাস দেখতে

```bash
git log --oneline --graph --all
```

📌 সকল ব্রাঞ্চের ইতিহাসসহ মার্জ ও ডাইভারজেন্স গ্রাফ দেখায়।

## 📁 Visual Log Tools

CLI ব্যবহার ছাড়াও কিছু গ্রাফিকাল টুল আছে যেগুলো Git log দেখায় আরও সহজভাবে:

* `gitk` — GUI ভিত্তিক লাইটওয়েট লোগ ভিউয়ার
* `Git Graph` — VS Code extension
* `tig` — টার্মিনাল ভিত্তিক লাইটওয়েট ভিউয়ার

```bash
gitk
```

```bash
tig
```

## ✅ উপসংহার

| কাজ            | কমান্ড                          |
| -------------- | ------------------------------- |
| সাধারণ লিস্ট   | `git log`                       |
| সংক্ষিপ্ত      | `git log --oneline`             |
| গ্রাফ সহ       | `git log --graph --oneline`     |
| ফাইলভিত্তিক    | `git log file.txt`              |
| সময়ভিত্তিক     | `git log --since="2 days ago"`  |
| কাস্টম ফরম্যাট | `git log --pretty=format:"..."` |

`git log` আপনাকে Git রিপোজিটরির ইতিহাস জানতে সাহায্য করে এবং troubleshooting ও কোড review-এর জন্য অপরিহার্য।
