#!/bin/bash

# Check if current branch is "main"
current_branch=$(git branch --show-current)

if [ "$current_branch" != "main" ]; then
  echo "You are not on the main branch. Please switch to the main branch to proceed."
  exit 1
fi

# Function to merge main into a branch
merge_branch() {
  local branch=$1
  echo "Merging main into $branch branch..."
  
  # Check if the branch exists
  if git show-ref --verify --quiet refs/heads/$branch; then
    # Checkout the branch
    git checkout $branch
    # Merge main into the branch
    git merge main

    if [ $? -ne 0 ]; then
      echo "Merge conflict detected in $branch branch. Resolve conflicts and commit the changes."
      exit 1
    else
      echo "Successfully merged main into $branch branch."
    fi
  else
    echo "Branch $branch does not exist."
  fi
}

# Update the main branch
echo "Updating main branch..."
git checkout main
git pull origin main

# Merge main into the target branches
# merge_branch "api"
# merge_branch "client"
merge_branch "mobile"

# Switch back to the main branch
git checkout main
echo "Merge process completed."

# Push changes to remote branches
echo "Pushing changes to remote branches..."
# git push origin api
# git push origin client
git push origin mobile

echo "All changes have been pushed to remote branches."
