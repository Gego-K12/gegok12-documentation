# Contributing to GegoK12 Documentation

First off, thank you for considering contributing to GegoK12! It's people like you that make GegoK12 such a great tool for educational institutions worldwide.

## 🌟 We Need Your Help!

GegoK12 is an open-source project that thrives on community contributions. We're actively seeking:

- **🧪 Testers** - Help us find and fix bugs
- **📝 Documentation Experts** - Improve our guides and tutorials
- **🎨 Theme Builders** - Create beautiful, accessible themes
- **🔌 Plugin Developers** - Extend GegoK12's functionality
- **💝 Sponsors** - Support the project's sustainability

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Documentation Contributions](#documentation-contributions)
  - [Code Contributions](#code-contributions)
  - [Theme Development](#theme-development)
  - [Plugin Development](#plugin-development)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@gegok12.com](mailto:conduct@gegok12.com).

### Our Standards

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Collaborative**: Work together toward common goals
- **Be Inclusive**: Welcome newcomers and diverse perspectives
- **Be Professional**: Maintain professional discourse in all interactions
- **Be Constructive**: Provide helpful feedback and criticism

## 🤝 How Can I Contribute?

### Reporting Bugs

Bugs are tracked as [GitHub issues](https://github.com/Gego-K12/gegok12-documentation/issues). Before creating a bug report, please check if the issue already exists.

**When creating a bug report, include:**

- **Clear title** - Use a descriptive title for the issue
- **Steps to reproduce** - Detailed steps to reproduce the problem
- **Expected behavior** - What you expected to happen
- **Actual behavior** - What actually happened
- **Screenshots** - If applicable, add screenshots
- **Environment details** - OS, browser, Node.js version, etc.
- **Additional context** - Any other relevant information

**Example Bug Report:**

```markdown
**Title:** Search functionality not working on mobile devices

**Steps to Reproduce:**
1. Open documentation on mobile browser
2. Click on search icon
3. Type search query
4. Press enter

**Expected Behavior:**
Search results should appear

**Actual Behavior:**
Nothing happens, search box remains empty

**Environment:**
- OS: iOS 17
- Browser: Safari Mobile
- Documentation Version: 2.0.1

**Screenshots:**
[Attach screenshots here]
```

### Suggesting Enhancements

Enhancement suggestions are also tracked as [GitHub issues](https://github.com/Gego-K12/gegok12-documentation/issues).

**When suggesting an enhancement, include:**

- **Clear title** - Use a descriptive title
- **Detailed description** - Explain the enhancement in detail
- **Use cases** - Describe scenarios where this would be useful
- **Mockups/Examples** - If applicable, provide visual examples
- **Alternatives** - Mention alternative solutions you've considered

### Documentation Contributions

Documentation is crucial for GegoK12's success. Here's how you can help:

#### What to Contribute

- **Fix typos and grammatical errors**
- **Improve clarity** of existing content
- **Add missing sections** or tutorials
- **Create examples** and code snippets
- **Add screenshots** and diagrams
- **Translate documentation** to other languages
- **Write how-to guides** for specific use cases
- **Create video tutorials**

#### Documentation Structure

```
pages/
├── documentation/
│   ├── getting-started.md
│   ├── core-modules/
│   │   ├── _meta.json
│   │   ├── student-management.md
│   │   └── ...
│   ├── add-on-modules/
│   │   ├── _meta.json
│   │   ├── exam-module.md
│   │   └── ...
│   └── mobile-app-access/
│       ├── _meta.json
│       ├── parent-app.md
│       └── teacher-app.md
```

#### Documentation Workflow

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/gegok12-documentation.git
   cd gegok12-documentation
   ```

2. **Create a branch**
   ```bash
   git checkout -b docs/improve-student-management
   ```

3. **Make your changes**
   - Edit existing `.md` files or create new ones
   - Update `_meta.json` files if adding new pages
   - Add images to appropriate `images/` directories

4. **Test locally**
   ```bash
   npm install
   npm run dev
   ```
   Visit `http://localhost:3000` to preview changes

5. **Commit and push**
   ```bash
   git add .
   git commit -m "docs: improve student management documentation"
   git push origin docs/improve-student-management
   ```

6. **Create a Pull Request**

### Code Contributions

For code contributions to the main GegoK12 project, visit the [main repository](https://github.com/Gego-K12/gegok12).

For documentation website improvements:

1. **Fork and clone** this repository
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/add-search-improvement
   ```
4. **Make your changes**
5. **Test thoroughly**
6. **Submit a Pull Request**

### Theme Development

We welcome custom themes for GegoK12!

#### Theme Requirements

- **Responsive Design** - Must work on all screen sizes
- **Accessibility** - WCAG 2.1 AA compliance minimum
- **Dark Mode Support** - Provide dark mode variant
- **Documentation** - Include setup and customization guide
- **Browser Compatibility** - Support modern browsers

#### Theme Development Steps

1. **Study existing themes** in `theme.config.jsx`
2. **Create your theme** following the structure
3. **Test across devices** and browsers
4. **Document configuration** options
5. **Submit as a Pull Request** with screenshots

#### Theme Submission Checklist

- [ ] Responsive on mobile, tablet, and desktop
- [ ] Dark mode implemented
- [ ] All colors pass contrast ratio tests
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Configuration documentation provided
- [ ] Screenshots included in PR

### Plugin Development

Extend GegoK12 with custom plugins!

#### Plugin Ideas

- **Third-party integrations** (Google Classroom, Microsoft Teams)
- **Custom reporting** tools
- **Automation** scripts
- **Data import/export** utilities
- **Notification** systems
- **Analytics** dashboards

#### Plugin Development Guidelines

1. **Plan your plugin**
   - Define clear objectives
   - Identify user needs
   - Plan the architecture

2. **Follow best practices**
   - Write clean, documented code
   - Include error handling
   - Add unit tests
   - Provide configuration options

3. **Create documentation**
   - Installation guide
   - Configuration instructions
   - Usage examples
   - API reference (if applicable)

4. **Submit your plugin**
   - Create a separate repository
   - Add to our plugins directory
   - Submit PR with plugin metadata

## 🔄 Development Workflow

### Setting Up Your Development Environment

1. **Prerequisites**
   - Node.js 16.x or higher
   - npm or yarn
   - Git
   - A code editor (VS Code recommended)

2. **Clone and Install**
   ```bash
   git clone https://github.com/Gego-K12/gegok12-documentation.git
   cd gegok12-documentation
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

### Branch Naming Convention

Use descriptive branch names:

- `feature/` - New features (e.g., `feature/add-api-docs`)
- `docs/` - Documentation updates (e.g., `docs/improve-getting-started`)
- `fix/` - Bug fixes (e.g., `fix/broken-navigation`)
- `theme/` - Theme development (e.g., `theme/dark-mode-improvement`)
- `plugin/` - Plugin development (e.g., `plugin/google-classroom`)

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "docs: add API authentication guide"
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve navigation issue on mobile"
```

### Pull Request Process

1. **Update documentation** if you've made changes requiring it
2. **Test your changes** thoroughly
3. **Update the README.md** if needed
4. **Ensure your PR description** clearly describes the problem and solution
5. **Link related issues** in the PR description
6. **Request review** from maintainers
7. **Address feedback** promptly

**PR Title Format:**
```
[Type] Brief description of changes
```

**Examples:**
- `[Docs] Add mobile app setup guide`
- `[Feature] Implement search autocomplete`
- `[Fix] Resolve broken image links`

### Code Review Process

- All submissions require review from at least one maintainer
- Reviewers will provide constructive feedback
- Address all comments before merge
- Maintainers may request changes or clarifications
- Be patient - reviews may take a few days

## 🎨 Style Guidelines

### Markdown Style Guide

**Headers:**
```markdown
# H1 - Page Title (only one per page)
## H2 - Major Sections
### H3 - Subsections
#### H4 - Minor Subsections
```

**Lists:**
```markdown
- Unordered lists use dashes
- Keep items concise
- Use sub-items when needed
  - Like this

1. Ordered lists use numbers
2. For sequential steps
3. Or ranked items
```

**Code Blocks:**
````markdown
```bash
# Specify language for syntax highlighting
npm install
```
````

**Links:**
```markdown
[Link text](URL)
[Internal link](../path/to/page.md)
```

**Images:**
```markdown
![Alt text](path/to/image.png)
```

**Emphasis:**
```markdown
**Bold** for strong emphasis
*Italic* for emphasis
`Code` for inline code
```

### Writing Style

- **Be clear and concise** - Avoid jargon when possible
- **Use active voice** - "Click the button" not "The button should be clicked"
- **Be inclusive** - Use gender-neutral language
- **Add examples** - Show, don't just tell
- **Break up long paragraphs** - Keep paragraphs to 3-5 sentences
- **Use lists** - Make content scannable
- **Add visuals** - Screenshots and diagrams help understanding

### Image Guidelines

- **Format**: PNG for screenshots, SVG for diagrams
- **Size**: Optimize images (max 500KB)
- **Naming**: Use descriptive names (`student-dashboard.png`)
- **Alt Text**: Always provide descriptive alt text
- **Location**: Store in appropriate `images/` directory

## 👥 Community

### Getting Help

- **Documentation**: [docs.gegok12.com](https://docs.gegok12.com)
- **GitHub Issues**: [Report bugs or request features](https://github.com/Gego-K12/gegok12-documentation/issues)
- **GitHub Discussions**: [Community discussions](https://github.com/Gego-K12/gegok12-documentation/discussions)
- **Email**: support@gegok12.com

### Stay Connected

- **Website**: [gegok12.com](https://gegok12.com)
- **Twitter**: [@GegoK12](https://twitter.com/GegoK12)
- **Discord**: Coming Soon
- **Forum**: Coming Soon

### Recognition

We value all contributions! Contributors will be:

- Listed in our CONTRIBUTORS.md file
- Mentioned in release notes
- Featured on our website (for significant contributions)
- Eligible for contributor swag (when available)

## 💖 Sponsorship

If you'd like to support GegoK12 financially:

- **GitHub Sponsors**: [Sponsor us on GitHub](https://github.com/sponsors/Gego-K12)
- **Email**: sponsor@gegok12.com
- **Benefits**: Logo placement, priority support, influence on roadmap

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## ❓ Questions?

Don't hesitate to reach out if you have questions! We're here to help:

- Open a [GitHub Discussion](https://github.com/Gego-K12/gegok12-documentation/discussions)
- Email us at contribute@gegok12.com
- Join our community chat (Coming Soon)

---

<div align="center">

**Thank you for contributing to GegoK12! Together, we're making education management better for everyone.** 🎓✨

[Back to README](README.md) • [View Documentation](https://docs.gegok12.com) • [Main Project](https://github.com/Gego-K12/gegok12)

</div>
