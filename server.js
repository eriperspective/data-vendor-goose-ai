#!/usr/bin/env node
/**
 * Simple HTTP Server for Dmitri's Vendor Directory
 * Bonus challenge solution!
 * 
 * Usage: node server.js [port]
 * Default port: 3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.argv[2] || 3000;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.json': 'application/json',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon'
};

// Create server
const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Handle root path
    let filePath = req.url === '/' ? '/winter-festival-vendors.html' : req.url;
    
    // Remove query string
    filePath = filePath.split('?')[0];
    
    // Security: prevent directory traversal
    filePath = path.join(__dirname, filePath);
    
    // Get file extension
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';
    
    // Read and serve file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>404 - Not Found</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                color: white;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                                margin: 0;
                            }
                            .error-container {
                                text-align: center;
                                background: rgba(255, 255, 255, 0.2);
                                backdrop-filter: blur(10px);
                                padding: 50px;
                                border-radius: 20px;
                                border: 1px solid rgba(255, 255, 255, 0.3);
                            }
                            h1 { font-size: 4em; margin: 0; }
                            p { font-size: 1.5em; }
                            a { color: white; }
                        </style>
                    </head>
                    <body>
                        <div class="error-container">
                            <h1>404</h1>
                            <p>Page not found!</p>
                            <p><a href="/">Return to Vendor Directory</a></p>
                        </div>
                    </body>
                    </html>
                `);
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*' // Enable CORS
            });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🎄 Winter Festival Vendor Directory Server 🎄');
    console.log('='.repeat(60));
    console.log(`\n✨ Server running at http://localhost:${PORT}/`);
    console.log(`📱 Open in your browser to view the vendor directory`);
    console.log(`🛑 Press Ctrl+C to stop the server\n`);
    console.log('='.repeat(60));
});

// Handle shutdown gracefully
process.on('SIGINT', () => {
    console.log('\n\n👋 Shutting down server...');
    server.close(() => {
        console.log('✅ Server stopped successfully!');
        process.exit(0);
    });
});
