export const renderServicesContent = () => {
    const services = [
        {
            icon: "uil uil-robot",
            title: "Automation",
            modalTitle: "Automation & Process Optimization",
            items: [
                "Developed and implemented sophisticated web scraping solutions for automated data extraction from complex web applications and enterprise portals.",
                "Designed and deployed end-to-end automation workflows that significantly reduced manual intervention and improved operational efficiency across multiple business units.",
                "<b>Technical Stack:</b> Selenium WebDriver, Beautiful Soup"
            ]
        },
        {
            icon: "uil uil-comparison",
            title: "Machine Learning",
            modalTitle: "Machine Learning",
            items: [
                "Design and implementation of sophisticated machine learning solutions for complex business problems, enabling data-driven insights and automated decision-making systems.",
                "<b>Core Expertise:</b> Gradient Boosting (XGBoost, LightGBM, CatBoost), Ensemble Methods (Random Forest), Clustering (K-Means), Dimensionality Reduction (PCA), Statistical Modeling",
                "<b>Technical Stack:</b> scikit-learn, statsmodels, pandas, NumPy"
            ]
        },
        {
            icon: "uil uil-brain",
            title: "Deep Learning",
            modalTitle: "Deep Learning & Neural Networks",
            items: [
                "Architected and implemented custom neural networks for Natural Language Processing, enabling automated customer intent classification across multiple communication channels with high accuracy.",
                "Developed and deployed advanced Computer Vision solutions for retail analytics, optimizing inventory management and merchandising efficiency for enterprise-level clients.",
                "<b>Technical Stack:</b> PyTorch, TensorFlow, Keras, Neural Network Architecture Design & Optimization"
            ]
        },
        {
            icon: "uil uil-cloud",
            title: "Cloud Computing",
            modalTitle: "Cloud Architecture & MLOps",
            items: [
                "Extensive experience with Google Cloud Platform (GCP), specializing in ML model deployment using Vertex AI and large-scale data processing with BigQuery.",
                "Cross-platform expertise across major cloud providers (AWS, Azure, GCP), focusing on compute infrastructure optimization and scalable ML deployments.",
                "<b>Core Technologies:</b> Vertex AI, BigQuery, Model Garden, Cloud Storage, Cloud SDK, Dataflow, Looker, EC2"
            ]
        },
        {
            icon: "uil uil-constructor",
            title: "Data Engineering",
            modalTitle: "Data Engineering & Architecture",
            items: [
                "Designed and implemented robust data architectures and ETL pipelines, leveraging dbt Cloud for scalable data transformations and maintaining data quality.",
                "Extensive experience with diverse database technologies, including BigQuery for analytics, MSSQL for transactional data, and MongoDB for document-based storage solutions.",
                "<b>Technical Stack:</b> Google BigQuery, Microsoft SQL Server, dbt Cloud, MongoDB Atlas, SQLite, DBeaver."
            ]
        },
        {
            icon: "uil uil-arrow",
            title: "GenAI Solutions",
            modalTitle: "RAG & AI-Powered Development",
            items: [
                "Design and implementation of Retrieval-Augmented Generation (RAG) pipelines, integrating domain-specific data for accurate and context-aware AI responses.",
                "Expertise in vector embeddings to efficiently encode, search, and retrieve information using state-of-the-art vectorization techniques.",
                "<b>Technical Stack:</b> LLMs, LangChain, LlamaIndex, ChromaDB, OpenAI APIs."
            ]
        }
    ];

    return services.map(service => `
        <div class="services__content">
            <div>
                <i class="${service.icon} services__icon"></i>
                <h3 class="services__title">${service.title}</h3>
            </div>

            <span class="button button--flex button--small button--link services__button">
                View More
                <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class="services__modal">
                <div class="services__modal-content">
                    <h4 class="services__model-title">${service.modalTitle}</h4>
                    <i class="uil uil-times services__modal-close"></i>

                    <ul class="services__model-services grid">
                        ${service.items.map(item => `
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>${item}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
};