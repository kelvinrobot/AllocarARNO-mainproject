import Container from "../container/Container"
import FeatureCard from "./FeatureCard"
import "./features.css"

const Features = () => {
  const features = [
    {
      id: 1,
      title: "AI Powered Scheduling",
      description: "Let artificial intelligence generate the perfect timetable based on your academic schedule.",
      image: "/src/assets/images/features/AI-Powered-Scheduling.png",
    },
    {
      id: 2,
      title: "Web & Mobile Interface",
      description: "Easy accessible platform to the timetable from anywhere on any device.",
      image: "/src/assets/images/features/Blockchain-Verified-Records.png",
    },
    {
      id: 3,
      title: "Built-In Timetables",
      description: "No separate management, with automatic synchronization between students and teachers.",
      image: "src/assets/images/features/Built-for-Universities.png",
    },
    {
      id: 4,
      title: "Transparent & Secure by Design",
      description: "Defining who can manage who's timetable and what data is shared with your university and others.",
      image: "src/assets/images/features/AI-Powered-Scheduling.png",
    },
  ]

  return (
    <section className="features">
      <Container>
        <h2 className="features-title">
          ABOUT <span className="highlight">ALLOCARNO</span>
        </h2>

        <div className="feature-cards">
          {features.map((feature) => (
            <FeatureCard key={feature.id} title={feature.title} description={feature.description} image={feature.image} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features
