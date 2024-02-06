console.log('Person1: shows tickets');
console.log('Person2: shows tickets');

const preMovie = async() => {
    const preWifeGetTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    });

    const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));

    const getButter = new Promise((resolve, reject) => resolve(`butter`));

    const getColddrinks = new Promise((resolve, reject) => resolve(`coldrinks`))

    let ticket = await preWifeGetTickets;
    console.log(`Wife: I have ${ticket}`);
    console.log('Husband: Lets go in');
    console.log('Wife: No, i am Hungry, get me some popcorn');

    let popcorn = await getPopcorn;
    console.log(`Husband:I get some ${popcorn}`);
    console.log('Husband: lets go in')
    console.log('Wife: Get some butter on popcorn');

    let butter = await getButter;
    console.log(`Husband: I get some ${butter} on popcorn`);
    console.log('Husband: Anything else darling');
    console.log('Wife: Get some coldrinks')

    let coldrinks = await getColddrinks;
    console.log(`Husband: Here is your ${coldrinks}`);
    console.log('Husband: lets go in');
    console.log('Wife: its very late, lets go in');

    return ticket;

}


preMovie()
    .then((ticket) => console.log('Person3: shows tickets'))
    .catch((error) => console.error(error));






// previous code
/*
const posts = [];
let lastUserActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        const preCreationTimestamp = new Date();
        setTimeout(() => {
            const postCreationTimestamp = new Date().getTime();
            posts.push({ ...post, timestamp: postCreationTimestamp });
            resolve(posts);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastUserActivityTime = new Date();
            resolve(lastUserActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject('No posts to delete');
            }
        }, 1000);
    });
}

async function main() {
    try {
        const preCreationTimestamp = await updateLastUserActivityTime();
        console.log(`Before creating post the user last activity time is ${preCreationTimestamp}`);
        
        const postsResult = await createPost({ title: 'Post 1', content: 'Content of Post 1' });
        const createdPost = postsResult[0];
        console.log('After creating post >>>>>> ');
        console.log('Post-Creation Timestamp:', createdPost.timestamp);
        
        const deletedPost = await deletePost();
        console.log('Deleted Post:', deletedPost);
        console.log('Remaining Posts:', posts);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

*/ 