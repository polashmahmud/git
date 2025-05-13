# 💬 ম্যাসেজ সহ কমিট করা

Git-এ আপনি যখন কাজ করেন, তখন পরিবর্তনগুলোর রেকর্ড রাখতে কমিট করা হয়।  
কমিটের সময় একটি পরিষ্কার ও সংক্ষিপ্ত বার্তা (commit message) দিলে পরে আপনি এবং অন্যরা বুঝতে পারেন কমিটটি কী পরিবর্তন এনেছে।

## ✅ বেসিক কমিট মেসেজ:

```bash
git commit -m "Initial commit"
````

📌 `-m` ফ্ল্যাগ ব্যবহার করে আপনি ইনলাইন ম্যাসেজ দিতে পারেন।

## 🧪 উদাহরণ ১: নতুন ফাইল যুক্ত করার পর কমিট

```bash
touch index.html
git add index.html
git commit -m "Add homepage file"
```

## 🧪 উদাহরণ ২: কোড পরিবর্তন করার পর কমিট

```bash
git add app.js
git commit -m "Fix login bug by validating email format"
```

## 🧪 উদাহরণ ৩: নতুন ফিচার যুক্ত করে কমিট

```bash
git add cart.js
git commit -m "Implement shopping cart functionality"
```

## 🧪 উদাহরণ ৪: একাধিক ফাইল নিয়ে একসাথে কমিট

```bash
git add .
git commit -m "Update UI and improve performance in product listing"
```

## 🧪 উদাহরণ ৫: একাধিক লাইনের কমিট ম্যাসেজ

```bash
git commit -m "Add user authentication module" -m "Includes login, register, and logout endpoints using JWT."
```

🔹 প্রথম `-m` = সংক্ষিপ্ত টাইটেল
🔹 দ্বিতীয় `-m` = বিস্তারিত বিবরণ

## 🧪 উদাহরণ ৬: দীর্ঘ কমিট ম্যাসেজ (ডিফল্ট এডিটর খুলে)

```bash
git commit
```

👉 এটি আপনাকে আপনার ডিফল্ট টেক্সট এডিটরে (যেমনঃ Vim, VS Code) নিয়ে যাবে, যেখানে আপনি নিচের মতো কমিট করতে পারবেন:

```
Add user profile page

- Created profile route and controller
- Designed Blade view with user info
- Fixed minor layout issue on dashboard
```

## 🧪 উদাহরণ ৭: শুধুমাত্র কমিট ম্যাসেজ বদলাতে চাইলে

```bash
git commit --amend -m "Correct typo in README"
```

📌 আগের কমিটটি মুছে না ফেলে শুধু ম্যাসেজ পরিবর্তন করা হয়।

## 🧪 উদাহরণ ৮: কমিট করার সময় সময়/তারিখ যুক্ত করা

```bash
git commit -m "Add sitemap" --date="2025-05-10T14:00:00"
```

📌 এইভাবে আপনি কাস্টম তারিখ ও সময়ও দিতে পারেন (বিশেষ প্রয়োজনেই ব্যবহৃত হয়)।

## ✅ ভালো কমিট ম্যাসেজ লেখার টিপস:

| ভুল       | সঠিক                                           |
| --------- | ---------------------------------------------- |
| "changes" | "Fix navbar collapse issue on mobile"          |
| "update"  | "Update README with installation instructions" |
| "bug fix" | "Fix crash on empty search query"              |

🔹 লিখুন কী করেছেন
🔹 কেন করেছেন
🔹 অতিরিক্ত বিস্তারিত হলে দ্বিতীয় `-m` ফ্ল্যাগ ব্যবহার করুন

## 📘 নিয়মিত ব্যবহৃত ম্যাসেজ উদাহরণসমূহ

```bash
git commit -m "Refactor form validation logic"
git commit -m "Fix footer link not working on Safari"
git commit -m "Remove unused dependencies"
git commit -m "Add unit tests for UserService"
git commit -m "Upgrade Laravel from 10 to 11"
git commit -m "Translate homepage content to Bengali"
git commit -m "Revert previous commit due to bug"
git commit -m "Add 404 page and route handling"
git commit -m "Optimize image loading using lazy-load"
git commit -m "Add SEO meta tags for homepage"
```

## 🔒 গুরুত্বপূর্ণ: কমিট message দিয়ে history বোঝা সহজ হয়

যদি আপনি প্রতিটি কমিটে ব্যাখ্যা দিয়ে লিখেন, তবে `git log` বা GitHub history দেখার সময় সহজেই বুঝে যাবেন কী পরিবর্তন কোথায় হয়েছে।

## 📚 আরও দেখুন:

* [ফাইল স্টেজ করা](/staging-and-committing/staging-files)
* [গিট কমিট](/basic-git-commands/git-commit)
* [লগ দেখা](/git-status-and-log/viewing-log)

🎯 সংক্ষেপে:

| কাজ                        | কমান্ড                                   |
| -------------------------- | ---------------------------------------- |
| সিঙ্গেল লাইনের ম্যাসেজ     | `git commit -m "Your message"`           |
| মাল্টি-লাইন ম্যাসেজ        | `git commit -m "Title" -m "Description"` |
| ভুল কমিট মেসেজ ঠিক করা     | `git commit --amend -m "New message"`    |
| ম্যাসেজ ছাড়া কমিট (avoid!) | `git commit` (ভাল অভ্যাস নয়)             |

