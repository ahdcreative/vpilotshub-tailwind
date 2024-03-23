module.exports = {
    config: {
        theme: {
            extend: {
                // heights
                height: () => ({
                    120: '30rem',
                    144: '36rem',
                    160: '40rem',
                    map: '40.3rem'
                }),
                // screen sizes
                screens: {
                    'xs': '475px'
                },
                // add color classes to 'active' state
                backgroundColor: ['active'],
                textColor: ['active'],
                // animations
                keyframes: {
                    wiggle: {
                        '0%, 100%': {transform: 'rotate(-1deg)'},
                        '50%': {transform: 'rotate(2.5deg)'},
                    },
                },
                animation: {
                    wiggle: 'wiggle 15s ease-in-out infinite'
                },
                // colors
                colors: {
                    teal: {
                        'DEFAULT': '#20c997'
                    },
                    vpilothub: {
                        'DEFAULT': '#042940',
                        'light': '#F9F9F9',
                        'info': {
                            'DEFAULT': '#7239EA',
                            'active': '#5014D0'
                        },
                        'warning': {
                            'DEFAULT': '#F6C000',
                            'active': '#DEAD0E'
                        },
                        'danger': {
                            'DEFAULT': '#F8285A',
                            'active': '#D81A48'
                        },
                        'bg': {
                            'dark': '#1E2129',
                            'white': '#FFFFFF',
                        },
                        'text': {
                            'DEFAULT': '#042942',
                            'secondary': '#F1F1F4',
                            'light': '#F9F9F9',
                            'success': '#1BC65B',
                            'info': '#7239EA',
                            'warning': '#F6C000',
                            'danger': '#F8285A',
                            'dark': '#1E2129'
                        },
                        'border': {
                            'DEFAULT': '#F1F1F4',
                            'dashed': '#DBDFE9'
                        }
                    }
                }
            },
            boxShadow: {
                'md-dark': '1px 1px 7px 1px rgba(0, 0, 0, 0.2)',
                'md-dark-contrast': '1px 1px 7px 1px rgba(0, 0, 0, 0.35)',
                'lg-dark': '1px 1px 10px 1px rgba(0, 0, 0, 0.15)',
                '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)',
            },
        },
        variants: {
            extend: {
                // Add opacity to 'disabled' state
                opacity: ['disabled']
            },
        },
    },

    handler: function () {}
}