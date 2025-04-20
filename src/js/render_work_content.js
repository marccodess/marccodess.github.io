export const work_content = [
  {
    title: "Lead Data Scientist",
    company: "Virgin Media O2",
    location: "London, UK",
    period: "Jan 2024 - Present",
    link: "https://www.virginmedia.co.uk/"
  },
  {
    title: "Senior Data Scientist",
    company: "Virgin Media O2",
    location: "Manchester, UK",
    period: "Jul 2023 - Jan 2024",
    link: "https://www.virginmedia.co.uk/"
  },
  {
    title: "Data Scientist",
    company: "Virgin Media O2",
    location: "Manchester, UK",
    period: "May 2020 - Jul 2023",
    link: "https://www.virginmedia.co.uk/"
  },
  {
    title: "Data Scientist",
    company: "AO World",
    location: "Manchester, UK",
    period: "Jul 2019 - Mar 2020",
    link: "https://www.ao.com/"
  },
  {
    title: "Data Scientist",
    company: "Dee Set",
    location: "Manchester, UK",
    period: "Apr 2018 - Jul 2019",
    link: "https://www.deeset.co.uk/"
  }
];

// Function to render single work experience item
function renderWorkItem(item, isLeft = true) {
  const contentHtml = `
    <div>
      <h3 class="qualification__title">${item.title}</h3>
      <span class="qualification__subtitle">
        <a href="${item.link}" target="_blank">${item.company}</a>
      </span>
      <h5 class="qualification__location">${item.location}</h5>
      <div class="qualification__calendar">
        <i class="uil uil-calendar-alt"></i>
        ${item.period}
      </div>
    </div>
  `;

  return `
    <div class="qualification__data">
      ${isLeft ? contentHtml : '<div></div>'}
      <div>
        <span class="qualification__rounder"></span>
        <span class="qualification__line"></span>
      </div>
      ${!isLeft ? contentHtml : ''}
    </div>
  `;
}

// Main render function
export function renderWorkContent() {
  return `
      ${work_content.map((item, index) => 
        renderWorkItem(item, index % 2 === 0)
      ).join('')}
    </div>
  `;
}