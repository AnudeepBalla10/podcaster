# podcaster

Display the podcasts and private lessons

## Adding New Episodes

1. Add the `.mp3` file and cover image to the `src/assets/episodes` folder.
2. Update the `episodes` array in `episodes.component.ts` with the new episode details.
3. Ensure the filenames match those referenced in the components.

## Deploying to GitHub Pages

1. Build the project using the command: `ng build --output-path docs --base-href /<repository-name>/`
2. Commit and push the changes to the `main` branch.
3. Go to the repository settings on GitHub.
4. Under the "Pages" section, set the source to `main` branch and the folder to `/docs`.