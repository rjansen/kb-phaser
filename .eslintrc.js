module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  plugins: [
    'import',
    'prettier',
  ],
  globals: {
    'chrome': true,
    'fetch': true,
    'window': true,
    'document': true,
    'CustomEvent': true,
    'localStorage': true,
    'sessionStorage': true,
    'If': true,
    'Else': true,
    'For': true,
    'Choose': true,
    'When': true,
    'Otherwise': true,
    'WebSocket': true,
    'File': true
  },
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'ignore',
      }
    ],
    'lines-between-class-members': 0,
    'arrow-parens': [
      2,
      'as-needed',
    ],
    'global-require': 0,
    'max-len': [
      'error',
      {
        'code': 100,
        'tabWidth': 2,
        'ignoreUrls': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'ignoreStrings': true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/e2e/**',
          '**/tests/**',
          '**/test/**',
          '**/__tests__/**'
        ]
      }
    ],
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      2,
      {
        'js': 'never'
      }
    ],
    'no-console': [
      2,
      {
        'allow': [
          'warn',
          'error',
        ],
      },
    ],
    'no-restricted-globals': 0,
    'no-duplicate-imports': 0,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      1,
      {
        'vars': 'local',
        'argsIgnorePattern': '^_+$',
        'varsIgnorePattern': '^_+$',
      },
    ],
    'max-classes-per-file': [1, 3],
    'camelcase': ['error', {'properties': 'never', 'ignoreDestructuring': true}],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src'],
        'extensions': ['.js']
      }
    }
  }
};
