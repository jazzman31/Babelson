let htmlMap =
    [
        {
            name: 'main',
            file: 'main/base.html',
            children: [
                {
                    name: 'header',
                    file: 'main/header/base.html',
                    children: [
                        {
                            name: 'menu',
                            file: 'main/header/base.html'
                        }
                    ]
                },
                {
                    name: 'content',
                    file: 'main/base.html'

                },
                {
                    name: 'footer',
                    file: 'main/base.html'
                }
            ]
        }
    ];