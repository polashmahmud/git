# ✨ Git এর জন্য দরকারি শর্টকাট অ্যালিয়াসসমূহ

Git অনেক শক্তিশালী টুল, কিন্তু বারবার একই লম্বা কমান্ড টাইপ করাটা বিরক্তিকর। এর সহজ সমাধান হল — **Git Aliases**!

## 🔍 Git Alias কী?

Git alias হচ্ছে ছোট শর্টকাট, যেটা দিয়ে বড় বা জটিল কমান্ডকে সংক্ষিপ্ত করে ব্যবহার করা যায়।
যেমন:
instead of

```bash
git status
```

you can write

```bash
git st
```

## 🛠️ কীভাবে Git Alias তৈরি করবেন?

আপনি `~/.gitconfig` ফাইলে alias যুক্ত করতে পারেন, অথবা সরাসরি কমান্ড দিয়ে করতে পারেন।

### 🎯 কমান্ড দিয়ে:

```bash
git config --global alias.st status
```

এখন `git st` টাইপ করলেই `git status` কাজ করবে!

## 📘 দরকারি Alias উদাহরণসমূহ

### ✅ Status, Log, Branch

```bash
git config --global alias.st status
git config --global alias.br branch
git config --global alias.co checkout
git config --global alias.cm commit
git config --global alias.last "log -1 HEAD"
```

### ✅ কম্প্যাক্ট লগ

```bash
git config --global alias.lg "log --oneline --graph --all --decorate"
```

⏱️ এতে আপনি সুন্দর গাছের মত করে commit history দেখতে পাবেন।

### ✅ Add ও Commit সহজে

```bash
git config --global alias.a "add ."
git config --global alias.ac "!git add . && git commit"
git config --global alias.acm "!git add . && git commit -m"
```

উদাহরণ:

```bash
git acm "message"
```

### ✅ Reset সহজভাবে

```bash
git config --global alias.unstage "reset HEAD --"
git config --global alias.discard "checkout --"
```

### ✅ Rebase, Merge, Diff

```bash
git config --global alias.rb rebase
git config --global alias.mg merge
git config --global alias.df diff
```

## 🎁 কিছু কম্বো Alias

### ✅ Branch মুছে ফেলা (local)

```bash
git config --global alias.delbr "branch -d"
```

### ✅ Remote Branch মুছে ফেলা

```bash
git config --global alias.rdel "push origin --delete"
```

### ✅ ক্লিন কাজ

```bash
git config --global alias.cleanall "!git reset --hard && git clean -fd"
```

## 🖼️ Git Config ফাইলটি দেখতে চাইলে

```bash
nano ~/.gitconfig
```

**উদাহরণ:**

```ini
[alias]
  st = status
  co = checkout
  br = branch
  cm = commit
  lg = log --oneline --graph --all --decorate
  acm = !git add . && git commit -m
```

## 🧠 কয়েকটি আরও চমৎকার alias

### ✅ সর্বশেষ কোন ফাইলে কী পরিবর্তন:

```bash
git config --global alias.who "blame -C -M"
```

### ✅ কোন ফাইল কতবার বদলেছে:

```bash
git config --global alias.count '!f() { git log --pretty=format: --name-only | grep "$1" | wc -l; }; f'
```

**ব্যবহার:**

```bash
git count index.js
```

## 🚀 আমার ব্যক্তিগত Alias পছন্দের তালিকা:

| Alias      | Description                        |
| ---------- | ---------------------------------- |
| `st`       | `git status`                       |
| `co`       | `git checkout`                     |
| `br`       | `git branch`                       |
| `lg`       | সুন্দর গাছের মত history            |
| `acm`      | add+commit একসাথে                  |
| `unstage`  | mistakenly staged ফাইল ফেরত        |
| `rdel`     | remote branch delete               |
| `cleanall` | সব reset এবং untracked file delete |

## 🧪 প্র্যাকটিস করার জন্য

আপনি চাইলে সব Alias একসাথে Import করতে পারেন এই কমান্ডের মাধ্যমে:

```bash
cat <<EOT >> ~/.gitconfig

[alias]
  st = status
  br = branch
  co = checkout
  cm = commit
  lg = log --oneline --graph --all --decorate
  ac = !git add . && git commit
  acm = !git add . && git commit -m
  unstage = reset HEAD --
  discard = checkout --
  delbr = branch -d
  rdel = push origin --delete
  cleanall = !git reset --hard && git clean -fd

EOT
```

## 📌 উপসংহার

Git Alias আপনার কাজের গতি বাড়ায়। আপনি যত বেশি alias ব্যবহার করবেন, তত কম টাইপ করতে হবে এবং সময় বাঁচবে।
