```javascript
// pages/about.js

export default function About() {
  // Check if the window object exists before accessing it.
  const href = typeof window !== 'undefined' ? window.location.href : null;
  console.log(href); 
  return (
    <div>
      <h1>About Page</h1>
      <p>The current URL is: {href}</p>
    </div>
  );
}
```