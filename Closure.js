// Closures are one of the essential concepts of JavaScript that make the
// language very flexible and resilient to work with, having a good
// understanding of it is really important.

// In simple terms, closure is a bundling of two or more functions where
// inner functions have access to the properties and methods of the outer
// functions even after the execution of the external function is done.
function example() {
  let blog = "learnersbucket";
  function displayBlog() {
    console.log(blog);
  }
  displayBlog();
}
example();
// "learnersbucket"
// If you notice the variable blog is declared above the function
// displayBlog(), but it can be accessed inside it.
// This is because variables are lexical scope in JavaScript and then can
// be accessed anywhere inside that scope unless and until they are
// overridden. In the above example, the variable is function scoped and
// it can be accessed anywhere within the function body (even in the
// inner functions).
function example() {
  // outer scoped
  let blog = "learnersbucket";
  function displayBlog() {
    // new variable with the same name
    // declared in a new scope
    // this will be printed
    let blog = "hello";
    console.log(blog);
  }
  displayBlog();
}
example();
