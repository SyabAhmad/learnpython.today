import Image from "next/image";
import { CH1, boldPClasses } from "@/components/custom-typo";
import Link from "next/link";

export default function About() {
  return (
    <div className="text-lg py-12 max-w-4xl space-y-8">
      <div>
        <CH1 text={"Hi! I'm Syed Syab Ahmad, contributor to LearnPython.Today."} />
        <div className="flex items-center md:items-end py-3 flex-col md:flex-row mt-4">
          <p className={boldPClasses}>
            <b>Syed Syab Ahmad (MenteE's Leader 🥀)</b> is a Full-Stack Web and
            Machine Learning Engineer and AI researcher with strong experience in
            Python, React.js, TensorFlow, OpenCV, SQL, and modern AI tooling. I've
            built multiple ML-powered and generative AI projects including
            DataFit, Talk to PDF, Vid2Txt, an AI Research Paper Generator,
            RAG-based product chat systems, and disease classification models
            using CNN+LSTM.
          </p>
        </div>
        <p className={`${boldPClasses} mt-4`}>
          <b>
            I've published Python packages, developed ETL pipelines, Streamlit
            apps, and ML systems end-to-end—from data cleaning and feature
            engineering to model training and deployment.
          </b>{" "}
          With a Software Engineering degree and industry experience across
          startups and tech programs, I focus on practical AI solutions,
          multi-agent LLM workflows, and production-ready ML applications.
          <br />
          <br />
          I've contributed to LearnPython.Today by redesigning and enhancing the
          platform with modern UI/UX, adding 100+ interactive games, implementing
          performance optimizations, and expanding the content library. My goal is
          to help learners navigate the world of coding and AI through practical,
          real-world experience and continuous improvement.
        </p>
      </div>

      {/* Credit to Original Creator */}
      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
        <p className={boldPClasses}>
          <b>LearnPython.Today</b> was originally created by{" "}
          <Link
            href="https://github.com/git-Pqrd"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            git-Pqrd
          </Link>
          , who built the foundational platform and content structure. This project
          is open source, and I'm grateful to contribute to and improve upon the
          original work. The platform remains open source on{" "}
          <Link
            href="https://github.com/syabahmad/learnpython.today"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </Link>
          , welcoming contributions from the community.
        </p>
      </div>
    </div>
  );
}
