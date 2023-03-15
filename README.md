# UPbnb
<p align="center">
  <img src="https://user-images.githubusercontent.com/87763388/223849925-e0363f20-0022-4736-991e-f059d4e770d7.png" alt="your_alt_text" height="150">
</p>
UPbnb is a web application that provides a luxurious house rental service, inspired by Airbnb. 

The frontend of the application is built using React.JS technology, and the application is integrated with an existing API.

To ensure that the application meets the required standards, I employed various implementation requirements. For instance, I used React components and contexts to enable the concentration of state of favorites. Additionally, the application stores the favorites in Local Storage, making it possible to persist them even after a page refresh.

I also made sure to use the react-router-dom module (version 5) to manage page switching and URL parameters, giving preference to parameters of URL over the parameters GET, such as “casa/1”. Besides, each component has its style sheet in SCSS.

To access the luxurious houses, I made sure that the application does not store any information about the houses locally except the ids for the listing of the favorites. I ensured that all the information is retrieved from the API to maintain a reliable database.

To progressively load information from multiple endpoints of the API, I presented the information as soon as it became available, and no waiting time was necessary. Sharing information between components was also a challenge that I addressed by using contexts to delegate functionalities and share information.

# Web Stack
Frontend:
- React.js
- react-router-dom (version 5)
- SCSS for styling
- npm modules for various functionalities (e.g., icons, interaction with API)

Backend:
- Existing API integrated with frontend
    
# Challenges
As I was developing UPbnb, I faced several challenges that required me to think creatively and work hard to overcome. One of the biggest challenges was handling asynchronous data. When retrieving data from the API, I needed to make sure that the data was available before rendering the corresponding components, which required careful management of asynchronous requests.

Another challenge was managing state across components. I made use of React's context API to share state between components and manage updates across different parts of the application. This required careful planning to ensure that the application was organized and scalable.

Styling components was also a challenge, as I wanted to ensure that the styles were consistent across the application while maintaining flexibility. While using SCSS for styling can make it easier to maintain styles across components, it can also lead to complex CSS selectors that are hard to manage.

Testing and debugging were also significant challenges, as I needed to ensure that all components and features worked as expected across different browsers and devices. This required careful planning and testing to ensure that the application was reliable and stable.

Ensuring seamless integration with the existing API was also challenging, especially since the API had complex data structures and unexpected behavior. I needed to spend time working with the API to ensure that UPbnb could communicate with it effectively.

<p align="center">
<img height="900" width="390" alt="Página inicial" src="https://user-images.githubusercontent.com/87763388/223850596-d1da4d87-d0cd-45e7-bf7b-f018da781818.png">
    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
<img height="900" width="390" alt="Favoritoss" src="https://user-images.githubusercontent.com/87763388/223854171-52583713-340c-4f02-b0d8-85d88f40dad2.png">
</p>
<p align="center">
  <img style="vertical-align: top;"  width="390" alt="Detalhe2" src="https://user-images.githubusercontent.com/87763388/223850603-09421384-d3fb-4df3-be48-4e290bef00ce.png">
</p>
