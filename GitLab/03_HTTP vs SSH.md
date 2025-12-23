# HTTP vs SSH

- SSH aur HTTPS dono **secure communication protocols** hain.
- Dono ka use **Git repositories ko clone, pull, push** karne ke liye hota hai.
- Lekin in dono me **authentication method aur use cases** alag hote hain.

## HTTP (HTTPS) (Hypertext Transfer Protocol Secure)

- Authentication ke liye **username + password ya Personal Access Token (PAT)** use hota hai.
- **Setup easy hota hai**, especially jab aap **firewall ya proxy ke behind kaam kar rahe ho**.
- HTTP ke extra layers ki wajah se **thoda slow ho sakta hai**.
- Un users ke liye best hai jo **simple setup chahte hain** aur SSH keys manage nahi karna chahte.
- Example URL:  
  `https://gitlab.com/username/repository.git`

## SSH (Secure Shell)

- Authentication ke liye **SSH keys (public & private)** ka use hota hai, jo **zyada secure** hota hai.
- Pehli baar **SSH keys setup** karna padta hai, lekin uske baad **password enter karne ki need nahi hoti**.
- Generally **HTTPS se faster** hota hai Git operations ke liye.
- Un users ke liye suitable hai jo **frequently repositories ke sath kaam karte hain** aur **high security prefer karte hain**.
- Example URL:  
  `git@gitlab.com:username/repository.git`

## Summary

- **HTTPS choose karo** jab:
  - Easy setup chahiye  
  - Aap **firewall ke behind kaam kar rahe ho**

- **SSH choose karo** jab:
  - Long-term ya professional projects ho  
  - Better security aur faster access chahiye



## What does "Working Behind a Firewall" mean?

- **Firewall ek security system hota hai** jo network traffic ko control karta hai.
- Jab aap **office, college, ya company network** ke andar kaam karte ho, to aap **firewall ke behind working** hote ho.
- Firewall decide karta hai:
  - Kaunsa traffic **allow** hoga  
  - Kaunsa traffic **block** hoga
- Aksar **SSH (port 22)** firewall me block hota hai,
  jabki **HTTP/HTTPS (ports 80/443)** allowed hote hain.
- Isliye **firewall ke behind kaam karte waqt HTTPS zyada reliable hota hai**.


### Real-Life Example (College Wi-Fi)

- Jab hum **college Wi-Fi se connect hote hain**, to hum **firewall ke behind kaam kar rahe hote hain**.
- College network **firewall use karta hai** jo internet traffic ko monitor aur control karta hai.
- Security reasons ki wajah se **kuch websites aur ports block kar diye jaate hain**.
- Usually **HTTP/HTTPS (ports 80/443)** allowed hote hain,
  jabki **SSH (port 22)** ya kuch specific websites block ho sakti hain.
- Isliye college Wi-Fi par kaam karte waqt **HTTPS zyada reliable hota hai**.



## Why SSH Does Not Work Under a Firewall

- SSH communication **port 22** ka use karta hai.
- College ya office networks me **firewall laga hota hai** jo network traffic ko control karta hai.
- Security reasons ki wajah se **port 22 aksar firewall me block hota hai**,
  kyunki SSH remote system access deta hai.
- Firewall sirf **necessary aur safe ports** allow karta hai.
- **HTTP/HTTPS (ports 80/443)** web browsing ke liye required hote hain,
  isliye ye ports mostly **allowed rehte hain**.
- Is wajah se:
  - ❌ **SSH connections fail ho jate hain**
  - ✅ **Git over HTTPS smoothly kaam karta hai**
