# Git for Open Source Cheat Sheet

## Getting started on a project

1. **Claim**
    Comment on an issue to say you’ll be working on it. (Refresh the page first to see if someone else has already claimed.)
2. **Fork**
    Click the fork button on the repo to make a copy under your username.

    ![Fork Button](resources/imgs_for_git_cheat/fork_button.png)
Format: ![Fork Button in GitHub](resources/imgs_for_git_cheat/fork_button.png)

3. **Clone**
    Clone your fork.

    ```
    $ git clone https://github.com/YOUR-USERNAME/YOUR-FORK.git
    $ cd project-repo-name
    ```

4. **Add upstream**
    ```
    $ git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git
    ```

5. **Branch**
    Checkout a new branch to work on your changes. You can name it to match the issue you’re working on.

    ```
    $ git checkout -b issue-123
    ```

6. **Edit, save & test**
    Make your improvements in the text editor or IDE of your choice, then follow project instructions for checking that your changes work as expected.
7. **Add & commit**
    ```
    $ git add .
    $ git commit -m ‘Add a useful commit message
    ```

8. **Fetch & merge upstream**
    Check for possible conflicts by getting the latest version of the upstream repo.

    ```
    $ git fetch upstream
    $ git merge upstream/master
    ```

    If there are merge conflicts, open the affected files in your text editor and resolve them, then save, add and commit the changes.
9. **Push**
    Push your working branch up to your forked repo on GitHub.

    ```
    $ git push origin WORKING-BRANCH-NAME
    ```
10. **Pull Request (PR)**
    Open your fork on github.com, and there should be a prompt to create a pull request (PR) with your new changes.

    ![Pull Request](resources/imgs_for_git_cheat/pull_request_button.png)
    Format: ![Compare and pull request button appears in GitHub](resources/imgs_for_git_cheat/pull_request_button.png)

    If you don’t see this prompt, try refreshing the page, then try clicking the Branch dropdown to see if your working branch has been added to your fork.

    Check the pull request page to be sure it reflects the changes you’re expecting. Add a descriptive message, and Create pull request.

    If a project maintainer requests changes, or you forgot to add a change, you can repeat steps 6-9 above on the branch that matches the PR, and your changes will be added to the PR automatically.

## Tackling a new issue on the same repo

1. **Claim**
    Don’t forget to claim the issue in the comments before starting!

2. **Checkout master**
    In the repo on your local machine, check out the master branch. This branch will not have the changes from your working branch, making a clean base for adding your separate changes.

    ```
    $ git checkout master
    ```

3. **Fetch & merge upstream**
    Get the latest version of the original repository.

    ```
    $ git fetch upstream
    $ git merge upstream/master
    ```

4. **Repeat**
    Repeat steps 5-11 from the previous list to make new changes and push them up for review.
