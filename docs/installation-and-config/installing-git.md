
# Git ইনস্টল করা

Git ইনস্টল করা ভার্সন কন্ট্রোল ব্যবস্থার প্রথম ধাপ। আপনি কোন অপারেটিং সিস্টেম ব্যবহার করছেন, তার উপর ভিত্তি করে ইনস্টলেশন প্রক্রিয়াটি আলাদা হতে পারে।

---

## 🪟 Windows-এ Git ইনস্টল

1. অফিসিয়াল Git সাইটে যান: https://git-scm.com
2. “Download for Windows” এ ক্লিক করুন
3. ডাউনলোড হওয়া `.exe` ফাইলটি চালান
4. ডিফল্ট সেটিংস রেখে "Next" চাপতে চাপতে "Install" চাপুন
5. ইনস্টলেশন সম্পন্ন হলে কমান্ড প্রম্পটে যাচাই করুন:

```bash
git --version
```

---

## 🍎 macOS-এ Git ইনস্টল

### পদ্ধতি ১: Homebrew ব্যবহার করে

```bash
brew install git
```

### পদ্ধতি ২: Xcode Command Line Tools

```bash
xcode-select --install
```

ইনস্টল হওয়ার পর যাচাই করতে:

```bash
git --version
```

---

## 🐧 Linux-এ Git ইনস্টল

### Ubuntu / Debian ভিত্তিক সিস্টেমে:

```bash
sudo apt update
sudo apt install git
```

### Fedora / RHEL ভিত্তিক সিস্টেমে:

```bash
sudo dnf install git
```

### Arch Linux:

```bash
sudo pacman -S git
```

ইনস্টল হওয়ার পর যাচাই করুন:

```bash
git --version
```

---

## ✅ ইনস্টলেশন যাচাই

সফলভাবে ইনস্টল হয়েছে কিনা তা যাচাই করতে নিচের কমান্ডটি চালান:

```bash
git --version
```

উদাহরণ: `git version 2.42.0`
