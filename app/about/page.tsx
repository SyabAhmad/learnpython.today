import Image from "next/image";
import { CH1, boldPClasses } from "@/components/custom-typo";

export default function About() {
    return (
        <div className="text-lg py-12 max-w-4xl ">
            <CH1 text={"Hi! I'm Syed Syab Ahmad, creator of LearnPython.Today."} />
            <div className="flex items-center md:items-end py-3 flex-col md:flex-row">
                <p className={boldPClasses}>
                    <b>Syed Syab Ahmad (MenteE's Leader 🥀)</b> is a Full-Stack Web and Machine Learning Engineer and AI researcher with strong experience in Python, React.js, TensorFlow, OpenCV, SQL, and modern AI tooling. I've built multiple ML-powered and generative AI projects including DataFit, Talk to PDF, Vid2Txt, an AI Research Paper Generator, RAG-based product chat systems, and disease classification models using CNN+LSTM.
                </p>
            </div>
            <p className={`${boldPClasses} mt-4`}>
                <b>
                    I've published Python packages, developed ETL pipelines, Streamlit apps, and ML systems end-to-end—from data cleaning and feature engineering to model training and deployment.
                </b>{" "}
                With a Software Engineering degree and industry experience across startups and tech programs, I focus on practical AI solutions, multi-agent LLM workflows, and production-ready ML applications.
                <br />
                <br />
                LearnPython.Today is my platform for sharing knowledge about Python, machine learning, and web development. Whether you're starting from zero or looking to advance in AI and full-stack development, I'd like to help you navigate the world of coding and AI, just as I've navigated it myself. My approach is built on real-world experience, continuous learning, and practical problem-solving.
            </p>
        </div>
    );
}
