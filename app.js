const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT)
})

app.get('/acronyms', (request, response) => {
    const acronyms = {
        "Status": "Running"
    }

    response ?.send(data)
})

const data = [
    {
        "standsFor": "Integrated Development Environment",
        "description": "It's a software application that provides facilities to programmers.",
        "id": "000001",
        "tags": [
          "general",
          "tooling"
        ],
        "acro": "IDE"
      },
      {
        "standsFor": "ECMAScript",
        "description": "It's a general-purpose programming language that was designed to be a web scripting language.",
        "id": "000002",
        "tags": [
          "general",
          "JavaScript",
          "programming language",
          "front-end"
        ],
        "acro": "ES"
      },
      {
        "standsFor": "Graphic User Interface",
        "description": "It's a user interface that allows users to interact with electronic devices through a graphical interface",
        "id": "000003",
        "tags": [
          "general",
          "tooling",
          "front-end"
        ],
        "acro": "GUI"
      },
      {
        "standsFor": "Document Object Model",
        "description": "It's a programming interface for HTML and XML documents that presents the elements of a document as JavaScript Objects as a tree-like structure of parent-child relationships",
        "id": "000004",
        "tags": [
          "browser",
          "JavaScript",
          "front-end"
        ],
        "acro": "DOM"
      },
      {
        "standsFor": "JavaScript Object Notation",
        "description": "It's a data-interchange format with key-value pairs as a JaaScript object",
        "id": "000005",
        "tags": [
          "general",
          "data",
          "JavaScript",
          "front-end"
        ],
        "acro": "JSON"
      },
      {
        "standsFor": "Asynchronous JavaScript And XML",
        "description": "It's a set of techniques on the client side to create asynchronous communication in web applications",
        "id": "000006",
        "tags": [
          "general",
          "tooling",
          "library",
          "JavaScript",
          "front-end"
        ],
        "acro": "AJAX"
      },
      {
        "standsFor": "Immediately Invoked Function Expression",
        "description": "It's a JavaScript function that runs as soon as it was declared",
        "id": "000007",
        "tags": [
          "JavaScript",
          "programming language"
        ],
        "acro": "IIFE"
      },
      {
        "standsFor": "Hyper Text Markup Language",
        "description": "It's the standard markup language for documents designed to be displayed in a web browser",
        "id": "000008",
        "tags": [
          "general",
          "programming language",
          "front-end",
          "browser"
        ],
        "acro": "HTML"
      },
      {
        "standsFor": "Extensible Markup Language",
        "description": "It's a markup language developed by the W3C to establish a syntax for encoding documents that both machines and humans can understand",
        "id": "000009",
        "tags": [
          "general",
          "programming language",
          "front-end",
          "browser"
        ],
        "acro": "XML"
      },
      {
        "standsFor": "Search Engine Optimization",
        "description": "It's the quality and quantity of website traffic by increasing the visibility of a website",
        "id": "000010",
        "tags": [
          "general",
          "data",
          "front-end",
          "browser"
        ],
        "acro": "SEO"
      },
      {
        "standsFor": "User Experience",
        "description": "It's the design process to create products that provide meaningful and proper experience to users",
        "id": "000011",
        "tags": [
          "general",
          "design",
          "front-end"
        ],
        "acro": "UX"
      },
      {
        "standsFor": "Software Development Kit",
        "description": "Packages for developers designed to help software development with tools, libraries, documentation for the APIs, or even frameworks and bundled IDE",
        "id": "000012",
        "tags": [
          "general",
          "tooling",
          "front-end"
        ],
        "acro": "SDK"
      },
      {
        "standsFor": "User Interface",
        "description": "the portion of a software that interacts with the end-user, such as window on-screen, buttons, texts, images",
        "id": "000013",
        "tags": [
          "general",
          "design",
          "front-end"
        ],
        "acro": "UI"
      },
      {
        "standsFor": "Object Oriented Programming",
        "description": "It's a programming paradigm that organizes software around data or objects, rather than functions and logic. An object can be defined as a data field with unique attributes and behavior.",
        "id": "000014",
        "tags": [
          "general",
          "programming language",
          "methodology"
        ],
        "acro": "OOP"
      },
      {
        "standsFor": "Secure Shell",
        "description": "It's an encrypting protocol to access remote computers or servers in a safe way",
        "id": "000015",
        "tags": [
          "general",
          "security",
          "back-end"
        ],
        "acro": "SSH"
      },
      {
        "standsFor": "Representational State Transfer",
        "description": "It is an architectural style and accepted guidelines of creating reliable web services, usually APIs",
        "id": "000016",
        "tags": [
          "general",
          "methodology",
          "back-end",
          "api"
        ],
        "acro": "REST"
      },
      {
        "standsFor": "Simple Object Access Protocol",
        "description": "It is a messaging protocol based on XML, which is used to exchange information between computers or applications.",
        "id": "000017",
        "tags": [
          "general",
          "methodology",
          "back-end",
          "api"
        ],
        "acro": "SOAP"
      },
      {
        "standsFor": "Structured Query Language",
        "description": "It is a query language used to access and manipulate relational databases",
        "id": "000018",
        "tags": [
          "general",
          "programming language",
          "back-end",
          "data"
        ],
        "acro": "SQL"
      },
      {
        "standsFor": "Scalable Vector Graphics",
        "description": "It  is an XML-based markup language for vector image formats, which allows for rendering without loss of quality",
        "id": "000019",
        "tags": [
          "general",
          "methodology",
          "design"
        ],
        "acro": "SVG"
      },
      {
        "standsFor": "World Wide Web",
        "description": "It is an information system where a document or other web resources like images or video can be identified by a URL and are accessible through the HTTP protocol in a web browser.",
        "id": "000020",
        "tags": [
          "general",
          "methodology",
          "browser"
        ],
        "acro": "WWW"
      },
      {
        "standsFor": "Content Management System",
        "description": "It is a type of software designed to manage the content of a website.",
        "id": "000021",
        "tags": [
          "general",
          "tooling",
          "back-end"
        ],
        "acro": "CMS"
      },
      {
        "standsFor": "Create, Read, Update and Delete",
        "description": "These are four functions in database interactions",
        "id": "000022",
        "tags": [
          "general",
          "data",
          "back-end"
        ],
        "acro": "CRUD"
      },
      {
        "standsFor": "Cascading Style Sheets",
        "description": "It is a style sheet language that is used to express how a structured document like an HTML document should look.",
        "id": "000023",
        "tags": [
          "general",
          "programming language",
          "front-end",
          "design"
        ],
        "acro": "CSS"
      },
      {
        "standsFor": "Infrastructure as a Service",
        "description": "It is a kind of Cloud computing service, which offers storage, networking, and computing resources on-demand with a pay-as-you-go business model.",
        "id": "000024",
        "tags": [
          "general",
          "methodology",
          "back-end",
          "data",
          "tooling"
        ],
        "acro": "IaaS"
      },
      {
        "standsFor": "Accessible Rich Internet Applications",
        "description": "These are web standards published by the W3C to make web content accessible for disabled people using assistive technologies, such as screen readers.",
        "id": "000025",
        "tags": [
          "general",
          "methodology",
          "front-end"
        ],
        "acro": "ARIA"
      },
      {
        "standsFor": "Block, Element, Modifier",
        "description": "It's a naming convention for writing readable, consistent, and maintainable CSS classes.",
        "id": "000026",
        "tags": [
          "general",
          "methodology",
          "front-end",
          "design"
        ],
        "acro": "BEM"
      },
      {
        "standsFor": "Content Delivery Network",
        "description": "It's a network of distributed servers that store duplicate copies of our web content to achieve better performance and reduce server downtime by using the closest or least overloaded location to the client.",
        "id": "000027",
        "tags": [
          "general",
          "methodology",
          "back-end",
          "server"
        ],
        "acro": "CDN"
      },
      {
        "standsFor": "Call To Action",
        "description": "It's a marketing term frequently used in web design, usually referring to a component that is designed to call the user's attention and achieve a click event",
        "id": "000028",
        "tags": [
          "design",
          "front-end"
        ],
        "acro": "CTA"
      },
      {
        "standsFor": "Free and Open-Source Software",
        "description": "It's a type of software that has no copyrights and has a source code that anyone can access or modify.",
        "id": "000029",
        "tags": [
          "general",
          "software",
          "methodology"
        ],
        "acro": "FOSS"
      },
      {
        "standsFor": "MongoDB, Express.js, Angular, Node.js",
        "description": "It's a JavaScript-only web stack for creating dynamic websites and web applications using the MongoDB database, the Express.js web application framework, the Angular.js frontend framework, and the Node JavaScript runtime.",
        "id": "000030",
        "tags": [
          "general",
          "software",
          "methodology",
          "tooling",
          "stack",
          "JavaScript"
        ],
        "acro": "MEAN"
      },
      {
        "standsFor": "MongoDB, Express.js, React, Node.js",
        "description": "It's a JavaScript-only web stack for creating dynamic websites and web applications using the MongoDB database, the Express.js web application framework, the React.js frontend framework, and the Node JavaScript runtime.",
        "id": "000031",
        "tags": [
          "general",
          "software",
          "methodology",
          "tooling",
          "stack",
          "JavaScript"
        ],
        "acro": "MERN"
      },
      {
        "standsFor": "Linux, Apache, MySQL, PHP/Python/Perl",
        "description": "It's a web stack for creating dynamic websites using Linux as the operating system, Apache as web server, MySQL as database management software, and PHP, Perl or Python as scripting language.",
        "id": "000032",
        "tags": [
          "general",
          "software",
          "methodology",
          "tooling",
          "stack"
        ],
        "acro": "LAMP"
      },
      {
        "standsFor": "Windows, Apache, MySQL, PHP/Python/Perl",
        "description": "It's a web stack for creating dynamic websites using Windows as the operating system, Apache as web server, MySQL as database management software, and PHP, Perl or Python as scripting language.",
        "id": "000033",
        "tags": [
          "general",
          "software",
          "methodology",
          "tooling",
          "stack"
        ],
        "acro": "WAMP"
      },
      {
        "standsFor": "Model-View-Controller",
        "description": "It's an architectural pattern used in object-oriented programming, which keeps the data logic separate from the user interface by grouping objects into three groups: model objects for the data structure, view objects for the UI, and controller objects for task coordination.",
        "id": "000034",
        "tags": [
          "general",
          "software",
          "methodology",
          "programming language"
        ],
        "acro": "MVC"
      },
      {
        "standsFor": "Open Authentication",
        "description": "It's an open protocol that makes secure authorization possible in a safe and standardized way, used as a method for enabling users to log in to a site by thirt-party services, such as Google or Facebook by removing the barrier of registration.",
        "id": "000035",
        "tags": [
          "general",
          "software",
          "methodology",
          "security",
          "back-end"
        ],
        "acro": "OAuth"
      },
      {
        "standsFor": "File Transfer Protocol",
        "description": "This is a protocol designed for transferring files over the web from a client to a server. It has been mainly replaced with HTTP, but it may be used to acess a remote file on a network computer.",
        "id": "000036",
        "tags": [
          "general",
          "software",
          "methodology",
          "security",
          "data"
        ],
        "acro": "FTP"
      },
      {
        "standsFor": "Originally Personal Home Page, but renamed to PHP Hypertext Preprocessor",
        "description": "This is an open-source, server-side script language used in web development, which means the script is run before the HTML is loaded",
        "id": "000037",
        "tags": [
          "general",
          "programming language",
          "back-end"
        ],
        "acro": "PHP"
      },
      {
        "standsFor": "Ruby on Rails",
        "description": "This is an open-source, programming framework built on the Ruby programming language.",
        "id": "000038",
        "tags": [
          "general",
          "programming language",
          "back-end",
          "framework",
          "tooling"
        ],
        "acro": "RoR"
      },
      {
        "standsFor": "Version Control System",
        "description": "This is a solution for web applications to record individual changes to files, so developers can recall, review or overwrite them. The most commonly used software built on that is GIT.",
        "id": "000039",
        "tags": [
          "general",
          "software",
          "back-end",
          "tooling",
          "methodology"
        ],
        "acro": "VCS"
      },
      {
        "standsFor": "What You See Is What You Get",
        "description": "This is a type of editor that allows you to design a web page or text as you see it, without needing to write HTML.",
        "id": "000040",
        "tags": [
          "general",
          "software",
          "tooling",
          "front-end"
        ],
        "acro": "WYSIWYG"
      },
      {
        "standsFor": "Quality Assurance",
        "description": "A commonly used term in every industry, but in software development it means testing the code for defects before releasing it to its end users.",
        "id": "000041",
        "tags": [
          "general",
          "software",
          "methodology",
          "testing"
        ],
        "acro": "QA"
      },
      {
        "standsFor": "Accelerated Mobile Pages",
        "description": "It's a web component framework developed by Google that restricts the use of HTML, CSS and JavaScript for better mobile experience",
        "id": "000042",
        "tags": [
          "general",
          "software",
          "framework",
          "mobile"
        ],
        "acro": "AMP"
      },
      {
        "standsFor": "Application Programming Interface",
        "description": "It's an application programming interface, which allows for different software applications to communicate with each other, share data and functionality.",
        "id": "000043",
        "tags": [
          "general",
          "software",
          "back-end",
          "data"
        ],
        "acro": "API"
      },
      {
        "standsFor": "Regular Expression",
        "description": "It's a common part of many programming languages, that makes it possible to search characters in a text format.",
        "id": "000044",
        "tags": [
          "general",
          "software",
          "programming language"
        ],
        "acro": "REGEX"
      },
      {
        "standsFor": "Graphics Interchange Format",
        "description": "It's an image file format, that creates an effect of animation played in a loop, a common format of the web.",
        "id": "000045",
        "tags": [
          "general",
          "design",
          "front-end"
        ],
        "acro": "GIF"
      },
      {
        "standsFor": "Portable Network Graphics",
        "description": "It's an image file format, that offers high-quality imagery for the graphics on a website.",
        "id": "000046",
        "tags": [
          "general",
          "design",
          "front-end"
        ],
        "acro": "PNG"
      },
      {
        "standsFor": "Rapid Application Development",
        "description": "It's an approach to software development that puts less emphasis on planning and more emphasis on the adaptive process.",
        "id": "000047",
        "tags": [
          "general",
          "software",
          "methodology",
          "design"
        ],
        "acro": "RAD"
      },
      {
        "standsFor": "Extreme Programming",
        "description": "It's an agile type of approach to software development that puts an emphasis on responsiveness to changing customer requirements by short development cycles, frequent releases and pair programming",
        "id": "000048",
        "tags": [
          "general",
          "software",
          "methodology",
          "design"
        ],
        "acro": "XP"
      },
      {
        "standsFor": "Test-Driven Development",
        "description": "It is a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards.",
        "id": "000049",
        "tags": [
          "general",
          "software",
          "methodology",
          "design"
        ],
        "acro": "TDD"
      },
      {
        "standsFor": "Behavior-Driven Development",
        "description": "It's a type of TDD, that uses human-readable descriptions of software user requirements as the basis for software tests, setting a shared vocabulary between stakeholders, domain experts, and engineers.",
        "id": "000050",
        "tags": [
          "general",
          "software",
          "methodology",
          "design"
        ],
        "acro": "BDD"
      }
]