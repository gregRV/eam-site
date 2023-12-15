/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 exports.createPages = async function ({ boundActionCreators }){
  const { createPage } = boundActionCreators;

  const posts = await fetch(`https://coral-app-fujcj.ondigitalocean.app/api/post`).then(res => res.json());
  return posts.data.forEach(post => {
    createPage({
      path: `/blog/${post._id}`,
      component: require.resolve('./src/pages/post.js'),
      context: { data: post }
    });
  });
 }