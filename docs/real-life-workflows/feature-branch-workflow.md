# 🌿 ফিচার ব্রাঞ্চ ওয়ার্কফ্লো

## 📌 ফিচার ব্রাঞ্চ ওয়ার্কফ্লো কী?

**Feature Branch Workflow** হল এমন একটি Git workflow যেখানে প্রতিটি নতুন ফিচার/বাগ ফিক্স/টাস্কের জন্য আলাদা একটি ব্রাঞ্চ তৈরি করা হয়। মূল ব্রাঞ্চে (`main`/`master`) সরাসরি কাজ না করে, এই আলাদা ব্রাঞ্চে কাজ করে শেষে Merge করা হয়।

এটি **ক্লিন কোডবেস**, **সহজ টিমওয়ার্ক**, ও **পরীক্ষার সুবিধা** দেয়।

## 🎯 কেন Feature Branch Workflow ব্যবহার করবেন?

* ✨ প্রতিটি ফিচার আলাদা থাকবে
* 🤝 টিম মেম্বাররা একে অন্যের কাজের উপর প্রভাব ফেলবে না
* 🧪 CI/CD বা QA-তে আলাদা ফিচার টেস্ট করা সহজ হয়
* 🔙 সহজে কোনো ফিচার বাতিল করা বা রোলব্যাক করা যায়

## 🛠️ Step by Step বাস্তব উদাহরণ

ধরি আপনি একটি Laravel প্রজেক্টে "User Profile Edit" ফিচার যোগ করছেন।

### ১. ✅ মূল ব্রাঞ্চে থাকুন (main/master)

```bash
git checkout main
git pull origin main
```

### ২. 🌿 নতুন ফিচারের জন্য একটি ব্রাঞ্চ তৈরি করুন

```bash
git checkout -b feature/user-profile-edit
```

### ৩. ✍️ কাজ করুন

* `UserController.php` ফাইলে কোড লিখুন
* `edit.blade.php` ফাইল তৈরি করুন
* `routes/web.php` এ route যুক্ত করুন

```php
Route::get('/profile/edit', [UserController::class, 'edit']);
```

### ৪. 📦 কাজ শেষ হলে Commit করুন

```bash
git add .
git commit -m "Add user profile edit page"
```

### ৫. 🚀 Push করুন রিমোটে

```bash
git push origin feature/user-profile-edit
```

### ৬. 🧪 GitHub এ গিয়ে Pull Request (PR) খুলুন

* `base`: main
* `compare`: feature/user-profile-edit

### ৭. ✅ টিমমেট রিভিউ করবে → Merge করলে main এ যাবে

## 🧪 আরও উদাহরণ

### উদাহরণ ১: Bug fix ব্রাঞ্চ

```bash
git checkout -b fix/login-error
# কাজ করুন
git commit -am "Fix login redirect issue"
git push origin fix/login-error
```

### উদাহরণ ২: নতুন API যুক্ত করার কাজ

```bash
git checkout -b feature/add-payment-api
# কাজ করুন
git commit -am "Add payment gateway API integration"
git push origin feature/add-payment-api
```

## 🔁 Merge বা Rebase?

**PR Merge** করলে কমিট হিস্টোরি থাকবে।
**Rebase** করলে হিস্টোরি পরিষ্কার থাকবে — কিন্তু কনফ্লিক্ট হতে পারে।

ছোট টিমে `merge` অনেক সহজ।
বড় টিমে `rebase` করলে ইতিহাস পরিষ্কার হয়।

## 🧩 Branch Naming Convention

| কাজের ধরন   | ব্রাঞ্চ নামের উদাহরণ       |
| ----------- | -------------------------- |
| ফিচার       | `feature/user-auth`        |
| বাগ ফিক্স   | `fix/cart-total`           |
| ডকুমেন্টেশন | `docs/api-endpoints`       |
| রিফ্যাক্টর  | `refactor/product-service` |

## 🧠 Bonus: Remote Collaborator Workflow

ধরি দুইজন একই ফিচারে কাজ করছেন:

* `dev1` → `feature/user-profile-edit`
* `dev2` → একই ব্রাঞ্চে কাজ করতে চায়

```bash
git pull origin feature/user-profile-edit
# dev2 কাজ করে
git push origin feature/user-profile-edit
```

➡️ এই ক্ষেত্রে কোড কনফ্লিক্ট হতে পারে, তাই স্ক্রাম টিমে ভাগ করে কাজ করাই ভালো।

## 🛑 সাবধানতা

| ভুল কাজ                | সমস্যা                        |
| ---------------------- | ----------------------------- |
| main-এ সরাসরি কাজ      | production code নষ্ট হতে পারে |
| অনেকদিন merge না করা   | কনফ্লিক্ট জমে যায়             |
| commit message অস্পষ্ট | বুঝতে সমস্যা হয় কে কী করেছে   |

## ✅ সেরা অনুশীলন (Best Practices)

* ছোট ছোট feature ব্রাঞ্চ তৈরি করুন
* প্রতিদিন main ব্রাঞ্চ থেকে pull করুন
* meaningful ব্রাঞ্চ নাম দিন
* ফিচার শেষে PR দিন
* merge করার আগে টেস্ট করে নিন

## 🚧 Feature Branch Workflow with CI/CD

প্রতিটি ফিচার ব্রাঞ্চেই automatic test run করা যায় GitHub Actions বা GitLab CI দিয়ে। এতে ফিচার merge হওয়ার আগে সমস্যা ধরা পড়ে।

## 🌐 GitHub Example Flow

1. `feature/chat-box` → push করলেন
2. GitHub এ PR তৈরি করলেন
3. CI passed ✅
4. Reviewer Approve দিলো
5. Merge to main 🎉
6. Deployment triggered 🚀

## 📦 উপসংহার

Feature Branch Workflow খুবই কার্যকর একটি Git কৌশল, যা modern সফটওয়্যার ডেভেলপমেন্টে প্রায় সব টিম ব্যবহার করে। এটি শুধু টিমওয়ার্ক সহজ করে না, বরং production-এ code নিয়ে যাওয়ার আগে বিভিন্ন layer-এ টেস্ট ও রিভিউয়ের সুযোগ করে দেয়।
