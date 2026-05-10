# Security Policy

## Overview

This document outlines security best practices, supported versions, and vulnerability reporting procedures for the Firefly Castle Development website. We take security seriously and appreciate responsible disclosure of vulnerabilities.

## Reporting Security Vulnerabilities

### Responsible Disclosure

If you discover a security vulnerability, **please do not open a public issue**. Instead, report it responsibly via GitHub's private vulnerability reporting feature:

1. Navigate to the [Security tab](https://github.com/laura-lucciola/firefly-castle-development-main-page/security)
2. Click "Report a vulnerability"
3. Provide detailed information about the vulnerability

### Vulnerability Severity

-   **Critical:** Remote code execution, authentication bypass, data breach → 24-48 hour patch
-   **High:** Authorization bypass, significant data exposure → 1 week patch
-   **Medium:** Information disclosure, denial of service → 2 weeks patch
-   **Low:** Minor security issues with workarounds → Next release

## Security Best Practices

### Dependencies & Supply Chain

-   **Regular Updates:** Dependencies are reviewed and updated regularly via `npm audit`
-   **Dependency Scanning:** GitHub Advanced Security monitors dependencies for known vulnerabilities
-   **Lock File:** `package-lock.json` is committed to ensure consistent deployments
-   **Review Policy:** All dependency updates are reviewed before merge to main
-   **No High-Risk Packages:** Avoid packages with poor maintenance, large attack surface, or known vulnerabilities

### Development Security

#### Code Quality & Analysis

-   **Linting:** ESLint with security rules enforces code quality standards
-   **TypeScript:** Strict mode enabled to catch type-related issues at compile time
-   **Prettier:** Code formatting for consistency and readability
-   **Pre-commit Hooks:** Consider implementing git hooks to run linting before commits

#### Secrets Management

-   **Environment Variables:** Sensitive data (API keys, tokens) stored in environment variables only
-   **Never Commit Secrets:** `.env` files are gitignored
-   **GitHub Secrets:** CI/CD secrets managed via GitHub repository secrets
-   **No Hardcoded Credentials:** Audit codebase for hardcoded keys, tokens, or passwords
-   **Key Rotation:** Rotate API keys and tokens periodically (recommended: 90 days)

### Frontend Security

#### Content Security Policy (CSP)

CSP headers are enforced via Cloudflare to prevent:

-   Cross-site scripting (XSS) attacks
-   Clickjacking
-   Code injection attacks

**Current Headers:**

-   `X-Content-Type-Options: nosniff`
-   `X-Frame-Options: DENY`
-   `Referrer-Policy: strict-origin-when-cross-origin`

#### Data Protection

-   **Input Validation:** All user inputs validated using Formik + Yup
-   **Output Encoding:** React automatically escapes content to prevent XSS
-   **HTTPS Only:** Cloudflare enforces HTTPS for all connections
-   **No Sensitive Data in Client:** PII and credentials never stored in local storage
-   **Session Security:** If applicable, use secure, HttpOnly cookies

#### Third-Party Services

-   **EmailJS:** Email service for contact forms - review their security practices
-   **FontAwesome:** Icon library - no sensitive operations
-   **Google Analytics:** If integrated, ensure GDPR compliance
-   **Review Integrations:** Audit all third-party libraries for security practices

### Cloudflare Configuration

-   **HTTPS Enforcement:** All traffic redirected to HTTPS
-   **DDoS Protection:** Enabled via Cloudflare's automatic mitigation
-   **WAF (Web Application Firewall):** Configured to block common attack patterns
-   **Bot Management:** Protects against malicious automated traffic
-   **Security Headers:** Cloudflare enforces industry-standard security headers
-   **Rate Limiting:** Configured to prevent abuse and brute force attacks

### Build & Deployment Security

#### CI/CD Pipeline

-   **GitHub Actions:** Automated testing and linting on every push
-   **Dependency Verification:** `npm audit` runs in CI to catch vulnerabilities
-   **Build Verification:** Application builds successfully before deployment
-   **Code Review:** All PRs require review before merge to main

#### Deployment Process

-   **Cloudflare Pages:** Uses Git-based deployment with automatic builds
-   **Build Logs:** Monitor for errors and warnings during deployment
-   **Rollback Capability:** Previous versions can be rolled back via GitHub
-   **Production Isolation:** Production deployments are separated from staging

### API Security (if applicable)

-   **Input Validation:** All API inputs validated before processing
-   **Rate Limiting:** API endpoints rate-limited to prevent abuse
-   **Authentication:** API endpoints require proper authentication (if public)
-   **CORS:** Configured to allow only trusted origins
-   **Data Sanitization:** User input sanitized before storage or output

### Compliance & Standards

#### GDPR Compliance

-   **Data Collection:** Only collect data necessary for operation
-   **User Consent:** Obtain explicit consent for data collection (e.g., analytics)
-   **Privacy Policy:** Review and ensure accuracy of privacy disclosures
-   **Data Deletion:** Implement mechanisms for users to request data deletion

## Security Contacts

For security inquiries, use GitHub's private vulnerability reporting feature. Do not contact maintainers via public channels for security issues.

---

**Last Updated:** 2026-05-09  
**Version:** 1.0.0
