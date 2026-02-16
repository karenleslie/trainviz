# Agent Notes

## GitHub Push Workflow (karenleslie/trainviz)

Use this workflow to push changes from this workspace to GitHub with a simple browser login flow.

1. Ensure remote is set:
   - `git remote add origin https://github.com/karenleslie/trainviz.git` (only if missing)
   - `git remote -v`
2. Install local GitHub CLI in this repo (if `gh` is not installed system-wide):
   - `mkdir -p .tools`
   - Download latest macOS arm64 ZIP from `cli/cli` releases.
   - Unzip to `.tools/gh-dist`
   - Binary path: `./.tools/gh-dist/bin/gh`
3. Authenticate with browser popup/device flow:
   - `./.tools/gh-dist/bin/gh auth login --hostname github.com --git-protocol https --web`
4. Wire git credential helper via GitHub CLI:
   - `./.tools/gh-dist/bin/gh auth setup-git`
5. Push:
   - `git push -u origin main`

## GitHub Pages Enablement (if needed)

Enable Pages from `main` root:

- `./.tools/gh-dist/bin/gh api -X POST repos/karenleslie/trainviz/pages -f 'source[branch]=main' -f 'source[path]=/'`

Check build status:

- `./.tools/gh-dist/bin/gh api repos/karenleslie/trainviz/pages/builds`

Live URL:

- `https://karenleslie.github.io/trainviz/`
