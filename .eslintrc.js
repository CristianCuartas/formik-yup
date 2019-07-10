module.exports ={
    root: true,
    parser: 'babel-eslint',
    parserOptions:{
        ecmaVersion:6,
        sourceType: 'module'
    },
    env:{
        browser:true,
        node: true
    },
    extends:['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['html'],
    rules:{
        'no-unused-vars':1,
        'no-multiple-empty-lines':2,
        'class-methods-use-this':0,
        'comma-dangle':['error','never'],
        'no-console':['error', {allow: ['warn','log']}],
        'prettier/prettier':['error', {singleQuote: true}],
        'import/prefer-default-export': 'off',

        'arrow-parens':process.env.NODE_ENV === 'production' ? 2:0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2:0
    }
};