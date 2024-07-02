# workflow-demo

Just learning more about the github workflow actions.

Aim of this repo. is to be able to create a release using GH actions and git flow.

All you need to do is to head to the Actions Tab, 

<img width="1407" alt="Screenshot 2024-07-02 at 7 47 55 PM" src="https://github.com/NiharR27/workflow-demo/assets/52943748/77cb6718-b401-4ba8-bc67-09e585680cc0">

This will create a new release branch, bump the package.json version and create a PR to develop.

<img width="1407" alt="Screenshot 2024-07-02 at 7 49 48 PM" src="https://github.com/NiharR27/workflow-demo/assets/52943748/46ab7899-837c-4e08-b4c9-e2259e0420a5">

Once you merge this PR, the next workflow will start to create a PR to merge develop to master

<img width="1407" alt="Screenshot 2024-07-02 at 7 50 45 PM" src="https://github.com/NiharR27/workflow-demo/assets/52943748/a88fae93-61bf-4b32-a67a-d1b9efc39bca">

Once you merge this PR, the last workflow will be fired to publish the release

<img width="1407" alt="Screenshot 2024-07-02 at 7 51 37 PM" src="https://github.com/NiharR27/workflow-demo/assets/52943748/dbbeb14f-099f-4d1b-8f0c-a73d9919d2fc">

<img width="1407" alt="Screenshot 2024-07-02 at 7 51 47 PM" src="https://github.com/NiharR27/workflow-demo/assets/52943748/0cf05fa0-b6fe-486b-9204-f23a7030fed0">

Happy Coding!
