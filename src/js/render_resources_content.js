export const renderResourcesContent = () => {
    const resources = {
        courses: [
            {
                name: "Introduction to Git and GitHub",
                provider: "Coursera - Google",
                link: "https://www.coursera.org/learn/introduction-git-github?query=",
                rating: 100
            },
            {
                name: "Deep Learning Specialization",
                provider: "Coursera - DeepLearning.ai",
                link: "https://www.coursera.org/specializations/deep-learning",
                rating: 95
            },
            {
                name: "Google Cloud Fundamentals: Core Infrastructure",
                provider: "Coursera - Google Cloud",
                link: "https://www.coursera.org/learn/gcp-fundamentals?=",
                rating: 90
            }
        ],
        books: [
            {
                name: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
                provider: "O'Reilly - Aurélien Géron (2022)",
                link: "https://www.amazon.co.uk/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1098125975/",
                rating: 95
            },
            {
                name: "Data Science from Scratch",
                provider: "O'Reilly - Joel Grus (2019)",
                link: "https://www.amazon.co.uk/Data-Science-Scratch-Joel-Grus/dp/1492041130/",
                rating: 90
            }
        ],
        papers: [
            {
                name: "Attention Is All You Need",
                provider: "Vaswani, A et al. (2017)",
                link: "https://arxiv.org/pdf/1706.03762.pdf",
                rating: 100
            },
            {
                name: "ImageNet Classification with Deep Convolutional Neural Networks",
                provider: "Krizhevsky, A, Sutskever, I and Hinton, GE (2012)",
                link: "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",
                rating: 85
            }
        ]
    };

    const content = `
        <div>
            <div class="skills__content skills__open" id="courses-section">
                <div class="skills__header" onclick="toggleResourceSection('courses-section')">
                    <i class="uil uil-file-alt skills__icon"></i>
                    <div>
                        <h1 class="skills__title">Online Courses</h1>
                        <span class="skills__subtitle">Favorite Online Course Material</span>
                    </div>
                    <i class="uil uil-angle-down skills__arrow" id="courses-arrow"></i>
                </div>
                <div class="skills__list grid">
                    ${resources.courses.map(course => `
                        <div class="skills__data">
                            <div class="skills__title">
                                <h3 class="skills__name">
                                    <a href="${course.link}">${course.name}</a>
                                </h3>
                                <i class="skills__subtitle">${course.provider}</i>
                                <span class="skills__number">${course.rating}%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__${course.rating}"></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="skills__content skills__close" id="books-section">
                <div class="skills__header" onclick="toggleResourceSection('books-section')">
                    <i class="uil uil-file-alt skills__icon"></i>
                    <div>
                        <h1 class="skills__title">Books</h1>
                        <span class="skills__subtitle">Recommended Literature</span>
                    </div>
                    <i class="uil uil-angle-down skills__arrow" id="books-arrow"></i>
                </div>
                <div class="skills__list grid">
                    ${resources.books.map(book => `
                        <div class="skills__data">
                            <div class="skills__title">
                                <h3 class="skills__name">
                                    <a href="${book.link}">${book.name}</a>
                                </h3>
                                <i class="skills__subtitle">${book.provider}</i>
                                <span class="skills__number">${book.rating}%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__${book.rating}"></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="skills__content skills__close" id="papers-section">
                <div class="skills__header" onclick="toggleResourceSection('papers-section')">
                    <i class="uil uil-file-alt skills__icon"></i>
                    <div>
                        <h1 class="skills__title">Papers</h1>
                        <span class="skills__subtitle">Research Papers Everyone Should Read</span>
                    </div>
                    <i class="uil uil-angle-down skills__arrow" id="papers-arrow"></i>
                </div>
                <div class="skills__list grid">
                    ${resources.papers.map(paper => `
                        <div class="skills__data">
                            <div class="skills__title">
                                <h3 class="skills__name">
                                    <a href="${paper.link}">${paper.name}</a>
                                </h3>
                                <span class="skills__subtitle">${paper.provider}</span>
                                <span class="skills__number">${paper.rating}%</span>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__${paper.rating}"></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    window.toggleResourceSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const allSections = document.querySelectorAll('.skills__content');
        
        allSections.forEach(s => {
            if (s.id !== sectionId) {
                s.className = 'skills__content skills__close';
            }
        });

        if (section.className.includes('skills__close')) {
            section.className = 'skills__content skills__open';
        } else {
            section.className = 'skills__content skills__close';
        }
    };

    return content;
};