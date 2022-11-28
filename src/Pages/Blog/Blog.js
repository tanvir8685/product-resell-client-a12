import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-primary font-bold    ">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content  text-dark  ">
                    <p>Managing state in your React apps isn’t as simple as using useState or useReducer.

                        Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                        In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.

                        <br />
                        The Four Kinds of React State to Manage
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                        <br />
                        There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state
                        <br />
                        Let's cover each of these in detail:

                        Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.
<br />
                        Server state – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        <br />

                        URL state – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build. </p>
                </div>

            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-primary font-bold">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content  text-dark">
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
                </div>


            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  text-primary font-bold">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content text-dark">
                    <p>Unit testing is an essential instrument in the toolbox of any serious software developer. However, it can sometimes be quite difficult to write a good unit test for a particular piece of code. Having difficulty testing their own or someone else’s code, developers often think that their struggles are caused by a lack of some fundamental testing knowledge or secret unit testing techniques.

                        In this unit testing tutorial, I intend to demonstrate that unit tests are quite easy; the real problems that complicate unit testing, and introduce expensive complexity, are a result of poorly-designed, untestable code. We will discuss what makes code hard to test, which anti-patterns and bad practices we should avoid to improve testability, and what other benefits we can achieve by writing testable code. We will see that writing unit tests and generating testable code is not just about making testing less troublesome, but about making the code itself more robust, and easier to maintain.</p>
                </div>


            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  text-primary font-bold">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content text-dark">
                    <p> React
                        React doesn’t enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code.

                        ReactDOM.render(
                        <h1>Hello, world!</h1>,
                        document.getElementById('root')
                        );
                        React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                        React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.

                        Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.

                        <br /><br />

                        Vue
                        The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                        Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                        Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.

                        Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.

                        SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.
                        <br /><br />

                        Angular
                        In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                        AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                        Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                        Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.

                        Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.

                        Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.

                        Angular is built in TypeScript, so its use is recommende</p>
                </div>


            </div>
        </div>
    );
};

export default Blog;