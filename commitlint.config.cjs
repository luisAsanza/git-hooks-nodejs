// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    // Teach the parser which tokens count as "issue references"
    parserOpts: {
      // Add all Jira project prefixes you use
      issuePrefixes: ['PROJ-'], 
    },
  },
  rules: {
    // Require at least one issue reference somewhere (body/footer)
    'references-empty': [2, 'never'],
    // (Optional) other useful rules you might like:
    // 'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // 'header-max-length': [2, 'always', 72],
  },
};