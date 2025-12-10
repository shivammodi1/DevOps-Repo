# Creating Aliases in Git
- Basically git me kuch commands hote hain jo hum frequently use karte hain. Agar hum un commands ke liye chhote aur easy-to-remember aliases bana lein, toh humara kaam bahut asaan ho jata hai.

- Git me hum do tarah ke aliases bana sakte hain: Global aliases aur Local aliases.

- It is just like a creating shortcuts for commands.

# Global Git Aliases
- Global aliases wo hote hain jo humare system ke har repository me kaam karte hain.
- Inhe hum git config command ke through create karte hain with the --global flag.
- Example: 
```
git config --global alias.st status
```
- Is command ke baad, hum `git st` command ka use karke `git status` command ko run kar sakte hain kisi bhi repository me.

# Local Git Aliases
- Local aliases sirf usi specific repository me kaam karte hain jahan humne unhe create kiya hai.
- Inhe hum git config command ke through create karte hain bina --global flag ke.
- Example:
```
git config alias.ci commit
```
- Is command ke baad, hum `git ci` command ka use karke `git commit` command ko run kar sakte hain sirf usi repository me jahan humne alias create kiya hai.