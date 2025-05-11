# 🧬 `git clone` কমান্ড

`git clone` হলো Git-এর একটি খুব গুরুত্বপূর্ণ কমান্ড যা কোনো রিমোট রিপোজিটরিকে লোকাল মেশিনে কপি করার জন্য ব্যবহার করা হয়। এটি মূলত সম্পূর্ণ রিপোজিটরি (ইতিহাস সহ) লোকাল মেশিনে নিয়ে আসে।

## 📌 `git clone` কমান্ডের মূল গঠন:

```bash
git clone <repository-url> [directory-name]
```

* `repository-url`: যেকোনো Git রিপোজিটরির URL (HTTPS, SSH, Git প্রোটোকল ইত্যাদি)।
* `directory-name`: ঐচ্ছিক, আপনি কোন ফোল্ডারে ক্লোন করতে চান সেটি নির্দিষ্ট করতে পারেন।


## ✅ সাধারণ উদাহরণ:

### 1. GitHub থেকে একটি পাবলিক রিপোজিটরি ক্লোন করা

```bash
git clone https://github.com/laravel/laravel.git
```

➡️ এটি `laravel` নামে একটি ফোল্ডারে রিপোজিটরি ক্লোন করবে।


### 2. নিজের পছন্দের ফোল্ডারনামে ক্লোন করা

```bash
git clone https://github.com/laravel/laravel.git my-laravel-project
```

➡️ এটি `my-laravel-project` নামে একটি ফোল্ডারে রিপোজিটরি ক্লোন করবে।


### 3. SSH ব্যবহার করে ক্লোন করা

```bash
git clone git@github.com:username/project.git
```

➡️ SSH ব্যবহারে আপনি username/password না দিয়ে ক্লোন করতে পারবেন (SSH Key যুক্ত থাকলে)।


### 4. GitLab থেকে ক্লোন করা

```bash
git clone https://gitlab.com/username/project.git
```

➡️ GitHub-এর মতই GitLab থেকেও একইভাবে ক্লোন করা যায়।


### 5. Bitbucket থেকে ক্লোন করা

```bash
git clone https://username@bitbucket.org/username/project.git
```

### 6. শুধু নির্দিষ্ট একটি ব্রাঞ্চ ক্লোন করা

```bash
git clone -b dev https://github.com/username/project.git
```

➡️ `dev` নামের ব্রাঞ্চটি ক্লোন হবে। অন্য কোনো ব্রাঞ্চ আনবে না।


### 7. শুধুমাত্র একটি ডিরেক্টরি ক্লোন করতে (sparse checkout)

```bash
git clone --filter=blob:none --no-checkout https://github.com/username/project.git
cd project
git sparse-checkout init --cone
git sparse-checkout set path/to/folder
```

➡️ এইভাবে শুধু নির্দিষ্ট ফোল্ডার ক্লোন করতে পারবেন।


### 8. ডিপথ কমিয়ে ক্লোন করা (শুধু শেষ 1 কমিট আনতে)

```bash
git clone --depth 1 https://github.com/username/project.git
```

➡️ শুধুমাত্র সর্বশেষ কমিটসহ রিপোজিটরি আসবে। এটি দ্রুত কাজ করে এবং কম সাইজ নেয়।


## 🔄 `git clone` করার পর কী করা উচিত?

1. লোকাল রিপোজিটরিতে ঢোকা:

```bash
cd project
```

2. রিমোট দেখতে:

```bash
git remote -v
```

3. ব্রাঞ্চ চেক করতে:

```bash
git branch -a
```

## ❗ সাধারণ সমস্যাগুলো:

| সমস্যা                             | সমাধান                                      |
| ---------------------------------- | ------------------------------------------- |
| **Permission denied (publickey)**  | SSH Key ঠিক আছে কি না চেক করুন।             |
| **Repository not found**           | URL ঠিক আছে কি না যাচাই করুন।               |
| **Cloning into 'folder'... error** | একই নামে ফোল্ডার আগে থেকেই আছে কি না দেখুন। |

## 🔚 উপসংহার

`git clone` হল Git-এর জগতে প্রবেশের প্রথম ধাপ। আপনি যখনই কোনো প্রজেক্টে কাজ শুরু করবেন, সাধারণত সেটি ক্লোন করেই শুরু করতে হবে। এর মাধ্যমে আপনি রিমোট রিপোজিটরির সম্পূর্ণ ইতিহাস ও বর্তমান অবস্থা লোকাল মেশিনে এনে কাজ করতে পারেন।
