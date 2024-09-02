import blogScreen from '../src/blog-screen.png'
import QuizImage from '../images/quiz-img.jpg'
import cryptoImage from '../images/projekat_crypto.png'
import shoppingImage from './pages/shopping-cart-ss.png'

export const projects = [
  {
    title: "Crypto Currency App",
    subtitle: "React, Axios, Tailwind CSS",
    description:
      "Dieses Projekt verwendet Axios in React, um Daten von einer Kryptowährungs-API abzurufen, und nutzt Tailwind CSS für responsives, modernes Styling, wodurch eine nahtlose Verbindung von Funktionalität und Design geschaffen wird",
    image: cryptoImage,
    link: "https://portofolio-crypto.netlify.app/ ",
  },
  {
    title: "The Atomic Blog",
    subtitle: "React and UseContext",
    description:
      "Dies ist ein Blog-Projekt, bei dem ich gelernt und geübt habe, wie man React Context für das State Management verwendet, um die Komplexität des 'Prop Drilling' zu vermeiden und den Komponentenbaum sauberer und wartungsfreundlicher zu gestalten",
    image: blogScreen,
    link: "https://atomicblogapp.netlify.app/",
  },
  {
    title: "Epic Shopping Cart",
    subtitle: "useContext and useReducer",
    description:
      " Bei diesem Projekt habe ich beide Technologien integriert, um ein voll funktionsfähiges Warenkorb-System zu entwickeln, das eine reibungslose Benutzerinteraktion und effizientes Datenmanagement gewährleistet"
,
    image: shoppingImage,
    link: "https://shopping-cart-ecommerce-practice.netlify.app/",
  },
  {
    title: "German Quiz App",
    subtitle: "useReducer",
    description:
      "Dieses Quiz über die Geschichte und das Allgemeinwissen Deutschlands nutzt useReducer für ein effizientes State Management und sorgt so für eine nahtlose Benutzererfahrung sowie eine organisierte Zustandsverwaltung innerhalb der App",
    image: QuizImage,
    link: "https://ibrakaaaa.github.io/my-own-quiz/",
  },
];


export const skills = [
"HTML",
"CSS",
"Javascript",
"React",
"Tailwind CSS",
"GitHub"
];
