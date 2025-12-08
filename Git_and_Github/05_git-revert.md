# Git Revert Command
- The `git revert` command ka use karke hum unn file ko wapis laa sakte hain jo humne commit kar di hain.
- Yeh command ek naya commit create karta hai jo previous commit ke changes ko undo karta hai, bina history ko modify kiye.
- Yeh command tab useful hota hai jab humne koi galat commit kar diya ho aur usko wapas lena chahte hain bina purani history ko badle.
# Syntax
```
git revert <commit-hash> -> jab kuch commit karoge git 1 hash value bana dega usi hash value ko yahan daloge
```
- Yahan `<commit-hash>` us commit ka unique identifier hai jise hum revert karna chahte hain.
# Example
- Maan lijiye humne ek commit kiya jiska hash `a1b2c3d` hai aur hum us commit ko revert karna chahte hain.
```
git revert a1b2c3d
```
- Is command ko run karne ke baad, Git ek naya commit create karega jo `a1b2c3d` commit ke changes ko undo karega.
- Agar koi merge conflict hota hai, toh Git aapko notify karega aur aapko manually conflicts ko resolve karna padega.


# Agar recent commit ka hash value dekhna hain toh
```
- git log --oneline

```