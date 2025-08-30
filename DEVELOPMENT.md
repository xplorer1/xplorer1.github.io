# Development Guide for al-folio Site

This guide explains how to develop locally with live reloading using Docker Compose, similar to React development.

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Start development server with live reload
docker-compose up --build

# Stop development server
docker-compose down

# View logs
docker-compose logs -f jekyll

# Restart with fresh build
docker-compose down && docker-compose up --build
```

### Production Build

```bash
# Build and serve production site
docker-compose -f docker-compose.prod.yml up --build
```

## What's Different from React Development

### Jekyll vs React
- **Jekyll**: Static site generator that builds HTML files
- **React**: JavaScript framework with hot module replacement
- **Build Process**: Jekyll needs to rebuild the entire site when files change
- **Reload Speed**: Slightly slower than React but still very fast

### Live Reload Features
- ✅ **File Watching**: Automatically detects changes to markdown, HTML, CSS, and JavaScript files
- ✅ **Browser Refresh**: Automatically refreshes your browser when files change
- ✅ **Fast Rebuilds**: Optimized for quick rebuilds during development
- ✅ **Port Configuration**: Site runs on port 4000, live reload on port 35729
- ✅ **Incremental Builds**: Only rebuilds changed files for faster development

## Development Workflow

### 1. Start Development Server
```bash
docker-compose up --build
```

### 2. Make Changes
Edit any of these file types:
- `_pages/*.md` - Page content
- `_projects/*.md` - Project descriptions
- `_sass/*.scss` - Styles
- `assets/css/*.css` - Additional styles
- `_layouts/*.html` - Page layouts
- `_includes/*.html` - Reusable components

### 3. See Changes Automatically
- Browser will automatically refresh
- Changes appear within 1-3 seconds
- No manual refresh needed
- Live reload indicator shows in browser

### 4. Stop Development Server
Press `Ctrl+C` in the terminal or run:
```bash
docker-compose down
```

## File Structure for Development

```
├── _pages/           # Main pages (about, cv, projects)
├── _projects/        # Individual project pages
├── _posts/           # Blog posts
├── _layouts/         # Page templates
├── _includes/        # Reusable components
├── _sass/            # SCSS styles
├── assets/           # Images, CSS, JS
└── _config.yml       # Site configuration
```

## Common Development Tasks

### Adding a New Page
1. Create `_pages/newpage.md`
2. Add front matter (YAML header)
3. Write content in Markdown
4. Save and see changes immediately

### Modifying Styles
1. Edit `_sass/` files
2. Changes compile automatically
3. Browser refreshes with new styles

### Adding Projects
1. Edit existing files in `_projects/`
2. Or create new project files
3. Update `_config.yml` if needed

## Docker Compose Configuration

The `docker-compose.yml` file includes several optimizations for development:

### File Watching
- **Force Polling**: Enabled for better Windows compatibility
- **Live Reload**: Automatic browser refresh on file changes
- **Incremental Builds**: Faster rebuilds by only processing changed files

### Performance
- **Temporary Files**: Uses tmpfs for faster file operations
- **Volume Mounts**: Direct file access for immediate changes
- **Restart Policy**: Automatic restart on failure

### Environment Variables
- `JEKYLL_ENV=development`: Enables development features
- `JEKYLL_LIVERELOAD=true`: Enables live reload
- `JEKYLL_FORCE_POLLING=true`: Better file watching on Windows

## Troubleshooting

### Port Already in Use
If port 4000 is busy:
```bash
# Stop all containers
docker-compose down

# Check what's using the port
netstat -ano | findstr :4000

# Restart
docker-compose up --build
```

### Changes Not Appearing
1. Check if the development server is running
2. Verify file paths are correct
3. Check browser console for errors
4. Restart the development server

### Docker Issues
```bash
# Rebuild from scratch
docker-compose down
docker system prune -f
docker-compose up --build
```

### File Watching Issues on Windows
The configuration includes `--force_polling` which should resolve most Windows file watching issues. If you still have problems:

1. Ensure Docker Desktop has file sharing enabled for your project directory
2. Try running Docker Desktop as administrator
3. Check Windows Defender exclusions for Docker

## Performance Tips

### Fast Development
- Keep the development server running
- Use `docker-compose up --build` for the first run
- Use `docker-compose up` for subsequent runs (faster)
- Monitor logs for any build errors

### File Watching
- Jekyll watches all relevant files automatically
- Large binary files (images, videos) don't trigger rebuilds
- Focus on text-based files for development
- The `--incremental` flag speeds up rebuilds

## Production Deployment

When ready to deploy:

### Option 1: Docker Compose Production
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Option 2: Direct Jekyll Build
```bash
# Build the site
jekyll build

# Serve the built site
jekyll serve --host 0.0.0.0 --port 4000
```

### Option 3: GitHub Pages
Push your changes to the main branch and GitHub Pages will automatically build and deploy your site.

## Support

If you encounter issues:
1. Check the logs: `docker-compose logs -f jekyll`
2. Restart the server: `docker-compose down && docker-compose up --build`
3. Clean and rebuild: `docker-compose down && docker system prune -f && docker-compose up --build`

## Key Benefits of This Setup

- **No Batch Files Required**: Everything configured in Docker Compose
- **Automatic Live Reload**: Browser refreshes on file changes
- **Windows Optimized**: Force polling for better file watching
- **Fast Development**: Incremental builds and optimized volumes
- **Production Ready**: Separate production configuration

Happy developing! 🚀
