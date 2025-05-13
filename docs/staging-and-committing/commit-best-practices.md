# ✅ Git Commit Best Practices

একটি ভালো কমিট ম্যাসেজ শুধু পরিবর্তনের বিবরণ নয়, এটি আপনার প্রজেক্টের ইতিহাসের একটি গুরুত্বপূর্ণ অংশ।  
ভবিষ্যতে আপনি অথবা আপনার টিম মেম্বার যখন কোড রিভিউ করবেন, তখন এই বার্তাগুলো অনেক সাহায্য হবে।

## 🎯 কেন ভালো কমিট ম্যাসেজ গুরুত্বপূর্ণ?

- 📜 ইতিহাস বুঝতে সহজ হয়
- 🐞 বাগ ট্র্যাকিং সহজ হয়
- 👥 টিম মেম্বারদের জন্য বুঝতে সুবিধা হয়
- 🔁 রিভার্ট বা রিফ্যাক্টর করার সময় সহায়তা করে

## ✍️ সেরা কমিট লেখার নিয়মাবলি

### 1. **বর্তমান কাল (Present tense)** ব্যবহার করুন

✅ সঠিক:  
```bash
git commit -m "Fix broken image path on homepage"
git commit -m "Add login validation for email format"
````

❌ ভুল:

```bash
git commit -m "Fixed image issue"
git commit -m "Added validation"
```

### 2. **ছোট ও অর্থবোধক শিরোনাম দিন (৫০ অক্ষরের মধ্যে)**

✅ সঠিক:

```bash
git commit -m "Update user avatar upload feature"
```

❌ ভুল:

```bash
git commit -m "I changed a few things in user file related to image uploading"
```

### 3. **প্রয়োজনে বডি যোগ করুন (72 ক্যারেক্টারে wrap করে)**

```bash
git commit -m "Fix product image alignment on mobile view" \
  -m "Used CSS flexbox to fix image distortion on screens below 600px. Also fixed margin issue in card layout."
```

### 4. **একটি কাজ = একটি কমিট**

✅ সঠিক:

```bash
git commit -m "Add pagination to blog post list"
git commit -m "Fix typo in contact page"
```

❌ ভুল:

```bash
git commit -m "Add pagination and fixed footer and also updated FAQ"
```

## 📚 প্রচলিত কমিট ম্যাসেজ উদাহরণসমূহ

### ✅ ফিচার সংযুক্তি

```bash
git commit -m "Add dark mode toggle in settings"
git commit -m "Implement search with live suggestions"
```

### ✅ বাগ ফিক্স

```bash
git commit -m "Fix crash on empty password field during login"
git commit -m "Resolve redirect issue after logout"
```

### ✅ রিফ্যাক্টরিং

```bash
git commit -m "Refactor user controller to reduce duplication"
git commit -m "Simplify form validation logic"
```

### ✅ ডকুমেন্টেশন

```bash
git commit -m "Update README with installation steps"
git commit -m "Fix broken link in CONTRIBUTING.md"
```

### ✅ UI/UX সংশোধন

```bash
git commit -m "Improve spacing between navbar items"
git commit -m "Add animation to button hover states"
```

### ✅ টেস্ট সংযুক্তি বা পরিবর্তন

```bash
git commit -m "Add unit tests for payment gateway"
git commit -m "Fix flaky test for newsletter signup"
```

## 🚫 কমন ভুল যেগুলো এড়িয়ে চলুন

| ভুল ম্যাসেজ     | সমস্যা                         |
| --------------- | ------------------------------ |
| `updated`       | কী আপডেট হলো তা বোঝা যাচ্ছে না |
| `bug fixed`     | কোন বাগ? কোথায়?                |
| `changed stuff` | অপ্রাসঙ্গিক, অস্পষ্ট           |
| `work done`     | ঠিক কোন কাজ করা হলো?           |

## 📌 ভালো ম্যাসেজ লেখার গঠন (Structure)

```
<short summary> (প্রথম লাইন)

<empty line>

<detailed description explaining what and why>
```

📦 উদাহরণ:

```
Add reset password feature

- Add email token verification
- Add reset password form
- Update routes and controller
```

## 🧠 সাজেশন টুলস (Commit Linter ব্যবহার করতে পারেন)

* [Commitlint](https://commitlint.js.org/)
* [Conventional Commits](https://www.conventionalcommits.org/)
* Husky Git Hook দিয়ে enforce করুন নির্দিষ্ট format

## 🛠️ Convention-based commit style (অতিরিক্ত)

Conventional commits একটি নির্দিষ্ট format মেনে কমিট করা। যেমন:

```
<type>(<scope>): <subject>
```

উদাহরণ:

```bash
git commit -m "feat(auth): add email confirmation"
git commit -m "fix(login): prevent empty username crash"
git commit -m "docs(readme): add project overview"
git commit -m "refactor(api): simplify response handling"
```

## 🎯 মনে রাখুন:

| নিয়ম                  | ব্যাখ্যা                              |
| --------------------- | ------------------------------------- |
| ✍️ verb শুরু করুন     | যেমনঃ Add, Fix, Remove, Improve       |
| 🔤 present tense      | "Fix", "Add" → না যে "Fixed", "Added" |
| 🎯 নির্দিষ্ট হোন      | vague না হয়ে নির্দিষ্ট কাজ বোঝান      |
| 📦 atomic commit করুন | এক commit = এক কাজ                    |
| 🧹 ছোট রাখুন          | প্রতিটি কমিট যেন manageable হয়        |

## 📘 আরও পড়ুন

* [কমিট মেসেজ সহ কমিট করা](/staging-and-committing/committing-with-message)
* [গিট কমিট](/basic-git-commands/git-commit)
* [লগ দেখা](/git-status-and-log/viewing-log)
