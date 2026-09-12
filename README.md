# Dev Stack — Development Stack Builder

Explore frontend, backend, database, and tooling options, compare them side by side, and put together the ideal development stack for your next project. Built with React, Tailwind CSS, and react-toastify.

## Technology Used
- React.js
- Vite
- Tailwind CSS
- react-toastify
- JSON (for technology data)

## Features
1. JSON data থেকে ১২টা technology card দেখানো হয়, প্রতিটায় rating, difficulty, আর category সহ।
2. "Add to Stack" বাটনে ক্লিক করে technology যোগ করা যায়; একই technology দুইবার যোগ করতে চাইলে toast notification এ warning দেখায়।
3. সম্পূর্ণ responsive design — mobile এ hamburger menu, বড় screen এ full navbar দেখায়।

## React Concept Questions

**1. What is JSX, and why is it used in React?**
JSX হলো JavaScript এর ভেতরে HTML এর মতো লেখা যায় এমন একটা syntax। এই প্রজেক্টে `<h1>Build Your Ideal...</h1>` — দেখতে HTML মনে হলেও এটা আসলে JavaScript। UI আর logic একসাথে লেখা যায় বলে এটা ব্যবহার করা হয়।

**2. What is the difference between props and state?**
Props হলো component এর বাইরে থেকে পাওয়া data, যা component নিজে বদলাতে পারে না — যেমন `TechnologyCard` এর `tech`, `onAdd`, `isAdded`। State হলো component এর নিজের data, যেটা সে নিজেই বদলাতে পারে — যেমন `stack` state।

**3. What does the useState hook do, and where did you use it in this project?**
`useState` দিয়ে component data মনে রাখে, আর data বদলালে screen automatic আপডেট হয়। এই প্রজেক্টে `stack`, `technologies`, `loading`, আর `menuOpen` এর জন্য এটা ব্যবহার করা হয়েছে।

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` দিয়ে component প্রথমবার screen এ আসার সাথে সাথে কাজ চালানো যায়। এটা `technologies.json` থেকে data fetch করতে ব্যবহার করা হয়েছে, যাতে page load হওয়ার সাথে সাথে একবারই data আসে।

**5. Why does every item in a .map() list need a unique key prop?**
React কে বুঝতে হয় list এর কোন item কোনটা, যাতে change হলে ঠিকভাবে update করতে পারে। প্রতিটা `TechnologyCard` এ `key={tech.id}` দেওয়া হয়েছে, কারণ প্রতিটা id ইউনিক।

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering মানে শর্ত অনুযায়ী আলাদা জিনিস দেখানো। "Your Stack" section এ `stack.length === 0` হলে "Your stack is empty" দেখায়, নাহলে যোগ করা technology গুলোর list দেখায়।

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent থেকে child এ data props দিয়ে পাঠানো হয় — যেমন `App.jsx` থেকে `TechnologyCard` কে `tech` পাঠানো হয়েছে। Child থেকে parent এ কিছু পাঠাতে function props হিসেবে পাঠাতে হয় — যেমন `onAdd={handleAdd}`, বাটনে ক্লিক হলে এই function কল হয়ে parent এর data বদলায়।

## What to Submit
- GitHub Repository Link: https://github.com/skpervez4321/B14-A05-DevStack
- Live Site Link: https://b14-a05-dev-stack-one.vercel.app