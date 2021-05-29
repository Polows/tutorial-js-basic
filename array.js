const posts = [{
    id: 1,
    title: 'Post',
    tags: ['javascript']
}, {
    id: 2,
    title: 'Test',
    tags: ['javascript', 'react']
}]


// Find method
console.log(posts.find(post => post.title == 'Post'));
console.log(posts.find(post => post.id == 2));

// Exists
console.log(posts.some(post => post.id === 4));
console.log(posts.some(post => post.tags.includes('react')));

//
console.log(posts.every(post => post.tags.includes('react')));
console.log(posts.every(post => post.tags.includes('javascript')));

// Map
console.log(posts.map(post => post.title));

// Filter
console.log(posts.filter(post => post.tags.includes('react')));

// Reduce
console.log(posts.reduce((allTags, post) => {
    return [...allTags, ...post.tags]
}, []));

// Array
console.log(posts.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]))
}, []));

// Filter
console.log(posts.reduce((allTags, post) => {
    return [...allTags, ...post.tags]
}, []).filter((post, index, self) =>  index === self.indexOf(post)));