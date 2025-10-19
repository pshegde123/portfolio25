import { Code, FileCode2, Database, FileJson } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            About <span className="text-primary"> Me</span>
                        </h2>

                        <p className="text-muted-foreground">
                            I am a full-stack web developer with a strong C and C++ programming foundation, which has sharpened my focus on performance optimization.
                        </p>

                        <p className="text-muted-foreground">
                            I am a passionate web developer specializing in creating responsive web applications using the MERN stack. With a strong foundation in MongoDB, Express.js, React, and Node.js, I strive to build user-friendly and efficient solutions. I'm also enthusiastic about exploring new web technologies to continually enhance my skills and stay at the forefront of the ever-evolving tech landscape.
                        </p>

                        <p className="text-muted-foreground">
                            I am currently seeking full-time, part-time, or freelancing work opportunities. If you're looking for a committed individual ready to make a positive impact, let's connect!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1PY16iqeJ3v3YdjIvAb9bl-shrtVsjkQx/edit?usp=sharing&ouid=103058786758812199291&rtpof=true&sd=true"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                download
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Front-End Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FileJson className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Back-End Development</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary" />
                                    <FileCode2 className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Application Maintenance</h4>
                                    <p className="text-muted-foreground">
                                        Extensive experience in development and maintenance of C/C++, Database related applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};