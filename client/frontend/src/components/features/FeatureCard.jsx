import "./featureCard.css";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="feature-card">
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
