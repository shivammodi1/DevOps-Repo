# Generate & Add SSH Key in GitLab
- Using SSH keys for authentication is a secure way to connect to GitLab repositories without needing to enter your username and password each time.

- SSH is more secure than HTTPS because it uses key-based authentication, which is less vulnerable to brute-force attacks.

## Step 1: Generate an SSH Key Pair
- 1. Open GitLab and navigate to your profile settings by clicking on your avatar in the top right corner and selecting "Settings".
- 2. In the left sidebar, click on "SSH Keys".
- 3. Click on the "add SSH key" button.
- 4. Open your terminal (Linux/Mac) or Git Bash (Windows).
- 5. Enter the following command to generate a new SSH key pair:
  ```bash
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```
- 6. When prompted to "Enter a file in which to save the key," press Enter to accept the default file location.
- 7. Next, you'll be prompted to enter a passphrase. You can either enter a secure passphrase or leave it empty for no passphrase.
- 8. Your SSH key pair will be generated, and you should see a message indicating the location of your public and private keys.

## Step 2: Add the SSH Key to GitLab
- 1. In your terminal, display the contents of your public key file by running the following command:
  ```bash
  cat ~/.ssh/id_rsa.pub
  ```
- 2. Copy the entire output of the command (this is your public SSH key).
- 3. Go back to the GitLab "SSH Keys" page.
- 4. In the "Key" field, paste the copied public SSH key.
- 5. Optionally, you can add a title to help you identify the key later (e.g., "My Laptop SSH Key").
- 6. Click the "Add key" button to save your SSH key to your GitLab account.
