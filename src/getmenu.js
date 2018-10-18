export default (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { title: 'Home', to: '/', path: './App' },
                { title: 'About', to: '/about', path: './About' },
                { title: 'Contact', to: '/contact', path: './Contact' }
            ])
        }, time);
    })
}