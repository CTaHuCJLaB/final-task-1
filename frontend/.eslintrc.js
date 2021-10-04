module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
    plugins: [],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        semi: ['error', 'always'],
        'vue/html-indent': ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'vue/no-v-html': ['off'],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 10,
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
};
