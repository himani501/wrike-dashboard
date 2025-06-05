# wrike-dashboard

# to run front-end (PORT: 3000)
- npm run start

# to run back-end (PORT: 4000)
- create a file under /backend/.env with following tokens:
```
API_TOKEN=***
```
- npm run start

# to run backend and frontend on same PORT (:3000)

- hit direct /api/wrike/tasks from frontend

- Serve React Build from Node.js
```
// Serve static files from React
app.use(express.static("/Users/himanibhardwaj/himcodes/wrike-dashboard/frontend/build"));
```

- Build and Run in Production
```
# Build React app
cd frontend
npm run build

# Start backend server
cd ../backend
node server.js
```