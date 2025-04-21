export const renderMediumContent = () => {
    const mediumPosts = [
        {
            isRecent: true,
            imgSrc: "src/images/blog/medium_cursor_vscode.jpeg",
            title: "Should you switch from VSCode to Cursor?",
            description: "My experience using VSCode (GitHub Copilot) and Cursor (Claude 3.5 Sonnet) as a Data Scientist",
            link: "https://marccodess.medium.com/should-you-switch-from-vscode-to-cursor-45b1a0320d07"
        },
        {
            imgSrc: "src/images/blog/medium_ollama.jpeg",
            title: "Run LLMs Locally using Ollama",
            description: "Step-by-step process to running large language models locally on your laptop",
            link: "https://marccodess.medium.com/run-llms-locally-using-ollama-8f04dd9b14f9"
        },
        {
            imgSrc: "src/images/blog/medium_confusion_matrix.jpeg",
            title: "What is a Confusion Matrix?",
            description: "What are they, why, and when should we use them?",
            link: "https://marccodess.medium.com/what-is-a-confusion-matrix-05c9969fc8d8"
        }
    ];

    const createPostHTML = (post) => `
        <div class="medium__content ${post.isRecent ? 'most-recent' : ''}">
            ${post.isRecent ? '<div class="most-recent-label">Most Recent</div>' : ''}
            <div class="medium__top">
                <img src="${post.imgSrc}" alt="${post.title}" class="medium__img" loading="lazy">
                <div class="medium__data">
                    <h3 class="medium__title">${post.title}</h3>
                    <p class="medium__description">${post.description}</p>
                </div>
            </div>
            <a href="${post.link}" target="_blank" class="button button--flex button--small medium__button">
                Read More
                <i class="uil uil-arrow-right button__icon"></i>
            </a>
        </div>
    `;

    // Group posts into slides of 3
    const slides = mediumPosts.reduce((acc, post, index) => {
        const slideIndex = Math.floor(index / 3);
        if (!acc[slideIndex]) {
            acc[slideIndex] = [];
        }
        acc[slideIndex].push(post);
        return acc;
    }, []);

    return slides.map(slideGroup => `
        <div class="swiper-slide">
            <div class="medium__grid">
                ${slideGroup.map(post => createPostHTML(post)).join('')}
            </div>
        </div>
    `).join('');
};