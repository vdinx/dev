import './style.css';

function render(): void {
  const app = document.getElementById('app')!;
  
  app.innerHTML = `
    <!-- NAVIGATION -->
    <nav>
      <div class="nav-logo">Dinesh<span>Valleti.</span>_</div>
      <div class="nav-links">
        <div class="nav-link" data-target="home"><span>01</span> // home</div>
        <div class="nav-link" data-target="expertise"><span>02</span> // expertise</div>
        <div class="nav-link" data-target="experience"><span>03</span> // experience</div>
        <div class="nav-link" data-target="learning"><span>04</span> // learning</div>
        <div class="nav-link" data-target="contact"><span>05</span> // contact</div>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="cube cube-1"></div>
        <div class="cube cube-2"></div>
      </div>
      <h1 class="hero-name">Dinesh Valleti</h1>
      <p class="hero-subtitle">5+ Years Experience • Backend Engineer • AI Agent Builder • Orchestration Dev</p>
    </section>

    <!-- EXPERTISE -->
    <div class="section-header" id="expertise">
      <h2>My Expertise</h2>
    </div>
    
    <div class="expertise-grid">
      <div class="expertise-card">
        <div class="exp-icon">💻</div>
        <h3 class="exp-title">AI & Agentic Development <span style="background: #ff0055"></span></h3>
        <p class="exp-desc">Engineering autonomous systems with LangGraph, MCP Protocol, and multi-agent orchestration for enterprise-scale AI solutions.</p>
      </div>
      <div class="expertise-card">
        <div class="exp-icon">⚙️</div>
        <h3 class="exp-title">Enterprise Backend <span style="background: #00f2ff"></span></h3>
        <p class="exp-desc">Building scalable microservices with Java, Spring Boot, and GraphQL. Focused on high-performance data systems and Elasticsearch.</p>
      </div>
      <div class="expertise-card">
        <div class="exp-icon">🔌</div>
        <h3 class="exp-title">Microservices & Integration <span style="background: #ffaa00"></span></h3>
        <p class="exp-desc">Designing robust RESTful and GraphQL APIs. Specialized in consolidating fragmented data sources and building seamless enterprise integrations.</p>
      </div>
    </div>

    <!-- EXPERIENCE -->
    <div class="section-header" id="experience">
      <h2>Professional Experience</h2>
    </div>

    <div class="experience-list">
      <div class="exp-row">
        <div class="exp-row-header">
          <div class="exp-row-title">Senior Software Engineer @ Manhattan Associates</div>
          <div class="exp-row-date">2024 — Present  +</div>
        </div>
        <div class="exp-row-content">
          <p style="margin-bottom: 20px;">Leading the development of Generative AI agents and orchestration platforms used globally.</p>
          <ul style="color: var(--text-muted); list-style: square; padding-left: 20px;">
            <li>Designed & shipped OMS Configuration Agent (GenAI natural language ATC View creation).</li>
            <li>Engineered Step Level GenAI Invocation in ExecutionPlanOrchestrator.</li>
            <li>Converted 7 production Maven Agents to unified single-route architecture.</li>
            <li>Built LangGraph POC for UI-to-MCP connectivity.</li>
            <li>Elasticsearch production support and Quick Start platform delivery.</li>
            <li><strong>Rising Star Award Winner - Q1 2026.</strong></li>
          </ul>
          <div class="exp-tags">
            <span class="exp-tag">GenAI</span><span class="exp-tag">LangGraph</span><span class="exp-tag">MCP</span><span class="exp-tag">Java</span><span class="exp-tag">Spring Boot</span><span class="exp-tag">Elasticsearch</span>
          </div>
        </div>
      </div>

      <div class="exp-row">
        <div class="exp-row-header">
          <div class="exp-row-title">Java Developer @ American Express / TCS</div>
          <div class="exp-row-date">2020 — 2024  +</div>
        </div>
        <div class="exp-row-content">
          <p style="margin-bottom: 20px;">Focused on enterprise HR integrations and high-performance microservices.</p>
          <ul style="color: var(--text-muted); list-style: square; padding-left: 20px;">
            <li>Built American Express HR integrations via RESTful & GraphQL microservices.</li>
            <li>Consolidated multiple data sources into a single unified API, reducing tech debt.</li>
            <li>Maintained mission-critical microservices with 99.9% uptime and MTTR < 2 days.</li>
            <li>Led cross-functional teams for complex data migration and integration projects.</li>
            <li><strong>Received "On-the-Spot" award for delivery excellence.</strong></li>
          </ul>
          <div class="exp-tags">
            <span class="exp-tag">Java</span><span class="exp-tag">GraphQL</span><span class="exp-tag">Microservices</span><span class="exp-tag">Hibernate</span><span class="exp-tag">PostgreSQL</span>
          </div>
        </div>
      </div>

      <div class="exp-row">
        <div class="exp-row-header">
          <div class="exp-row-title">Tech Lead & Web Dev @ JNTU Tech Fest</div>
          <div class="exp-row-date">2018 — 2020  +</div>
        </div>
        <div class="exp-row-content">
          <p style="margin-bottom: 20px;">Led university-wide technical initiatives and portal development.</p>
          <ul style="color: var(--text-muted); list-style: square; padding-left: 20px;">
            <li>Won Quiz App competition at university tech fest for both design and performance.</li>
            <li>Led the launch of a new portal system used by thousands of students for events.</li>
            <li>Organized and led technical workshops for junior students.</li>
          </ul>
          <div class="exp-tags">
            <span class="exp-tag">JavaScript</span><span class="exp-tag">Node.js</span><span class="exp-tag">UI Design</span>
          </div>
        </div>
      </div>
    </div>

    <!-- LEARNING -->
    <div class="section-header" id="learning">
      <h2>Learning</h2>
      <p class="section-subtext">My notes, deep-dives & interview prep guides — written the way I wish someone had explained them to me.</p>
    </div>

    <div class="learning-grid">

      <div class="learn-card">
        <div class="learn-card-inner">
          <div class="learn-card-top">
            <div class="learn-category-pill">Design Patterns</div>
            <div class="learn-read-time">23 patterns · Java</div>
          </div>
          <h3 class="learn-title">GoF Design Patterns<br/><span>Mastery Guide</span></h3>
          <p class="learn-excerpt">All 23 Gang of Four patterns explained with intent, UML-style diagrams, Java code, real-world analogies, pros/cons, and interview cheat sheets. Creational patterns available now.</p>
          <div class="learn-meta">
            <div class="learn-tags">
              <span class="learn-tag">Creational</span>
              <span class="learn-tag learn-tag-soon">Structural</span>
              <span class="learn-tag learn-tag-soon">Behavioral</span>
            </div>
          </div>
          <div class="learn-patterns-preview">
            <a href="./learn/index.html" class="learn-pattern-chip">Singleton</a>
            <a href="./learn/factory-method.html" class="learn-pattern-chip">Factory Method</a>
            <a href="./learn/abstract-factory.html" class="learn-pattern-chip">Abstract Factory</a>
            <a href="./learn/builder.html" class="learn-pattern-chip">Builder</a>
            <a href="./learn/prototype.html" class="learn-pattern-chip">Prototype</a>
          </div>
          <a href="./learn/index.html" class="learn-cta">
            <span>Read the Guide</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="learn-card-accent"></div>
      </div>

      <div class="learn-card learn-card-coming">
        <div class="learn-card-inner">
          <div class="learn-card-top">
            <div class="learn-category-pill learn-pill-gray">System Design</div>
            <div class="learn-read-time">Coming Soon</div>
          </div>
          <h3 class="learn-title">System Design<br/><span>Interview Playbook</span></h3>
          <p class="learn-excerpt">Scalability, databases, caching, messaging queues, and distributed systems — everything for the senior engineering interviews.</p>
          <div class="learn-coming-badge">🚧 In Progress</div>
        </div>
      </div>

    </div>

    <!-- CONTACT -->
    <section class="contact" id="contact">
      <div class="section-header">
        <h2 style="font-size: 3rem;">Ready to Build?</h2>
      </div>
      <p style="max-width: 600px; margin: 0 auto 40px; color: var(--text-muted);">
        I'm always excited to discuss AI orchestration, high-performance backends, or the future of agentic workflows. Whether you have a project in mind or just want to chat tech, feel free to reach out.
      </p>
      <a href="mailto:valletidinesh@gmail.com" class="contact-btn">Email Me</a>
      <div style="margin-top: 60px; display: flex; flex-direction: column; gap: 15px;">
        <a href="mailto:valletidinesh@gmail.com" style="color: var(--accent); font-family: var(--font-mono); text-decoration: none;">valletidinesh@gmail.com</a>
        <a href="https://linkedin.com/in/dineshvalleti" target="_blank" style="color: var(--text-muted); font-family: var(--font-mono); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--text-muted)'">linkedin.com/in/dineshvalleti</a>
        <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.8rem; margin-top: 10px;">Bangalore, India // Open to Remote & Hybrid</div>
      </div>
    </section>
  `;
}

function initInteractions(): void {
  // Navigation Scroll
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-target')!;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Accordion Logic
  const rows = document.querySelectorAll('.exp-row-header');
  rows.forEach(row => {
    row.addEventListener('click', () => {
      const parent = row.parentElement!;
      const isActive = parent.classList.contains('active');
      
      // Close others
      document.querySelectorAll('.exp-row').forEach(r => r.classList.remove('active'));
      
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // Simple scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = '1';
        (entry.target as HTMLElement).style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.expertise-card, .exp-row, .section-header, .learn-card').forEach(el => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.opacity = '0';
    htmlEl.style.transform = 'translateY(30px)';
    htmlEl.style.transition = 'all 0.6s ease-out';
    observer.observe(htmlEl);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  initInteractions();
});
