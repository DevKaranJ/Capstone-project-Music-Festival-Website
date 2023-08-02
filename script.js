// Feature: Speakers
const featuredSpeakers = [
  {
    name: 'Bhayanak Maut',
    about: 'Bhayanak Maut is an Indian metal band from Mumbai.',
    image: '<img src="resources/lineups/lineup1.png" alt="maut">',
    description: 'Bhayanak Maut formed in November 2003. The band released their third full-length album "MAN" on 31 October 2014.',
  },
  {
    name: 'Gutslit',
    profession: 'GUTSLIT is a critically acclaimed extreme metal band reigning from Mumbai, India.',
    image: '<img src="resources/lineups/lineup2.png" alt="gutslit">',
    description: ' GUTSLIT has adapted various styles of death metal and grind core into their own brutal array of grinding riffs, pummeling blasts, vicious bass grooves and chilling gutturals.',
  },
  {
    name: 'Midhaven',
    profession: 'Midhaven is a Metal band from Mumbai, India.',
    image: '<img src="resources/lineups/lineup3.png" alt="midhaven">',
    description: 'Their music is diverse as they have a mixture of Clean and Harsh Vocal styles, Progressive/Sludge guitar play and Progressive Drums.',
  },
  {
    name: 'Capital Metal Project',
    profession: 'Capital Metal Project is a critically acclaimed extreme metal band reigning from Mumbai, India.',
    image: '<img src="resources/lineups/lineup4.png" alt="metalproject">',
    description: ' GUTSLIT has adapted various styles of death metal and grind core into their own brutal array of grinding riffs, pummeling blasts, vicious bass grooves and chilling gutturals.',
  },
  {
    name: 'Colossal Figures',
    profession: 'Colossal Figures is an Indian metal band from Mumbai.',
    image: '<img src="resources/lineups/lineup5.png" alt="figures">',
    description: ' GUTSLIT has adapted various styles of death metal and grind core into their own brutal array of grinding riffs, pummeling blasts, vicious bass grooves and chilling gutturals.',
  },
  ];

const speakersSection = document.getElementById('speakers');
const seeMoreButton = document.getElementById('seeMoreButton');
let isMobileView = window.innerWidth < 768;

function displaySpeakers() {
  let speakersHTML = '';
  const maxSpeakersToShow = isMobileView ? 2 : featuredSpeakers.length;
  for (let i = 0; i < maxSpeakersToShow; i += 1) {
    speakersHTML += `
      <article class="speakers">
        <div class="image">
          ${featuredSpeakers[i].image}
        </div>
        <div class="speakerInfo">
          <h5>${featuredSpeakers[i].name}</h5>
          <p class="about">${featuredSpeakers[i].profession}</p>
          <p></p>
          <p class="description">${featuredSpeakers[i].description}</p>
        </div>
      </article>
    `;
  }
 
  speakersSection.innerHTML = speakersHTML;

  if (isMobileView) {
    const otherSpeakers = featuredSpeakers.slice(2);
    if (otherSpeakers.length > 0) {
      seeMoreButton.style.display = 'block';
    } else {
      seeMoreButton.style.display = 'none';
    }
  } else {
    seeMoreButton.style.display = 'none';
  }
}

displaySpeakers();

window.addEventListener('resize', () => {
  const newIsMobileView = window.innerWidth < 768;
  if (isMobileView !== newIsMobileView) {
    isMobileView = newIsMobileView;
    displaySpeakers();
  }
});

seeMoreButton.addEventListener('click', () => {
  isMobileView = false;
  displaySpeakers();
});

// hamberger menu
const hamburger = document.querySelector('.hamburger');
const menuContent = document.querySelector('#menuContent');

hamburger.addEventListener('click', () => {
  menuContent.classList.toggle('show');
});

const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  menuContent.classList.remove('show');
});

const menuItems = document.querySelectorAll('.menuItem a');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuContent.classList.remove('show');
  });
});