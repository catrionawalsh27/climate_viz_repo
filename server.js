const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3045;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Parse URL and remove query parameters
    let filePath = req.url.split('?')[0];
    
    // Default to index page
    if (filePath === '/') {
        filePath = '/uk-climate-visualizer.html';
    }
    
    // Construct absolute file path
    const absolutePath = path.join(__dirname, filePath);
    
    // Get file extension
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    // Check if file exists and serve it
    fs.access(absolutePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>404 - Not Found</title>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            text-align: center; 
                            margin-top: 100px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            height: 100vh;
                        }
                        .container { background: rgba(0,0,0,0.3); padding: 50px; border-radius: 10px; display: inline-block; }
                        h1 { font-size: 72px; margin: 0; }
                        p { font-size: 18px; }
                        a { color: #4CAF50; text-decoration: none; font-weight: bold; }
                        a:hover { text-decoration: underline; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>404</h1>
                        <p>File not found: ${filePath}</p>
                        <p><a href="/">Go to UK Climate Visualizer</a></p>
                        <p><small>Available files:</small></p>
                        <ul style="text-align: left; display: inline-block;">
                            <li><a href="/uk-climate-visualizer.html">UK Climate Visualizer</a></li>
                            <li><a href="/sea_level_global.csv">Sea Level Data (CSV)</a></li>
                        </ul>
                    </div>
                </body>
                </html>
            `);
            return;
        }
        
        // Read and serve the file
        fs.readFile(absolutePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache'
            });
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    🌊 UK Climate Visualizer                  ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Server running on: http://localhost:${PORT}                     ║
║                                                              ║
║  📊 Access the visualization at:                             ║
║  → http://localhost:${PORT}/                                      ║
║  → http://localhost:${PORT}/uk-climate-visualizer.html           ║
║                                                              ║
║  📁 Available files:                                         ║
║  → UK Climate Visualizer (Interactive Map)                  ║
║  → Sea Level Data (CSV)                                      ║
║                                                              ║
║  🔧 Features:                                                ║
║  • Interactive relief map of the UK                         ║
║  • Real climate data from Met Office                        ║
║  • Time-based sea level rise visualization                  ║
║  • Vulnerable coastal area analysis                         ║
║                                                              ║
║  Press Ctrl+C to stop the server                            ║
╚══════════════════════════════════════════════════════════════╝
    `);
    
    console.log('📡 Server Details:');
    console.log(`   • Port: ${PORT}`);
    console.log(`   • Directory: ${__dirname}`);
    console.log(`   • Node.js: ${process.version}`);
    console.log('');
    console.log('🌐 If accessing from another machine, replace "localhost" with this VM\'s IP address.');
    console.log('');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n🛑 Shutting down UK Climate Visualizer server...');
    server.close(() => {
        console.log('✅ Server stopped successfully. Goodbye! 👋');
        process.exit(0);
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('💥 Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
