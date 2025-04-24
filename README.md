# 

A modern web application built with [Igniter Framework](https://github.com/felipebarcelospro/igniter-js) - A feature-first framework for Next.js projects.

## 🚀 Quick Start

1. **Install Dependencies**
```bash
npm install
# or
yarn install
```

2. **Setup Docker and Database**
```bash
# Start Docker containers
docker compose up -d

# Generate Prisma Client
npx prisma migrate dev
```

3. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

## 📖 Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory (If is Igniter Fullstack APP)
│   ├── design-system/       # UI components (shadcn/ui) (If is Igniter Fullstack APP)
│   ├── providers/           # Context providers
│   ├── utils/               # Shared utilities
│   ├── features/            # Feature modules
│   │   └── [feature]/       # Feature-specific code
│   │       ├── index.ts     # Feature entry point
│   │       ├── controllers/ # HTTP request handlers
│   │       │   └── [feature].controller.ts
│   │       ├── procedures/  # Business logic
│   │       │   └── [feature].procedure.ts
│   │       ├── [feature].interface.ts # Feature types
│   │       └── [feature].ts # Feature configuration
│   └── configs/            # Configuration files
├── public/                 # Static files
└── .github/               # GitHub configuration
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Igniter CLI Commands
- `npx @igniter-js/cli generate feature [name]` - Generate a new feature

## 🏗 Feature Generation
Generate a new feature using the Igniter CLI:

```bash
npx @igniter-js/cli generate feature
```

This will create a new feature with the following structure:
```
src/features/users/
├── features/            # Feature modules
│   └── [feature]/       # Feature-specific code
│       ├── index.ts     # Feature entry point
│       ├── controllers/ # HTTP request handlers
│       │   └── [feature].controller.ts
│       ├── procedures/  # Business logic
│       │   └── [feature].procedure.ts
│       ├── [feature].interface.ts # Feature types
│       └── [feature].ts # Feature configuration
```

## 🧩 Tech Stack

- **Framework**: Igniter.js (Next.js 15)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Prisma
- **Testing**: Vitest
- **State Management**: React Context
- **API Layer**: Feature-based controllers
- **Validation**: Zod
- **Development**: Docker

## 📚 Documentation

For more detailed documentation:

- [Igniter Framework Documentation](https://github.com/felipebarcelospro/igniter-js)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zod Documentation](https://zod.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 