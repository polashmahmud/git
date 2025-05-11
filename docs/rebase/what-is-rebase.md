# 🎯 `git rebase` কী?

`git rebase` Git-এর একটি কমান্ড, যা এক ব্রাঞ্চের ইতিহাসকে অন্য ব্রাঞ্চের শেষ কমিটের পর স্থানান্তর করে।

সহজভাবে বললে:

> **"আমার কাজটা যেন শেষ হয় `main` ব্রাঞ্চের সর্বশেষ আপডেটের পরে — এমনভাবে ইতিহাস সাজাও।"**


## 📌 `git rebase` কেন দরকার?

* ইতিহাস পরিষ্কার রাখতে
* `merge` এর মতো অতিরিক্ত কমিট না করে সরল ইতিহাস তৈরি করতে
* Pull request-এর আগে কমিটগুলো সুন্দরভাবে সাজাতে


## 🆚 `merge` vs `rebase`

| বিষয়                   | `merge`                        | `rebase`                              |
| ---------------------- | ------------------------------ | ------------------------------------- |
| নতুন commit তৈরি হয়    | ✅ (একটা merge commit)          | ❌ (পুরনো commit-গুলোকে আবার তৈরি করে) |
| ইতিহাস কেমন হয়         | শাখাবিভক্ত (branching history) | সরল (linear history)                  |
| সহজ                    | হ্যাঁ                          | একটু জটিল                             |
| Pull Request এ ব্যবহার | মাঝেমধ্যে                      | বেশি জনপ্রিয়                          |


## 📌 Basic Rebase Example

ধরি আপনার `main` এ আছে এই commit:

```
A---B---C  (main)
```

এবং `feature` ব্রাঞ্চে আছে:

```
A---B---C  (main)
         \
          D---E  (feature)
```

এখন আপনি `feature` ব্রাঞ্চে গিয়ে চালান:

```bash
git rebase main
```

Git করবে:

```
A---B---C---D'---E'  (feature)
```

মানে, `D` এবং `E` কে `C` এর পর নতুন করে বসাবে।


## 🔧 Rebase করার ধাপ

```bash
git checkout feature
git rebase main
```

🔁 আপনার কমিটগুলো main-এর পরে নিয়ে যাবে।


## ⚔️ Conflict হলে কী করবেন?

```bash
# ফাইল এডিট করে ঠিক করুন
git add .

# তারপর
git rebase --continue
```

বন্ধ করতে চাইলে:

```bash
git rebase --abort
```


## 🧪 উদাহরণ ১: লোকাল ব্রাঞ্চ main-এর সাথে আপডেট রাখা

```bash
git checkout feature
git fetch origin
git rebase origin/main
```

➡️ main এর সর্বশেষ আপডেটের পরে আপনার কাজ বসানো হবে।


## 🧪 উদাহরণ ২: rebase করে Push

```bash
git rebase main
git push --force-with-lease
```

➡️ ইতিহাস পাল্টেছে বলে, আপনাকে force push করতে হবে।


## 🧪 উদাহরণ ৩: ইন্টার‌্যাক্টিভ Rebase দিয়ে কমিট পরিষ্কার

```bash
git rebase -i HEAD~3
```

➡️ শেষ ৩টি কমিটকে আপনি একসাথে squash, edit, drop ইত্যাদি করতে পারবেন।

**উদাহরণ:**

```
pick 123abc Add login form
pick 456def Fix typo
pick 789ghi Add validation

# আপনি চাইলে করতে পারেন:
squash 456def
squash 789ghi
```

➡️ সব এক করে একটা সুন্দর কমিট বানিয়ে ফেলুন।


## 🧪 উদাহরণ ৪: `rebase --onto` দিয়ে নির্দিষ্ট জায়গায় বসানো

ধরি আপনার এই ইতিহাস:

```
A---B---C (main)
     \
      D---E (feature)
```

এখন আপনি `feature` এর `D` বাদ দিয়ে শুধু `E` কে `C` এর পরে বসাতে চান:

```bash
git checkout feature
git rebase --onto main D
```

ফলাফল:

```
A---B---C---E' (feature)
```


## 🧪 উদাহরণ ৫: অন্যদের PR review করার পর rebase

```bash
git checkout feature
git fetch origin
git rebase origin/main
git push --force-with-lease
```

➡️ এটা করার ফলে আপনার Pull Request অনেক পরিচ্ছন্ন দেখাবে।


## 🧯 ভুল করলে কী করবেন?

```bash
git rebase --abort
```

➡️ rebase চলাকালীন ভুল হলে এভাবে ফিরিয়ে নিতে পারেন।

অথবা

```bash
git reflog
git reset --hard <old-commit-id>
```

➡️ আগের অবস্থা ফিরিয়ে আনুন।


## ✅ কখন `rebase` ব্যবহার করবেন?

| পরিস্থিতি                              | `rebase` ব্যবহার করবেন?          |
| -------------------------------------- | -------------------------------- |
| আপনি একা কাজ করছেন                     | ✔️ হ্যাঁ                         |
| টিমে কাজ করছেন এবং force push করা যাবে | ⚠️ হ্যাঁ, সতর্ক থাকুন            |
| অনেক অগোছালো commit                    | ✔️ হ্যাঁ, ইন্টার‌্যাক্টিভ rebase |
| production/history সংরক্ষণ করা জরুরি   | ❌ না                             |


## ✅ Rebase করার নিয়ম টিমে (Best Practice)

* সর্বদা `--force-with-lease` ব্যবহার করুন।
* অন্যদের কাজের ওপর `rebase` করবেন না যদি না আপনি একা কাজ করেন।
* `main` বা `master` ব্রাঞ্চে কখনও `rebase` করবেন না।


## 🧭 একটি পূর্ণ rebase workflow উদাহরণ

```bash
git checkout feature/cart-update
git fetch origin
git rebase origin/main
# conflict হলে ফিক্স করে:
git add .
git rebase --continue
# শেষে
git push --force-with-lease
```


## 🔚 উপসংহার

* ✅ `git rebase` ইতিহাস পরিচ্ছন্ন ও লিনিয়ার রাখতে সাহায্য করে।
* ❗ সতর্কভাবে ব্যবহার করুন — ইতিহাস পরিবর্তিত হয়।
* 💡 `merge` ও `rebase` দুটোই দরকারি, পরিস্থিতি অনুযায়ী বেছে নিন।
