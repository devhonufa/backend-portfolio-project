import { PORT } from './src/config/config.js'
import app from './app.js'
app.listen(PORT, () => {
    console.log("Server started on port " + PORT)
})
