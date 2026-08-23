import recipeParade from '../assets/projects/recipe-parade.png';
import travelPlanner from '../assets/projects/travel-planner.png';
import budgetTracker from '../assets/projects/budget-tracker.png';
import weatherDashboard from '../assets/projects/weather-dashboard.png';
import runBuddy from '../assets/projects/run-buddy.png';
import techBlog from '../assets/projects/tech-blog.png';

const projects = [
  {
    id: 1,
    name: 'Recipe Parade',
    image: recipeParade,
    github: 'https://github.com/izabelacloud/Recipe-Parade',
    deployedApp: null,
    description: 'A recipe discovery app for browsing, rating and saving favorite dishes. Not currently deployed; run locally to try it.',
  },
  {
    id: 2,
    name: 'Travel Planner',
    image: travelPlanner,
    github: 'https://github.com/izabelacloud/Travel-Planner',
    deployedApp: 'https://izabelacloud.github.io/Travel-Planner/',
    description: 'Plan trips and organize itineraries with a clean travel dashboard.',
  },
  {
    id: 3,
    name: 'Budget Tracker',
    image: budgetTracker,
    github: 'https://github.com/izabelacloud/Budget-Tracker',
    deployedApp: 'https://budget-tracker-web-production.up.railway.app',
    description: 'A PWA for tracking income and expenses, works offline.',
  },
  {
    id: 4,
    name: 'Weather Dashboard',
    image: weatherDashboard,
    github: 'https://github.com/izabelacloud/Weather-Dashboard',
    deployedApp: 'https://izabelacloud.github.io/Weather-Dashboard/',
    description: 'A 5-day weather forecast dashboard with search history.',
  },
  {
    id: 5,
    name: 'Run Buddy',
    image: runBuddy,
    github: 'https://github.com/izabelacloud/run-buddy',
    deployedApp: 'https://izabelacloud.github.io/run-buddy/',
    description: 'A marketing landing page for a personal training service.',
  },
  {
    id: 6,
    name: 'Tech Blog',
    image: techBlog,
    github: 'https://github.com/izabelacloud/Tech-Blog',
    deployedApp: 'https://tech-blog-web-production.up.railway.app',
    description: 'A full-stack blog platform with posts and comments.',
  },
];

export default projects;
