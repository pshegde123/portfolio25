import Navbar from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden" >
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}


            {/* Footer */}

        </div>
    )
}

export default Home
