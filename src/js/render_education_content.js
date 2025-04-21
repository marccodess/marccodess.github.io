export const education_content = [
  {
    title: "MSc: Data Science and Analytics",
    company: "Manchester Metropolitan University, UK",
    period: "Sept 2016 - Jun 2017",
    link: "https://www.mmu.ac.uk/"
  },
  {
    title: "Research Assistant/Part-time Lecturer",
    company: "University of Salford, UK",
    period: "Jun 2014 - Sept 2016",
    link: "https://www.salford.ac.uk/"
  },
  {
    title: "BSc: Geography - Glaciology and Climate Change",
    company: "University of Salford, UK",
    period: "Sept 2011 - Jun 2014",
    link: "https://www.salford.ac.uk/"
  }
];

function renderEducationItem(item, isLeft = true) {
  const contentHtml = `
    <div>
        <h3 class="qualification__title">${item.title}</h3>
      <span class="qualification__subtitle">
        <a href="${item.link}" target="_blank">${item.company}</a>
      </span>
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
export function renderEducationContent() {
  return `
      ${education_content.map((item, index) => 
        renderEducationItem(item, index % 2 === 0)
      ).join('')}
    </div>
  `;
}