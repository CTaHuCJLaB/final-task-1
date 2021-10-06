module.exports = {
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard'],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        'at-rule-empty-line-before': ['always', {
            except: [
                'first-nested',
                'blockless-after-blockless',
            ],
            ignore: ['after-comment'],
            message: 'Перед правилом должна быть пустая строка',
        }],
        'at-rule-name-case': ['lower', {
            message: 'Идентификатор правила следует писать строчными буквами',
        }],
        'at-rule-name-space-after': ['always', {
            message: 'После идентификатора правила должен быть пробел',
        }],
        'at-rule-no-unknown': [true, {
            ignoreAtRules: [
                'mixin',
                'define-mixin',
                'extend',
                'include',
                'content',
                'rules',
                'for',
                'function',
                'if',
                'else',
                'return',
            ],
            message: 'Неизветное правило',
        }],
        'at-rule-no-vendor-prefix': [true, {
            message: 'Префиксы для правил - запрещены',
        }],
        'at-rule-semicolon-newline-after': ['always', {
            message: 'После точки с запятой необходим перенос',
        }],
        'block-closing-brace-empty-line-before': ['never', {
            message: 'Перед «}» не должно быть пустой строки',
        }],
        'block-closing-brace-newline-after': ['always', {
            message: 'После «}» должен быть перенос',
        }],
        'block-closing-brace-newline-before': ['always', {
            message: 'Перед «}» должен быть перенос',
        }],
        'block-closing-brace-space-after': ['always-single-line', {
            message: 'В однострочных блоках после «}» Должен быть пробел',
        }],
        'block-closing-brace-space-before': ['always-single-line', {
            message: 'В однострочных блоках перед «}» Должен быть пробел',
        }],
        'block-opening-brace-newline-after': ['always', {
            message: 'После «{» должен быть перенос',
        }],
        'block-opening-brace-space-after': ['always-single-line', {
            message: 'В однострочных блоках после «{» Должен быть пробел',
        }],
        'block-opening-brace-space-before': ['always', {
            message: 'В однострочных блоках перед «{» Должен быть пробел',
        }],
        'color-hex-case': ['lower', {
            severity: 'warning',
            message: 'HEX-цвета нужно указывать строчными буквами',
        }],
        'color-hex-length': ['short', {
            message: 'Количество символов после решетки некорректно',
        }],
        'color-named': ['never', {
            message: 'Цвета ключевыми словами нельзя писать',
        }],
        'color-no-invalid-hex': [true, {
            message: 'Ошибка в написании HEX-цвета',
        }],
        'comment-no-empty': [true, {
            message: 'Комментарий не должен быть пустым',
        }],
        'declaration-bang-space-after': ['never', {
            message: 'После «!» не должно быть пробела',
        }],
        'declaration-bang-space-before': ['always', {
            message: 'Перед «!» должкен быть один пробел',
        }],
        'declaration-block-no-duplicate-properties': [true, {
            message: 'Правила не должны повторяться',
        }],
        'declaration-block-no-shorthand-property-overrides': [true, {
            message: 'Это свойство перебивает другое',
        }],
        'declaration-block-semicolon-newline-after': ['always', {
            message: 'После точки с запятой необходим перенос',
        }],
        'declaration-block-semicolon-newline-before': ['never-multi-line', {
            message: 'Перенос перед символом ; недопустим',
        }],
        'declaration-block-semicolon-space-after': ['always-single-line', {
            message: 'В однострочных блоках после «;» должен быть пробел',
        }],
        'declaration-block-semicolon-space-before': ['never', {
            message: 'Пробел перед символом ; недопустим',
        }],
        'declaration-block-single-line-max-declarations': [1, {
            message: 'На одной строке должно быть одно правило',
        }],
        'declaration-block-trailing-semicolon': ['always', {
            message: 'Каждое свойство должно заканчиваться точкой с запятой',
        }],
        'declaration-colon-space-after': ['always-single-line', {
            message: 'Следует ставить один пробел после двоеточия',
        }],
        'declaration-colon-space-before': ['never', {
            message: 'Не следует ставить пробел перед двоеточием',
        }],

        'declaration-property-value-disallowed-list': {},

        'font-family-name-quotes': ['always-where-recommended', {
            message: 'Название шрифта следует брать в кавычки только когда это необходимо',
        }],
        'font-family-no-duplicate-names': [true, {
            message: 'Нельзя дублировать один и тот же шрифт',
        }],
        'font-weight-notation': ['numeric', {
            message: 'Необходимо указывать плотность шрифта цифрой',
            ignore: ['relative'],
        }],
        'function-calc-no-unspaced-operator': [true, {
            message: 'до и после оператора должен быть пробел или перенос на новую строку',
        }],
        'function-comma-newline-after': ['always-multi-line', {
            message: 'В многострочных функциях после , должен быть перенос',
        }],
        'function-comma-newline-before': ['never-multi-line', {
            message: 'Перед переносом запятой быть не должно',
        }],
        'function-comma-space-after': ['always', {
            message: 'После запятой необходим пробел',
        }],
        'function-comma-space-before': ['never', {
            message: 'Перед запятой пробела быть не должно',
        }],
        'function-linear-gradient-no-nonstandard-direction': [true, {
            message: 'при указании направления градиента нужно добавить to',
        }],
        'function-max-empty-lines': [0, {
            message: 'Пустых строк не должно быть в функциях',
        }],
        'function-name-case': ['lower', {
            message: 'Имена функций следует писать строчными буквами',
        }],
        'function-parentheses-space-inside': ['never', {
            message: 'между скобками и значением не должно быть пробела',
        }],
        'function-whitespace-after': ['always', {
            message: 'Должны быть пробелы между функциями',
        }],
        indentation: [4, {
            ignore: ['inside-parens'],
            message: 'Отступ должен быть 4 пробела',
        }],
        'length-zero-no-unit': [true, {
            message: 'Единицы измерения не указываются, если значение равно нулю',
        }],
        'max-empty-lines': [2, {
            message: 'Должно быть не более двух пустых строк',
        }],
        'max-nesting-depth': [10, {
            message: 'Уровень вложенности не должен превышать 10',
        }],
        'media-feature-colon-space-after': ['always', {
            message: 'После двоеточия должен быть пробел',
        }],
        'media-feature-colon-space-before': ['never', {
            message: 'Перед двоеточием не должно быть пробела',
        }],
        'media-feature-name-case': ['lower', {
            message: 'Медиавыражения нужно писать строчными буквами',
        }],
        'media-feature-name-no-unknown': [true, {
            message: 'Неизвестное имя медиавыражения',
        }],
        'media-feature-parentheses-space-inside': ['never', {
            message: 'Пробелы после «(» и перед «)» использовать нельзя',
        }],
        'media-feature-range-operator-space-after': ['always', {
            message: 'После оператора диапазона должен быть пробел',
        }],
        'media-feature-range-operator-space-before': ['always', {
            message: 'Перед оператором диапазона должен быть пробел',
        }],
        'media-query-list-comma-newline-after': ['always-multi-line', {
            message: 'В многострочных медиазапросах должен быть перенос на новую строку после запятой',
        }],
        'media-query-list-comma-newline-before': ['never-multi-line', {
            message: 'В многострочных медиазапросах перед запятой не должно быть переноса на новую строку',
        }],
        'media-query-list-comma-space-after': ['always-single-line', {
            message: 'В однострочных медиазапросах, после запятой должен быть пробел',
        }],
        'media-query-list-comma-space-before': ['never-single-line', {
            message: 'В однострочных медиазапросах, перед запятой не должно быть пробела',
        }],
        'no-duplicate-selectors': [true, {
            message: 'Один и тот же селектор не должен дублироваться',
        }],

        'no-empty-source': null,

        'no-eol-whitespace': [true, {
            message: 'В конце строки не должно быть пробелов',
        }],
        'no-invalid-double-slash-comments': [true, {
            message: 'Не используйте комментарии с //',
        }],
        'no-missing-end-of-source-newline': [true, {
            message: 'В конце документа должна быть пустая строка',
        }],
        'number-leading-zero': ['always', {
            message: 'Всегда должен быть ведущий ноль',
        }],
        'number-no-trailing-zeros': [true, {
            message: 'Лишний  (необязательный) нуль в дроби',
        }],
        'property-case': ['lower', {
            message: 'Значения свойств следует писать строчными буквами',
        }],
        'property-disallowed-list': [
            [
                'order',
            ],
            {
                message: 'Нельзя использовать это свойство',
            },
        ],
        'rule-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['after-comment'],
            message: 'Перед правилом должна быть пустая строка',
        }],
        'selector-attribute-brackets-space-inside': ['never', {
            message: 'В атрибуте селектора между скобками и значением не должно быть пробелов',
        }],
        'selector-attribute-operator-space-after': ['never', {
            message: 'В атрибуте селектора после оператора не должно быть пробела',
        }],
        'selector-attribute-operator-space-before': ['never', {
            message: 'В атрибуте селектора перед оператором не должно быть пробела',
        }],
        'selector-attribute-quotes': ['always', {
            message: 'Значение атрибута должно быть обернуто кавычками',
        }],
        'selector-combinator-space-after': ['always', {
            message: 'При записи нескольких селекторов перед знаком комбинатора должен быть пробел',
        }],
        'selector-combinator-space-before': ['always', {
            message: 'При записи нескольких селекторов должеен быть перенос на новую строку',
        }],
        'selector-descendant-combinator-no-non-space': [true, {
            message: 'Комбинированные селекторы нужно отделять одним пробелом',
        }],
        'selector-list-comma-newline-after': ['always', {
            message: 'При записи нескольких селекторов должен быть перенос на новую строку',
        }],
        'selector-list-comma-newline-before': ['never-multi-line', {
            message: 'Перед запятой не должно быть переноса строки',
        }],
        'selector-list-comma-space-after': ['always-single-line', {
            message: 'После запятой должен быть пробел',
        }],
        'selector-list-comma-space-before': ['never', {
            message: 'Перед запятой не должно быть пробела',
        }],
        'selector-max-compound-selectors': [10, {
            message: 'Максимально допустимый составной селектор не должно превышать 10',
        }],
        'selector-max-empty-lines': [0, {
            message: 'Пустые строки в селекторах недопустимы',
        }],
        'selector-max-id': [0, {
            message: 'Нельзя использовать универсальные селекторы',
        }],
        'selector-pseudo-class-case': ['lower', {
            message: 'Псевдоклассы необходимо писать строчными буквами',
        }],
        'selector-pseudo-class-no-unknown': [true, {
            message: 'Такого псевдокласса не существует',
        }],
        'selector-pseudo-class-parentheses-space-inside': ['never', {
            message: 'Внутри скобок в псевдоселекторах не должно быть пробелов',
        }],
        'selector-pseudo-element-case': ['lower', {
            message: 'Псевдоэлементы необходимо писать строчными буквами',
        }],
        'selector-pseudo-element-colon-notation': ['double', {
            message: 'перед псевдоэлементом должно быть два двоеточия',
        }],
        'selector-pseudo-element-no-unknown': [true, {
            ignorePseudoElements: ['', 'v-deep'],
            message: 'Такого псевдоэлемента не существует',
        }],
        'selector-type-case': ['lower', {
            message: 'Селекторы необходимо писать строчными буквами',
        }],
        'selector-type-no-unknown': [true, {
            message: 'Такого селектора не существует',
        }],
        'shorthand-property-no-redundant-values': [true, {
            message: 'Избыточные значения',
        }],
        'string-no-newline': [true, {
            message: 'В строчных данных не должно быть переносов',
        }],
        'string-quotes': ['single', {
            message: 'В проекте испульзуются одинарные кавычки',
        }],
        'unit-case': ['lower', {
            message: 'Единицы измерения следует писать строчными надобно',
        }],
        'unit-no-unknown': [true, {
            message: 'Не существует таких единиц измерения',
        }],
        'value-keyword-case': ['lower', {
            message: 'Значения свойств следует писать строчными буквами',
            ignoreProperties: ['/font-/'],
        }],
        'value-list-comma-newline-before': ['never-multi-line', {
            message: 'Значения свойств должны быть без переносов',
        }],
        'value-list-comma-space-after': ['always-single-line', {
            message: 'Необходим пробел в значениях после запятой',
        }],
        'value-list-comma-space-before': ['never', {
            message: 'В значениях перед запятой пробел запрещен',
        }],
        'value-list-max-empty-lines': [0, {
            message: 'В списке значений не должно быть пустых строк',
        }],
        'order/properties-order': [
            {
                properties: [
                    'content',
                    'quotes',
                    'list-style',
                    'list-style-type',
                    'list-style-position',
                    'list-style-image',
                    'counter-reset',
                    'counter-increment',
                    'nav-index',
                    'nav-up',
                    'nav-right',
                    'nav-down',
                    'nav-left',
                    'position',
                    'z-index',
                    'top',
                    'bottom',
                    'left',
                    'right',
                    'float',
                    'clear',
                    'display',
                    'flex',
                    'flex-direction',
                    'flex-flow',
                    'flex-grow',
                    'flex-shrink',
                    'flex-basis',
                    'flex-wrap',
                    'justify-content',
                    'justify-items',
                    'justify-self',
                    'align-content',
                    'align-items',
                    'align-self',
                    'order',
                    'grid',
                    'grid-area',
                    'grid-template',
                    'grid-template-areas',
                    'grid-template-rows',
                    'grid-template-columns',
                    'grid-row',
                    'grid-row-start',
                    'grid-row-end',
                    'grid-column',
                    'grid-column-start',
                    'grid-column-end',
                    'grid-auto-rows',
                    'grid-auto-columns',
                    'grid-auto-flow',
                    'grid-gap',
                    'grid-row-gap',
                    'grid-column-gap',
                    'box-sizing',
                    'vertical-align',
                    'width',
                    'min-width',
                    'max-width',
                    'height',
                    'min-height',
                    'max-height',
                    'padding',
                    'padding-top',
                    'padding-right',
                    'padding-bottom',
                    'padding-left',
                    'font',
                    'font-family',
                    'font-size',
                    'line-height',
                    'font-weight',
                    'font-style',
                    'font-variant',
                    'font-size-adjust',
                    'font-stretch',
                    'font-effect',
                    'font-emphasize',
                    'font-emphasize-position',
                    'font-emphasize-style',
                    '-webkit-font-smoothing',
                    '-moz-osx-font-smoothing',
                    'font-smooth',
                    'hyphens',
                    'text-indent',
                    'letter-spacing',
                    'text-decoration',
                    'text-decoration-skip-ink',
                    'text-transform',
                    'text-align',
                    'text-align-last',
                    'text-justify',
                    'text-emphasis',
                    'text-emphasis-color',
                    'text-emphasis-style',
                    'text-emphasis-position',
                    'text-shadow',
                    'text-stroke',
                    'text-outine',
                    '-ms-text-overflow',
                    'text-overflow',
                    'text-overflow-ellipsis',
                    'text-overflow-mode',
                    'text-wrap',
                    '-webkit-text-size-adjust',
                    '-ms-text-size-adjust',
                    'white-space',
                    'word-spacing',
                    'word-break',
                    'word-wrap',
                    'overflow-wrap',
                    'tab-size',
                    'color',
                    'opacity',
                    'border',
                    'border-style',
                    'border-width',
                    'border-color',
                    'border-top',
                    'border-top-style',
                    'border-top-width',
                    'border-top-color',
                    'border-bottom',
                    'border-bottom-style',
                    'border-bottom-width',
                    'border-bottom-color',
                    'border-left',
                    'border-left-style',
                    'border-left-width',
                    'border-left-color',
                    'border-right',
                    'border-right-style',
                    'border-right-width',
                    'border-right-color',
                    'border-radius',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-bottom-right-radius',
                    'border-bottom-left-radius',
                    'border-image',
                    'border-image-source',
                    'border-image-slice',
                    'border-image-width',
                    'border-image-outset',
                    'border-image-repeat',
                    'border-spacing',
                    'border-collapse',
                    'outline',
                    'outline-style',
                    'outline-width',
                    'outline-color',
                    'outline-offset',
                    'stroke',
                    'stroke-dasharray',
                    'stroke-dashoffset',
                    'stroke-linecap',
                    'stroke-linejoin',
                    'stroke-miterlimit',
                    'stroke-opacity',
                    'stroke-width',
                    'background',
                    'background-color',
                    'background-image',
                    'background-repeat',
                    'background-position',
                    'background-position-x',
                    'background-position-y',
                    'background-size',
                    'background-attachment',
                    'background-origin',
                    'background-clip',
                    'background-blend-mode',
                    'isolation',
                    'fill',
                    'fill-opacity',
                    'fill-rule',
                    'mask',
                    'box-shadow',
                    'mix-blend-mode',
                    '-ms-interpolation-mode',
                    'filter',
                    'transform',
                    'transform-origin',
                    'transition',
                    'transition-property',
                    'transition-duration',
                    'transition-delay',
                    'transition-timing-function',
                    'animation',
                    'animation-name',
                    'animation-duration',
                    'animation-delay',
                    'animation-timing-function',
                    'animation-iteration-count',
                    'animation-direction',
                    'animation-play-state',
                    'animation-fill-mode',
                    'margin',
                    'margin-top',
                    'margin-right',
                    'margin-bottom',
                    'margin-left',
                    'cursor',
                    '-ms-touch-action',
                    'touch-action',
                    'user-select',
                    'pointer-events',
                    'visibility',
                    'zoom',
                    'table-layout',
                    'empty-cells',
                    'caption-side',
                    'resize',
                    'overflow',
                    'overflow-x',
                    'overflow-y',
                    '-webkit-overflow-scrolling',
                    '-ms-overflow-x',
                    '-ms-overflow-y',
                    '-ms-overflow-style',
                    'clip',
                ],
            },
        ],
    },
};
