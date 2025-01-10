const fs = require('fs');
const path = require('path');

// Read templates
const headerTemplate = fs.readFileSync(path.join(__dirname, '../templates/header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(__dirname, '../templates/footer.html'), 'utf8');
const postTemplate = fs.readFileSync(path.join(__dirname, '../templates/post.html'), 'utf8');

function generatePost(post) {
    let content = headerTemplate.replace('{{title}}', post.title);
    content += postTemplate
        .replace('{{title}}', post.title)
        .replace('{{date}}', post.date)
        .replace('{{read_time}}', post.readTime)
        .replace('{{content}}', post.content);
    content += footerTemplate;

    const fileName = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    fs.writeFileSync(path.join(__dirname, `../posts/${fileName}.html`), content);
}

// Example usage:
const posts = [
    {
        title: 'Calmness is a superpower',
        date: 'November 18, 2023',
        readTime: 3,
        content: `<p>As a kid, my dad worked as a firefighter...</p>
                 <p>Stay calm.</p>`
    },
    // Add other posts here
];

posts.forEach(generatePost); 