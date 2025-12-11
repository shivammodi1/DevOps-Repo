# Git Pull vs Git Fetch

`git pull` and `git fetch` are two commands used to update your local repository with changes from a remote repository.  
Both download new data, but they work in **different ways**.

---

## 🚀 Git Pull

**Definition:**  
`git pull` downloads changes from the remote repository **and automatically merges** them into your current branch.

### ✔ What it does
- Remote se latest changes download karta hai.  
- Directly unhe **current working branch** me merge kar deta hai.  
- Aapki **local repository** aur **working directory (local files)** dono update ho jate hain.

### ✔ Simple Meaning
- **Local Repository Sync**  
- **Working Directory Update**  
- **Auto Merge**

### 🔁 Flow Diagram

```
Remote Repository  -->  Local Repository  -->  Working Directory 
                     (Fetch + Merge)               (Update)
       (Fetch)               (Merge)
```

### ✔ Example Command
```bash
git pull origin main
```

---

---

## 📥 Git Fetch

**Definition:**  
`git fetch` remote se latest changes download karta hai,  
**lekin un changes ko aapke current branch me merge nahi karta**.

### ✔ What it does
- Remote repo se data download karta hai.  
- Data ko **sirf Local Repository (origin/main, origin/dev)** me store karta hai.  
- Working Directory me koi change nahi hota.

### ✔ Simple Meaning
- **Local Repository Sync Only**  
- **No Merge**  
- **No Working Directory Update**

### 🔁 Flow Diagram

```
Remote Repository  -->  Local Repository  
                     (Fetch Only)
       (Fetch)
```
### ✔ Example Command
```bash
git fetch origin
```
--- 


## 🔍 Summary Table

| Term               | Meaning                                                                 |
|--------------------|-------------------------------------------------------------------------|
| **Local Directory** (Local Repository) | Your computer's `.git` storage where commit history and Git data are saved. |
| **Working Directory** | The files and folders you can see and edit on your computer (your actual project workspace). |
