module.exports = {
  hooks: {
    'pre-commit': 'npm run precommit',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
}
