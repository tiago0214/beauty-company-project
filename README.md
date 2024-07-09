![beauty](https://github.com/tiago0214/beauty-project/assets/126430816/f41aac2d-f357-4a56-97e4-d443bba30d1c)

# Makeup Mania

## Front-end

> - Features such as add to bag, favorite were implemented to give a real experience of saving products on the platform.
> - Those features store data in local storage to prevent the user from losing their products if something happens.
> - When something is added to a bag or favorite, it shows a popup to make it easier for the user to know what's happening.
> - On the bag and favorite pages, it shows a button to remove items from them
> - I implemented a carousel to show the products on the home page, to give a better experience.

## Back-end

> - All product data displayed on the front-end is stored in the backend. The communication between the client and the server is handled through RESTful API endpoints.
### Technology Stack:
> - **Node.js**: The backend is built using Node.js, leveraging its non-blocking, event-driven architecture for efficient and scalable performance.
> - **Express.js**: I utilize the Express framework to handle routing and server-side logic, streamlining the development process and enhancing the maintainability of our codebase.
### Architecture
> - **MVC Pattern**: The backend follows the Model-View-Controller (MVC) architecture. This design pattern separates the application into three interconnected components:
>    - **Model**: Manages the data and business logic.
>    - **View**: Handles the presentation layer (not applicable in a pure backend service, but relevant for templating engines if used).
>    - **Controller**: Processes incoming requests, interacts with the Model, and sends responses back to the client.
### Database Integration:
> - **MongoDB**: I use MongoDB, a NoSQL database, for storing and managing product data. MongoDB's flexibility and scalability make it an ideal choice for our application.
> - **Mongoose**: For schema management and data modeling, we use Mongoose. It provides a straightforward, schema-based solution to model our application data and includes built-in data validation, type casting, and query building.
