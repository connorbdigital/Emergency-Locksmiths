# North West Emergency Locksmiths website rebuild

A responsive static website concept built around the supplied logo and blue/red/white brand palette.

## Preview locally
Because this build uses root-relative paths for clean production URLs, run a local web server from this directory rather than opening `index.html` directly:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Deployment
Upload the contents of this folder to the web root of the hosting account. Ensure the host serves `index.html` for `/` and that root-relative asset paths remain available. Configure HTTPS and add 301 redirects from legacy URLs as appropriate before launch.

## Included
- Homepage, About, Services, Areas Covered, Contact and Privacy Notice pages
- Six individual service landing pages
- Responsive mobile navigation and sticky mobile call CTA
- Service dropdown, scroll-reveal motion with reduced-motion support
- Enquiry form validation that prepares an email to `mark@nwlocks.co.uk`
- OpenStreetMap embeds
- Basic homepage Locksmith structured data and metadata

## Before production launch
- Confirm all service descriptions, phone numbers, email, address, and coverage.
- Replace the draft privacy notice with the business's approved privacy policy.
- Connect the form to a secure server-side endpoint or CRM if you need submissions without the visitor's email client.
- Audit legacy URLs and configure 301 redirects; create a full XML sitemap and robots.txt on the production domain.
- Verify any external images and replace with owned/licensed business photography where possible.
