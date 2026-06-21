# Portfolio

Personal portfolio of Hanisten — Application Developer based in Zürich.

Showcases selected projects, skills and a contact form for job inquiries.

## Tech Stack

- **Next.js 16** — App Router, React 19
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** — scroll and hero animations
- **EmailJS** — contact form delivery

## Development

```bash
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

For the contact form, copy `.env.example` to `.env.local`. In the [EmailJS Security settings](https://dashboard.emailjs.com/admin/account/security), enable **Allow EmailJS API for non-browser applications** and add your private key as `EMAILJS_PRIVATE_KEY`.

## Production

```bash
npm run build
npm run start
```

## Structure

- `src/content/site.ts` — content and external links
- `src/components/sections/` — page sections
- `src/lib/emailjs-server.ts` — server-side contact form
- `src/app/api/contact/` — contact API route
