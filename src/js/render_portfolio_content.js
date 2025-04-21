// filepath: /Users/marcmatterson/Desktop/marccodess.github.io/src/js/render_portfolio_content.js
export const renderPortfolioContent = () => {
    const portfolioProjects = [
        {
            imgSrc: "src/images/projects/brain-tumor-detection-project-image.jpeg",
            title: "Brain Tumor Image Classification",
            description: "Implementing a VGG-16 model to detect benign or malignant brain tumors.",
            link: "https://github.com/marccodess/brain_tumor_detection"
        },
        {
            imgSrc: "src/images/projects/data-structures-algorithms-project-image.png",
            title: "Data Structures and Algorithms",
            description: "Popular data structures and algorithms implemented in Python.",
            link: "https://github.com/marccodess/data-structures-and-algorithms"
        },
        {
            imgSrc: "src/images/projects/genetic-algorithm-project-image.png",
            title: "Feature Selection using Genetic Algorithms",
            description: "Improving model performance and excluding irrelevant features using Genetic Algorithms.",
            link: "https://github.com/marccodess/genetic-algorithm-feature-selection"
        }
    ];

    return portfolioProjects.map(project => `
        <div class="swiper-slide">
            <div class="portfolio__content grid">
                <img src="${project.imgSrc}" alt="${project.title}" class="portfolio__img">
                <div class="portfolio__data">
                    <h3 class="portfolio__title">${project.title}</h3>
                    <p class="portfolio__description">${project.description}</p>
                    <a href="${project.link}" class="button button--flex button--small portfolio__button">
                        More info
                        <i class="uil uil-arrow-right button__icon"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
};