# Git Restore Command
- The `git restore` command is used for to restore files in the working directory to a previous state.
- Basically yeh command jo bhi changes apne working directory koi bhi fike by any chance delete yah modify kar diye hain orr unko wapis laane ke liye use hota hai.
- Yeh command untracked files ko affect nahi karta hai, sirf tracked files par hi kaam karta hai.
- Yeh command do main scenarios mein use hota hai:
  1. Changes ko discard karne ke liye jo working directory mein hain.
  2. Specific commit se files ko restore karne ke liye.

- `git restore <file>` : Discards changes in the working directory for the specified file, reverting it to the last committed state.
- `git restore --staged <file>` : Unstages the specified file, moving it from the staging area back to the working directory.
- `git restore .` : Discards all changes in the working directory for all files, reverting them to the last committed state.
